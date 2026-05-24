"use client";
import { useEffect } from "react";

export default function SmoothScrollProvider() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "auto";

    let rafId: number | null = null;

    const handleClick = (e: MouseEvent) => {
      let el = e.target as HTMLElement | null;
      let anchor: HTMLAnchorElement | null = null;

      while (el && el !== document.body) {
        if (
          el.tagName === "A" &&
          el.getAttribute("href")?.startsWith("#")
        ) {
          anchor = el as HTMLAnchorElement;
          break;
        }
        el = el.parentElement;
      }

      if (!anchor) return;

      const href = anchor.getAttribute("href")!;
      const id = href.slice(1);
      const target = document.getElementById(id);
      if (!target) return;

      e.preventDefault();

      // Cancel any ongoing smooth scroll immediately
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }

      const end = target.getBoundingClientRect().top + window.scrollY - 80;
      const start = window.scrollY;
      const dist = end - start;

      // Already at target — just update the URL
      if (Math.abs(dist) < 2) {
        history.replaceState(null, "", href);
        return;
      }

      const duration = Math.min(Math.max(Math.abs(dist) * 0.3, 250), 800);
      const startTime = performance.now();

      function step(now: number) {
        const t = Math.min((now - startTime) / duration, 1);
        const eased = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        window.scrollTo(0, start + dist * eased);

        if (t < 1) {
          rafId = requestAnimationFrame(step);
        } else {
          rafId = null;
          history.replaceState(null, "", href);
        }
      }

      rafId = requestAnimationFrame(step);
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
      if (rafId !== null) cancelAnimationFrame(rafId);
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return null;
}
