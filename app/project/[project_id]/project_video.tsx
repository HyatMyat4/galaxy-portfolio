"use client";
import React from "react";
import Spinner from "react-spinkit";
interface Props {
  ifreamload: boolean;
  src: string;
}

function Project_video({ ifreamload, src }: Props) {
  return (
    <div className={`w-full h-auto  mt-[5px]   `}>
      <div
        className={`w-full h-[500px] flex flex-row items-center  justify-center ${
          ifreamload ? " hidden" : ""
        }`}
      >
        <Spinner
          name="line-spin-fade-loader"
          style={{
            height: "35px", // Adjust the height as desired
            width: "35px", // Adjust the width as desired
          }}
          fadeIn="none"
          color="#ffffff"
        />
      </div>
      <div
        className={`relative overflow-hidden w-full  ${
          ifreamload ? "" : "hidden"
        }   frc justify-center pt-[56.25%] m-auto rounded-0 600:rounded-[8px]`}
      >
        <iframe
          id="iframe"
          // @ts-ignore
          frameborder="0"
          // @ts-ignore
          allowFullScreen="allowFullScreen"
          mozallowfullscreen="mozallowfullscreen"
          msallowfullscreen="msallowfullscreen"
          oallowfullscreen="oallowfullscreen"
          webkitallowfullscreen="webkitallowfullscreen"
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${src}`}
          className=" absolute inset-0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
}

export default Project_video;
