"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const services = [
  {
    name: "UI / UX Design",
    description:
      "Human-centered interfaces and product flows designed to reduce friction, improve clarity and delight every user interaction.",
  },
  {
    name: "Web Experiences",
    description:
      "Fast, polished websites built to feel premium on desktop and mobile, with motion-led detail and polished interactions.",
  },
  {
    name: "Product Strategy",
    description:
      "Product-first planning, experience mapping and launch-ready design systems that help teams move from idea to execution.",
  },
  {
    name: "Brand Products",
    description:
      "Brand expression, messaging and digital product design aligned around a thoughtful, consistent visual language.",
  },
];

export default function ServicesPage() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".services-hero h1", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      });

      gsap.from(".service-card", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 85%",
        },
      });

      gsap.from(".support-card", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".support-grid",
          start: "top 90%",
        },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="px-6 pt-36 pb-28 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <section className="services-hero mb-20 max-w-3xl space-y-6">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Services</p>
          <h1 className="text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl">
            Design, motion and product strategy services built for ambitious digital teams.
          </h1>
          <p className="text-lg leading-8 text-white/70">
            We help studios, startups and established brands launch premium web experiences, trusted digital products and motion-led brand systems that keep users engaged.
          </p>
        </section>

        <section className="services-grid grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.name}
              className="service-card rounded-[2rem] border border-white/10 bg-[#0c1018]/90 p-8 shadow-[0_30px_90px_rgba(0,0,0,0.4)]"
            >
              <h2 className="text-2xl font-semibold text-white">{service.name}</h2>
              <p className="mt-4 text-sm leading-7 text-white/70">{service.description}</p>
            </article>
          ))}
        </section>

        <section className="support-grid mt-20 grid gap-6 lg:grid-cols-2">
          <article className="glass-card border-white/10 bg-white/5 p-10">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Flexible delivery</p>
            <h2 className="mt-6 text-3xl font-semibold text-white">Design support that scales with your team.</h2>
            <p className="mt-4 text-white/70">
              From rapid sprints to ongoing design retainers, we offer flexible packages that keep projects moving without adding overhead.
            </p>
          </article>
          <article className="glass-card border-white/10 bg-white/5 p-10">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Product partnerships</p>
            <h2 className="mt-6 text-3xl font-semibold text-white">A true product partnership, not just agency work.</h2>
            <p className="mt-4 text-white/70">
              We work as an extension of your team, aligning design, product and marketing to launch experiences that move faster and feel more cohesive.
            </p>
          </article>
        </section>
      </div>
    </div>
  );
}
