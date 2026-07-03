"use client";

import { useEffect } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  hue: number;
};

export default function useFluidCursor() {
  useEffect(() => {
    const canvas = document.getElementById("fluid") as HTMLCanvasElement | null;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const particles: Particle[] = [];
    let rafId: number | null = null;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const addParticle = (x: number, y: number) => {
      particles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        radius: 14 + Math.random() * 14,
        alpha: 0.5 + Math.random() * 0.25,
        hue: 190 + Math.random() * 70,
      });
      if (particles.length > 70) particles.shift();
    };

    const render = () => {
      if (!ctx) return;
      ctx.fillStyle = "rgba(5, 7, 16, 0.12)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vx *= 0.96;
        particle.vy *= 0.96;
        particle.alpha *= 0.98;

        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.radius
        );

        gradient.addColorStop(0, `hsla(${particle.hue}, 95%, 70%, ${particle.alpha})`);
        gradient.addColorStop(0.45, `hsla(${particle.hue}, 90%, 63%, ${particle.alpha * 0.45})`);
        gradient.addColorStop(1, "transparent");

        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();

        if (particle.alpha < 0.02) {
          particles.splice(index, 1);
        }
      });

      rafId = requestAnimationFrame(render);
    };

    const handleMove = (event: MouseEvent) => {
      addParticle(event.clientX, event.clientY);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("resize", resize);
    resize();
    render();

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("resize", resize);
      if (rafId !== null) cancelAnimationFrame(rafId);
      if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, []);
}
