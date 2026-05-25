"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "#about_me", label: "About Me" },
  { href: "#technical_skill", label: "Technical Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
];

function Navbar() {
  const pathname = usePathname();
  const isProjectPage = pathname.startsWith("/project/");
  const [activeId, setActiveId] = useState("");
  const [clickedId, setClickedId] = useState<string | null>(null);
  const clickLockRef = useRef(false);

  const handleClick = useCallback((id: string) => {
    clickLockRef.current = true;
    setClickedId(id);
    setActiveId(id);
    setTimeout(() => setClickedId(null), 200);
    // Keep the lock for 1.5s so the user clearly sees the active state
    // before the IntersectionObserver takes over again
    setTimeout(() => {
      clickLockRef.current = false;
    }, 1500);
  }, []);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) setActiveId(hash);

    const ids = NAV_ITEMS.map((item) => item.href.slice(1));
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (clickLockRef.current) return;
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-80px 0px -55% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) setActiveId(hash);
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  if (isProjectPage) return null;

  return (
    <div className="w-full h-[65px] fixed shadow-lg shadow-[#2A0E61]/50 bg-slate-3
    00/30 bg-[#03001417] backdrop-blur-md z-50">
      <div className="w-full 1300:w-[1232px] h-full flex flex-row items-center justify-center m-auto px-[10px] 400:px-[20px] 500:px-[40px] 1140:p-0">
        <div className="w-auto h-full hidden 860:flex flex-row items-center justify-between">
          <div className="w-full h-auto flex flex-row items-center justify-between bg-[#0300145e] border border-[#7042f861] px-[20px] py-[10px] rounded-full">
            {NAV_ITEMS.map((item) => {
              const id = item.href.slice(1);
              const isActive = activeId === id;
              const isClicked = clickedId === id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  draggable={false}
                  onClick={() => handleClick(id)}
                  className={`Nav_text px-[10px] transition-all duration-150 select-none ${
                    isActive ? "active" : ""
                  } ${
                    isClicked
                      ? "scale-110 text-purple-300 drop-shadow-[0_0_12px_#a78bfa]"
                      : ""
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
