"use client";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../../redux_store/redux_action";
function Input() {
  const dispatch = useDispatch();
  const [PasswordFocus, setPasswordFocus] = useState<boolean>(false);

  return (
    <div
      className={` w-[100%] 420:w-[250px] 600:w-[360px] h-[40px] 600:h-[48px] relative   flex flex-row items-center justify-between ${
        PasswordFocus
          ? " border border-blue-500"
          : "outline-none border border-[#7042f850] "
      } rounded-[7px]  text-gray-300 px-[15px] `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        className="bi bi-search text-gray-300 "
        viewBox="0 0 16 16"
      >
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
      </svg>
      <input
        type={"text"}
        onFocus={() => setPasswordFocus(true)}
        onBlur={() => setPasswordFocus(false)}
        onChange={(e) => dispatch(setSearchQuery(e.target.value))}
        placeholder={"Search"}
        className={`w-full h-full frcs bg-transparent rounded  outline-none py-[6px] pl-[10px] text-gray-300  `}
      />
    </div>
  );
}

export default Input;
