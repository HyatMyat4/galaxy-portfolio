"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { fadeIn, textVariant, staggerContainer } from "../../utils/motion";
import { SectionWrapper } from "../hoc/index";

interface Skill {
  name: string;
  icon: string;
}

interface Category {
  title: string;
  skills: Skill[];
}

const categories: Category[] = [
  {
    title: "Frontend",
    skills: [
      { name: "TypeScript", icon: "/skills/TypeScript.svg" },
      { name: "JavaScript", icon: "/skills/JavaScript.svg" },
      { name: "React", icon: "/skills/React.svg" },
      { name: "Next.js", icon: "/skills/NextJS.svg" },
      { name: "HTML5", icon: "/skills/HTML.svg" },
      { name: "CSS3", icon: "/skills/CSS.svg" },
      { name: "Tailwind CSS", icon: "/skills/Tailwind.svg" },
      { name: "Redux", icon: "/skills/Redux.svg" },
      { name: "Material UI", icon: "/skills/MaterialUI.svg" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "NestJS", icon: "/skills/NestJS.svg" },
      { name: "Node.js", icon: "/skills/NodeJS.svg" },
      { name: "Express.js", icon: "/skills/ExpressJS.svg" },
      { name: "PostgreSQL", icon: "/skills/PostgreSQL.svg" },
      { name: "MongoDB", icon: "/skills/MongoDB.svg" },
      { name: "GraphQL", icon: "/skills/GraphQL.svg" },
      { name: "Prisma", icon: "/skills/Prisma.svg" },
      { name: "Redis", icon: "/skills/Redis.svg" },
      { name: "Kafka", icon: "/skills/Kafka.svg" },
      { name: "RabbitMQ", icon: "/skills/RabbitMQ.svg" },
      { name: "Firebase", icon: "/skills/Firebase.svg" },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS", icon: "/skills/AWS.svg" },
      { name: "GCP", icon: "/skills/GCP.svg" },
      { name: "Docker", icon: "/skills/Docker.svg" },
      { name: "Kubernetes", icon: "/skills/Kubernetes.svg" },
      { name: "Linux", icon: "/skills/Linux.svg" },
      { name: "Nginx", icon: "/skills/Nginx.svg" },
      { name: "Terraform", icon: "/skills/Terraform.svg" },
      { name: "GitHub Actions", icon: "/skills/GithubActions.svg" },
      { name: "Grafana", icon: "/skills/Grafana.svg" },
      { name: "Prometheus", icon: "/skills/Prometheus.svg" },
    ],
  },
  {
    title: "Tools & CI/CD",
    skills: [
      { name: "Git", icon: "/skills/Git.svg" },
      { name: "GitHub", icon: "/skills/Github.svg" },
      { name: "GitLab", icon: "/skills/GitLab.svg" },
      { name: "Jest", icon: "/skills/Jest.svg" },
      { name: "Bash", icon: "/skills/Bash.svg" },
      { name: "npm", icon: "/skills/Npm.svg" },
      { name: "Figma", icon: "/skills/Figma.svg" },
    ],
  },
  {
    title: "Currently Learning",
    skills: [
      { name: "C#", icon: "/skills/CSharp.svg" },
      { name: ".NET", icon: "/skills/DotNet.svg" },
    ],
  },
];

const pillVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: "tween", duration: 0.35, ease: "easeOut" },
  },
};

function SkillPill({ name, icon }: Skill) {
  return (
    <motion.div variants={pillVariant}>
      <div className="flex items-center gap-[8px] px-[12px] py-[8px] rounded-[8px] bg-[#080520] border border-[#2a1f4e] hover:border-[#7042f8]/50 hover:bg-[#0e0830] transition-all duration-200 cursor-default select-none">
        <Image
          src={icon}
          alt={name}
          width={20}
          height={20}
          className="w-[20px] h-[20px] object-contain shrink-0"
        />
        <span className="text-slate-300 text-[13px] leading-none whitespace-nowrap font-medium">
          {name}
        </span>
      </div>
    </motion.div>
  );
}

function Section_4() {
  return (
    <section className="w-full 1300:w-[1250px] relative overflow-hidden flex flex-col items-center  justify-start  m-auto top-[15px] ">
      {/* Section header */}
      <div className="flex flex-col items-center justify-center mb-[44px]">
        <motion.div
          variants={textVariant(0)}
          id="Wecom-box"
          className="px-[15px] py-[4px] border border-[#7042f88b] opacity-[0.9] mb-0 1300:mb-[15px]"
        >
          <SparklesIcon className="h-4 370:h-5 w-4 370:w-5 text-[#b49bff] mr-[10px]" />
          <div
            id="Wecom-text"
            className="text-[12px] 310:text-[14px] 370:text-auto"
          >
            Senior Full-Stack Engineer at Innorder
          </div>
        </motion.div>
        <motion.h2
          variants={textVariant(1)}
          className="text-[38px] 500:text-[46px] font-semibold text-white text-center"
        >
          Tech Stack{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            &amp; Skills
          </span>
        </motion.h2>
        <motion.p
          variants={textVariant(2)}
          className="text-slate-400 text-[15px] mt-[10px] text-center"
        >
          Building scalable systems with 4+ years of professional experience.
        </motion.p>
      </div>

      {/* Skill categories */}
      <div className="w-full px-[15px] 800:w-[800px] 1300:w-full 1300:px-0 flex flex-col gap-[32px]">
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.title}
            variants={fadeIn("up", "tween", ci * 0.12, 0.6)}
            className="flex flex-col gap-[12px]"
          >
            {/* Category label + divider */}
            <div className="flex items-center gap-[12px]">
              <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-400 shrink-0">
                {cat.title}
              </span>
              <div className="flex-1 h-[1px] bg-[#2a1f4e]" />
            </div>

            {/* Skill pills */}
            <motion.div
              variants={staggerContainer(0.05, 0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              className="flex flex-wrap gap-[8px]"
            >
              {cat.skills.map((skill) => (
                <SkillPill key={skill.name} {...skill} />
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Subtle background */}
      <div className="w-full h-full absolute flex flex-col items-center justify-center pointer-events-none">
        <div className="w-[1000px] 1000:w-full h-full z-[-10] opacity-[0.08] absolute flex items-center justify-center">
          <video
            className="w-full h-auto"
            preload="none"
            playsInline
            loop
            muted
            // @ts-ignore
            autoPlay="autoplay"
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
}

export default SectionWrapper(Section_4, "technical_skill");
