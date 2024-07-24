import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CarrerStatus = () => {
  const navigate = useNavigate();
  const options = [
    { id: 1, name: "Still in school" },
    { id: 2, name: "Currently doing National Service" },
    { id: 3, name: "Done with National Service" },
    { id: 4, name: "Experienced Professional" },
  ];
  const [selected, setselected] = useState(null)
  return (
    <div className="w-full h-[583px] pri">
      <div className="w-full h-full bg-white flex justify-center items-center">
        <div className="pt-[4rem] sm:pt-0 pb-8 px-4 w-full h-full flex flex-col justify-center items-center">
          <div className="w-[312px] sm:w-[416px] h-full relative sm:h-fit flex flex-col gap-4">
            <h3 className="font-[700] text-[20px] sm:text-[24px]">
              Where are you currently in your professional career?
            </h3>
            <div className="flex flex-col gap-3">
              {options &&
                options.map((option, index) => (
                  <div key={index} className={` ${selected && (selected.name == option.name && "text-white bg-[#0B8659] ")} border rounded-[40px] p-2 text-center font-[700] text-[14px] cursor-pointer transition-all ease-in`}onClick={()=> setselected(option)}>
                    {option.name}
                  </div>
                ))}
            </div>
            <button
              className={`w-[328px] bg-[#000000] text-[#fff] sm:w-[416px] mt-4 py-[8px] rounded-[2px] flex justify-center items-center gap-3 text-[14px] font-[700] absolute sm:relative bottom-0 `}
              onClick={() => navigate("/setup-profile")}
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
