import React from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { set_Image_src } from "../../../redux_store/redux_action";
import { useDispatch } from "react-redux";
import Image from "next/image";
interface Props {
  src_data: {
    data: string;
    isMobile: boolean;
  };
}

function Scale_Image({ src_data }: Props) {
  const dispatch = useDispatch();
  return (
    <div className="w-full h-full bg-black/80   backdrop-blur-sm fixed z-[999] inset-0 flex flex-col items-center  justify-start  ">
      <div
        onClick={() => dispatch(set_Image_src(""))}
        className=" absolute  top-[20px] left-[20px]"
      >
        <div className="flex flex-row items-center justify-start text-slate-200 hover:text-sky-500 cursor-pointer ">
          <ArrowLeftIcon className="h-6 w-6  mr-[5px] " />
          <span className=" text-[17px]">Back</span>
        </div>
      </div>
      <div className="w-full h-full flex flex-row items-center justify-center">
        {src_data.isMobile ? (
          <div className="w-[480px] h-auto border-[2px] px-[8px] py-[12px] border-[#343434] relative group overflow-hidden  bg-black rounded-[35px]  ">
            <Image
              alt=""
              src={src_data.data}
              width={1920}
              height={1080}
              className="w-full h-auto  rounded-[25px]"
            />
          </div>
        ) : (
          <div className="w-[1300px] h-auto border-[2px] p-[7px] border-[#343434] relative group overflow-hidden  bg-black  rounded-[15px]   ">
            <Image
              alt=""
              src={src_data.data}
              width={1920}
              height={1080}
              className="w-full h-auto  rounded-[10px]"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Scale_Image;
