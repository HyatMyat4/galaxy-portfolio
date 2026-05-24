"use client";
import React from "react";
import Link from "next/link";
import ChooseColour from "../../nav_components/choose_colour";
import { useDispatch, useSelector } from "react-redux";
import {
  setStarMode,
  StarMode_data,
  setStarColur,
  StarColur_data,
} from "../../../redux_store/redux_action";

function MoreMobile() {
  const starmode = useSelector(StarMode_data);
  const colour = useSelector(StarColur_data);
  const dispatch = useDispatch();

  const StarModeStatus = () => {
    const status = localStorage.getItem("starMode");

    if (status === "active") {
      dispatch(setStarMode("disable"));
      localStorage.setItem("starMode", "disable");
    } else {
      dispatch(setStarMode("active"));
      localStorage.setItem("starMode", "active");
    }
  };

  const onColourChange = (e: string) => {
    dispatch(setStarColur(e));
    localStorage.setItem("colour", e);
  };

  return (
    <div
      className={`w-full h-auto rounded-[10px] bg-[#0c0728] relative  p-[10px]  animate-slideup  mt-[23px] flex   flex-col   items-center justify-center `}
    >
      <div className="w-[100px] h-[25px]  top-[-22px]  "></div>
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
      <div className="w-full h-auto hover:bg-[#221d41] rounded-[8px] flex flex-row py-[13px] px-[5px] ">
        <div className=" flex flex-col">
          <span className=" font-bold text-gray-200 text-[16px] ">
            Blog Comming Soon..
          </span>
          <p className=" mt-[5px] text-[14px] text-gray-300 ">
            Get valuable insights and tips on my blog.
          </p>
        </div>
      </div>
      <a
        href="#about_me"
        className="w-full h-auto hover:bg-[#221d41] rounded-[8px] flex flex-row py-[13px] px-[5px] "
      >
        <div className=" flex flex-col">
          <span className=" font-bold text-gray-200 text-[16px] ">About</span>
          <p className=" mt-[5px] text-[14px] text-gray-300 ">
            Learn more about me, my work, and how I can help you with your
            project.
          </p>
        </div>
      </a>
      <a
        href="https://www.youtube.com/channel/UCVBLPSX_7Tvm0iEFVMgd5-w"
        className="w-full h-auto hover:bg-[#221d41] rounded-[8px] flex flex-row py-[13px] px-[5px] "
      >
        <div className=" flex flex-col">
          <span className=" font-bold text-gray-200 text-[16px] ">YouTube</span>
          <p className=" mt-[5px] text-[14px] text-gray-300 ">
            Subscribe to my YouTube channel dedicated to teaching and sharing my
            knowledge.
          </p>
        </div>
      </a>
      <div className="w-full h-auto hover:bg-[#221d41] rounded-[8px] flex flex-row py-[13px] px-[5px] ">
        <div className=" flex flex-col">
          <span className=" font-bold text-gray-200 text-[16px] ">
            Community Comming Soon..
          </span>
          <p className=" mt-[5px] text-[14px] text-gray-300 ">
            Join the Discord community to ask questions, share your projects,
            and get help from other developers.
          </p>
        </div>
      </div>
      <div className="w-full h-auto hover:bg-[#221d41] active:scale-95 transition-all duration-100 select-none rounded-[8px] flex flex-row py-[13px] px-[5px] ">
        <div
          onClick={() => StarModeStatus()}
          className="w-full h-auto flex flex-col"
        >
          <div className=" font-bold text-gray-200 text-[16px] flex flex-col items-start  justify-start  ">
            <div>
              <span>Stars Mode : </span>
            </div>
            <div className=" mt-[10px]">
              {starmode === "active" ? (
                <div className=" text-teal-500  text-[14px] "> Active </div>
              ) : (
                <div className=" text-rose-500  text-[14px] "> Disable </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-auto hover:bg-[#221d41]  select-none rounded-[8px] flex flex-col  py-[13px] px-[5px] ">
        <div className={` w-full flex flex-row items-center  justify-start`}>
          <span className=" text-[13px] 310:text-[16px] ">
            Stars colours :{" "}
          </span>
        </div>
        <div className=" overflow-x-scroll pl-[15px]">
          <ChooseColour
            colour={colour}
            onColourChange={onColourChange}
            text_tittle={false}
          />
        </div>
      </div>
    </div>
  );
}

export default MoreMobile;
