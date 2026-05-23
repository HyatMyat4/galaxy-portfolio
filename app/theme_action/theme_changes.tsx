"use client";
import React from "react";
//@ts-ignore
import { useTheme } from "next-themes";

import { useState, useEffect } from "react";

import { MoonIcon } from "@heroicons/react/24/outline";

import { CloudIcon, SparklesIcon, StarIcon } from "@heroicons/react/24/solid";
function Themechanges() {
  const [mounted, setmounted] = useState(false);

  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setmounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div
      className={` overflow-hidden   w-[60px] h-[27px] relative shadow-lg animate-slowfade   flex flex-row items-center
         ${
           currentTheme === "dark" ? "bg-[#202634]" : "bg-sky-400"
         } transition_  rounded-full `}
    >
      <div
        onClick={() =>
          currentTheme === "dark" ? setTheme("light") : setTheme("dark")
        }
        className={`w-[50px] cursor-pointer z-50 h-[50px]  ${
          currentTheme === "dark"
            ? " translate-x-5 bg-[#90939c3c] "
            : "translate-x-[-10px] bg-[#ffffff3c] "
        } transition_    rounded-full flex flex-row items-center justify-center `}
      >
        <div
          className={`w-[40px] h-[40px] ${
            currentTheme === "dark" ? "bg-[#90939c5e]" : "bg-[#ffffff6f]"
          } transition_  rounded-full flex flex-row items-center justify-center `}
        >
          <div
            className={`w-[30px] h-[30px] ${
              currentTheme === "dark" ? "bg-[#90939c83]" : "bg-[#ffffff94]"
            }  transition_ rounded-full flex flex-row items-center justify-center `}
          >
            <div
              className={` w-[20px] h-[20px] rounded-full shadow-xl 
                shadow-gray-500 transition_ ${
                  currentTheme === "dark"
                    ? "bg-[#D2D9E3] border-b-2 border-b-gray-500/50  animate-VerySlowspin"
                    : "bg-[#FED32E] border-b-2 border-b-yellow-800/50"
                }  `}
            >
              {currentTheme === "dark" ? (
                <div className=" relative animate-slowfade transition-all  ">
                  <div
                    className=" w-[7px] h-[7px] bg-[#A0ABBD]
                      absolute top-[10px]  left-[5px] rounded-full  shadow-lg"
                  ></div>
                  <div
                    className=" w-[5px] h-[5px] bg-[#A0ABBD]
                      absolute top-[3px]  left-[5px] rounded-full  shadow-lg"
                  ></div>
                  <div
                    className=" w-[4px] h-[4px] bg-[#A0ABBD]
                      absolute top-[6px]   right-[3px] rounded-full  shadow-lg"
                  ></div>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        className={` w-full  absolute h-full ${
          currentTheme === "dark"
            ? " translate-y-[0px] "
            : " translate-y-[-50px]  "
        } transition_ overflow-hidden `}
      >
        <SparklesIcon className="h-2 w-2 text-white absolute bottom-[10px] right-[30px] " />
        <StarIcon className=" w-1 h-1 text-white absolute animate-pulse left-[15px] top-[5px] rounded-full"></StarIcon>
        <StarIcon className="h-2 w-2 text-white  absolute  animate-pulse bottom-[2px] right-[36px] " />
        <SparklesIcon className="h-2 w-2 text-white absolute animate-pulse left-[5px] bottom-[8px]  " />
        <SparklesIcon className="h-2 w-2 text-white absolute animate-pulse bottom-[2px] right-[22px] " />
        <div className=" w-[3px] h-[3px] bg-white absolute animate-pulse  top-[2px] right-[25px] rounded-full"></div>
      </div>
      <div
        className={` w-full  absolute h-full ${
          currentTheme === "dark"
            ? "translate-y-[+50px] "
            : "translate-y-[0px]   "
        } transition_ overflow-hidden `}
      >
        <CloudIcon className="h-6 w-6 text-white z-1 absolute bottom-[-11px] right-0 " />
        <CloudIcon className="h-6 w-6 text-[#ffffff87] z-0  absolute bottom-[-5px] right-0 " />
        <CloudIcon className="h-6 w-6 text-white absolute  bottom-0 rotate-[-60deg] right-[-9px] " />
        <CloudIcon className="h-6 w-6 text-[#ffffff87] absolute  z-1 top-[-5px] rotate-[-100deg] right-[-10px] " />
        <CloudIcon
          className="h-6 w-6 text-white absolute  bottom-[-13px]
          rotate-[-60deg] right-[15px] "
        />
        <CloudIcon
          className="h-6 w-6 text-[#ffffff87] absolute  bottom-[-8px]
          rotate-[-60deg] right-[15px] "
        />
        <CloudIcon
          className="h-6 w-6 text-white absolute  bottom-[-13px]
          rotate-[-60deg] right-[25px] "
        />
      </div>
    </div>
  );
}

export default Themechanges;

/*
        <div
          onClick={() => setTheme("light")}
          className=" p-[13px] rounded cursor-pointer animate-slowfade mt-[2px]   hover:bg-[#F5F5F5] dark:hover:bg-[#1f1f1f] "
        >
          <MoonIcon className="text-[20px] hover:scale-110 transition-all  duration-100" />
        </div>
      ) : (
        <div
          onClick={() => setTheme("dark")}
          className=" p-[13px] rounded cursor-pointer mt-[2px] animate-slowfade   hover:bg-[#F5F5F5] dark:hover:bg-[#1f1f1f] "
        >
          <MoonIcon className=" text-[20px] hover:scale-110 transition-all  duration-100" />
        </div>
        */
