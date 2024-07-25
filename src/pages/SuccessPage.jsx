import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineCheckCircle } from "react-icons/ai";

const SuccessPage = () => {
  const navigate = useNavigate();
  return (
    <div className="h-[583px] flex flex-col items-center justify-center bg-gradient-to-r from-[#0B8659] to-white">
      <div className="bg-white p-8 rounded-[2px] shadow-lg text-center">
        <AiOutlineCheckCircle className="text-[#0B8659] text-6xl mx-auto" />
        <h1 className="text-3xl font-bold mt-4">Success!</h1>
        <p className="mt-2 text-gray-600">
          Your profile setup was completed successfully.
        </p>
        <button
          onClick={() => navigate("/")}
          className="mt-6 bg-[#0B8659] hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-[2px]"
        >
          Finish
        </button>
      </div>
    </div>
  );
};

export default SuccessPage;
