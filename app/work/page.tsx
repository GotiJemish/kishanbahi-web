"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const projects = [
  {
    title: "A premium launch platform",
    subtitle: "Web design · UI/UX · motion",
    description:
      "A rich product experience for fast-growing founders, built with premium digital branding and high-performance page flow.",
  },
  {
    title: "Brand system for scale",
    subtitle: "Design systems · Product strategy",
    description:
      "A refined brand direction and interface library built to support a growing SaaS platform across web and mobile.",
  },
  {
    title: "Conversion-led ecommerce",
    subtitle: "Shopify · conversion optimization",
    description:
      "A luxury ecommerce journey designed to increase average order value and create a premium customer experience.",
  },
  {
    title: "Insight-driven redesign",
    subtitle: "UX research · product refinement",
    description:
      "A data-informed redesign built to reduce friction, improve clarity and accelerate onboarding for new users.",
  },
];

export default function WorkPage() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".work-heading", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      });

      gsap.from(".project-panel", {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: ".project-panel",
          start: "top 85%",
        },
      });

      gsap.to(".project-row", {
        xPercent: -75,
        ease: "none",
        scrollTrigger: {
          trigger: ".project-slider",
          pin: true,
          scrub: 0.8,
          start: "top top",
          end: "+=2600",
        },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="px-6 pt-36 pb-28 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.55fr_0.45fr] lg:items-start">
          <div className="space-y-8">
            <div className="work-heading max-w-xl space-y-4">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Work</p>
              <h1 className="text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl">
                Selected studio projects with premium interface motion and product polish.
              </h1>
              <p className="max-w-xl text-lg leading-8 text-white/70">
                We build visual systems, product flows and launch-ready websites that feel expressive, clear and memorable. Every case study begins with strategy and ends with measurable results.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="glass-card border-white/10 bg-white/5 p-8">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Featured outcome</p>
                <p className="mt-4 text-xl font-semibold text-white">Fast onboarding, stronger retention and higher checkout conversion.</p>
              </div>
              <div className="glass-card border-white/10 bg-white/5 p-8">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Studio rhythm</p>
                <p className="mt-4 text-xl font-semibold text-white">Design systems, brand motion and product sprint work delivered in parallel.</p>
              </div>
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-[#080a10]/80 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.55)]">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-cyan-200/90">
                With product focus
              </div>
              <h2 className="text-3xl font-semibold text-white">A motion-led case study experience with immersive scroll.</h2>
              <p className="text-white/70">
                Pinning visual storytelling and horizontal momentum brings the work into focus while the user scrolls through the narrative.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="project-slider mt-20 overflow-hidden">
        <div className="project-row flex gap-10">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="project-panel min-w-[85vw] rounded-[2rem] border border-white/10 bg-[#11151f]/95 p-10 shadow-[0_40px_90px_rgba(0,0,0,0.4)]"
            >
              <span className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Case study {index + 1}</span>
              <h3 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl">
                {project.title}
              </h3>
              <p className="mt-4 text-sm uppercase tracking-[0.35em] text-white/45">{project.subtitle}</p>
              <p className="mt-8 max-w-xl text-lg leading-8 text-white/70">{project.description}</p>
              <div className="mt-12 grid gap-6 sm:grid-cols-2">
                <div className="glass-card border-white/10 bg-white/5 p-6">
                  <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Role</p>
                  <p className="mt-3 text-sm leading-7 text-white/70">Design systems, visual direction, motion and launch pages.</p>
                </div>
                <div className="glass-card border-white/10 bg-white/5 p-6">
                  <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Impact</p>
                  <p className="mt-3 text-sm leading-7 text-white/70">Better clarity, faster decisions and elevated digital storytelling.</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
