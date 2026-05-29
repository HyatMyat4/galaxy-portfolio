"use client";
import React from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Project } from "../../../utils/constants";
import { toSlug } from "../../../utils/slug";
import Technology_tag from "../../body_section/technology_tag";

export default function ProjectDetailClient() {
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
          {/* Live site */}
          {project.live_url && (
            <a
              href={project.live_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 text-[12px] font-medium rounded-[6px] bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white transition-all"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white/80 animate-pulse" />
              Visit Site
            </a>
          )}
          {/* App Store links */}
          {project.playstore_url && (
            <a
              href={project.playstore_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 text-[12px] font-medium rounded-[6px] bg-[#01875f] hover:bg-[#00a572] text-white transition-colors"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.18 23.76a2.27 2.27 0 0 0 2.53-.22l.11-.08 12.65-7.3-3.55-3.56zm16.4-9.57L16.96 12l2.62-2.19 3.07 1.77a1.3 1.3 0 0 1 0 2.26zm-3.56-3.56L3.29.42A2.27 2.27 0 0 0 .76.2L13.49 12.93zM.54 1.4A2.26 2.26 0 0 0 .27 2.5v19a2.26 2.26 0 0 0 .27 1.1L13.06 12z"/>
              </svg>
              Google Play
            </a>
          )}
          {project.appstore_url && (
            <a
              href={project.appstore_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 text-[12px] font-medium rounded-[6px] bg-[#111] hover:bg-[#222] text-white transition-colors border border-white/10"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              App Store
            </a>
          )}
          {/* Dev links */}
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
