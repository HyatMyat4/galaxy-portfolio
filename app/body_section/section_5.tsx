import React from "react";
import Image from "next/image";
import Link from "next/link";
import Technology_tag from "./technology_tag";
import { Project } from "../../utils/constants";
import Projectcard_Web from "./project_card/project_card_web";
import Projectcard_Mobile from "./project_card/project_card_mobile";
function Section_5() {
  return (
    <div className=" w-full 1300:w-[1250px] z-10 h-auto relative m-auto flex flex-col items-center justify-center overflow-hidden  pb-[100px] scroll-mt-[80px] ">
      <span id="projects" className="sr-only">
        &nbsp;
      </span>
      <div className=" w-full 840:w-[830px] 1250:w-full h-auto flex flex-col  items-start justify-center my-[15px] px-[15px] 1300:px-[10px] ">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500  font-semibold text-[20px] ">
          Projects
        </span>
        <span className=" font-bold text-[30px] text-white ">
          Featured Projects
        </span>
      </div>
      <div className=" w-full h-auto flex flex-row items-center justify-center  1250:justify-between flex-wrap p-[10px] 840:p-0  ">
        {Project.map((data: Project_data, index: any) =>
          data.Type === "React Native" ? (
            <Projectcard_Mobile
              key={data.title + data.project_image + index}
              index={index}
              data={data}
            />
          ) : (
            <Projectcard_Web
              key={data.title + data.project_image + index}
              index={index}
              data={data}
            />
          ),
        )}
        <div className=" w-full 840:w-[800px] 1250:w-full flex flex-col 1250:flex-row h-auto p-0 1250:p-[10px] animate-slideup ">
          <div
            className="w-full h-auto rounded-[18px]   backdrop-blur-sm  relative overflow-hidden  border bg-[#0c0728]
         hover:bg-[#0e082e] border-[#401f788e] p-[13px] mr-0 1250:mr-[20px] mt-[20px] 1250:mt-0  "
          >
            <Image
              src={"/Frame 1 (1).png"}
              width={1920}
              height={1080}
              alt="image"
              className="w-full h-auto rounded-[15px] cursor-pointer "
            />
            <div className="w-full h-auto mt-[15px] flex flex-col 500:flex-row items-start 550:items-center justify-between ">
              <div className=" flex flex-row items-center ">
                <Image
                  src={"/figma.png"}
                  width={1920}
                  height={1080}
                  alt="image"
                  className="w-[20px] h-auto cursor-pointer mr-[15px] "
                />
                <div className=" text-gray-200 font-bold text-[16px] 550:text-[18px] 720:text-[22px]">
                  Apex Movie App Figma Desing
                </div>
              </div>
              <a
                href="https://www.figma.com/community/file/1256548577755791025/Apex-Movie-App"
                className=" font-bold text-gray-200 px-[15px] py-[8px] bg-blue-500 rounded-[10px] mt-[15px] 500:mt-0 "
              >
                Open in Figma
              </a>
            </div>
          </div>
          <div
            className="w-full h-auto rounded-[18px]   backdrop-blur-sm  relative overflow-hidden  border bg-[#0c0728]
         hover:bg-[#0e082e] border-[#401f788e] p-[13px] mt-[20px] 1250:mt-0 "
          >
            <Image
              src={"/Frame 1.png"}
              width={1920}
              height={1080}
              alt="image"
              className="w-full h-auto rounded-[15px] cursor-pointer "
            />
            <div className="w-full h-auto mt-[15px] flex flex-col 500:flex-row items-start 550:items-center justify-between ">
              <div className=" flex flex-row items-center ">
                <Image
                  src={"/figma.png"}
                  width={1920}
                  height={1080}
                  alt="image"
                  className="w-[20px] h-auto cursor-pointer mr-[15px] "
                />
                <div className=" text-gray-200 font-bold text-[16px] 550:text-[18px] 720:text-[22px]">
                  Coffee Shop Figma Desing
                </div>
              </div>
              <a
                href="https://www.figma.com/community/file/1255873305901553415/Coffee-Shop"
                className=" font-bold text-gray-200 px-[15px] py-[8px] bg-blue-500 rounded-[10px] mt-[15px] 500:mt-0 "
              >
                Open in Figma
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section_5;
