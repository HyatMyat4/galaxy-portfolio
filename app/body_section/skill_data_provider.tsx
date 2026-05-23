"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
interface Props {
  data: Skill_data;
  index: number;
  type: string;
}

function Skill_data_provider({ data, index, type }: Props) {
  return (
    <motion.div variants={fadeIn("right", "spring", index * 0.5, 0.75)}>
      <div
        className={` ${
          type === "Backend_skill"
            ? "w-[35px] 400:w-[45px] 800:w-[50px]"
            : "w-[40px] 400:w-[50px] 800:w-[55px]"
        } cursor-pointer z-0   1300:w-[${
          data.width
        }] h-auto rounded-[5px] z-20     relative  mx-[10px] my-[5px] `}
      >
        <img
          alt={data.skill_name}
          width={data.width}
          height={data.hight}
          src={data.Image}
          className=""
        />
      </div>
    </motion.div>
  );
}

export default Skill_data_provider;
