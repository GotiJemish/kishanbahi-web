"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";
import Link from "next/link";
import ResponsiveTextReveal from "./components/ResponsiveTextReveal";
import CtaSection from "./components/CtaSection";

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
    title: "USER-CENTERED UI/UX DESIGN",
    description: "We design intuitive interfaces that simplify user journeys, improve engagement, and create seamless digital experiences across every device.",
  },
  {
    title: "MODERN WEB DEVELOPMENT",
    description: "From responsive websites to custom web applications, we build secure, scalable, and high-performance solutions using the latest technologies.",
  },
  {
    title: "SEO & PERFORMANCE FIRST",
    description: "Every project is optimized for speed, search engines, accessibility, and conversions to help your business grow online.",
  },
];

const AGENCY_BENEFITS = [
  {
    title: "Strategic Design Approach",
    detail: "Every project begins with research, planning, and a user-first strategy that ensures meaningful digital experiences.",
  },
  {
    title: "Fast & Scalable Development",
    detail: "We develop responsive, secure, and future-ready websites that perform flawlessly across all devices.",
  },
  {
    title: "Long-Term Digital Partnership",
    detail: "From launch to ongoing support, Framevora helps your business evolve with continuous improvements and innovative digital solutions.",
  },
];

const GALLERY_SVGS = [
  <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-1/2 h-1/2 opacity-30 text-cyan-400" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>,
  
  <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-1/2 h-1/2 opacity-30 text-purple-400" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22V8"/><path d="m5 12 7-7 7 7"/></svg>,
  <svg key="3" viewBox="0 0 24 24" fill="none" className="w-1/2 h-1/2 opacity-30 text-white" xmlns="http://www.w3.org/2000/svg"><path d="M89.4512 0.399067C119.378 -2.67959 147.771 12.331 165.483 35.8815C160.77 39.2265 155.994 42.477 151.196 45.7174C138.951 28.14 118.763 16.6618 95.9326 16.6618C58.5835 16.6618 28.3057 47.3788 28.3057 85.2692C28.3057 98.6743 32.0966 111.181 38.6484 121.748C26.0695 130.603 11.8694 139.946 0 148.458C15.0013 128.959 11.5675 117.069 9.33105 95.8375C6.70251 72.9738 13.4874 50.0238 28.1377 32.2702C44.4259 12.2489 64.2447 2.99065 89.4512 0.399067Z" fill="cuerrntColor" /><path d="M106.496 176.602C76.5685 179.681 48.1761 164.67 30.4634 141.12C35.1766 137.775 39.9526 134.524 44.7505 131.284C56.996 148.861 77.1836 160.34 100.014 160.34C137.363 160.34 167.641 129.623 167.641 91.7323C167.641 78.3272 163.85 65.8205 157.298 55.2538C169.877 46.3989 184.077 37.0558 195.947 28.5438C180.945 48.0428 184.379 59.9326 186.616 81.1639C189.244 104.028 182.459 126.978 167.809 144.731C151.521 164.753 131.702 174.011 106.496 176.602Z" fill="cuerrntColor" /></svg>,
  // <svg key="3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-1/2 h-1/2 opacity-30 text-blue-400" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="7.5 4.21 12 6.81 16.5 4.21"/><polyline points="7.5 19.79 7.5 14.6 3 12"/><polyline points="21 12 16.5 14.6 16.5 19.79"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>,
  <svg key="4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-1/2 h-1/2 opacity-30 text-cyan-300" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>,
  <svg key="5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-1/2 h-1/2 opacity-30 text-purple-300" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>,
  <svg key="6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-1/2 h-1/2 opacity-30 text-blue-300" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 22 22 22"/></svg>,
  <svg key="7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-1/2 h-1/2 opacity-30 text-cyan-500" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="22" x2="18" y1="12" y2="12"/><line x1="6" x2="2" y1="12" y2="12"/><line x1="12" x2="12" y1="6" y2="2"/><line x1="12" x2="12" y1="22" y2="18"/></svg>,
  <svg key="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-1/2 h-1/2 opacity-30 text-purple-500" strokeLinecap="round" strokeLinejoin="round"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/><path d="M2 7h20"/><path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7"/></svg>
];

import TestimonialsSection from "./components/TestimonialsSection";

const TESTIMONIALS_DATA = {
  title: "Trusted by Brands. Driven by Results.",
  subtitle: "Framevora partners with startups, businesses, and enterprises to create exceptional UI/UX designs and high-performance websites. Our clients value our creativity, technical expertise, and commitment to delivering digital solutions that make a real impact.",
  rows: [
    {
      id: "row1",
      speed: "35s",
      direction: "left",
      testimonials: [
        {
          id: "t1",
          quote: "They completely transformed our brand identity. The new digital experience feels incredibly premium and aligns perfectly with our vision.",
          authorName: "Sarah Jenkins",
          authorTitle: "CMO at Lumina",
          avatarUrl: ""
        },
        {
          id: "t2",
          quote: "The motion design and interaction details they added to our product made a huge difference. User engagement is up 40%.",
          authorName: "David Chen",
          authorTitle: "Product Lead at FinFlow",
          avatarUrl: ""
        },
        {
          id: "t3",
          quote: "An absolute pleasure to work with. They don't just execute, they partner with you to find the absolute best solution.",
          authorName: "Elena Rodriguez",
          authorTitle: "Founder at Studio 9",
          avatarUrl: ""
        },
        {
          id: "t4",
          quote: "Their attention to detail is unmatched. Every micro-interaction is perfectly tuned and the final product is stunning.",
          authorName: "James Wilson",
          authorTitle: "CTO at Nexus",
          avatarUrl: ""
        }
      ]
    },
    {
      id: "row2",
      speed: "45s",
      direction: "right",
      testimonials: [
        {
          id: "t5",
          quote: "They delivered a masterclass in UI/UX design. The interface is intuitive, beautiful, and performs flawlessly.",
          authorName: "Anna Kowalski",
          authorTitle: "VP Design at Echo",
          avatarUrl: ""
        },
        {
          id: "t6",
          quote: "We needed a complete overhaul of our digital presence in 6 weeks. They delivered beyond our expectations.",
          authorName: "Marcus Thorne",
          authorTitle: "Director at Vertex",
          avatarUrl: ""
        },
        {
          id: "t7",
          quote: "The team’s strategic approach to design helped us uncover user friction points we didn't even know existed.",
          authorName: "Priya Patel",
          authorTitle: "Head of Growth at Bolt",
          avatarUrl: ""
        },
        {
          id: "t8",
          quote: "Outstanding quality and incredible speed. It truly felt like having an elite in-house design team.",
          authorName: "Tom Harrison",
          authorTitle: "CEO at Vanguard",
          avatarUrl: ""
        }
      ]
    }
  ]
};

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
      const projectRow = document.querySelector(".project-row") as HTMLElement;
      if (projectRow) {
        gsap.to(projectRow, {
          x: () => -(projectRow.scrollWidth - window.innerWidth),
          ease: "none",
          scrollTrigger: {
            trigger: ".project-slider",
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
            start: "top top",
            end: () => "+=" + (projectRow.scrollWidth - window.innerWidth),
          },
        });
      }

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
      <section ref={galleryWrapRef} className="relative overflow-hidden pt-32 pb-24 min-h-screen flex flex-col items-center justify-center">

        {/* GSAP Flip Gallery Background */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none flex items-center justify-center">
          <div className="gallery gallery--bento gallery--switch !h-full" id="gallery-8" ref={galleryRef}>
            {GALLERY_SVGS.map((svg, i) => (
              <div key={i} className="gallery__item bg-[#0a0a0a]/80 border border-white/5 backdrop-blur-sm flex items-center justify-center shadow-xl">
                {svg}
              </div>
            ))}
          </div>
        </div>

        <div className="concentric-bg z-0 opacity-50"></div>
        <div className="mx-auto max-w-4xl text-center relative z-10 px-6 sm:px-8 lg:px-12">
          <h1 className="hero-title text-5xl font-semibold tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl leading-[1.15]">
            <ResponsiveTextReveal text="We Design Experiences. We Develop Success." />
          </h1>
          <div className="hero-subtitle mx-auto mt-8 max-w-xl text-lg leading-8 text-white/70">
            <ResponsiveTextReveal text="Framevora is a leading UI/UX design and web development agency creating intuitive digital experiences, high-performance websites, and scalable solutions that help businesses grow faster." />
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
          <div className="marquee-track flex min-w-max items-center gap-16 opacity-50 transition-opacity hover:opacity-100 z-10 relative">
            {LOGOS.concat(LOGOS).map((logo, index) => (
              <div key={`${logo}-${index}`} className="logo-item min-w-[140px] text-center text-sm uppercase tracking-[0.35em] text-white/70">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>



      <section id="work-section" className="project-slider bg-[#06080f] overflow-hidden relative min-h-screen">
        <div className="project-row flex flex-col md:flex-row h-auto md:h-screen w-full md:w-max items-center gap-16 px-6 md:px-[10vw] py-20 md:py-0">

          {/* Left Mobile Card - Solent Rib Charter */}
          <article className="project-card shrink-0 flex h-[60vh] md:h-[75vh] w-full md:w-[400px] flex-col overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#111] hover-glow relative group">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544421115-4fa8172c72b2?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 transition-transform duration-700 group-hover:scale-105"></div>
            <div className="relative z-10 flex-1 bg-gradient-to-b from-yellow-600/40 via-black/60 to-black p-10 flex flex-col justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-white/70">App Design</p>
                <h3 className="mt-4 text-4xl font-semibold text-white tracking-tight leading-none">Solent Rib<br />Charter</h3>
                <p className="mt-4 text-white/80 font-medium">Europe's largest<br />fleet of Ribs.</p>
              </div>
              <button className="mt-8 bg-yellow-500 text-black px-6 py-3 rounded-full font-bold self-start hover:bg-yellow-400 transition-colors">
                Get started
              </button>
            </div>
          </article>

          {/* Center Column with Text and 2 Cards */}
          <div className="relative shrink-0 flex h-auto md:h-[90vh] w-full md:w-[700px] flex-col justify-between gap-8 md:gap-0">
            {/* Top Card - Yacht */}
            <article className="project-card h-[40vh] md:h-[35%] w-full md:w-[70%] md:self-end overflow-hidden rounded-[2rem] border border-white/10 bg-[#111] hover-glow relative group">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-50 transition-transform duration-700 group-hover:scale-105"></div>
              <div className="relative z-10 h-full w-full bg-gradient-to-t from-blue-900/80 via-transparent to-transparent p-8 flex flex-col justify-end">
                <div>
                  <h3 className="text-3xl font-semibold text-white tracking-wide">ANYA</h3>
                  <p className="mt-1 text-xs text-white/70 uppercase tracking-widest">Sunseeker 86 Motor Yacht</p>
                </div>
                <div className="mt-4 flex gap-6 text-xs text-white/80 uppercase tracking-widest border-t border-white/20 pt-4">
                  <span>4 Cabins</span>
                  <span>2020</span>
                </div>
              </div>
            </article>

            {/* Center Text */}
            <div className="project-card flex flex-col items-center justify-center text-center my-8 md:my-0 order-first md:order-none">
              <p className="text-xl text-gray-400 mb-2 font-medium">What we do</p>
              <h2 className="text-6xl font-semibold text-white sm:text-8xl tracking-[-0.04em]">Showcase</h2>
              <div className="mt-8 text-white/50 border border-white/10 rounded-full px-6 py-2 text-sm flex items-center gap-2 backdrop-blur-sm">
                Scroll to explore <span className="text-lg">→</span>
              </div>
            </div>

            {/* Bottom Card - Car */}
            <article className="project-card h-[40vh] md:h-[35%] w-full md:w-[70%] md:self-start overflow-hidden rounded-[2rem] border border-white/10 bg-[#111] hover-glow relative group">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-60 transition-transform duration-700 group-hover:scale-105"></div>
              <div className="relative z-10 h-full w-full bg-gradient-to-t from-red-900/80 via-transparent to-transparent p-8 flex flex-col justify-end">
                <h3 className="text-3xl font-semibold text-white tracking-wider">AERODYNAMICS</h3>
              </div>
            </article>
          </div>

          {/* Right Mobile Card - Wilderness */}
          <article className="project-card shrink-0 flex h-[60vh] md:h-[75vh] w-full md:w-[400px] flex-col overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#111] hover-glow relative group">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-50 transition-transform duration-700 group-hover:scale-105"></div>
            <div className="relative z-10 flex-1 bg-gradient-to-b from-black/80 via-transparent to-black p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-white tracking-widest uppercase">Wilderness</span>
                  <button className="bg-orange-500 text-black text-[10px] font-bold px-3 py-1.5 rounded-sm uppercase tracking-wider">
                    View
                  </button>
                </div>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-white/70 mb-2">Botswana</p>
                <h3 className="text-4xl font-semibold text-white leading-tight">Experience<br />safari magic</h3>
                <p className="mt-4 text-white/80">Discover Earth's ultimate, untamed places.</p>
              </div>
            </div>
          </article>

          {/* Text Cards Column */}
          <div className="relative shrink-0 flex h-auto md:h-[90vh] w-full md:w-[600px] flex-col justify-center gap-12 md:gap-24">
            {/* Top Text Card */}
            <article className="project-card self-end w-full md:w-[90%] rounded-[2rem] border border-white/10 bg-[#161616] p-10 hover-glow">
              <p className="text-xs font-semibold text-purple-400 mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                High-Performing Website
              </p>
              <h3 className="text-3xl font-semibold text-white leading-snug tracking-tight">
                Modernising a group of sites<br />for a marine services provider
              </h3>
              <p className="mt-6 text-white/60 leading-relaxed text-sm">
                Breaking key pages into modular components allowed us to build a shared design system.
              </p>
              <button className="mt-8 flex items-center gap-4 text-sm font-semibold text-white bg-white/5 border border-white/10 rounded-full px-6 py-3 hover:bg-white/10 transition-colors">
                View Project <span>→</span>
              </button>
            </article>

            {/* Bottom Text Card */}
            <article className="project-card self-start w-full md:w-[90%] rounded-[2rem] border border-white/10 bg-[#161616] p-10 hover-glow">
              <p className="text-xs font-semibold text-purple-400 mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                High-Performing Website
              </p>
              <h3 className="text-3xl font-semibold text-white leading-snug tracking-tight">
                Optimising conversion<br />without compromising luxury
              </h3>
              <p className="mt-6 text-white/60 leading-relaxed text-sm">
                We redesigned user journeys across the site to make them smoother and more intuitive.
              </p>
              <button className="mt-8 flex items-center gap-4 text-sm font-semibold text-white bg-white/5 border border-white/10 rounded-full px-6 py-3 hover:bg-white/10 transition-colors">
                View Project <span>→</span>
              </button>
            </article>
          </div>

          {/* Right Desktop Mockup Card */}
          <article className="project-card shrink-0 flex h-[50vh] md:h-[85vh] w-full md:w-[1100px] flex-col overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#111] hover-glow relative group">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544421115-4fa8172c72b2?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-70 transition-transform duration-700 group-hover:scale-105"></div>

            {/* Fake Browser Header */}
            <div className="relative z-10 w-full bg-[#1a1a1a] border-b border-white/10 px-6 py-4 flex items-center gap-4">
              <div className="flex gap-2.5">
                <div className="w-3.5 h-3.5 rounded-full bg-white/20"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-white/20"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-white/20"></div>
              </div>
              <div className="flex-1 bg-black/40 border border-white/5 rounded-md h-8 max-w-xl mx-auto flex items-center px-4">
                <span className="text-white/30 text-xs">solentribcharter.co.uk</span>
              </div>
            </div>

            {/* Inner Content */}
            <div className="relative z-10 flex-1 bg-gradient-to-r from-black/90 via-black/40 to-transparent p-16 flex flex-col justify-center">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold text-yellow-500 mb-4 tracking-wider">Welcome to Solent Rib Charter</p>
                <h3 className="text-6xl font-semibold text-white tracking-tight leading-tight">Europe's largest fleet of Ribs</h3>
                <p className="mt-6 text-xl text-white/80">A market leading provider of Rib Hire, Rib Charter, Commercial Rib Charter and Bareboat Rib Hire services.</p>
                <button className="mt-10 bg-yellow-500 text-black px-8 py-4 rounded-full font-bold hover:bg-yellow-400 transition-colors">
                  Get started
                </button>
              </div>
            </div>
          </article>

        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl space-y-12">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">TRUSTED BY GROWING BRANDS</p>
            <h2 className="mt-4 text-4xl text-center font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              Innovative Businesses Choose Framevora to Design, Develop & Scale Their Digital Presence."
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
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">WHY FRAMEVORA</p>
              <h2 className="text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl">
                Designing Intuitive Experiences. Developing Powerful Digital Solutions.
              </h2>
              <p className="max-w-xl text-lg leading-8 text-white/70">
                We help startups, businesses, and enterprises transform ideas into exceptional digital products through strategic UI/UX design, custom web development, and performance-driven solutions that create lasting impact.
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

      <TestimonialsSection data={TESTIMONIALS_DATA} />
      <CtaSection />
    </div>
  );
}
