import React from "react";

const Education = ({ onClick, isOpen, setIsOpen }) => {
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
          <h3 className="font-[700] text-[18px]">Add Education</h3>
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
        <div className="flex flex-col gap-4 mt-4 px-4 py-3">
          <div className="flex flex-col">
            <label htmlFor="" className="text-xs text-[#818181] font-[500]">
              Institution
            </label>
            <select
              name=""
              id=""
              className="w-full border text-xs border-[#E8E8E8] rounded-[2px] h-[45px] outline-none px-2"
            >
              <option value="">Search institution</option>
              <option value="">Ho Technical University</option>
            </select>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex flex-col">
              <label htmlFor="" className="text-xs text-[#818181] font-[500]">
                Qualification
              </label>
              <select
                name=""
                id=""
                className="w-full border text-xs border-[#E8E8E8] rounded-[2px] h-[45px] outline-none px-2"
              >
                <option value=""></option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-xs text-[#818181] font-[500]">
                Course Category
              </label>
              <select
                name=""
                id=""
                className="w-full border text-xs border-[#E8E8E8] rounded-[2px] h-[45px] outline-none px-2"
              >
                <option value=""></option>
              </select>
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="text-xs text-[#818181] font-[500]">
              Course of study
            </label>
            <input
              type="text"
              className="w-full border border-[#E8E8E8] rounded-[2px] h-[45px] outline-none px-2"
            />
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
        <div className="text-sm flex justify-end px-4 py-3">
          <button className="bg-[#E8E8E8] px-6 rounded-[2px] py-2 text-[#818181]">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Education;
