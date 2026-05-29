"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "../../utils/constants";
import { staggerContainer } from "../../utils/motion";
import Projectcard_Web from "./project_card/project_card_web";
import Projectcard_Mobile from "./project_card/project_card_mobile";

type Tab = "realworld" | "practice" | "all";

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 0.5, ease: "easeOut" },
  },
};

const TABS: { id: Tab; label: string; description: string }[] = [
  { id: "realworld", label: "Real World Projects", description: "Production apps used by real customers" },
  { id: "practice", label: "Practice Projects", description: "Learning projects from when I started out" },
  { id: "all", label: "All", description: "" },
];

function Section_5() {
  const [activeTab, setActiveTab] = useState<Tab>("realworld");

  const realworldCount = Project.filter((p) => p.category === "realworld").length;
  const practiceCount = Project.filter((p) => !p.category || p.category === "practice").length;

  const filteredProjects =
    activeTab === "all"
      ? Project
      : activeTab === "realworld"
      ? Project.filter((p) => p.category === "realworld")
      : Project.filter((p) => !p.category || p.category === "practice");

  const showFigma = activeTab === "practice" || activeTab === "all";

  return (
    <div
      id="projects"
      className="w-full 1300:w-[1250px] z-10 h-auto relative m-auto flex flex-col items-center justify-center overflow-hidden pb-[100px] scroll-mt-[80px]"
    >
      {/* ── Header ── */}
      <div className="w-full 840:w-[830px] 1250:w-full h-auto flex flex-col items-start justify-center my-[15px] px-[15px] 1300:px-[10px]">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-semibold text-[20px]">
          Projects
        </span>
        <span className="font-bold text-[30px] text-white">Featured Projects</span>
      </div>

      {/* ── Tabs ── */}
      <div className="w-full 840:w-[830px] 1250:w-full px-[15px] 1300:px-[10px] mb-[24px]">
        <div className="flex flex-row items-center gap-[8px] flex-wrap">
          {TABS.map((tab) => {
            const count =
              tab.id === "realworld"
                ? realworldCount
                : tab.id === "practice"
                ? practiceCount
                : Project.length;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-[6px] px-[16px] py-[9px] rounded-[12px] text-[13px] font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-500/25"
                    : "bg-[#0c0728] border border-[#401f788e] text-white/50 hover:text-white/80 hover:border-[#7c3aed]/40"
                }`}
              >
                {tab.id === "realworld" && (
                  <span className={`w-[7px] h-[7px] rounded-full ${isActive ? "bg-white/80 animate-pulse" : "bg-emerald-500"}`} />
                )}
                {tab.label}
                <span
                  className={`text-[11px] px-[6px] py-[1px] rounded-full ${
                    isActive ? "bg-white/20 text-white" : "bg-[#401f78]/50 text-white/40"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Tab description */}
        {TABS.find((t) => t.id === activeTab)?.description && (
          <p className="mt-[10px] text-[12px] text-white/30 tracking-wide">
            {TABS.find((t) => t.id === activeTab)?.description}
          </p>
        )}
      </div>

      {/* ── Project Grid ── */}
      <motion.div
        key={activeTab}
        variants={staggerContainer(0.1, 0.15)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.05 }}
        className="w-full h-auto flex flex-row items-start justify-center 1250:justify-between flex-wrap p-[10px] 840:p-0"
      >
        {filteredProjects.map((data: Project_data, index: number) =>
          data.Type === "React Native" && data.category !== "realworld" ? (
            <motion.div key={data.title + index} variants={cardVariant}>
              <Projectcard_Mobile index={index} data={data} />
            </motion.div>
          ) : (
            <motion.div key={data.title + index} variants={cardVariant}>
              <Projectcard_Web index={index} data={data} />
            </motion.div>
          )
        )}

        {/* ── Figma Designs (Practice / All only) ── */}
        {showFigma && (
          <motion.div
            variants={cardVariant}
            className="w-full 840:w-[800px] 1250:w-full flex flex-col 1250:flex-row h-auto p-0 1250:p-[10px]"
          >
            <div className="w-full h-auto rounded-[18px] backdrop-blur-sm relative overflow-hidden border bg-[#0c0728] hover:bg-[#0e082e] border-[#401f788e] p-[13px] mr-0 1250:mr-[20px] mt-[20px] 1250:mt-0">
              <Image
                src={"/projects-images/apex-movie-app-figma.png"}
                width={1920}
                height={1080}
                alt="Apex Movie App Figma Design"
                className="w-full h-auto rounded-[15px] cursor-pointer"
              />
              <div className="w-full h-auto mt-[15px] flex flex-col 500:flex-row items-start 550:items-center justify-between">
                <div className="flex flex-row items-center">
                  <Image
                    src={"/projects-images/figma.png"}
                    width={20}
                    height={20}
                    alt="figma"
                    className="w-[20px] h-auto cursor-pointer mr-[15px]"
                  />
                  <div className="text-gray-200 font-bold text-[16px] 550:text-[18px] 720:text-[22px]">
                    Apex Movie App Figma Design
                  </div>
                </div>
                <a
                  href="https://www.figma.com/community/file/1256548577755791025/Apex-Movie-App"
                  className="font-bold text-gray-200 px-[15px] py-[8px] bg-blue-500 rounded-[10px] mt-[15px] 500:mt-0"
                >
                  Open in Figma
                </a>
              </div>
            </div>
            <div className="w-full h-auto rounded-[18px] backdrop-blur-sm relative overflow-hidden border bg-[#0c0728] hover:bg-[#0e082e] border-[#401f788e] p-[13px] mt-[20px] 1250:mt-0">
              <Image
                src={"/projects-images/coffee-shop-figma.png"}
                width={1920}
                height={1080}
                alt="Coffee Shop Figma Design"
                className="w-full h-auto rounded-[15px] cursor-pointer"
              />
              <div className="w-full h-auto mt-[15px] flex flex-col 500:flex-row items-start 550:items-center justify-between">
                <div className="flex flex-row items-center">
                  <Image
                    src={"/projects-images/figma.png"}
                    width={20}
                    height={20}
                    alt="figma"
                    className="w-[20px] h-auto cursor-pointer mr-[15px]"
                  />
                  <div className="text-gray-200 font-bold text-[16px] 550:text-[18px] 720:text-[22px]">
                    Coffee Shop Figma Design
                  </div>
                </div>
                <a
                  href="https://www.figma.com/community/file/1255873305901553415/Coffee-Shop"
                  className="font-bold text-gray-200 px-[15px] py-[8px] bg-blue-500 rounded-[10px] mt-[15px] 500:mt-0"
                >
                  Open in Figma
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default Section_5;
