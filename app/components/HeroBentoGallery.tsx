"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const cards = [
  {
    title: "Product website",
    subtitle: "Motion-led, premium launch experience.",
    accent: "from-cyan-400 via-sky-400 to-violet-500",
  },
  {
    title: "Interface system",
    subtitle: "Consistent UI, polished motion and reusable components.",
    accent: "from-emerald-400 via-teal-400 to-cyan-500",
  },
  {
    title: "Brand storytelling",
    subtitle: "Luxury presentation, editorial structure and rich detail.",
    accent: "from-fuchsia-500 via-pink-500 to-rose-500",
  },
  {
    title: "Conversion flow",
    subtitle: "Clear paths, interactive momentum and strong CTAs.",
    accent: "from-sky-500 via-indigo-500 to-violet-500",
  },
];

export default function HeroBentoGallery() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const cards = cardRefs.current.filter(Boolean);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: galleryRef.current,
        start: "top top",
        end: "+=420",
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    tl.to(cards[0], { y: -60, x: -30, rotation: -2, scale: 1.04 }, 0);
    tl.to(cards[1], { y: -20, x: 25, rotation: 2, scale: 1.03 }, 0);
    tl.to(cards[2], { y: 22, x: -18, rotation: -1, scale: 1.02 }, 0);
    tl.to(cards[3], { y: 42, x: 24, rotation: 1.5, scale: 1.02 }, 0);

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={galleryRef} className="bento-gallery grid gap-4 sm:grid-cols-[0.95fr_0.75fr]">
      <div className="grid gap-4">
        <div
          ref={(el) => {
            if (el) cardRefs.current[0] = el;
          }}
          className="bento-card rounded-[2rem] bg-gradient-to-br from-cyan-400/20 via-slate-900 to-slate-950 p-8 shadow-[0_35px_90px_rgba(0,0,0,0.35)]"
        >
          <span className="text-sm uppercase tracking-[0.35em] text-cyan-200/80">01</span>
          <h3 className="mt-5 text-3xl font-semibold text-white">{cards[0].title}</h3>
          <p className="mt-4 text-sm leading-7 text-white/70">{cards[0].subtitle}</p>
        </div>
        <div
          ref={(el) => {
            if (el) cardRefs.current[2] = el;
          }}
          className="bento-card rounded-[2rem] bg-gradient-to-br from-fuchsia-500/20 via-slate-900 to-slate-950 p-8 shadow-[0_35px_90px_rgba(0,0,0,0.35)]"
        >
          <span className="text-sm uppercase tracking-[0.35em] text-rose-200/80">03</span>
          <h3 className="mt-5 text-3xl font-semibold text-white">{cards[2].title}</h3>
          <p className="mt-4 text-sm leading-7 text-white/70">{cards[2].subtitle}</p>
        </div>
      </div>
      <div className="grid gap-4">
        <div
          ref={(el) => {
            if (el) cardRefs.current[1] = el;
          }}
          className="bento-card rounded-[2rem] bg-gradient-to-br from-emerald-400/20 via-slate-900 to-slate-950 p-8 shadow-[0_35px_90px_rgba(0,0,0,0.35)]"
        >
          <span className="text-sm uppercase tracking-[0.35em] text-emerald-200/80">02</span>
          <h3 className="mt-5 text-3xl font-semibold text-white">{cards[1].title}</h3>
          <p className="mt-4 text-sm leading-7 text-white/70">{cards[1].subtitle}</p>
        </div>
        <div
          ref={(el) => {
            if (el) cardRefs.current[3] = el;
          }}
          className="bento-card rounded-[2rem] bg-gradient-to-br from-sky-400/20 via-slate-900 to-slate-950 p-8 shadow-[0_35px_90px_rgba(0,0,0,0.35)]"
        >
          <span className="text-sm uppercase tracking-[0.35em] text-sky-200/80">04</span>
          <h3 className="mt-5 text-3xl font-semibold text-white">{cards[3].title}</h3>
          <p className="mt-4 text-sm leading-7 text-white/70">{cards[3].subtitle}</p>
        </div>
      </div>
    </div>
  );
}
