import React from "react";
import Image from "next/image";
import Technology_tag from "../body_section/technology_tag";

interface Props {
  data: Project_data;
}
function Server_card({ data }: Props) {
  return (
    <div className="w-full 840:w-auto h-auto mb-[20px] 840:mb-0 relative  overflow-hidden ">
      <div className="w-full 840:w-[800px] 1250:w-[390px] h-auto 1250:h-[210px] rounded-[14px] relative  overflow-hidden   backdrop-blur-sm  m-0 840:m-[10px]  border bg-[#0c0728] hover:bg-[#0e082e] border-[#401f788e] p-[13px] ">
        <div
          className={`w-[200px] h-[20px] ${
            data.indevelopment ? "" : " hidden"
          }  text-[14px]   absolute top-[30px] left-[-60px] bg-teal-500 rotate-[-45deg]
         text-white text-center flex flex-row items-center justify-center z-50`}
        >
          in development
        </div>

        <div>
          <div className="w-full h-auto flex flex-row items-center  justify-between  text-white ">
            <span className=" font-bold text-[18px]  text-slate-200  ">
              {data.title}
            </span>
            <div className="w-auto h-auto flex flex-row items-center justify-start my-[10px] ">
              <div className="mr-[10px] ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  fill="currentColor"
                  className="bi bi-github text-white hover:text-sky-500 cursor-pointer "
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </div>
              <a href={data.backend_dowload_link}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white hover:text-sky-500 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="w-full h-auto ">
            <span className="  text-[14px] text-gray-400">
              {data.project_blog.slice(0, 100)}...
            </span>
          </div>
          <Technology_tag data={data} />
        </div>
      </div>
    </div>
  );
}

export default Server_card;
//<Technology_tag data={data} />
