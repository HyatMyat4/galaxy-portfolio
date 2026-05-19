"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { fadeIn, textVariant } from "../../utils/motion";

function Section1_text() {
  return (
    <div className="w-full h-auto flex flex-col   items-center justify-center ">
      <motion.div
        variants={textVariant(0)}
        id="Wecom-box"
        className=" px-[15px] py-[4px]  border border-[#7042f88b]  opacity-[0.9] mb-0 1300:mb-[15px]  "
      >
        <SparklesIcon className=" h-4 370:h-5 w-4 370:w-5  text-[#b49bff] mr-[10px]" />
        <div
          id="Wecom-text"
          className=" text-[12px] 310:text-[14px] 370:text-auto"
        >
          Senior Full-Stack Engineer at Innorder
        </div>
      </motion.div>
      <motion.div
        variants={textVariant(1)}
        className=" text-[30px] 370:text-[40px] 450:text-[50px] 800:text-[60px] text-white  font-medium mt-[10px] text-center "
      >
        <span className="hidden 800:flex mb-0 1300:mb-[15px] ">
          Tech Stack & Skills
        </span>
        <span className="flex 800:hidden  ">
          Tech Stack <br /> & Skills
        </span>
      </motion.div>

      <motion.div
        variants={textVariant(2)}
        className=" text-[20px] text-gray-200  text-center mt-[10px]"
        id="cursive"
      >
        Building scalable systems with 4+ years of experience.
      </motion.div>
    </div>
  );
}

export default Section1_text;
