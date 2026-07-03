"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const labels = ["UI/UX", "Web Design", "Motion", "Brand", "Products", "Launch"];

export default function HeroOrbit() {
  const orbitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      gsap.to(".orbit-ring", {
        rotate: 360,
        duration: 26,
        ease: "none",
        repeat: -1,
      });
    }, orbitRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={orbitRef} className="relative mx-auto mt-16 h-[360px] w-[360px] overflow-visible sm:mt-20">
      <div className="orbit-ring absolute inset-0 rounded-full border border-white/10" />
      {labels.map((label, index) => (
        <div
          key={label}
          className="absolute inset-0 flex items-center justify-center"
          style={{ transform: `rotate(${index * 60}deg) translate(0, -162px)` }}
        >
          <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] uppercase tracking-[0.35em] text-cyan-200/90 shadow-[0_18px_40px_rgba(0,0,0,0.18)]">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}
