"use client";
import React from "react";
import {
  ClipboardDocumentCheckIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

interface Props {
  Single_data: Project_data;
}

function Dependencies({ Single_data }: Props) {
  const [havecopy, sethavecopy] = useState<boolean>(false);

  const Copy = (e: any) => {
    sethavecopy(true);
    navigator.clipboard.writeText(e);
    const myTimeout = setTimeout(myStopFunction, 5000);
    function myStopFunction() {
      sethavecopy(false);
      clearTimeout(myTimeout);
    }
  };

  const copydata = Single_data.package.map((data) => data);

  return (
    <div className="w-full h-auto">
      <span className=" my-[20px] font-bold text-slate-200 text-[23px] ">
        Dependencies
      </span>
      <p className="text-gray-300 text-[15px]">
        {Single_data.dependencies_blog}
      </p>
      <div className=" my-[15px] w-full h-auto relative group  py-[15px] px-[10px] border text-slate-200 rounded-[10px] bg-[#0c0728] border-[#401f788e] ">
        {Single_data?.package.map((data: string) => (
          <div
            key={data}
            className="w-full h-auto hover:bg-gray-300/20 rounded px-[15px]"
          >
            {data}
          </div>
        ))}

        {havecopy ? (
          <div
            id="button-primary"
            onClick={() => sethavecopy(false)}
            className="  right-[10px] top-[10px] absolute hidden  group-hover:flex flex-row items-center px-[15px] py-[5px]  cursor-pointer rounded-[5px] "
          >
            <CheckCircleIcon className="h-5 w-5 text-teal-400" />
            <span className=" ml-[7px] text-teal-400 text-[14px] ">
              Copied!
            </span>
          </div>
        ) : (
          <div
            id="button-primary"
            onClick={() => Copy(Single_data.package)}
            className="  right-[10px] top-[10px] absolute hidden  group-hover:flex flex-row items-center px-[15px] py-[5px]  cursor-pointer rounded-[5px] "
          >
            <ClipboardDocumentCheckIcon className="h-5 w-5 text-white" />
            <span className=" text-[14px] ml-[7px]">Copy</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dependencies;
