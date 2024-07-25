import React from "react";
import { AiFillInfoCircle } from "react-icons/ai";

const Experience = ({ onClick, isOpen, setIsOpen }) => {
  const handleCloseUserModel = (e) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };
  return (
    <div
      className={`fixed inset-0 flex justify-center bg-[#4d4c4c34] items-center z-50 p-4 sm:p-8 ${
        isOpen ? "block" : "hidden"
      }`}
      onClick={handleCloseUserModel}
    >
      <div className="bg-white max-w-[604px] h-fit rounded-[5px] mt-7 shadow-lg ">
        <div className="px-4 py-3 flex justify-between items-center border-b">
          <h3 className="font-[700] text-[18px]">Add Work Experience</h3>
          <button className="text-black" onClick={() => setIsOpen(false)}>
            <svg
              className="h-6 w-6 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <form action="">
          <div className="bg-[#319CFF1A] px-4 py-3 flex gap-3 items-center">
            <AiFillInfoCircle className="text-[#319CFF] text-[40px]" />
            <p className="text-xs">
              Link your NSS details to Flair to make you more credible to
              employers.
            </p>
            <button className="whitespace-nowrap text-xs bg-black text-white p-2 rounded-[2px]">
              Link NSS
            </button>
          </div>
          <div className="flex flex-col gap-4 mt-4 px-4 py-3">
            <div className="flex flex-col">
              <label htmlFor="" className="text-xs text-[#818181] font-[500]">
                Job Title
              </label>
              <input
                type="text"
                className="w-full border border-[#E8E8E8] rounded-[2px] h-[45px] outline-none px-2"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="dlCompany"
                className="text-xs text-[#818181] font-[500]"
              >
                Company
              </label>
              <select
                name=""
                id=""
                className="w-full border text-xs border-[#E8E8E8] rounded-[2px] h-[45px] outline-none px-2"
              >
                <option value="">Search Company</option>
                <option value="">Inpath</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col">
                <label htmlFor="" className="text-xs text-[#818181] font-[500]">
                  Start date
                </label>
                <input
                  type="date"
                  className="w-full border border-[#E8E8E8] rounded-[2px] h-[45px] outline-none px-2"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="text-xs text-[#818181] font-[500]">
                  End date
                </label>
                <input
                  type="date"
                  className="w-full border border-[#E8E8E8] rounded-[2px] h-[45px] outline-none px-2"
                />
              </div>
            </div>
          </div>

          <div className="px-4 py-3 flex gap-3 items-center text-sm">
            <input type="checkbox" id="ch" />
            <label htmlFor="ch">I currently work here</label>
          </div>
          <div className="text-sm flex justify-end px-4 py-3">
            <button
              className="bg-[#E8E8E8] px-6 rounded-[2px] py-2 text-[#818181] hover:text-white hover:bg-black transition-all ease-in"
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(false);
                onClick();
              }}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Experience;
