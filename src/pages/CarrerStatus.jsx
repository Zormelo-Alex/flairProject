import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CarrerStatus = () => {
  const navigate = useNavigate();
  const options = [
    { id: 1, name: "Still in school" },
    { id: 2, name: "Currently doing National Service" },
    { id: 3, name: "Done with National Service" },
    { id: 4, name: "Experienced Professional" },
  ];
  const [selected, setselected] = useState(null)

  const handleNext = () => {
    try {
      if(!selected) return toast.error("Please select an option")
      navigate("/setup-profile")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="w-full h-[583px] pri">
      <ToastContainer />
      <div className="w-full h-full bg-white flex justify-center items-center">
        <div className="pt-[4rem] sm:pt-0 pb-8 px-4 w-full h-full flex flex-col justify-center items-center">
          <div className="w-[312px] sm:w-[416px] h-full relative sm:h-fit flex flex-col gap-4">
            <h3 className="font-[700] text-[20px] sm:text-[24px]">
              Where are you currently in your professional career?
            </h3>
            <div className="flex flex-col gap-3">
              {options &&
                options.map((option, index) => (
                  <div key={index} className={` ${selected && (selected.name == option.name && "text-white bg-[#0B8659] ")} border rounded-[40px] p-2 hover:bg-[#0b8659dc] hover:text-black text-center font-[700] text-[14px] cursor-pointer transition-all ease-in`}onClick={()=> setselected(option)}>
                    {option.name}
                  </div>
                ))}
            </div>
            <button
              className={`w-[328px] hover:bg-[#161616] transition-all ease-in bg-[#000000] text-[#fff] sm:w-[416px] mt-4 py-[8px] rounded-[2px] flex justify-center items-center gap-3 text-[14px] font-[700] absolute sm:relative bottom-0 `}
              onClick={handleNext}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarrerStatus;
