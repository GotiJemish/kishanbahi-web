"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
];

export default function SiteNav() {
  const headerRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      const showAnim = gsap.from(headerRef.current, { 
        yPercent: -100,
        paused: true,
        duration: 0.5,
        ease: "power3.out"
      }).progress(1);

      ScrollTrigger.create({
        start: "top top",
        end: 99999,
        onUpdate: (self) => {
          if (self.scroll() > 50) {
            setIsScrolled(true);
            self.direction === -1 ? showAnim.play() : showAnim.reverse();
          } else {
            setIsScrolled(false);
            showAnim.play();
          }
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <header
      ref={headerRef}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        isScrolled ? "border-b border-white/10 glass-panel" : "bg-transparent border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-8 lg:px-12">
        <div className="magnetic-wrap">
          <Link href="/" className="text-sm font-semibold uppercase tracking-[0.35em] text-white/90">
            STUDIO
          </Link>
        </div>
        <nav className="hidden items-center gap-10 text-sm uppercase tracking-[0.3em] text-white/70 md:flex">
          {navLinks.map((link) => (
            <div key={link.href} className="magnetic-wrap">
              <Link
                href={link.href}
                className="transition hover:text-white"
              >
                {link.label}
              </Link>
            </div>
          ))}
        </nav>
        <div className="magnetic-wrap">
          <Link
            href="/work"
            className="inline-flex rounded-full border border-cyan-400/20 glass-panel px-5 py-2.5 text-sm font-medium uppercase tracking-[0.2em] text-cyan-100 transition hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-white hover-glow"
          >
            Start a project
          </Link>
        </div>
      </div>
    </header>
  );
}
