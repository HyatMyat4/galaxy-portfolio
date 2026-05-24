"use client";
import React from "react";
import { setopctionchoose } from "../../redux_store/redux_action";
import { useDispatch, useSelector } from "react-redux";
import { opctionchoose_data } from "../../redux_store/redux_action";
import Scale_Image from "../body_section/scale_img/scale_image";
import { Image_src_data } from "../../redux_store/redux_action";
interface Props {
  data: string;
  isMobile: boolean;
}
function ActiveNav() {
  const dispatch = useDispatch();
  const NavTag = useSelector(opctionchoose_data);
  const ImageSrc = useSelector(Image_src_data);
  return (
    <div className=" w-full h-[100px] 340:h-[70px] flex flex-row flex-wrap items-center text-gray-200  select-none justify-around">
      {ImageSrc.data ? <Scale_Image src_data={ImageSrc} /> : <div></div>}
      <div
        onClick={() => dispatch(setopctionchoose("All"))}
        className={` ${
          NavTag === "All" ? "  text-sky-500  scale-110  " : ""
        } hover:text-sky-500 cursor-pointer mx-[5px] 340:mx-0 text-[13px] 600:text-[15px] flex flex-col items-center `}
      >
        All
      </div>
      <div
        onClick={() => dispatch(setopctionchoose("Next js 13"))}
        className={` ${
          NavTag === "Next js 13" ? "  text-sky-500   scale-110" : ""
        } hover:text-sky-500 cursor-pointer text-[13px] mx-[5px] 340:mx-0  ml-[10px] 600:text-[15px]`}
      >
        Next js 13
      </div>
      <div
        onClick={() => dispatch(setopctionchoose("React Native"))}
        className={` ${
          NavTag === "React Native" ? "  text-sky-500  scale-110 " : ""
        } hover:text-sky-500 cursor-pointer mx-[5px] 340:mx-0  text-[13px] ml-[10px] 600:text-[15px]`}
      >
        React Native
      </div>
      <div
        onClick={() => dispatch(setopctionchoose("Tauri"))}
        className={` ${
          NavTag === "Tauri" ? "  text-sky-500  scale-110 " : ""
        } hover:text-sky-500 cursor-pointer mx-[5px] 340:mx-0  text-[13px] ml-[10px] 600:text-[15px]`}
      >
        Tauri
      </div>
      <div
        onClick={() => dispatch(setopctionchoose("server"))}
        className={` ${
          NavTag === "React" ? "  text-sky-500  scale-110 " : ""
        } hover:text-sky-500 cursor-pointer mx-[5px] 340:mx-0  text-[13px] ml-[10px] 600:text-[15px]`}
      >
        All server
      </div>
    </div>
  );
}

export default ActiveNav;
