import React from "react";
import { profile } from "../assets";
import ProgressBar from "./ProgressBar";
import { GiCheckMark } from "react-icons/gi";


const SideBar = ({profileTasks}) => {
  
  return (
    <div className="sm:w-[205px] md:w-[272px] bg-[#0B8659] h-fit rounded-[2px]">
      <div className="relative w-full h-[88px]">
        <img
          src={profile}
          className="w-[121px] h-[88px] object-cover"
          alt="img"
        />
        <div className="absolute top-0 p-4 flex justify-between w-full items-center">
          <h3 className="font-[500] text-white text-[16px]">
            Profile <br /> Completion
          </h3>
          <ProgressBar progress={0} />
        </div>
      </div>
      <div className="flex-col gap-3 p-4 hidden sm:flex">
        {profileTasks &&
          profileTasks.map((task, index) => (
            <div key={index} className="flex justify-between items-center">
              <div className="text-white font-[500] text-[14px]">
                {task.name}
              </div>
              <div className={`border-[2px] border-white w-[14px] h-[14px] rounded-full relative`}>
                {task.status == 1 && (<><GiCheckMark className="text-white absolute top-[-3px] text-[12px]"/></>) }
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SideBar;
