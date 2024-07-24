import React from "react";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-[583px] pri">
      <div className="w-full h-full bg-white flex justify-center items-center">
        <div className="pt-[24rem] sm:pt-0 pb-8 px-4 w-full flex flex-col justify-center items-center">
          <div className=" ">
            <h3 className="font-[700] w-[328px] sm:w-[416px] text-[24px] text-start">
              Get started.
            </h3>
            <div className="flex flex-col gap-6 mt-8">
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
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col">
                  <label
                    htmlFor=""
                    className="text-[14px] text-[#818181] font-[500]"
                  >
                    Date of birth
                  </label>
                  <input
                    type="date"
                    className="w-full border border-[#E8E8E8] rounded-[2px] h-[45px] outline-none px-2"
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
            </div>
            <button
              className={`w-[328px] bg-[#000000] text-[#fff] sm:w-[416px] mt-8 py-[8px] rounded-[2px] flex justify-center items-center gap-3 text-[14px] font-[700]`}
              onClick={() => navigate("/create-account")}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
