"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CtaSection from "../components/CtaSection";

const values = [
  {
    title: "Design with intention",
    detail: "Every interface is built around a clear user need and a strong product outcome.",
  },
  {
    title: "Motion as a signal",
    detail: "Animated transitions and interactions guide attention and make experiences feel more polished.",
  },
  {
    title: "Launch ready",
    detail: "We deliver systems, prototypes and production-ready assets that speed the final build.",
  },
];

const team = [
  { name: "Kishan", role: "Founder & Creative Director" },
  { name: "Maya", role: "Lead UI/UX Designer" },
  { name: "Aria", role: "Motion Designer" },
];

export default function AboutPage() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".about-hero", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      });
      gsap.from(".value-card", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: ".value-grid",
          start: "top 90%",
        },
      });
      gsap.from(".team-card", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".team-grid",
          start: "top 90%",
        },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="px-6 pt-36 pb-28 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl space-y-16">
        <section className="about-hero max-w-3xl space-y-6">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">About</p>
          <h1 className="text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl">
            We are a tight creative studio that builds modern web products, immersive brand systems and powerful launch experiences.
          </h1>
          <p className="text-lg leading-8 text-white/70">
            Our work blends strategy, interaction design and motion to create digital experiences that feel confident, considered and easy to use.
          </p>
        </section>

        <section className="value-grid grid gap-6 lg:grid-cols-3">
          {values.map((value) => (
            <article key={value.title} className="value-card rounded-[2rem] border border-white/10 bg-[#0c1018]/90 p-8 shadow-[0_30px_90px_rgba(0,0,0,0.4)]">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Value</p>
              <h2 className="mt-4 text-2xl font-semibold text-white">{value.title}</h2>
              <p className="mt-4 text-white/70">{value.detail}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-8 lg:grid-cols-[0.75fr_1fr] lg:items-start">
          <div className="rounded-[2rem] border border-white/10 bg-[#09111b]/90 p-10 shadow-[0_40px_90px_rgba(0,0,0,0.45)]">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Process</p>
            <h2 className="mt-6 text-3xl font-semibold text-white">From kickoff to product launch, every step supports clarity and speed.</h2>
            <ul className="mt-8 space-y-5 text-white/70">
              <li>01 Research & strategy discovery.</li>
              <li>02 Experience architecture and UX design.</li>
              <li>03 Interface systems, motion and prototype delivery.</li>
              <li>04 Launch-ready handoff and growth support.</li>
            </ul>
          </div>
          <div className="team-grid grid gap-6">
            {team.map((member) => (
              <article key={member.name} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">{member.role}</p>
                <h3 className="mt-4 text-2xl font-semibold text-white">{member.name}</h3>
                <p className="mt-3 text-white/70">A creative leader focused on product performance, user delight and studio-level design craft.</p>
              </article>
            ))}
          </div>
        </section>
      </div>
      
      <div className="mt-20">
        <CtaSection />
      </div>
    </div>
  );
}
