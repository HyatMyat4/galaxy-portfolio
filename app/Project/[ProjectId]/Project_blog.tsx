"use client";
import React from "react";
import { useState, useEffect } from "react";
import Project_video from "./Project_video";
import Dependencies from "./Dependencies";
import Link from "next/link";
import Image from "next/image";
interface Props {
  Single_data: Project_data[];
}

function Project_blog({ Single_data }: Props) {
  const [ifreamload, setifreamload] = useState<boolean>(false);
  const [havecopy, sethavecopy] = useState<boolean>(false);

  useEffect(() => {
    const iframe = document.getElementById("iframe");
    const handleLoad = () => {
      setifreamload(true);
    };
    if (iframe) {
      iframe.addEventListener("load", handleLoad, true);
    }
  }, []);

  const Copy = () => {
    sethavecopy(true);
    navigator.clipboard.writeText(
      "yarn add @react-navigation/native-stack @react-navigation/native"
    );
  };

  return (
    <div className=" w-full 800:w-[800px] h-auto flex flex-col  items-start justify-start px-[10px] 600:px-[15px] 800::px-0  ">
      <div className=" font-bold text-[25px] text-slate-200 ">
        {Single_data[0].title}
      </div>
      <Project_video ifreamload={ifreamload} src={Single_data[0].video_key} />
      <div className=" my-[20px]">
        <span className=" font-bold text-slate-200 text-[23px] ">
          {Single_data[0].say_xi}
        </span>
      </div>
      <div className="">
        <p className=" text-gray-300 text-[15px]">
          {Single_data[0].say_xi_blog}
        </p>
      </div>
      <span className=" font-bold text-slate-200 text-[23px] mt-[15px] ">
        Technology & Feature
      </span>
      <ul className="list-disc ml-[20px] mt-[10px] text-slate-200 ">
        {Single_data[0].technology_feature.map((data: string) => (
          <li key={data}>{data}</li>
        ))}
      </ul>
      <span className=" my-[20px] font-bold text-slate-200 text-[23px] ">
        About this app
      </span>
      <p className="text-gray-300 text-[15px]">
        {Single_data[0].about_this_app}
      </p>
      <span className=" my-[20px] font-bold text-slate-200 text-[23px] ">
        Design
      </span>
      <p className="text-gray-300 text-[15px] mb-[10px]">
        {Single_data[0].design_blog}
      </p>
      <Dependencies Single_data={Single_data[0]} />
      <span className=" my-[20px] font-bold text-slate-200 text-[23px] ">
        Conclusion
      </span>
      <p className="text-gray-300 text-[15px]">
        As I said at the beginning, this is a great project for begginers and
        even for those who are not new to React . I bealive this is a grat
        project to have in a resume or portfolio. I am very happy with the app
        and I hope you will enjoy it as well.
      </p>
      <span className=" my-[20px] font-bold text-slate-200 text-[23px] select-none ">
        Links
      </span>
      <div className=" w-auto h-auto flex flex-row items-center justify-start 600:justify-between  flex-wrap  ">
        <a
          href={Single_data[0].youtube_link}
          className="px-[20px] py-[5px] mr-[10px] mb-[10px] 600:mb-0 rounded-[6px] bg-white flex flex-row active:scale-90 transition-all duration-150 select-none items-center cursor-pointer hover:bg-[#f3f3f3] "
        >
          <Image
            src={"/youtube-svgrepo-com.svg"}
            className="w-[25px] h-auto"
            width={1920}
            height={1080}
            alt=""
          />
          <span className="text-black  font-bold text-[14px] ml-[6px] ">
            Youtube
          </span>
        </a>
        <a
          href={Single_data[0].githhub_link}
          className="px-[20px] py-[5px] mr-[10px] mb-[10px] 600:mb-0 rounded-[6px] bg-white flex flex-row active:scale-90 transition-all duration-150 select-none items-center cursor-pointer hover:bg-[#f3f3f3] "
        >
          <Image
            src={"/github-142-svgrepo-com.svg"}
            className="w-[23px] h-auto"
            width={1920}
            height={1080}
            alt=""
          />
          <span className="text-black  font-bold text-[14px] ml-[6px] ">
            Github
          </span>
        </a>
        <a
          href={Single_data[0].frontend_dowload_link}
          className={` ${
            Single_data[0].frontend_dowload_link.length ? "" : " hidden"
          } px-[20px] py-[5px] mb-[10px] 600:mb-0 rounded-[6px] bg-white mr-[10px] flex flex-row items-center active:scale-90 
          transition-all duration-150 select-none cursor-pointer hover:bg-[#f3f3f3] `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6  text-black "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          <span className="text-black  font-bold text-[14px] ml-[6px]">
            Frontend
          </span>
        </a>
        <a
          href="https://github.com/HyatMyat4/Basic_GO_Booking_App_CLI_Project-/archive/refs/heads/main.zip"
          className={` ${
            Single_data[0].backend_dowload_link.length ? "" : " hidden"
          } px-[20px] py-[5px] mb-[10px] 600:mb-0 rounded-[6px] bg-white flex flex-row items-center active:scale-90 
          transition-all duration-150 select-none cursor-pointer hover:bg-[#f3f3f3] `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6  text-black "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          <span className="text-black  font-bold text-[14px] ml-[6px]">
            Backend
          </span>
        </a>
      </div>
      <Link
        href={"/Project"}
        className=" flex flex-row items-center text-slate-200 font-normal cursor-pointer text-[14px] my-[20px] "
      >
        Go Back To
        <span className=" text-sky-500 ml-[5px] cursor-pointer  hover:underline  ">
          Projects
        </span>
      </Link>
      <div className="w-full h-auto pb-[100px] "></div>
    </div>
  );
}

export default Project_blog;
