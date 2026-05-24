"use client";
import React from "react";
import Image from "next/image";
import Technology_tag from "../technology_tag";
import { useDispatch } from "react-redux";
import { set_Image_src } from "../../../redux_store/redux_action";

interface Props {
  data: Project_data;
  index: number;
}

function Projectcard_Mobile({ data, index }: Props) {
  const dispatch = useDispatch();
  const images = data.project_Img_Mobile || [];

  return (
    <div className="w-full 840:w-[800px] 1250:w-full h-auto p-[10px] animate-slideup">
      <div className="w-full h-auto rounded-[14px] backdrop-blur-sm relative overflow-hidden border bg-[#0c0728] hover:bg-[#0e082e] border-[#401f788e] p-[13px]">
        <div
          className={`w-[200px] h-[20px] ${
            data.indevelopment ? "" : "hidden"
          } text-[14px] absolute top-[50px] left-[-40px] bg-teal-500 rotate-[-45deg]
          text-white text-center flex flex-row items-center justify-center z-50`}
        >
          in development⏳
        </div>

        {/* Single responsive image row — each image rendered once, visibility controlled by breakpoint */}
        <div className="w-full h-auto flex flex-row items-center justify-between">
          {images.map((imgSrc: string, i: number) => (
            <div
              key={imgSrc}
              className={`border-[2px] px-[5px] py-[6px] border-[#343434] relative group overflow-hidden bg-black rounded-[25px] ${
                i === 0 ? "" :
                i === 1 ? "hidden 660:flex" :
                i === 2 ? "hidden 720:flex" :
                "hidden 1250:flex"
              }`}
            >
              {/* hidden 660:flex hidden 720:flex hidden 1250:flex */}
              <div
                onClick={() =>
                  dispatch(set_Image_src({ data: imgSrc, isMobile: true }))
                }
                className="w-full h-full absolute z-40 group-hover:bg-[#0000006d]"
              />
              <Image
                src={imgSrc}
                width={1920}
                height={1080}
                alt="image"
                className="w-[200px] h-auto rounded-[20px] cursor-pointer"
              />
            </div>
          ))}
        </div>

        <div className="w-full h-auto mt-[10px] text-white">
          <span className="font-bold text-[18px]">{data.title}</span>
        </div>
        <div className="w-full h-auto">
          <span className="text-[14px] text-gray-400">{data.project_blog}</span>
        </div>
        <Technology_tag data={data} />
      </div>
    </div>
  );
}

export default Projectcard_Mobile;
