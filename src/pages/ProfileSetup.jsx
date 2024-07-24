import React, { useState } from "react";
import SideBar from "../components/SideBar";
import { RiBook2Line } from "react-icons/ri";
import { RiBriefcaseLine, RiUploadCloudLine } from "react-icons/ri";
import { IoStarHalfSharp } from "react-icons/io5";
import { FiAward, FiPlus } from "react-icons/fi";
import { TfiCup } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";
import { Accomplishment, Education, Experience, Resume } from "../components";

const ProfileSetup = () => {
  const profileTasks = [
    {
      name: "Education",
      status: 0,
      icon: <RiBook2Line />,
      description: "School info, field of study",
    },
    {
      name: "Work Experience",
      status: 0,
      icon: <RiBriefcaseLine className="text-[#0B8659]" />,
      description: "Where you’ve worked, your role",
    },
    {
      name: "Interest & Skills",
      status: 0,
      icon: <IoStarHalfSharp className="text-[#319CFF]" />,
      description: "Career interests and skillset",
    },
    {
      name: "Certification",
      status: 0,
      icon: <FiAward className="text-[#E96163]" />,
      description: "Certifications worth highlighting",
    },
    {
      name: "Acomplishments",
      status: 0,
      icon: <TfiCup className="text-[#D98F00]" />,
      description: "Personal achievement & impact",
    },
    {
      name: "Upload Resume",
      status: 0,
      icon: <RiUploadCloudLine className="text-[#818181]" />,
      description: "CV, portfolio",
    },
  ];
  const navigate = useNavigate();
  const [educationModelOpen, seteducationModelOpen] = useState(false);
  const [experienceModelOpen, setexperienceModelOpen] = useState(false);
  const [resumeModelOpen, setresumeModelOpen] = useState(false);
  const [accomplishmentsModelOpen, setaccomplishmentsModelOpen] =
    useState(false);

  const handleTask = (task) => {
    try {
      seteducationModelOpen(false);
      setexperienceModelOpen(false);
      setaccomplishmentsModelOpen(false);
      setresumeModelOpen(false);
      switch (task.name) {
        case "Education":
          seteducationModelOpen(true);
          break;
        case "Work Experience":
          setexperienceModelOpen(true);
          break;
        case "Acomplishments":
          setaccomplishmentsModelOpen(true);
          break;
        case "Upload Resume":
          setresumeModelOpen(true);
          break;

        default:
          break;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-[583px] pri">
      <div className="w-full h-full bg-white flex justify-center items-center">
        <div className="pt-[10rem] sm:pt-[5rem] pb-8 px-4 w-full flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col sm:flex-row gap-[1rem] md:gap-[3rem] max-w-[700px]">
            <h3 className="font-[700] text-[24px] sm:text-[28px] sm:hidden">
              Set up your profile.
            </h3>
            <SideBar profileTasks={profileTasks} />
            <div className=" sm:w-[435px] md:w-[606px]">
              <h3 className="font-[700] text-[24px] sm:text-[28px] hidden sm:block">
                Set up your profile.
              </h3>
              <div className="mt-3">
                {profileTasks &&
                  profileTasks.map((task, index) => (
                    <div
                      key={index}
                      className={`flex justify-between py-3 cursor-pointer ${
                        index != profileTasks.length - 1 && "border-b"
                      }`}
                      onClick={() => handleTask(task)}
                    >
                      <div className="flex gap-3">
                        <div>{task.icon}</div>
                        <div>
                          <h4 className="text-[16px] font-[700]">
                            {task.name}
                          </h4>
                          <p className="text-[14px] font-[400] text-[#818181]">
                            {task.description}
                          </p>
                        </div>
                      </div>
                      <div className="w-fit">
                        <FiPlus />
                      </div>
                    </div>
                  ))}
              </div>
              <div className="w-full grid grid-cols-2 gap-4">
                <button
                  className={`bg-[#fff] text-[#000] border mt-8 py-[8px] rounded-[2px] flex justify-center items-center gap-3 text-[14px] font-[700]`}
                  onClick={() => navigate("/")}
                >
                  I'll do it later
                </button>
                <button
                  className={`bg-[#E8E8E8] text-[#818181] mt-8 py-[8px] rounded-[2px] flex justify-center items-center gap-3 text-[14px] font-[700]`}
                  onClick={() => navigate("/verify-account")}
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* models */}
      <Education
        isOpen={educationModelOpen}
        setIsOpen={seteducationModelOpen}
      />
      <Experience
        isOpen={experienceModelOpen}
        setIsOpen={setexperienceModelOpen}
      />
      <Resume isOpen={resumeModelOpen} setIsOpen={setresumeModelOpen} />
      <Accomplishment
        isOpen={accomplishmentsModelOpen}
        setIsOpen={setaccomplishmentsModelOpen}
      />
    </div>
  );
};

export default ProfileSetup;
