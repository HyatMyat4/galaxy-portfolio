"use client";
import React from "react";
import Scale_Image from "./scale_img/scale_image";
import { useEffect } from "react";
import MobileMenu from "./mobile_menu/mobile_menu";
import Section_2 from "./section_2";
import { useAppContext } from "../context/AppContext";

interface Props {
  data: string;
  isMobile: boolean;
}

function Section_1() {
  const { state, dispatch } = useAppContext();
  const Mobilemenu: boolean = state.MobileMenu;
  const ImageSrc: Props = state.Image_src;

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
      dispatch({ type: "SET_STAR_MODE", payload: havestarMode });
      dispatch({ type: "SET_STAR_COLUR", payload: colour });
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
