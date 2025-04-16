import React from "react";
import UI_Img from "../../assets/images/auth-img.png";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex w-screen h-screen">
      {/* Left Section - Content */}
      <div className="w-full md:w-[60vw] px-12 pt-8 pb-12">
        <h2 className="text-lg font-medium text-black">Task Manager</h2>
        {children}
      </div>

      {/* Right Section - Image */}
      <div className="hidden md:flex w-[40vw] h-full items-center justify-center bg-primary bg-[url('/bg-image.png')] bg-cover bg-no-repeat bg-center overflow-hidden p-8">
        <img src={UI_Img} className="w-64 h-[90%] lg:w-[90%]" />
      </div>
    </div>
  );
};

export default AuthLayout;