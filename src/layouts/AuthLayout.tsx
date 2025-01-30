import { Outlet } from "react-router-dom";
import NavbarApp from "../components/atomic/atoms/Navbar";
import Carousel from "../components/atomic/molecules/Carousel";
import slide1 from '../assets/images/carousel/1.jpg';
import slide2 from '../assets/images/carousel/2.jpg';
import slide3 from '../assets/images/carousel/3.jpg';
import slide4 from '../assets/images/carousel/4.jpg';

const AuthLayout = () => {
  return (
    <>
      <NavbarApp />
      <div className="pt-24">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 px-8 flex items-center justify-center">
            <Carousel images={[slide1,slide2,slide3,slide4]}></Carousel>
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center px-4 mt-8 md:mt-0">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
