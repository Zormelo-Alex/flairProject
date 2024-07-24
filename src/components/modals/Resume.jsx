import React from "react";
import { IoArrowDownCircleOutline } from "react-icons/io5";

const Resume = ({ onClick, isOpen, setIsOpen }) => {
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
      <div className="bg-white max-w-[604px] sm:min-w-[500px] min-w-[300px] h-fit rounded-[5px] mt-7 relative shadow-lg ">
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
        <div className="text-sm mt-4 px-4 py-3 flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <h3 className="font-[700] ">Resume/CV</h3>
            <p className="text-[#818181]">
              Format should be either .pdf, .docx, .doc
            </p>
            <div className="border-dashed border flex w-full">
              <input
                type="file"
                id="file"
                accept=".pdf, .docx, .doc"
                className="hidden"
              />
              <label
                htmlFor="file"
                className="w-full flex justify-between py-5 px-2"
              >
                <div className="flex items-center gap-2 text-[#737377]">
                  <IoArrowDownCircleOutline className="text-[18px]" />
                  <p className="text-xs">Drop file here</p>
                </div>
                <p className="border rounded-[2px] py-1 px-4 text-black">
                  Browse
                </p>
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-[700] ">Other files eg. portfolio</h3>
            <p className="text-[#818181]">
              Format should be either .pdf, .docx, .doc
            </p>
            <div className="border-dashed border flex w-full">
              <input
                type="file"
                id="file"
                accept=".pdf, .docx, .doc"
                className="hidden"
              />
              <label
                htmlFor="file"
                className="w-full flex justify-between py-5 px-2"
              >
                <div className="flex items-center gap-2 text-[#737377]">
                  <IoArrowDownCircleOutline className="text-[18px]" />
                  <p className="text-xs">Drop file here</p>
                </div>
                <p className="border rounded-[2px] py-1 px-4 text-black">
                  Browse
                </p>
              </label>
            </div>
          </div>
        </div>
        <div className="text-sm flex justify-end px-4 py-3">
          <button className="bg-[#E8E8E8] px-6 rounded-[2px] py-2 text-[#818181]">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resume;
