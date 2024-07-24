import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";
import {
  eight,
  Five,
  five,
  Four,
  four,
  one,
  One,
  seven,
  six,
  Three,
  three,
  two,
  Two,
} from "../assets";

const LandingPage = () => {
  return (
    <div className="bg-[#F5F5F5] h-[580px] overflow-x-hidden">
      <div className="w-full h-full relative">
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] sec">
          <h2 className="font-[900] text-[32px] sm:text-[48px] md:text-[62px]">
            Discover a greater you.
          </h2>
          <p className="font-[700] text-[18px] sm:text-[28px] md:text-[35px]">
            We help you{" "}
            <span className="text-[#0B8659]">find the perfect job.</span>
          </p>
          <div className="w-[328px] sm:w-[480px] md:w-[636px] max-h-[56px] sm:bg-white rounded-[40px] p-2 sm:p-4  mt-[3rem] flex flex-col items-center gap-3 sm:flex-row">
            <div className="flex items-center gap-2 sm:w-full bg-white rounded-[40px] w-[328px] p-3">
              <CiSearch className="text-[26px]" />
              <input
                type="text"
                placeholder="Try “Civil Engineer”"
                spellCheck
                className="w-full outline-none py-1"
              />
            </div>
            <div className="h-[24px] w-[1px] hidden sm:block bg-[#D4D4D4]"></div>
            <select
              name=""
              id=""
              className="flex items-center cursor-pointer h-[48px] sm:h-fit w-[328px] bg-white rounded-[40px] p-3 py-4 md:w-[144px] outline-none"
            >
              <option value="">Jobs</option>
              <option value="">Listings</option>
              <option value="">Reports</option>
              <option value="">Training</option>
            </select>
            <div className="bg-[#0B8659] p-3 mt-2 sm:mt-0 sm:p-2 rounded-full cursor-pointer">
              <FaArrowRight className="text-white sm:text-[18px] text-[24px]" />
            </div>
          </div>
        </div>
        <div className="absolute right-[15dvw] top-[3rem]">
          <div className="relative z-10">
            <One classname={"opacity-0 sm:opacity-100"}/>
            <img
              src={one}
              alt="img"
              className="h-[64px] w-[64px] rounded-full object-cover absolute top-[25px] left-[-35px] z-[-1]"
            />
          </div>
        </div>
        <div className="absolute left-[9dvw] lg:top-[21dvh] md:top-[9dvh] top-[5dvh] hidden sm:block">
          <div className="relative z-10">
            <Two />
            <img
              src={two}
              alt="img"
              className="h-[84px] w-[84px] rounded-full object-cover absolute top-[10px] left-[19px] z-[100]"
            />
          </div>
        </div>
        <div className="absolute right-[5rem] top-[13rem] sm:top-[15rem]">
          <img
            src={three}
            alt="img"
            className="h-[38px] sm:h-[51px] sm:w-[51px] rounded-full object-cover"
          />
        </div>
        <div className="absolute right-[-10dvw] lg:right-0 top-[22rem] lg:top-[19rem] hidden sm:block">
          <div className="relative z-10">
            <Three />
            <img
              src={four}
              alt="img"
              className="h-[44px] w-[44px] rounded-full object-cover absolute top-[8rem] left-[15px] z-[100]"
            />
          </div>
        </div>
        <div className="absolute right-[36dvw] bottom-[0rem] hidden sm:block">
          <img
            src={five}
            alt="img"
            className="h-[64px] w-[64px] rounded-full object-cover"
          />
        </div>
        <div className="absolute right-[55dvw] bottom-[6rem]">
          <div className="relative z-10">
            <Five classname="opacity-0 sm:opacity-100" />
            <img
              src={six}
              alt="img"
              className="h-[54px] w-[54px] rounded-full object-cover absolute top-[25px] left-[20px] z-[-1]"
            />
          </div>
        </div>
        <div className="absolute left-[25dvw] bottom-[4rem] hidden sm:block">
          <div className="relative z-10">
            <Four />
            <img
              src={seven}
              alt="img"
              className="h-[64px] w-[64px] rounded-full object-cover absolute top-[20px] left-[-10px] z-[100]"
            />
          </div>
        </div>
        <div className="absolute left-[5dvw] bottom-[8rem] hidden sm:block">
          <img
            src={eight}
            alt="img"
            className="h-[54px] w-[54px] rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
