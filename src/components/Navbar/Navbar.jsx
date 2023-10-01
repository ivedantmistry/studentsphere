import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthContext";

const Navbar = () => {
  const {userC, logOut} = useContext(AuthContext);

  const handleLogOut = () =>{
    logOut()
    .then()
    .catch((err) => console.log(err.message))
  }

  const {displayName } = userC ? userC : {} ;

  const navLinks = <>
            <li>
             <NavLink to="/products">Courses</NavLink>
            </li>
          <li>
            <NavLink to="/orderreview">Your Courses</NavLink>
          </li>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li>
            {
              !userC && <NavLink to="/login/login">Login</NavLink> || <NavLink onClick={handleLogOut} >{displayName && displayName}<span className="text-red-400">Sign Out</span></NavLink>
            }
          </li>
          </>


  return (
    <div className="navbar bg-[#1C2B35] fixed top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
           {navLinks}
          </ul>
        </div>
        <Link to="/" className="flex flex-col gap-1">
            <h3 id="logo" className="text-white text-3xl font-extrabold">Online University</h3>
            <div className="pl-20 -mt-2"><svg xmlns="http://www.w3.org/2000/svg" width="58" height="10" viewBox="0 0 58 10" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M52.4269 4.26384C46.0757 7.65518 36.87 9.46458 28.944 9.46458C17.8305 9.46458 7.82553 6.48678 0.256281 1.53425C-0.338277 1.14471 0.194531 0.613992 0.90811 0.917315C9.07673 4.36036 19.1769 6.43167 29.6101 6.43167C36.6464 6.43167 44.3868 5.37705 51.504 3.18855C52.5791 2.85768 53.4783 3.6986 52.4269 4.26384Z" fill="#FF9900"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M55.0674 2.07535C54.2586 1.32397 49.7009 1.72033 47.6551 1.8961C47.0319 1.95129 46.9368 1.55834 47.4982 1.27576C51.1281 -0.574978 57.0845 -0.0407791 57.7791 0.579564C58.4736 1.20339 57.5983 5.52869 54.1872 7.59312C53.6639 7.91022 53.1643 7.74134 53.3974 7.32083C54.1634 5.93541 55.8809 2.83014 55.0674 2.07535Z" fill="#FF9900"/>
                    </svg></div>
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
            {
              navLinks
            }
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
