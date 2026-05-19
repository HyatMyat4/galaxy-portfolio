"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideIn } from "../../utils/motion";
import { SectionWrapper } from "../(hoc)/index";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { fadeIn, textVariant } from "../../utils/motion";
function Section_2() {
  return (
    <div className=" 1300 1300:w-[1250px] h-full  flex flex-row items-center justify-between z-[-10] mt-[80px] 500:mt-0  ">
      <div
        className=" w-full 800:w-[90%] 1000:w-[70%] 1140:w-[50%] h-full flex flex-col items-center  1140:items-start  justify-center m-auto
       text-center 1140:text-start"
      >
        <motion.div
          variants={textVariant(2)}
          id="Wecom-box"
          className=" px-[15px] py-[6px]  border border-[#7042f88b]  opacity-[0.9]   "
        >
          <SparklesIcon className=" h-4 370:h-5 w-4 370:w-5  text-[#b49bff] mr-[10px]" />
          <div
            id="Wecom-text"
            className=" text-[12px] 310:text-[14px] 370:text-auto"
          >
            Senior Full-Stack Engineer at Innorder
          </div>
        </motion.div>
        <div className="  w-auto h-auto  animate-slideleftT2 mt-[24px] text-white  ">
          <span className=" text-[40px] 400:text-[50px]  800:text-[57px] font-bold align-top ">
            Building{" "}
            <span className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              scalable &
            </span>{" "}
          </span>
          <span className=" translate-y-[-20px]  animate-slideleftT2 text-[40px] 400:text-[50px]  800:text-[57px] font-bold   align-top ">
            impactful products
          </span>
        </div>
        <p className=" animate-slideleftT3 text-[16px] 400:text-[19px] text-slate-400 mb-[20px]  ">
          Full-stack engineer with 4+ years of experience at Innorder. Focused
          on{" "}
          <a className="Home_a ">React</a>,
          <a className="Home_a">Next.js</a>,
          <a className="Home_a">NestJS</a>, clean architecture, and
          production-ready code that creates real-world value.
        </p>
        <a
          href="#Section_4"
          id="button-primary"
          className=" animate-slideleftT4 px-[20px] py-[7px] text-white  cursor-pointer hover:scale-105 active:scale-90  transition-all   duration-150 select-none rounded-[5px]"
        >
          Explore My Work
        </a>
        <div className="animate-slideleftT4 flex flex-row items-center justify-center 1140:justify-start flex-wrap gap-x-[20px] gap-y-[8px] mt-[18px]">
          <a
            href="mailto:hyatmyat79@gmail.com"
            className="flex items-center gap-[6px] text-slate-400 hover:text-slate-200 text-[13px] transition-colors duration-150"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            hyatmyat79@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/htet-myat-14089322a/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-[6px] text-slate-400 hover:text-blue-400 text-[13px] transition-colors duration-150"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
            </svg>
            LinkedIn
          </a>
          <a
            href="https://github.com/HyatMyat4"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-[6px] text-slate-400 hover:text-slate-200 text-[13px] transition-colors duration-150"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
            GitHub
          </a>
          <span className="text-slate-500 text-[13px]">· Myanmar</span>
        </div>
      </div>
      <div className=" w-[50%] h-full hidden 1140:flex flex-row items-center  select-none justify-between ">
        <Image
          src="/mainIconsdark.svg"
          width={708}
          height={709}
          alt=""
          className="   flex animate-slideright2  transition_"
        />
      </div>
    </div>
  );
}

export default SectionWrapper(Section_2, "Section_2");
