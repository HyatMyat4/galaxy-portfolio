import React from "react";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Footer from "../(Footer)/Footer";
function page() {
  return (
    <div className=" pt-[65px] w-auto h-auto text-white m-auto flex flex-col items-center p-[10px] ">
      <div className=" w-full 1250:w-[1210px] absolute min-h-[70px] flex flex-row items-center justify-start px-[10px] 600:px-[15px] 1250:px-0">
        <Link
          href={"/"}
          className="flex flex-row items-center   justify-start text-slate-200 hover:text-sky-500 cursor-pointer "
        >
          <ArrowLeftIcon className="h-4 w-4  mr-[5px] " />
          <span className=" text-[14px]">Back</span>
        </Link>
      </div>
      <div className=" w-full 1250:w-[900px] h-auto m-auto mt-[25px] pb-[100px] ">
        <div className=" text-gray-400 text-[14px]">Senior Full-Stack Engineer</div>
        <div className="w-full h-auto font-bold text-[29px] my-[15px] text-slate-200  animate-slowfade ">
          Hey ☘️, I&apos;m Htet Myat
        </div>
        <div className=" text-gray-300    animate-slideright ">
          I&apos;m a full-stack software engineer with over 4 years of professional
          experience, deeply passionate about programming, open source, and building
          impactful products with code. I consider software development not just a
          profession, but a craft that I genuinely enjoy and continuously improve.
        </div>
        <div className=" text-gray-300  mt-[15px] animate-slideright ">
          After joining Innorder, I&apos;ve grown into a senior engineering role, where
          I contribute to designing, developing, and maintaining scalable systems
          across multiple company projects. I also serve as the author and maintainer
          of several core internal projects that help power the company&apos;s ecosystem.
        </div>
        <div>
          <div className="text-[20px]  my-[15px]  animate-slideright ">
            <span className="monospace">Self-taught from</span>
            <span className="text-rose-600"> YouTube</span> ,
            <span className="text-emerald-500"> Google</span> ,
            <span className=" text-[#F48024]"> Stack Overflow</span>
          </div>
        </div>
        <div className="w-full h-auto font-bold text-[29px] mb-[15px] mt-[35px] text-slate-200 animate-slowfade  ">
          Development Experience ⏳
        </div>
        <div className="mt-4  animate-slideright    leading-[30px] monospace text-[16px] 800:text-[20px]">
          I&apos;m a skilled full-stack engineer with experience in{" "}
          <span className=" text-blue-500 ">TypeScript</span> and{" "}
          <span className=" text-yellow-500"> JavaScript</span>, and deep expertise
          in frameworks like <span className=" text-cyan-500">React</span>,{" "}
          <span className="  text-teal-500"> Node.js</span>,{" "}
          <span className="text-[#E0234E]"> NestJS</span>, and
          <span className="text-[#433a74] "> Next.js</span>. I focus on clean
          architecture, performance, and scalability to deliver production-ready
          solutions that solve real-world problems.
        </div>
        <div className="font-bold text-[24px] mb-[15px] mt-[35px] text-slate-200  animate-slowfade  ">
          Frontend 🌏
        </div>
        <div className=" text-gray-300  my-[15px]  animate-slideright">
          React, Next.js, TypeScript, HTML, CSS, Tailwind CSS, Redux Toolkit,
          React Query, Framer Motion
        </div>
        <div className="font-bold text-[24px] mb-[15px] mt-[35px] text-slate-200 animate-slowfade  ">
          Backend 🐳
        </div>
        <div className=" text-gray-300  mt-[15px] mb-[10px]  animate-slideright">
          Node.js, NestJS, Express.js, TypeScript, PostgreSQL, Prisma ORM,
          REST APIs, GraphQL, Firebase, JWT authentication, WebSocket, Stripe
        </div>
        <div className="font-bold text-[24px] mb-[15px] mt-[35px] text-slate-200 animate-slowfade  ">
          Cloud & DevOps ☁️
        </div>
        <div className=" text-gray-300  mt-[15px] mb-[10px]  animate-slideright">
          AWS, GCP, Azure, Docker, Kubernetes, Nginx, Terraform, GitHub Actions,
          GitLab CI/CD, Linux, Grafana, Prometheus, Redis
        </div>
        <div className="font-bold text-[24px] mb-[15px] mt-[35px] text-slate-200 animate-slowfade ">
          Mobile Application 📱
        </div>
        <div className=" text-gray-300  mt-[15px] mb-[10px]  animate-slideright">
          React Native (CLI & Expo), TypeScript, Redux Toolkit, NativeWind
        </div>
        <div className="font-bold text-[24px] mb-[15px] mt-[35px] text-slate-200  animate-slowfade ">
          2026 Goals / Currently Learning 🎯
        </div>
        <div className=" text-gray-300  mt-[15px] mb-[10px]  animate-slideright">
          C#, Java, .NET, Spring Boot — expanding into enterprise backend ecosystems
        </div>
        <Link
          href={"/Project"}
          className=" flex flex-row items-center text-slate-200 font-normal cursor-pointer text-[14px] my-[30px] "
        >
          Go Back To
          <span className=" text-sky-500 ml-[5px] cursor-pointer  hover:underline  ">
            Projects
          </span>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default page;
