"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const posts = [
  {
    title: "Design systems for growth-stage products",
    excerpt: "How consistent UI systems keep teams aligned and speed up every new release.",
  },
  {
    title: "Using motion to improve onboarding",
    excerpt: "A motion-led approach that helps users understand your product faster and with more confidence.",
  },
  {
    title: "Crafting premium digital brand experiences",
    excerpt: "Brand design that feels modern, expressive and built for conversion.",
  },
];

export default function BlogPage() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".blog-hero", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      });
      gsap.from(".blog-card", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: ".blog-list",
          start: "top 90%",
        },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="px-6 pt-36 pb-28 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl space-y-16">
        <section className="blog-hero max-w-3xl space-y-6">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Blog</p>
          <h1 className="text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl">
            Insights on design systems, product motion, and premium web experiences.
          </h1>
          <p className="text-lg leading-8 text-white/70">
            A short collection of studio thinking on UI, UX and product-led digital design.
          </p>
        </section>

        <section className="blog-list grid gap-8 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="blog-card rounded-[2rem] border border-white/10 bg-[#0c1018]/90 p-10 shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
              <h2 className="text-2xl font-semibold text-white">{post.title}</h2>
              <p className="mt-5 text-white/70">{post.excerpt}</p>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}
