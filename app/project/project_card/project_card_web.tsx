"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Technology_tag from "../../body_section/technology_tag";

interface Props {
  data: Project_data;
  index: number;
}

function Projectcard_Web({ data, index }: Props) {
  return (
    <Link
      href={`/Project/${data.video_key}`}
      className="w-auto h-auto mb-[20px] 840:mb-0  "
    >
      <div className=" w-full 840:w-[800px] 1280:w-[390px] h-auto 1280:h-[440px] rounded-[14px] relative overflow-hidden   backdrop-blur-sm  m-0 840:m-[10px]  border bg-[#0c0728] hover:bg-[#0e082e] border-[#401f788e] p-[13px] ">
        <div
          className={`w-[200px] h-[20px] ${
            data.indevelopment ? "" : "hidden"
          }  text-[14px]   absolute top-[50px] left-[-40px] bg-pink-500 rotate-[-45deg]
         text-white text-center flex flex-row items-center justify-center z-50`}
        >
          in development⏳
        </div>
        <div>
          <Image
            src={data?.project_image}
            width={1920}
            height={1080}
            alt="image"
            className="rounded"
          />
        </div>
        <div>
          <div className="w-full h-auto mt-[10px] text-white flex felx-row items-center justify-between ">
            <span className=" font-bold text-[18px] ">{data.title}</span>
          </div>

          <div className="w-full h-auto ">
            <span className="  text-[14px] text-gray-400">
              {data.project_blog.slice(0, 95)}...
            </span>
          </div>
          <Technology_tag data={data} />
        </div>
      </div>
    </Link>
  );
}

export default Projectcard_Web;
