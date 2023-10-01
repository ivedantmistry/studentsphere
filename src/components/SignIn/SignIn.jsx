import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub,AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  GithubAuthProvider,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import app from "../../fire-base/firebase.init";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthContext";
// import { signal } from "@preact/signals";

const SignIn = () => {
  const [user, setUser] = useState(null);
  const [errorMsg, setErrorMsg] = useState();
  const [successMsg, setSuccessMsg] = useState();
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  // context
  const {createUser, updateState } = useContext(AuthContext);
  // const showPass = signal(false);

 const handlePass = () => { 
  // showPass.value = !showPass.value
  setShowPass(!showPass)
  console.log(showPass.value)
  }

  const auth = getAuth(app);

  // setErrorMsg('');
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
  // Email authantication
  // console.log(user);

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
      // createUserWithEmailAndPassword(auth, email, password)
      createUser(email, password)
      .then(result => {
        const users = result.user
        setUser(users);
        // updateState(users)
        sendEmailVerification(auth.currentUser)
        .then(() => {
          setSuccessMsg('Please check you email and verify it!')
        })
        e.target.email.value = '';
        e.target.password.value = '';
      })
      .catch(err => {
        if(err.message === "Firebase: Error (auth/email-already-in-use).")
        {
          setErrorMsg('This email already in use!')
        }
        // e.target.password.value = '';
      })  

    }
  };
  // console.log(userC)

  return (
    <div className="my-36 flex flex-col justify-center items-center ">
      <div className="w-[430px] h-[633px] absolute rounded-lg -z-10 bg-[#FFE0B3]"></div>
      <div className="w-[451px] rounded-lg z-10 relative -right-7 -top-7 bg-white border-2 border-[#95A0A7] py-5">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-center w-full">
            <h3 className="text-3xl">Sign Up</h3>
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
                {/* <input type="password" name="" id=""  className="border-2 text-2xl border-[#95A0A7] rounded-md h-14 w-4/5"/> */}
              <input
                type="submit"
                name="submit"
                value="submit"
                className="btn w-full bg-[#FFE0B3]"
              />
              <p className="text-base font-normal text-[#2A414F]">
                Already have account?{" "}
                <Link to="/login/login" className="text-yellow-400">
                  Login
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

export default SignIn;
