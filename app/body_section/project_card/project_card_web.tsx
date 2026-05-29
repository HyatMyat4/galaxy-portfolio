"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Technology_tag from "../technology_tag";
import { useAppContext } from "../../context/AppContext";
import { toSlug } from "../../../utils/slug";

interface Props {
  data: Project_data;
  index: number;
}

function Projectcard_Web({ data, index }: Props) {
  const { dispatch } = useAppContext();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  // Build the image list: project_imgs → project_Img_Mobile → project_image
  const images: string[] =
    data.project_imgs && data.project_imgs.length > 0
      ? data.project_imgs
      : data.project_Img_Mobile && data.project_Img_Mobile.length > 0
      ? data.project_Img_Mobile
      : data.project_image
      ? [data.project_image]
      : [];

  const hasMedia = data.Type !== "server" && (images.length > 0 || !!data.preview_video);
  const isSlideshow = images.length > 1 && !data.preview_video;

  // Auto-advance slideshow every 3 s (only when no video)
  useEffect(() => {
    if (!isSlideshow) return;
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [isSlideshow, images.length]);

  return (
    <Link
      href={`/project/${toSlug(data.title)}`}
      className="w-auto h-auto mb-[20px] 840:mb-0 group block"
    >
      <div
        className={`relative w-full 840:w-[800px] 1250:w-[390px] rounded-[16px] overflow-hidden backdrop-blur-sm m-0 840:m-[10px] bg-[#0a0620]/80 hover:bg-[#0d082b]/90 border border-[#1f0f4a]/60 hover:border-[#7c3aed]/30 transition-all duration-500 ease-out p-[1px] ${
          hasMedia && images.length > 0 ? "1250:h-[440px]" : "h-auto"
        }`}
      >
        {/* Gradient border glow */}
        <div className="absolute inset-0 rounded-[16px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-[#7c3aed]/20 via-transparent to-[#06b6d4]/10 pointer-events-none" />

        <div className="relative w-full h-full rounded-[15px] bg-[#0a0620] p-[16px] flex flex-col">
          {/* In-development badge */}
          <div
            className={`w-[200px] h-[22px] ${
              data.indevelopment ? "" : "hidden"
            } text-[13px] absolute top-[45px] left-[-45px] bg-gradient-to-r from-emerald-500 to-teal-500 rotate-[-45deg] text-white text-center flex flex-row items-center justify-center z-50 font-medium tracking-wide shadow-lg shadow-emerald-500/20`}
          >
            in development
          </div>

          {/* Live badge */}
          {data.live_url && (
            <div className="absolute top-[14px] right-[14px] z-20 flex items-center gap-[5px] px-[8px] py-[3px] rounded-full bg-emerald-500/15 border border-emerald-500/30">
              <span className="w-[6px] h-[6px] rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] font-semibold text-emerald-400 tracking-wide uppercase">Live</span>
            </div>
          )}

          {/* ── Media area ── */}
          {hasMedia && (
            <div
              className="rounded-[10px] overflow-hidden mb-[14px] relative group/image cursor-pointer aspect-video flex-shrink-0"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                const src = images[slideIndex] ?? images[0];
                if (src) dispatch({ type: "SET_IMAGE_SRC", payload: { data: src, isMobile: false } });
              }}
            >
              <div className="absolute inset-0 z-10 bg-black/0 group-hover/image:bg-black/20 transition-all duration-300" />

              {/* Slideshow images */}
              {images.map((src, i) => (
                <Image
                  key={src}
                  src={src}
                  fill
                  sizes="(max-width: 1250px) 100vw, 390px"
                  alt={`${data.title} screenshot ${i + 1}`}
                  className={`object-cover rounded-[10px] transition-opacity duration-700 absolute inset-0 ${
                    !data.preview_video
                      ? i === slideIndex
                        ? "opacity-100"
                        : "opacity-0"
                      : videoPlaying
                      ? "opacity-0"
                      : i === 0
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                />
              ))}

              {/* Auto-play video — fades in over image once ready */}
              {data.preview_video && (
                <video
                  ref={videoRef}
                  src={data.preview_video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  onCanPlay={() => setVideoPlaying(true)}
                  className={`absolute inset-0 w-full h-full object-cover rounded-[10px] transition-opacity duration-700 ${
                    videoPlaying ? "opacity-100" : "opacity-0"
                  }`}
                />
              )}

              {/* Slideshow dot indicators */}
              {isSlideshow && images.length > 1 && (
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex gap-[5px]">
                  {images.map((_, i) => (
                    <span
                      key={i}
                      className={`block rounded-full transition-all duration-300 ${
                        i === slideIndex
                          ? "w-[16px] h-[5px] bg-white"
                          : "w-[5px] h-[5px] bg-white/40"
                      }`}
                    />
                  ))}
                </div>
              )}

              {/* Zoom icon (when not playing video) */}
              {!videoPlaying && (
                <div className="absolute top-3 right-3 z-20 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
                  <svg className="w-5 h-5 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              )}

              {/* Video playing indicator */}
              {videoPlaying && (
                <div className="absolute bottom-2 right-2 z-20 flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/50 backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                  <span className="text-[9px] text-white/70 font-medium">LIVE PREVIEW</span>
                </div>
              )}
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
              {data.description.slice(0, 110)}{data.description.length > 110 ? "..." : ""}
            </p>
          </div>

          {/* Tags */}
          <div className="mt-[12px]">
            <Technology_tag data={data} />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Projectcard_Web;
