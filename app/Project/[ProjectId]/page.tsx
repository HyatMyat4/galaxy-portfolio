import React from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Project_blog from "./Project_blog";
import Link from "next/link";
import Footer from "@/app/(Footer)/Footer";
import { Project } from "../../../utils/constants";

export function generateStaticParams() {
  return Project.filter((p) => p.video_key).map((p) => ({
    ProjectId: p.video_key,
  }));
}
type Props = {
  params: {
    ProjectId: string;
  };
 
};
function page({ params: { ProjectId } }: Props  ) {
  const Single_data: Project_data | any = Project?.filter(
    (data: Project_data) => data.video_key === ProjectId
  );
  return (
    <div className="w-full h-screen m-auto pt-[62px] flex flex-col items-center justify-start ">
      <div className=" w-full 1250:w-[1210px] min-h-[70px] flex flex-row items-center justify-start px-[10px] 600:px-[15px] 1250:px-0">
        <Link
          href={"/"}
          className="flex flex-row items-center static 1000:fixed  justify-start text-slate-200 hover:text-sky-500 cursor-pointer "
        >
          <ArrowLeftIcon className="h-4 w-4  mr-[5px] " />
          <span className=" text-[14px]">Back</span>
        </Link>
      </div>
      <Project_blog Single_data={Single_data} />
      <Footer />
    </div>
  );
}

export default page;

