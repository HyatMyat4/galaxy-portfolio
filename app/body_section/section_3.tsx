"use client";
import React from "react";
import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { fadeIn, textVariant } from "../../utils/motion";
import { SectionWrapper } from "../hoc/index";

const experience = {
  company: "Innorder",
  role: "Senior Full-Stack Engineer",
  period: "2021 – Present",
  duration: "4+ years",
  bullets: [
    "Architect and maintain scalable full-stack systems across multiple production projects",
    "Author and maintainer of core internal packages that power the company's ecosystem",
    "Built REST APIs, GraphQL services, and real-time WebSocket features using NestJS",
    "Delivered production-ready React / Next.js frontends with TypeScript and clean architecture",
    "Mentored junior engineers and established code standards across the engineering team",
  ],
};

function Section_3() {
  return (
    <section className="w-full flex flex-col items-center justify-center overflow-hidden py-[60px] relative">
      <div className="w-full 1300:w-[1250px] px-[15px] 1300:px-0">
        <div className="flex flex-col items-center justify-center mb-[40px]">
          <motion.div
            variants={textVariant(0)}
            id="Wecom-box"
            className="px-[15px] py-[4px] border border-[#7042f88b] opacity-[0.9] mb-[15px]"
          >
            <SparklesIcon className="h-4 w-4 text-[#b49bff] mr-[10px]" />
            <div className="text-[13px]">Professional Journey</div>
          </motion.div>
          <motion.h2
            variants={textVariant(1)}
            className="text-[40px] font-semibold text-white text-center"
          >
            Work{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Experience
            </span>
          </motion.h2>
        </div>

        <div className="w-full 800:w-[800px] m-auto">
          <motion.div
            variants={fadeIn("up", "spring", 0.2, 0.75)}
            className="border border-[#401f788e] rounded-[14px] bg-[#0c0728]/70 backdrop-blur-sm p-[24px]"
          >
            <div className="flex flex-col 600:flex-row items-start 600:items-center justify-between mb-[16px] gap-[8px]">
              <div>
                <h3 className="text-white font-bold text-[20px]">
                  {experience.role}
                </h3>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-semibold text-[16px]">
                  {experience.company}
                </span>
              </div>
              <div className="text-slate-400 text-[13px] bg-[#1a0f3d] border border-[#401f788e] px-[12px] py-[5px] rounded-[6px] whitespace-nowrap">
                {experience.period} · {experience.duration}
              </div>
            </div>
            <div className="w-full h-[1px] bg-gradient-to-r from-purple-500/30 to-cyan-500/30 mb-[16px]" />
            <ul className="space-y-[10px]">
              {experience.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-[10px] text-slate-300 text-[14px] 600:text-[15px] leading-[1.6]">
                  <span className="text-purple-400 mt-[2px] shrink-0">▸</span>
                  {bullet}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      <div className="w-[1500px] h-full z-[-10] absolute top-0 flex flex-row items-start justify-center opacity-20">
        <video
          className="w-full h-auto"
          preload="false"
          playsInline
          loop
          muted
          // @ts-ignore
          autoPlay="autoplay"
          src="/q-ba39153a.webm"
        />
      </div>
    </section>
  );
}

export default SectionWrapper(Section_3, "Section_3");
