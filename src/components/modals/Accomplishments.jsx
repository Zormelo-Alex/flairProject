import React from "react";
import QuillTextEditor from "../QuillTextEditor";

const Accomplishments = ({ onClick, isOpen, setIsOpen }) => {
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
        <form action="">
          <div className="px-4 py-3 h-fit">
            <QuillTextEditor />
          </div>
          <div className="text-sm flex justify-end px-4 py-3">
            <button
              className="bg-black px-6 rounded-[2px] py-2 text-white hover:text-white hover:bg-black transition-all ease-in"
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

export default Accomplishments;
