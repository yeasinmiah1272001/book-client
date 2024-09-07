import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/Footer/Footer";

const Root = () => {
       return (
              <div className="lg:mx-10">
                     <Navbar></Navbar>
                     <Outlet></Outlet>
                     <Footer></Footer>
                     
                     
              </div>
       );
};

export default Root;