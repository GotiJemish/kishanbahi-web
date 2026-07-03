"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";
import Link from "next/link";
import ResponsiveTextReveal from "./components/ResponsiveTextReveal";

const CASE_STUDIES = [
  {
    title: "Luxury product launch experience",
    summary: "A high-end digital hub for a premium lifestyle brand.",
  },
  {
    title: "Mobile-first booking platform",
    summary: "An immersive production design experience with smoother conversion flow.",
  },
  {
    title: "Modern fintech identity",
    summary: "Bold visual language, polished motion and service-led interface structure.",
  },
  {
    title: "Global brand refresh",
    summary: "A cohesive system built for campaign launches and digital storytelling.",
  },
];

const LOGOS = ["HSBC", "Octopus", "BIMA", "Net", "Capco", "Threecolts"];

const STUDIO_VALUES = [
  {
    title: "Design with clarity",
    description: "We define purposeful interactions that remove friction and make products feel easy to use.",
  },
  {
    title: "Motion that matters",
    description: "Every transition and reveal supports user focus, hierarchy, and brand expression.",
  },
  {
    title: "Launch-ready delivery",
    description: "From systems to UI assets, we hand over polished work that’s ready for production.",
  },
];

const AGENCY_BENEFITS = [
  {
    title: "Direct access to experts",
    detail: "Work with senior creatives, not account handlers.",
  },
  {
    title: "Faster delivery",
    detail: "No slow approvals. Design work moves at product speed.",
  },
  {
    title: "Premium brand focus",
    detail: "Every touchpoint is crafted for confidence and credibility.",
  },
];

export default function Home() {
  const rootRef = useRef<HTMLDivElement>(null);
  const galleryWrapRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    console.clear();
    gsap.registerPlugin(ScrollTrigger, Flip);

    let mm = gsap.matchMedia();

    mm.add("(min-width: 800px)", () => {
      // Desktop Animations
      
      gsap.from(".hero-title .mask-inner", {
        yPercent: 100,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.05,
      });

      gsap.from(".hero-subtitle, .hero-cta", {
        y: 20,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.1,
        delay: 0.5,
      });

      // GSAP Flip Gallery
      const galleryElement = galleryRef.current;
      const galleryWrap = galleryWrapRef.current;
      
      if (galleryElement && galleryWrap) {
        const galleryItems = galleryElement.querySelectorAll(".gallery__item");
        
        galleryElement.classList.remove("gallery--final");
        galleryElement.classList.add("gallery--final");
        const flipState = Flip.getState(galleryItems);
        galleryElement.classList.remove("gallery--final");

        const flip = Flip.to(flipState, {
          simple: true,
          ease: "expoScale(1, 5)",
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: galleryElement,
            start: "center center",
            end: "+=150%",
            scrub: true,
            pin: galleryWrap
          }
        });
        tl.add(flip);
      }

      // Horizontal Scroll with Parallax Depth
      const projects = gsap.utils.toArray(".project-card");
      gsap.to(projects, {
        xPercent: -100 * (projects.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".project-slider",
          pin: true,
          scrub: 1,
          snap: 1 / (projects.length - 1),
          start: "top top",
          end: () => "+=" + (document.querySelector(".project-slider") as HTMLElement)?.offsetWidth * 2,
        },
      });

      gsap.from(".logo-item", {
        y: 30,
        opacity: 0,
        duration: 0.9,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".logo-strip",
          start: "top 90%",
        },
      });

      gsap.from(".value-card", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".value-grid",
          start: "top 85%",
        },
      });

      gsap.from(".agency-card", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".agency-grid",
          start: "top 88%",
        },
      });
    });

    mm.add("(max-width: 799px)", () => {
      // Mobile Animations
      gsap.from(".hero-copy > *", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.05,
        ease: "power3.out",
      });
      
      gsap.from(".project-card", {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".project-slider",
          start: "top 80%",
        }
      });
      
      gsap.from(".value-card, .agency-card", {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".value-card",
          start: "top 85%",
        }
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <div ref={rootRef} className="overflow-hidden">
      <section className="relative overflow-hidden pt-32 pb-24 min-h-[90vh] flex flex-col items-center justify-center">
        <div className="concentric-bg"></div>
        <div className="mx-auto max-w-4xl text-center relative z-10 px-6 sm:px-8 lg:px-12">
          <h1 className="hero-title text-5xl font-semibold tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl leading-[1.15]">
            <ResponsiveTextReveal text="Design services that feel in-house, not outsourced." />
          </h1>
          <div className="hero-subtitle mx-auto mt-8 max-w-xl text-lg leading-8 text-white/70">
            <ResponsiveTextReveal text="Senior design expertise, embedded in your team." />
          </div>
          <div className="mt-10 magnetic-wrap hero-cta">
            <Link
              href="/work"
              className="inline-flex rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 px-8 py-4 text-sm font-semibold text-white shadow-lg transition hover:opacity-90 hover:scale-105"
            >
              Start a project <span className="ml-2 opacity-80">→</span>
            </Link>
          </div>
          <p className="mt-6 text-sm text-white/50 hero-cta">Replies in 24 hours. No obligation.</p>
        </div>
        
        <div className="absolute bottom-8 left-0 w-full overflow-hidden hero-cta hidden md:block">
          <div className="marquee-track flex min-w-max items-center gap-16 opacity-50 transition-opacity hover:opacity-100">
            {LOGOS.concat(LOGOS).map((logo, index) => (
              <div key={`${logo}-${index}`} className="logo-item min-w-[140px] text-center text-sm uppercase tracking-[0.35em] text-white/70">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GSAP Flip Gallery */}
      <div className="gallery-wrap" ref={galleryWrapRef}>
        <div className="gallery gallery--bento gallery--switch" id="gallery-8" ref={galleryRef}>
          {[
            "https://assets.codepen.io/16327/portrait-pattern-1.jpg",
            "https://assets.codepen.io/16327/portrait-image-12.jpg",
            "https://assets.codepen.io/16327/portrait-image-8.jpg",
            "https://assets.codepen.io/16327/portrait-pattern-2.jpg",
            "https://assets.codepen.io/16327/portrait-image-4.jpg",
            "https://assets.codepen.io/16327/portrait-image-3.jpg",
            "https://assets.codepen.io/16327/portrait-pattern-3.jpg",
            "https://assets.codepen.io/16327/portrait-image-1.jpg"
          ].map((src, i) => (
            <div key={i} className="gallery__item">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt="" />
            </div>
          ))}
        </div>
      </div>

      <section id="work-section" className="project-slider mt-20 overflow-hidden px-6 pb-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex justify-between pb-8">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Work</p>
              <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                Case studies built with storytelling, motion and premium detail.
              </h2>
            </div>
            <div className="hidden text-sm uppercase tracking-[0.35em] text-white/40 md:block">Scroll to view more</div>
          </div>
        </div>

        <div className="project-row flex flex-col sm:flex-row gap-8 px-6 sm:px-0">
          {CASE_STUDIES.map((item) => (
            <article key={item.title} className="project-card min-w-[78vw] rounded-[2.5rem] border border-white/10 glass-panel p-10 sm:min-w-[45vw] hover-glow">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Case study</p>
              <h3 className="mt-6 text-3xl font-semibold leading-snug text-white sm:text-4xl">{item.title}</h3>
              <p className="mt-6 text-base leading-8 text-white/70">{item.summary}</p>
              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
                  <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/80">Focus</p>
                  <p className="mt-4 text-sm text-white/70">Concept, motion and conversion-led UI.</p>
                </div>
                <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
                  <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/80">Outcome</p>
                  <p className="mt-4 text-sm text-white/70">Enhanced clarity, premium feel and stronger funnel flow.</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl space-y-12">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Trusted by</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              Strong brands choose work that feels considered and purposeful.
            </h2>
          </div>
          <div className="logo-strip overflow-hidden rounded-[2rem] border border-white/10 glass-panel px-8 py-8">
            <div className="marquee-track flex min-w-max items-center gap-16">
              {LOGOS.concat(LOGOS).map((logo, index) => (
                <div key={`${logo}-${index}`} className="logo-item min-w-[140px] text-center text-sm uppercase tracking-[0.35em] text-white/70">
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#06080f] px-6 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl space-y-12">
          <div className="grid gap-10 lg:grid-cols-[0.45fr_0.55fr] lg:items-end">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Why we exist</p>
              <h2 className="text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl">
                We make digital products and websites feel thoughtful, clear and beautifully framed.
              </h2>
              <p className="max-w-xl text-lg leading-8 text-white/70">
                Our work sits at the intersection of product strategy, UI design and motion-led systems so the experience always looks and feels premium.
              </p>
            </div>
            <div className="value-grid grid gap-6 sm:grid-cols-2">
              {STUDIO_VALUES.map((value) => (
                <div key={value.title} className="value-card rounded-[2rem] border border-white/10 glass-panel p-8">
                  <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">{value.title}</p>
                  <p className="mt-5 text-white/70">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="agency-grid grid gap-6 lg:grid-cols-3">
            {AGENCY_BENEFITS.map((item) => (
              <div key={item.title} className="agency-card rounded-[2rem] border border-white/10 glass-panel p-8 hover-glow">
                <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-white/70">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Get started</p>
          <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            Ready to launch something premium with a creative studio you can trust?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Bring your brand, product and digital presence together with a polished design direction and motion-led interface system.
          </p>
          <div className="mt-10 magnetic-wrap">
            <div className="inline-flex rounded-full border border-white/10 glass-panel px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:border-cyan-300/40 hover:bg-white/10">
              Start a project
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
