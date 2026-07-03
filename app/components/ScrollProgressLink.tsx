"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

export default function ScrollProgressLink() {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const progressBar = progressRef.current;
    if (!progressBar) return;

    const ctx = gsap.context(() => {
      gsap.set(progressBar, {
        scaleX: 0,
        transformOrigin: "0 50%",
      });

      gsap.to(progressBar, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ".project-slider",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="group mt-6 inline-flex flex-col gap-3 text-left sm:mt-8">
      <Link
        href="#work-section"
        className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.35em] text-white/80 transition hover:text-white"
      >
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[11px]">
          WORK
        </span>
        <span className="font-semibold">Scroll case studies</span>
      </Link>
      <div className="h-0.5 w-full overflow-hidden rounded-full bg-white/10">
        <div ref={progressRef} className="h-full w-full bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500" />
      </div>
    </div>
  );
}
