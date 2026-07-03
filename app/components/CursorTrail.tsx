"use client";

import { useEffect, useRef } from "react";

export default function CursorTrail() {
  const dotsRef = useRef<Array<HTMLDivElement | null>>([]);
  const positionsRef = useRef(
    Array.from({ length: 8 }, () => ({ x: 0, y: 0 }))
  );
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      positionsRef.current[0] = { x: event.clientX, y: event.clientY };
    };

    const animate = () => {
      const positions = positionsRef.current;
      for (let i = 1; i < positions.length; i += 1) {
        positions[i].x += (positions[i - 1].x - positions[i].x) * 0.22;
        positions[i].y += (positions[i - 1].y - positions[i].y) * 0.22;
      }

      positions.forEach((pos, index) => {
        const dot = dotsRef.current[index];
        if (dot) {
          dot.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
        }
      });

      frameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMove);
    frameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 opacity-90">
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          ref={(element) => {
            dotsRef.current[index] = element;
          }}
          className={`cursor-trail-dot cursor-trail-dot-${index + 1}`}
        />
      ))}
    </div>
  );
}
