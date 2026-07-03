"use client";

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type WordItem = {
  id: string;
  text: string;
  space: string;
};

type LineGroup = {
  id: string;
  words: WordItem[];
};

function splitWords(text: string) {
  return text.split(" ").map((word, index, array) => ({
    id: `${word}-${index}`,
    text: word,
    space: index < array.length - 1 ? "\u00A0" : "",
  }));
}

export default function ResponsiveTextReveal({
  text,
  className,
  triggerSelector,
}: {
  text: string;
  className?: string;
  triggerSelector?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lines, setLines] = useState<LineGroup[]>([]);
  const words = useMemo(() => splitWords(text), [text]);

  useLayoutEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const measure = () => {
      const wordElements = Array.from(
        element.querySelectorAll<HTMLSpanElement>(".reveal-word")
      );
      if (!wordElements.length) return;

      const groups: { top: number; words: WordItem[] }[] = [];

      wordElements.forEach((node) => {
        const id = node.dataset.id ?? "";
        const space = node.dataset.space ?? "";
        const text = node.dataset.text ?? "";
        const top = node.offsetTop;
        const existing = groups.find((group) => Math.abs(group.top - top) < 6);

        const word = { id, text, space };
        if (existing) {
          existing.words.push(word);
        } else {
          groups.push({ top, words: [word] });
        }
      });

      setLines(groups.map((group, index) => ({ id: `line-${index}`, words: group.words })));
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(element);

    return () => observer.disconnect();
  }, [words]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);
    const element = containerRef.current;
    if (!element) return;

    const trigger = triggerSelector ? document.querySelector(triggerSelector) : element;
    if (!trigger) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        element.querySelectorAll(".mask-inner"),
        { yPercent: 100 },
        {
          yPercent: 0,
          duration: 1,
          ease: "power4.out",
          stagger: 0.06,
          scrollTrigger: {
            trigger,
            start: "top 90%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }, element);

    return () => ctx.revert();
  }, [triggerSelector]);

  return (
    <div
      ref={containerRef}
      className={`relative inline-flex flex-wrap ${className ?? ""}`}
      style={{ overflow: "hidden" }}
    >
      {(lines.length > 0 ? lines : [{ id: "line-fallback", words }]).map((line) => (
        <span key={line.id} className="line-mask inline-flex flex-wrap overflow-hidden">
          {line.words.map((word) => (
            <span
              key={word.id}
              className="reveal-word mask-word inline-flex overflow-hidden whitespace-nowrap"
              data-id={word.id}
              data-space={word.space}
              data-text={word.text}
            >
              <span className="mask-inner inline-block">{word.text}</span>
              {word.space}
            </span>
          ))}
        </span>
      ))}
    </div>
  );
}
