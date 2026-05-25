"use client";
import React from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Project } from "../../../utils/constants";
import { toSlug } from "../../../utils/slug";
import Technology_tag from "../../body_section/technology_tag";

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.projectid as string;

  const project = Project.find((p) => toSlug(p.title) === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white/70 gap-4">
        <span className="text-3xl">Project not found</span>
        <Link
          href="/#projects"
          className="text-purple-400 hover:text-purple-300 underline"
        >
          ← Back to projects
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#030014] text-white">
      <div className="max-w-[780px] mx-auto px-4 pt-[20px] pb-3">
        {/* Back button */}
        <button
          onClick={() => router.push("/#projects")}
          className="flex items-center gap-2 mb-4 text-white/50 hover:text-white transition-all shrink-0 group"
        >
          <span className="flex items-center justify-center w-8 h-8 rounded-lg border border-[#1f0f4a]/60 bg-[#0a0620]/80 group-hover:border-[#7c3aed]/40 group-hover:bg-[#0d082b] transition-all">
            <svg
              className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </span>
          <span className="text-sm font-medium">Back</span>
        </button>

        {/* Title + date row */}
        <div className="flex items-baseline gap-3 mb-2">
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white via-purple-200 to-purple-300 bg-clip-text text-transparent leading-tight">
            {project.title}
          </h1>
          {project.indevelopment && (
            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-medium leading-none">
              dev
            </span>
          )}
          {project.dateAgo && (
            <span className="text-[11px] text-white/25 tracking-wide uppercase ml-auto whitespace-nowrap">
              {project.dateAgo}
            </span>
          )}
        </div>

        {/* YouTube embed */}
        {project.video_key && (
          <div className="mb-4">
            <div className="relative w-full aspect-video rounded-[10px] overflow-hidden border border-[#1f0f4a]/60">
              <iframe
                src={`https://www.youtube.com/embed/${project.video_key}`}
                title="Demo video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        )}

        {/* Tags under video */}
        <div className="mb-4">
          <Technology_tag data={project} />
        </div>

        <h2 className="text-[14px] font-semibold text-white/80 mb-0.5">
          Description
        </h2>
        {project.description && (
          <p className="text-[14px] text-white/60 leading-snug mb-3">
            {project.description}
          </p>
        )}

        {project.about_this_app && (
          <div>
            <h2 className="text-[14px] font-semibold text-white/80 mb-0.5">
              About
            </h2>
            <p className="text-[13px] text-white/50 leading-snug">
              {project.about_this_app}
            </p>
          </div>
        )}
        {project.design_blog && (
          <div>
            <h2 className="text-[14px] font-semibold text-white/80 mb-0.5">
              Design
            </h2>
            <p className="text-[13px] text-white/50 leading-snug">
              {project.design_blog}
            </p>
          </div>
        )}
        {project.package && project.package.length > 0 && (
          <div>
            <h2 className="text-[14px] font-semibold text-white/80 mb-0.5">
              Dependencies
            </h2>
            {project.dependencies_blog && (
              <p className="text-[13px] text-white/50 leading-snug mb-1">
                {project.dependencies_blog}
              </p>
            )}
            <div className="flex flex-row flex-wrap gap-1">
              {project.package.map((pkg) => (
                <span
                  key={pkg}
                  className="px-2 py-0.5 text-[11px] rounded-full bg-[#1a1a3e] text-white/60 border border-[#1f0f4a]/40"
                >
                  {pkg.trim()}
                </span>
              ))}
            </div>
          </div>
        )}
        {project.conclusion_blog && (
          <div>
            <h2 className="text-[14px] font-semibold text-white/80 mb-0.5">
              Conclusion
            </h2>
            <p className="text-[13px] text-white/50 leading-snug">
              {project.conclusion_blog}
            </p>
          </div>
        )}

        {/* Links */}
        <div className="flex flex-row flex-wrap gap-1.5 pt-2 border-t border-[#1f0f4a]/40">
          {project.youtube_link && (
            <a
              href={project.youtube_link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-[12px] font-medium rounded-[6px] bg-red-600/80 hover:bg-red-600 text-white transition-colors"
            >
              YouTube
            </a>
          )}
          {project.githhub_link && (
            <a
              href={project.githhub_link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-[12px] font-medium rounded-[6px] bg-[#333] hover:bg-[#444] text-white transition-colors"
            >
              GitHub
            </a>
          )}
          {project.frontend_dowload_link && (
            <a
              href={project.frontend_dowload_link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-[12px] font-medium rounded-[6px] bg-purple-600/80 hover:bg-purple-600 text-white transition-colors"
            >
              Frontend
            </a>
          )}
          {project.backend_dowload_link && (
            <a
              href={project.backend_dowload_link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-[12px] font-medium rounded-[6px] bg-cyan-600/80 hover:bg-cyan-600 text-white transition-colors"
            >
              Backend
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
