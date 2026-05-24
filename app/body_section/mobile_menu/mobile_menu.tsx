"use client";
import React, { useState } from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { setMobileMenu } from "../../../redux_store/redux_action";
import { useDispatch } from "react-redux";
import MoreMobile from "./more_mobile";
import Link from "next/link";
import Image from "next/image";

function MobileMenu() {
  const [course, setcourse] = useState<boolean>(false);
  const [More, setMore] = useState<boolean>(false);
  const dispatch = useDispatch();

  return (
    <div
      id="scroolbar-hidden"
      className={` group  flex flex-col items-center 860:hidden cursor-pointer animate-slideleft overflow-y-scroll  shadow-lg shadow-[#2A0E61]/50  fixed inset-x-0 bottom-0
       z-[999] w-[80%] 500:w-[60%] h-full  text-gray-300  bg-slate-950 
       pb-5 sm:hidden px-[15px] `}
    >
      <div className="w-full min-h-[60px] flex flex-row items-center  justify-between">
        <div
          onClick={() => dispatch(setMobileMenu(false))}
          className=" flex flex-row items-center justify-start text-slate-200 hover:text-sky-500 cursor-pointer "
        >
          <ArrowLeftIcon className="h-6 w-6  mr-[5px] " />
          <span className=" text-[17px]">Back</span>
        </div>
        <Image
          src={"/glaxy.png"}
          width={40}
          height={40}
          alt="Hyat Myat"
          className="  cursor-pointer  hover:animate-slowspin  "
        />
      </div>
      <div
        onClick={() => setcourse(!course)}
        className=" w-full min-h-[50px] rounded-[10px] border
             hover:border-sky-500  border-[#7042f861] flex flex-row items-center font-semibold justify-center "
      >
        Course
        <ChevronDownIcon className=" w-[20px] h-[20px]  text-gray-200 translate-y-[2px] group-hover:text-[#0000009e] group-hover:text-gray-50 ml-[10px]" />
      </div>
      <div
        className={` ${
          course ? "" : " hidden"
        } w-full h-auto rounded-[10px] bg-[#0c0728] relative  p-[10px]    mt-[20px]
        flex   flex-col   items-center justify-center `}
      >
        <div className=" absolute top-[-13px] ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-triangle-fill text-[#0c0728]  "
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M7.022 1.566a1.13 1.13 0 0 1 1.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767L7.022 1.566z"
            />
          </svg>
        </div>
        <div className="w-full h-auto hover:bg-[#221d41] rounded-[8px] flex flex-row py-[13px] px-[5px] 600:px-[15px] ">
          <div className=" flex flex-col">
            <span className=" font-bold text-gray-200 text-[16px] hover:underline ">
              Next js 13 Course Comming Soon..
            </span>
            <p className=" mt-[5px] text-[14px] text-gray-300 ">
              An interactive course to learn Next js 13 + Type Script in a fun
              and easy way
            </p>
          </div>
        </div>
      </div>
      <a
        href="#projects"
        className=" w-full min-h-[50px] rounded-[10px] border
             hover:border-sky-500  border-[#7042f861] mt-[15px] flex flex-row  items-center font-semibold justify-center  "
      >
        Project
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 ml-[10px]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </a>
      <div
        className=" w-full min-h-[50px] rounded-[10px] border pl-[25px]
             hover:border-sky-500  border-[#7042f861] mt-[15px] flex flex-row  text-gray-200 items-center font-semibold justify-center "
      >
        Resources
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 ml-[9px]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </div>
      <div
        onClick={() => setMore(!More)}
        className=" w-full min-h-[50px] rounded-[10px] border pr-[5px]
             hover:border-sky-500  border-[#7042f861] flex flex-row mt-[15px] items-center font-semibold justify-center "
      >
        More
        <ChevronDownIcon className=" w-[20px] h-[20px]  text-gray-200 translate-y-[2px] group-hover:text-[#0000009e] group-hover:text-gray-50 ml-[10px]" />
      </div>
      {More ? <MoreMobile /> : <div></div>}
    </div>
  );
}

export default MobileMenu;
