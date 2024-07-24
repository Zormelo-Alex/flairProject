import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { verify } from "../assets";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const VerifyAccount = () => {
  const navigate = useNavigate();
  useEffect(() => {
    toast.info("Please wait...", {position: "bottom-right",});
    setTimeout(() => {
      navigate("/career-status");
    }, 3000);
  }, []);
  return (
    <div className="w-full h-[583px] pri">
      <ToastContainer />
      <div className="w-full h-full bg-white flex justify-center items-center">
        <div className="pb-8 px-4 w-full flex flex-col justify-center items-center gap-4">
          <img src={verify} alt="img" className="w-[106px] sm:w-[162px]" />
          <h3 className="font-[700] text-[20px] sm:text-[28px]">
            Verify your account
          </h3>
          <p className="text-[#818181] text-[14px] w-[296px] sm:w-[406px] text-center">
            A verification email will be sent to your email address provided.
            Click on the link in the mail to verify your account.
          </p>
          <h5 className="font-[700] text-[14px] text-[#818181] bg-[#F5F5F5] border border-[#E8E8E8] p-2 rounded-[40px]">
            mic***@inpathgroup.africa
          </h5>
          <p className="text-[#0B8659] text-[14px] font-[700] cursor-pointer">
            Resend link
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyAccount;
