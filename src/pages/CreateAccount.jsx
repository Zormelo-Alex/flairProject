import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";

const CreateAccount = () => {
  const navigate = useNavigate();
  const [isPVisible, setisPVisible] = useState(false);

  return (
    <div className="w-full h-[583px] pri">
      <div className="w-full h-full bg-white flex justify-center items-center">
        <div className="pt-[8rem] sm:pt-[4rem] pb-8 px-4 w-full flex flex-col justify-center items-center">
          <form action="" className=" ">
            <h3 className="font-[700] w-[328px] sm:w-[416px] text-[24px] text-start">
              Get started.
            </h3>
            <div className="flex flex-col gap-4 mt-8">
              <div className="flex flex-col">
                <label
                  htmlFor=""
                  className="text-[14px] text-[#818181] font-[500]"
                >
                  Full name
                </label>
                <input
                  type="text"
                  className="w-full border border-[#E8E8E8] rounded-[2px] h-[45px] outline-none px-2"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex flex-col w-full">
                  <label
                    htmlFor=""
                    className="text-[14px] text-[#818181] font-[500]"
                  >
                    Date of birth
                  </label>
                  <input
                    type="date"
                    className="w-[328px] border border-[#E8E8E8] rounded-[2px] h-[45px] outline-none px-2"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor=""
                    className="text-[14px] text-[#818181] font-[500]"
                  >
                    Gender
                  </label>
                  <select
                    name=""
                    id=""
                    className="w-full border border-[#E8E8E8] rounded-[2px] h-[45px] outline-none px-2"
                  >
                    <option value="">Male</option>
                    <option value="">Female</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor=""
                  className="text-[14px] text-[#818181] font-[500]"
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="w-full border border-[#E8E8E8] rounded-[2px] h-[45px] outline-none px-2"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor=""
                  className="text-[14px] text-[#818181] font-[500]"
                >
                  Phone number
                </label>
                <PhoneInput
                  inputStyle={{
                    height: "45px",
                    width: "100%",
                    outline: "none",
                    borderColor: "#E8E8E8",
                    borderRadius: 2,
                  }}
                  country={"gh"}
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor=""
                  className="text-[14px] text-[#818181] font-[500]"
                >
                  Password
                </label>
                <div className="w-full border border-[#E8E8E8] rounded-[2px] h-[45px] px-2 flex justify-between items-center">
                  <input
                    type={isPVisible ? "text" : "password"}
                    className="outline-none h-full"
                  />
                  {isPVisible ? (
                    <FaRegEye onClick={() => setisPVisible(!isPVisible)} />
                  ) : (
                    <FaRegEyeSlash onClick={() => setisPVisible(!isPVisible)} />
                  )}
                </div>
              </div>
            </div>
            <button
              className={`w-[328px] bg-[#000000] text-[#fff] sm:w-[416px] md:w-full mt-8 py-[8px] rounded-[2px] flex justify-center items-center gap-3 text-[14px] font-[700]`}
              onClick={() => navigate("/verify-account")}
            >
              Create account
            </button>
            <div className="mt-4 text-[14px]">
              <h5>
                Already signed up? <span className="text-[#0B8659] cursor-pointer">Log in</span>
              </h5>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
