import React from "react";
import { useNavigate } from "react-router-dom";

const VerifyAccount = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-[583px] pri">
      <div className="w-full h-full bg-white flex justify-center items-center">
        <div className="pt-[8rem] sm:pt-[4rem] pb-8 px-4 w-full flex flex-col justify-center items-center"></div>
      </div>
    </div>
  );
};

export default VerifyAccount;
