"use client";
import React from "react";
import { setMobileMenu, MobileMenu_data } from "../../Redux-store/Redux-action";
import { useDispatch, useSelector } from "react-redux";

function Nav_right() {
  const Mobilemenu = useSelector(MobileMenu_data);
  const dispatch = useDispatch();

  return (
    <div className=" flex flex-row items-center ">
      {!Mobilemenu && (
        <div
          onClick={() => dispatch(setMobileMenu(true))}
          className=" mr-[8px] 310:mr-[20px] cursor-pointer flex 860:hidden animate-slowfade "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-[30px] w-[30px] text-gray-300 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      )}
    </div>
  );
}

export default Nav_right;
