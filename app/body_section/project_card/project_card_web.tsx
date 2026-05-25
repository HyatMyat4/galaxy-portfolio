"use client";
import React from "react";
import Image from "next/image";
import Technology_tag from "../technology_tag";
import { useAppContext } from "../../context/AppContext";

interface Props {
  data: Project_data;
  index: number;
}

function Projectcard_Web({ data, index }: Props) {
  const { dispatch } = useAppContext();
  return (
    <div className="w-auto h-auto mb-[20px] 840:mb-0 group">
      <div className={`relative w-full 840:w-[800px] 1250:w-[390px] rounded-[16px] overflow-hidden backdrop-blur-sm m-0 840:m-[10px] bg-[#0a0620]/80 hover:bg-[#0d082b]/90 border border-[#1f0f4a]/60 hover:border-[#7c3aed]/30 transition-all duration-500 ease-out p-[1px] ${data.Type !== "server" ? "1250:h-[440px]" : "h-auto"}`}>
        {/* Gradient border glow on hover */}
        <div className="absolute inset-0 rounded-[16px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-[#7c3aed]/20 via-transparent to-[#06b6d4]/10 pointer-events-none" />

        <div className="relative w-full h-full rounded-[15px] bg-[#0a0620] p-[16px] flex flex-col">
          {/* In-development badge */}
          <div
            className={`w-[200px] h-[22px] ${
              data.indevelopment ? "" : "hidden"
            } text-[13px] absolute top-[45px] left-[-45px] bg-gradient-to-r from-emerald-500 to-teal-500 rotate-[-45deg]
            text-white text-center flex flex-row items-center justify-center z-50 font-medium tracking-wide shadow-lg shadow-emerald-500/20`}
          >
            in development
          </div>

          {/* Project image — consistent aspect ratio for uniform card size */}
          {data.Type !== "server" && data.project_image && (
            <div className="rounded-[10px] overflow-hidden mb-[14px] relative group/image cursor-pointer aspect-video flex-shrink-0">
              <div
                onClick={() =>
                  dispatch({
                    type: "SET_IMAGE_SRC",
                    payload: { data: data?.project_image, isMobile: false },
                  })
                }
                className="absolute inset-0 z-10 bg-black/0 group-hover/image:bg-black/20 transition-all duration-300"
              />
              <Image
                src={data?.project_image}
                fill
                sizes="(max-width: 1250px) 100vw, 390px"
                alt="image"
                className="object-cover rounded-[10px] transition-transform duration-500 ease-out group-hover/image:scale-[1.03]"
              />
              {/* Zoom icon on hover */}
              <div className="absolute top-3 right-3 z-20 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
                <svg className="w-5 h-5 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          )}

          {/* Title */}
          <div className="w-full h-auto mb-[6px]">
            <h3 className="font-semibold text-[17px] text-white/90 group-hover:text-white transition-colors duration-300 leading-tight">
              {data.title}
            </h3>
          </div>

          {/* Date */}
          {data.dateAgo && (
            <div className="mb-[6px]">
              <span className="text-[12px] text-white/30 tracking-wide uppercase">{data.dateAgo}</span>
            </div>
          )}

          {/* Description */}
          <div className="w-full h-auto mb-auto">
            <p className="text-[13px] text-white/50 leading-relaxed line-clamp-2">
              {data.project_blog.slice(0, 110)}{data.project_blog.length > 110 ? "..." : ""}
            </p>
          </div>

          {/* Tags */}
          <div className="mt-[12px]">
            <Technology_tag data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projectcard_Web;
