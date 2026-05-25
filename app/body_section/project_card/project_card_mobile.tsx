"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Technology_tag from "../technology_tag";
import { useAppContext } from "../../context/AppContext";
import { toSlug } from "../../../utils/slug";

interface Props {
  data: Project_data;
  index: number;
}

function Projectcard_Mobile({ data, index }: Props) {
  const { dispatch } = useAppContext();
  const images = data.project_Img_Mobile || [];

  return (
    <Link
      href={`/project/${toSlug(data.title)}`}
      className="w-full 840:w-[800px] 1250:w-full h-auto p-[10px] animate-slideup group block"
    >
      <div className="relative w-full h-auto rounded-[16px] overflow-hidden bg-[#0a0620]/80 hover:bg-[#0d082b]/90 border border-[#1f0f4a]/60 hover:border-[#7c3aed]/30 transition-all duration-500 ease-out p-[1px]">
        {/* Gradient border glow on hover */}
        <div className="absolute inset-0 rounded-[16px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-[#7c3aed]/20 via-transparent to-[#06b6d4]/10 pointer-events-none" />

        <div className="relative w-full h-full rounded-[15px] bg-[#0a0620] p-[16px]">
          {/* In-development badge */}
          <div
            className={`w-[200px] h-[22px] ${
              data.indevelopment ? "" : "hidden"
            } text-[13px] absolute top-[45px] left-[-45px] bg-gradient-to-r from-emerald-500 to-teal-500 rotate-[-45deg]
            text-white text-center flex flex-row items-center justify-center z-50 font-medium tracking-wide shadow-lg shadow-emerald-500/20`}
          >
            in development
          </div>

          {/* Image row */}
          {images.length > 0 && (
            <div className="w-full h-auto mb-[14px]">
              <div className="flex flex-row items-center justify-start gap-2 overflow-x-auto pb-1">
                {images.map((imgSrc: string, i: number) => (
                  <div
                    key={imgSrc}
                    className={`flex-shrink-0 w-[180px] border border-[#1f0f4a]/40 hover:border-[#7c3aed]/30 relative group/image overflow-hidden bg-black rounded-[14px] transition-all duration-300 ${
                      i === 0 ? "" :
                      i === 1 ? "hidden 660:block" :
                      i === 2 ? "hidden 720:block" :
                      "hidden 1250:block"
                    }`}
                  >
                    <div
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        dispatch({
                          type: "SET_IMAGE_SRC",
                          payload: { data: imgSrc, isMobile: true },
                        });
                      }}
                      className="absolute inset-0 z-10 bg-black/0 group-hover/image:bg-black/20 transition-all duration-300 cursor-pointer"
                    />
                    <Image
                      src={imgSrc}
                      width={0}
                      height={0}
                      sizes="100vw"
                      alt="image"
                      className="w-auto h-auto max-w-full max-h-[400px] rounded-[13px] transition-transform duration-500 ease-out group-hover/image:scale-[1.03]"
                    />
                  </div>
                ))}
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
          <div className="w-full h-auto mb-[6px]">
            <p className="text-[13px] text-white/50 leading-relaxed">
              {data.description}
            </p>
          </div>

          {/* Tags */}
          <Technology_tag data={data} />
        </div>
      </div>
    </Link>
  );
}

export default Projectcard_Mobile;
