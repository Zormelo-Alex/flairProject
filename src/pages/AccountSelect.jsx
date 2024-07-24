import React, { useState } from "react";
import { candidate, employer, mentor, trainer } from "../assets";
import { FaArrowRight } from "react-icons/fa";

const AccountSelect = () => {
  const acTypes = [
    {
      name: "Candidate",
      image: candidate,
      status: 0,
      description: "A graduate looking for an employment opportunity",
    },
    {
      name: "Employer",
      image: employer,
      status: 0,
      description: "An organisation looking to hire top talents",
    },
    {
      name: "Mentor",
      image: mentor,
      status: 1,
      description: "A professional helping others navigate their careers",
    },
    {
      name: "Trainer",
      image: trainer,
      status: 1,
      description: "An organisation offering training programmes",
    },
  ];

  const [selected, setSelected] = useState(null);
  // console.log(selected);
  return (
    <div className="w-full h-[583px] pri">
      <div className="w-full h-full bg-white flex justify-center items-center">
        <div>
          <h3 className="font-[700] text-[24px]">
            What type of account are you setting up?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            {acTypes &&
              acTypes.map((ac, index) => (
                <div
                  key={index}
                  className={`${selected && (selected.name == ac.name ? "border-[#818181] bg-[#F5F5F5]" : "border-[#E8E8E8] ")} border rounded-[2px] p-4 w-[268px] flex flex-col gap-1 transition-all ease-in`}
                  onClick={() => {
                    if (ac.status === 1) return;
                    setSelected(ac)}}
                >
                  <div className="relative">
                    <img src={ac.image} alt="img" className="h-[56px] w-fit" />
                    {ac.status == 1 && (
                      <p className="text-[#D98F00] text-[12px] bg-[#FCF4E6] px-[8px] py-[5px] rounded-[2px] absolute right-[-16px] top-[-16px]">
                        Coming soon
                      </p>
                    )}
                  </div>
                  <h4
                    className={`${
                      ac.status == 1 && "text-[#818181] "
                    } font-[700] text-[16px] mt-3`}
                  >
                    {ac.name}
                  </h4>
                  <p
                    className={`${
                      ac.status == 1 && "text-[#818181] "
                    } text-[14px]`}
                  >
                    {ac.description}
                  </p>
                </div>
              ))}
          </div>
          <button className={`${selected ? "bg-[#000000] text-[#fff]" : "bg-[#E8E8E8] text-[#818181] "} w-full mt-8 py-[8px] rounded-[2px] flex justify-center items-center gap-3 text-[14px] font-[700]`}>
            Next <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountSelect;