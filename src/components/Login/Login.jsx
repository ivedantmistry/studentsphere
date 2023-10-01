import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AiFillEye, AiFillEyeInvisible, AiFillGithub } from "react-icons/ai";
import { AuthContext } from "../../providers/AuthContext";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../fire-base/firebase.init";
import { FcGoogle } from "react-icons/fc";





const Login = () => {
  // const [user, setUser] = useState(null);
  const [errorMsg, setErrorMsg] = useState();
  const [successMsg, setSuccessMsg] = useState();
  const [showPass, setShowPass] = useState(false);
  const{ signIn} = useContext(AuthContext);
  const navigate = useNavigate();

  const {updateState } = useContext(AuthContext);


  const handlePass = () => { 
    // showPass.value = !showPass.value
    setShowPass(!showPass)
    }

    const auth = getAuth(app);


      // Google authantication
  const provider = new GoogleAuthProvider();
  const handleWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        navigate("/profile")
        updateState(result.user)})
      .catch((err) => console.log(err.message));
  };
  // Github authantication
  const gitProvider = new GithubAuthProvider();
  const handlewithGithub = () => {
    signInWithPopup(auth, gitProvider)
      .then((result) => {
        updateState(result.user)
        navigate("/profile")
      })
      .catch((err) => console.log(err.message));
  };




  const handleSubmit = (e) => { 
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (password.length < 6) {
      
      setErrorMsg('Password must be 6 charectar or more!')
      return;
    }
    else{
    signIn(email,password)
    .then(result => {

      const user = result.user;
      if (!user.emailVerified) {
        setErrorMsg("Please check your email and verify it!!")
      }else if (user.emailVerified) {
        setSuccessMsg("You are loged In successfully!")
        e.target.email.value = '';
        e.target.password.value = '';
        navigate( "/profile");
      }
    })
    .catch(err => {
      if (err.message === 'Firebase: Error (auth/invalid-login-credentials).') {
        setErrorMsg("Your email address and password is invalid")
      }
    })
    // console.log("Email:"+email, "Pass:" + password)
    
   }
  }

  return (
    <div className="my-36 flex flex-col justify-center items-center ">
      <div className="w-[451px]  absolute rounded-lg -z-10 bg-[#FFE0B3]"></div>
      <div className="w-[451px]  rounded-lg z-10 relative -right-7 -top-7 bg-white border-2 border-[#95A0A7] py-5">
        <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center w-full">
          <h3 className="text-3xl">Log In</h3>
          <div className="w-5/6 space-y-4">
            <p className="text-base font-normal text-[#2A414F]">Email: </p>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="border-2 text-2xl border-[#95A0A7] rounded-md h-14 w-4/5"
            />
            <p className="text-base font-normal text-[#2A414F]">Password: </p>
              <input
                type={showPass && 'text' || 'password'}
                name="password"
                id="pass"
                required
                className="border-2 text-2xl border-[#95A0A7] rounded-md h-14 w-4/5"
              />
              <p onClick={handlePass} className="relative -top-[54px] -right-64 text-xl">
              {
                showPass === false && <AiFillEyeInvisible></AiFillEyeInvisible> || showPass === true && <AiFillEye></AiFillEye>
              }
              </p>
              {
                errorMsg && <p className="text-base font-normal text-red-600">{errorMsg}</p> || ''
              }
              {
                successMsg && <p className="text-base font-normal text-green-600">{successMsg}</p> || ''
              }
            <input
              type="submit"
              name="submit"
              className="btn w-full bg-[#FFE0B3]"
            />
            <p className="text-base font-normal text-[#2A414F]">
              New to this site ?{" "}
              <Link to="/login" className="text-yellow-400">
                Sign Up
              </Link>
            </p>
            <div className="flex justify-center items-center">
                <p>or</p>
              </div>
              <button onClick={handleWithGoogle} className="btn w-full bg-">
                <FcGoogle className="text-3xl"></FcGoogle> Continue with Google
              </button>
              <button onClick={handlewithGithub} className="btn w-full bg-">
                <AiFillGithub className="text-3xl"></AiFillGithub> Continue with
                Git-hub
              </button>
          </div>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
