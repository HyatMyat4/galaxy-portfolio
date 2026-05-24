"use client";
import React from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState, useEffect, useRef } from "react";
function Course() {
  const [open, setopen] = useState<boolean>(false);

  let MenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let handler = (e: any) => {
      if (!MenuRef.current?.contains(e.target)) {
        setopen(false);
      }
    };

    document.addEventListener("mousedown", handler);
  }, []);

  return (
    <div className="Nav_text flex flex-row group relative group ">
      <div onClick={() => setopen(true)} className="  flex flex-row">
        Courses
        <ChevronDownIcon className=" w-[18px] h-[18px]  text-gray-300 translate-y-[2px] group-hover:text-[#0000009e] group-hover:text-gray-50 ml-[10px]" />
      </div>

      <div
        ref={MenuRef}
        className={`w-[380px] h-auto rounded-[12px] bg-[#0c0728] border border-[#7042f8]/20 p-5 absolute right-0 animate-slideup mt-[47px] shadow-xl
       ${open ? "flex" : " hidden"} flex-row items-center justify-center`}
      >
        <div className="w-[100px] h-[25px] absolute top-[-22px]"></div>
        <div className=" absolute top-[-13px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-triangle-fill text-[#0c0728] "
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M7.022 1.566a1.13 1.13 0 0 1 1.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767L7.022 1.566z"
            />
          </svg>
        </div>
        <div className="w-full h-auto hover:bg-[#221d41] rounded-[8px] flex flex-row py-[13px] px-[15px] ">
          <div className="mr-[10px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-laptop text-sky-500 "
              viewBox="0 0 16 16"
            >
              <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
            </svg>
          </div>
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
    </div>
  );
}

export default Course;
