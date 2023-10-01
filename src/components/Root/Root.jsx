import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Root = () => {
  const products = useLoaderData();
  return (
    <div>
      <Navbar></Navbar>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="mt-24">

      <Outlet context={products}></Outlet>
      </div>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
};

export default Root;
