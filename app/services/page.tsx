"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";

const services = [
  {
    name: "UX/UI & Digital Products",
    description:
      "Is poor design costing you users? We fix friction. We design intuitive, human-centered interfaces that reduce churn, delight customers, and make your product a joy to use.",
    mockup: "ui"
  },
  {
    name: "High-Performance Websites",
    description:
      "Fast, polished websites built to feel premium on desktop and mobile, with motion-led detail and polished interactions that drive conversion.",
    mockup: "web"
  },
  {
    name: "Brand Identity & Positioning",
    description:
      "Brand expression, messaging and digital product design aligned around a thoughtful, consistent visual language that elevates your market presence.",
    mockup: "brand"
  },
  {
    name: "Flexible Design Support",
    description:
      "From rapid sprints to ongoing design retainers, we offer flexible packages that keep projects moving without adding overhead.",
    mockup: "support"
  },
];

export default function ServicesPage() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    updateDimensions();
    const observer = new ResizeObserver(updateDimensions);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    gsap.to(".refresh-icon", {
      rotation: 360,
      duration: 8,
      repeat: -1,
      ease: "linear",
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-[#0a0a0a] flex flex-col">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 pb-12 pt-12">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80 mb-6">Services</p>
        <h1 className="text-5xl font-semibold tracking-[-0.04em] text-white max-w-3xl">
          Design, motion and product strategy services built for ambitious digital teams.
        </h1>
      </div>

      <section 
        ref={containerRef} 
        className="relative w-full h-[960px] border-y border-white/10 overflow-hidden flex-1"
      >
        {/* Horizontal Line */}
        <div className="absolute top-1/2 w-full h-px -translate-y-1/2 bg-white/20 z-0 opacity-40">
          <div className="absolute left-[25%] top-1/2 -translate-x-1/2 -translate-y-1/2 text-white/40 text-xs px-2 bg-[#0a0a0a]">
            {Math.round(dimensions.width / 2)}px
          </div>
          <div className="absolute left-[75%] top-1/2 -translate-x-1/2 -translate-y-1/2 text-white/40 text-xs px-2 bg-[#0a0a0a]">
            {Math.round(dimensions.width / 2)}px
          </div>
        </div>

        {/* Vertical Line */}
        <div className="absolute left-1/2 w-px h-full top-0 -translate-x-1/2 bg-white/20 z-0 opacity-40">
          <div className="absolute top-[25%] left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 text-white/40 text-xs px-2 bg-[#0a0a0a]">
            {Math.round(dimensions.height / 2)}px
          </div>
          <div className="absolute top-[75%] left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 text-white/40 text-xs px-2 bg-[#0a0a0a]">
            {Math.round(dimensions.height / 2)}px
          </div>
        </div>

        {/* Center circle */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none">
           <div className="w-[84px] h-[84px] rounded-full border border-white/20 flex items-center justify-center bg-[#0a0a0a]">
             <svg className="w-8 h-8 text-white refresh-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
             </svg>
           </div>
        </div>

        {/* Quadrants */}
        <div className="relative z-10 w-full h-full min-h-136 grid grid-cols-1 md:grid-cols-2 grid-rows-2">
           {services.map((service, idx) => (
             <div key={service.name} className="group relative w-full h-full flex flex-col justify-center px-12 lg:px-24 overflow-hidden">
                <div className="relative z-20 transition-transform duration-700 ease-out group-hover:-translate-y-8 flex flex-col items-start">
                   <h2 className="text-3xl lg:text-[40px] font-medium tracking-[-0.03em] text-white leading-tight">
                     {service.name}
                   </h2>
                   
                   <div className="absolute top-full left-0 mt-6 w-[120%] lg:w-[150%] max-w-md opacity-0 transition-all duration-700 ease-out translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto">
                      <p className="text-lg text-white/60 mb-8 font-light leading-relaxed">
                        {service.description}
                      </p>
                      <div>
                        <Link href="/work" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium hover:bg-white/10 transition-colors text-white">
                          Explore <span className="opacity-70">→</span>
                        </Link>
                      </div>
                   </div>
                </div>

                {/* Mockup Elements - moved to touch bottom border */}
                {service.mockup === "ui" && (
                  <div className="absolute right-[5%] bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out pointer-events-none z-10 translate-y-12 group-hover:translate-y-0">
                     <div className="w-[280px] h-[300px] border border-white/10 border-b-0 rounded-t-[32px] bg-[#111111] p-2 shadow-2xl flex flex-col">
                       <div className="w-full h-full border border-white/10 border-b-0 rounded-t-[24px] bg-[#1a1a1a] flex flex-col overflow-hidden">
                          <div className="w-full p-4 flex justify-between items-center border-b border-white/10">
                             <div className="font-semibold text-white text-xs">United Mileage</div>
                             <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-[10px] text-gray-400">?</div>
                          </div>
                          <div className="p-4 flex-1">
                             <div className="w-full aspect-square bg-white/5 rounded-xl flex items-center justify-center mb-4">
                                <div className="w-16 h-16 bg-blue-500 rounded-lg"></div>
                             </div>
                             <div className="w-full h-12 bg-white/10 rounded-lg mt-auto"></div>
                          </div>
                       </div>
                     </div>
                  </div>
                )}
                
                {service.mockup === "web" && (
                  <div className="absolute right-10 bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out pointer-events-none z-10 translate-y-12 group-hover:translate-y-0">
                     <div className="w-[320px] h-[220px] border border-white/10 border-b-0 rounded-t-xl bg-[#111] overflow-hidden shadow-2xl flex flex-col">
                        <div className="h-6 w-full bg-white/5 border-b border-white/10 flex items-center px-3 gap-1.5">
                           <div className="w-2 h-2 rounded-full bg-red-500/80"></div>
                           <div className="w-2 h-2 rounded-full bg-yellow-500/80"></div>
                           <div className="w-2 h-2 rounded-full bg-green-500/80"></div>
                        </div>
                        <div className="flex-1 p-4 flex flex-col gap-3">
                           <div className="w-3/4 h-6 bg-white/10 rounded-md"></div>
                           <div className="w-full h-3 bg-white/5 rounded-full"></div>
                           <div className="w-5/6 h-3 bg-white/5 rounded-full"></div>
                           <div className="mt-auto grid grid-cols-3 gap-2">
                             <div className="h-20 bg-white/5 rounded-t-md"></div>
                             <div className="h-20 bg-white/5 rounded-t-md"></div>
                             <div className="h-20 bg-white/5 rounded-t-md"></div>
                           </div>
                        </div>
                     </div>
                  </div>
                )}

                {service.mockup === "brand" && (
                  <div className="absolute right-[15%] bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out pointer-events-none z-10 translate-y-12 group-hover:translate-y-0">
                     <div className="flex gap-4 items-end">
                        <div className="w-24 h-40 rounded-t-xl bg-purple-500 shadow-2xl"></div>
                        <div className="w-24 h-32 rounded-t-xl bg-cyan-500 shadow-2xl"></div>
                        <div className="w-24 h-48 rounded-t-xl bg-blue-500 shadow-2xl"></div>
                     </div>
                  </div>
                )}

                {service.mockup === "support" && (
                  <div className="absolute right-[10%] bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out pointer-events-none z-10 translate-y-12 group-hover:translate-y-0">
                     <div className="grid grid-cols-2 gap-4 bg-white/5 p-4 pt-6 rounded-t-3xl border border-white/10 border-b-0 backdrop-blur-md">
                        <div className="w-20 h-20 rounded-full border-2 border-dashed border-white/30 flex items-center justify-center text-white/50 text-2xl">+</div>
                        <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-500"></div>
                        <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500"></div>
                        <div className="w-20 h-20 rounded-full bg-white/10"></div>
                     </div>
                  </div>
                )}
             </div>
           ))}
        </div>
      </section>
    </div>
  );
}
