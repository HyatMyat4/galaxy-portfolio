"use client";
import React from "react";
import {
  Image_src_data,
  MobileMenu_data,
} from "../../redux_store/redux_action";
import { useSelector, useDispatch } from "react-redux";
import Scale_Image from "./scale_img/scale_image";
import { useEffect } from "react";
import { setStarMode, setStarColur } from "../../redux_store/redux_action";
import MobileMenu from "./mobile_menu/mobile_menu";
import Section_2 from "./section_2";

interface Props {
  data: string;
  isMobile: boolean;
}

function Section_1() {
  const dispatch = useDispatch();
  const Mobilemenu: boolean = useSelector(MobileMenu_data);
  const ImageSrc: Props = useSelector(Image_src_data);

  useEffect(() => {
    const havestarMode = localStorage.getItem("starMode");
    const colour = localStorage.getItem("colour");
    if (
      havestarMode === "" ||
      havestarMode === null ||
      havestarMode === undefined ||
      colour === "" ||
      colour === undefined ||
      colour === null
    ) {
      localStorage.setItem("starMode", "active");
      localStorage.setItem("colour", "#4d7c0f");
    } else {
      dispatch(setStarMode(havestarMode));
      dispatch(setStarColur(colour));
    }
  }, []);

  return (
    <section className=" w-full h-[840px] shadow-lg shadow-[#030014]/50  relative bg-[url('/main.svg')] bg-cover flex flex-col overflow-hidden  items-center justify-start  px-[15px] ">
      <div className=" w-[1250px]  h-full z-[-10] absolute   top-[-280px]  flex flex-row   items-start justify-center ">
        <video
          className="w-full h-auto  rotate-180  "
          preload="none"
          playsInline
          loop
          muted
          // @ts-ignore
          autoPlay="autoplay"
          src="/q-c3d7becf.webm"
        />
      </div>
      <Section_2 />
      {Mobilemenu && <MobileMenu />}
      {ImageSrc.data && <Scale_Image src_data={ImageSrc} />}
    </section>
  );
}

export default Section_1;
