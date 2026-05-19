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
