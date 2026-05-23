"use client";
import React from "react";

interface Props {
  colour: string;
  onColourChange: any;
  text_tittle: boolean;
}

function ChooseColour({ colour, onColourChange, text_tittle }: Props) {
  return (
    <div className=" flex flex-col">
      <div className=" font-bold text-gray-200 text-[16px] flex flex-col items-center justify-start  ">
        <div
          className={` ${
            text_tittle ? "" : " hidden"
          } w-full flex flex-row items-center  justify-start`}
        >
          <span className="">Stars colours : </span>
        </div>
        <div className="">
          <div className="w-full flex flex-row items-center  justify-start mt-[10px]">
            <div
              onClick={(e: any) => onColourChange("#0369A1")}
              className={`w-[23px] h-[23px]    ${
                colour === "#0369A1" ? " border-[2px] border-white" : ""
              }
               rounded bg-[#0369A1] ml-[10px]`}
            ></div>
            <div
              onClick={(e: any) => onColourChange("#4d7c0f")}
              className={`w-[23px] h-[23px]    ${
                colour === "#4d7c0f" ? " border-[2px] border-white" : ""
              }
          rounded bg-[#4d7c0f] ml-[10px]`}
            ></div>
            <div
              onClick={(e: any) => onColourChange("#c2410c")}
              className={`w-[23px] h-[23px]    ${
                colour === "#c2410c" ? " border-[2px] border-white" : ""
              }
          rounded bg-[#c2410c] ml-[10px]`}
            ></div>
            <div
              onClick={(e: any) => onColourChange("#7e22ce")}
              className={`w-[23px] h-[23px]    ${
                colour === "#7e22ce" ? " border-[2px] border-white" : ""
              }
          rounded bg-[#7e22ce] ml-[10px]`}
            ></div>
            <div
              onClick={(e: any) => onColourChange("#a16207")}
              className={`w-[23px] h-[23px]    ${
                colour === "#a16207" ? " border-[2px] border-white" : ""
              }
                 rounded bg-[#a16207] ml-[10px]`}
            ></div>
            <div
              onClick={(e: any) => onColourChange("#0f766e")}
              className={`w-[23px] h-[23px]    ${
                colour === "#0f766e" ? " border-[2px] border-white" : ""
              }
               rounded bg-[#0f766e] ml-[10px]`}
            ></div>
            <div
              onClick={(e: any) => onColourChange("#be123c")}
              className={`w-[23px] h-[23px]    ${
                colour === "#be123c" ? " border-[2px] border-white" : ""
              }
               rounded bg-[#be123c] ml-[10px]`}
            ></div>
            <div
              onClick={(e: any) => onColourChange("#4338ca")}
              className={`w-[23px] h-[23px]    ${
                colour === "#4338ca" ? " border-[2px] border-white" : ""
              }
               rounded bg-[#4338ca] ml-[10px]`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseColour;
