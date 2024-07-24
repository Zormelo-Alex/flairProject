import React, { useState } from "react";
import logo from "/logo.png";
import { RiBriefcaseLine, RiUserStarLine } from "react-icons/ri";
import { PiProjectorScreenBold } from "react-icons/pi";
import { LuMenu } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

const NavBar = ({ simple, back }) => {
  const [navOption, setnavOption] = useState(1);
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="pri bg-white relative">
      {!simple ? (
        <>
          <div className="flex justify-center p-2 border-b">
            <div className="w-[339px] bg-[#F7F7F7] p-2 flex justify-between items-center rounded-[2px]">
              <div
                className={`${
                  navOption == 1 && "bg-white font-[700] "
                } p-2 flex rounded-[2px] px-[16px] text-[14px] cursor-pointer transition-all ease-in`}
                onClick={() => setnavOption(1)}
              >
                <h3>For Students & Graduates</h3>
              </div>
              <div
                className={`${
                  navOption == 2 && "bg-white font-[700] "
                } p-2 px-[16px] flex rounded-[2px] text-[14px] cursor-pointer transition-all ease-in`}
                onClick={() => setnavOption(2)}
              >
                <h3>For Partners</h3>
              </div>
            </div>
          </div>
          <div className="px-[42px] items-center flex justify-between md:grid md:grid-cols-12 py-4">
            <div
              className="flex items-center col-span-3 cursor-pointer"
              onClick={() => navigate("/")}
            >
              <h3 className="text-[#0B8659] font-extrabold text-[30px]">
                flair
              </h3>
              <img src={logo} alt="img" className="w-[23px] object-cover" />
            </div>
            <ul className="md:flex justify-center items-center gap-[5dvw] font-[500] col-span-6 hidden">
              <li >
                <Link to={"/sign-up"} className="flex items-center gap-2 hover:text-[#0B8659] transition-all ease-in">
                  <RiBriefcaseLine />
                  <p>Jobs</p>
                </Link>
              </li>
              <li>
                <Link to={"/sign-up"} className="flex items-center gap-2 hover:text-[#0B8659] transition-all ease-in">
                  <RiUserStarLine />
                  <p>Mentorship</p>
                </Link>
              </li>
              <li>
                <Link to={"/sign-up"} className="flex items-center gap-2 hover:text-[#0B8659] transition-all ease-in">
                  <PiProjectorScreenBold />
                  <p>Trainings</p>
                </Link>
              </li>
            </ul>
            <div className="sm:flex justify-end gap-3 col-span-3 items-center">
              <div className="sm:flex gap-3 hidden">
                <button className="rounded-[2px] px-[16px] font-[700] py-[14px] border hover:bg-[#ebebeb83] transition-all ease-in">
                  Log in
                </button>
                <button
                  className="rounded-[2px] px-[16px] font-[700] py-[14px] text-white bg-black hover:bg-[#333333] transition-all ease-in"
                  onClick={() => navigate("/sign-up")}
                >
                  Sign up
                </button>
              </div>
              <div
                className="md:hidden w-fit"
                onClick={() => setisMenuOpen(!isMenuOpen)}
              >
                <LuMenu className="text-[30px]" />
              </div>
            </div>
          </div>
          {isMenuOpen && (
            <div className="md:hidden absolute bg-white top-[9rem] shadow-sm z-20 min-w-[200px] p-4 right-[2rem] rounded-[2px]">
              <ul className="flex flex-col justify-center gap-[25px] font-[500] col-span-6 ">
                <li>
                  <Link to={"/sign-up"} className="flex items-center gap-2 hover:text-[#0B8659] transition-all ease-in">
                    <RiBriefcaseLine />
                    <p>Jobs</p>
                  </Link>
                </li>
                <li>
                  <Link to={"/sign-up"} className="flex items-center gap-2 hover:text-[#0B8659] transition-all ease-in">
                    <RiUserStarLine />
                    <p>Mentorship</p>
                  </Link>
                </li>
                <li>
                  <Link to={"/sign-up"} className="flex items-center gap-2 hover:text-[#0B8659] transition-all ease-in">
                    <PiProjectorScreenBold />
                    <p>Trainings</p>
                  </Link>
                </li>
              </ul>
              <div className="flex flex-col gap-3 mt-4 sm:hidden">
                <button className="rounded-[2px] px-[16px] font-[700] py-[7px] border">
                  Log in
                </button>
                <button
                  className="rounded-[2px] px-[16px] font-[700] py-[7px] text-white bg-black"
                  onClick={() => navigate("/sign-up")}
                >
                  Sign up
                </button>
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          <div
            className={`${
              back
                ? " grid grid-cols-3 sm:grid-cols-2 md:grid-cols-1 "
                : "flex w-full justify-center"
            } border-b  py-3 px-4`}
          >
            {back && (
              <div
                className="flex items-center gap-3 md:hidden"
                onClick={() => window.history.back()}
              >
                <FaArrowLeftLong />
                <span className="hidden sm:block">Back</span>
              </div>
            )}
            <div
              className="flex items-center justify-center cursor-pointer"
              onClick={() => navigate("/")}
            >
              <h3 className="text-[#0B8659] font-extrabold text-[30px]">
                flair
              </h3>
              <img src={logo} alt="img" className="w-[23px] object-cover" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default NavBar;
