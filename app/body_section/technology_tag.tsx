import React from "react";

interface Props {
  data: Project_data;
}

interface TagDef {
  key: string;
  label: string;
  bg: string;
  text: string;
}

const TAGS: TagDef[] = [
  { key: "html", label: "html", bg: "#E54F24", text: "text-white" },
  { key: "css", label: "css", bg: "#2062AF", text: "text-white" },
  { key: "Javascript", label: "Javascript", bg: "#F0DB4F", text: "text-black" },
  { key: "Tailwind", label: "Tailwind", bg: "#4ad7f0", text: "text-[#258899]" },
  { key: "React", label: "React", bg: "#83e0f8", text: "text-[#226879]" },
  { key: "React Native", label: "React Native", bg: "#83e0f8", text: "text-[#1b859f]" },
  { key: "Tauri", label: "Tauri", bg: "#FFC131", text: "text-[#44a1ab]" },
  { key: "Redux", label: "Redux", bg: "#764ABC", text: "text-white" },
  { key: "ReactQuery", label: "ReactQuery", bg: "#FF4154", text: "text-white" },
  { key: "Type Script", label: "Type Script", bg: "#2D79C7", text: "text-[#b0cae4]" },
  { key: "Next js 13", label: "Next js 13", bg: "#13224a", text: "text-[#fdfdfd]" },
  { key: "Node js", label: "Node js", bg: "#79B562", text: "text-[#fdfdfd]" },
  { key: "Golang", label: "Go", bg: "#00ACD7", text: "text-[#fdfdfd]" },
  { key: "Gin", label: "Gin", bg: "#0090D1", text: "text-[#f1db4b]" },
  { key: "Express js", label: "Express js", bg: "#333331", text: "text-gray-300" },
  { key: "Mongo db", label: "Mongo db", bg: "#10AA50", text: "text-[#fdfdfd]" },
  { key: "Firebase", label: "Firebase", bg: "#e9b422", text: "text-[#fdfdfd]" },
  { key: "Postger sql", label: "Postger sql", bg: "#336791", text: "text-[#fdfdfd]" },
  { key: "My sql", label: "My sql", bg: "#01526A", text: "text-[#fdfdfd]" },
  { key: "Framer Motion", label: "Framer Motion", bg: "#ff13ffd3", text: "text-[#fdfdfd]" },
  { key: "Graphql", label: "Graphql", bg: "#E632AD", text: "text-[#fdfdfd]" },
  { key: "Prisma", label: "Prisma", bg: "#123A50", text: "text-[#fdfdfd]" },
  { key: "Docker", label: "Docker", bg: "#2496ED", text: "text-[#fdfdfd]" },
  { key: "Stripe", label: "Stripe", bg: "#665BFF", text: "text-[#fdfdfd]" },
  { key: "Expo", label: "Expo", bg: "#422EDF", text: "text-[#fdfdfd]" },
];

function Technology_tag({ data }: Props) {
  const visibleTags = data.technology_feature
    ? TAGS.filter((t) => data.technology_feature.includes(t.key))
    : [];

  const showJWT = data.technology_feature?.includes("JWT");

  return (
    <div className="w-full h-auto flex flex-row items-center flex-wrap mt-[10px]">
      {visibleTags.map((tag) => (
        <div
          key={tag.key}
          className="tag"
          style={{ backgroundColor: tag.bg, color: "#fdfdfd" }}
        >
          {tag.label}
        </div>
      ))}
      {showJWT && (
        <div
          id="cursive"
          className="tag flex flex-row font-semibold"
          style={{ backgroundColor: "#000000" }}
        >
          <span className="text-[#CB37F2] mr-[3px]">Json</span>
          <span className="text-[#00B0E5] mr-[3px]">Web</span>
          <span className="text-[#EE0156]">Tocken</span>
        </div>
      )}
    </div>
  );
}

export default Technology_tag;
