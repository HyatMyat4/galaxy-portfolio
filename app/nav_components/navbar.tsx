import React from "react";
import Nav_Left from "./nav_left";
import Nav_right from "./nav_right";
import Link from "next/link";
import Course from "./course";
import More from "./more";
function Navbar() {
  //#03001422
  return (
    <div
      className="w-full h-[65px]  fixed shadow-lg   shadow-[#2A0E61]/50  bg-slate-3
    00/30  bg-[#03001417]   backdrop-blur-md z-50 "
    >
      <div className=" w-full 1300:w-[1232px] h-full flex flex-row items-center justify-center  m-auto px-[10px] 400:px-[20px] 500:px-[40px] 1140:p-0 ">
        <div className=" w-auto h-full hidden 860:flex flex-row items-center justify-between ">
          <div
            className="w-full h-auto flex flex-row items-center justify-between   bg-[#0300145e] border
             border-[#7042f861] px-[20px]
           py-[10px] rounded-full "
          >
            <span className="Nav_text px-[10px]  ">About Me</span>
            <span className="Nav_text px-[10px]   ">Technical Skills</span>
            <span className="Nav_text px-[10px]   ">Experience</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
