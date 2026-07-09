import React from "react";

/**
 * TestimonialCard
 * Props: quote, authorName, authorTitle, avatarUrl
 */
export const TestimonialCard = ({ quote, authorName, authorTitle, avatarUrl }: any) => {
  return (
    <div className="testimonial-card flex flex-col items-start gap-4 p-6 bg-white/5 border border-white/10 rounded-[2rem] w-96 flex-shrink-0 glass-panel">
      <p className="text-white/80 text-lg font-light leading-relaxed">"{quote}"</p>
      <div className="flex items-center gap-4 mt-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-cyan-500 to-purple-500 overflow-hidden">
          {avatarUrl && (
             <img
               src={avatarUrl}
               alt={authorName}
               className="w-full h-full object-cover"
             />
          )}
        </div>
        <div>
          <h4 className="text-lg font-medium text-white">{authorName}</h4>
          <p className="text-white/50 text-sm uppercase tracking-widest">{authorTitle}</p>
        </div>
      </div>
    </div>
  );
};

/**
 * HorizontalScroller
 * Props: children, speed (e.g., "40s"), direction ("left" | "right")
 */
export const HorizontalScroller = ({ children, speed = "40s", direction = "left" }: any) => {
  const animationClass =
    direction === "right" ? "animate-scroll-horizontal-reverse" : "animate-scroll-horizontal";

  return (
    <div className="w-full overflow-hidden group relative mask-fade-edges">
      <div className={`flex ${animationClass} w-max`} style={{ animationDuration: speed }}>
        <div className="flex items-stretch justify-center gap-8 px-4 w-max">{children}</div>
        <div className="flex items-stretch justify-center gap-8 px-4 w-max" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
};

/**
 * TestimonialsSection
 * Props: data { title, subtitle, rows[] }
 */
export default function TestimonialsSection({ data }: any) {
  return (
    <section className="testimonials-section relative flex flex-col items-center gap-16 py-24 w-full overflow-hidden border-t border-white/10">
      <div className="flex flex-col items-center gap-6 text-center z-10 max-w-3xl px-6">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Testimonials</p>
        <h2
          className="text-4xl md:text-5xl font-semibold text-white tracking-[-0.04em]"
        >
          {data.title}
        </h2>
        <p
          className="text-lg text-white/70 max-w-xl"
        >
          {data.subtitle}
        </p>
      </div>

      <div className="flex flex-col gap-8 z-10 w-full">
        {data.rows.map((row: any) => (
          <HorizontalScroller key={row.id} speed={row.speed} direction={row.direction}>
            {row.testimonials.map((t: any) => (
              <TestimonialCard
                key={t.id}
                quote={t.quote}
                authorName={t.authorName}
                authorTitle={t.authorTitle}
                avatarUrl={t.avatarUrl}
              />
            ))}
          </HorizontalScroller>
        ))}
      </div>

      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 85% 67% at 50% 100%, rgba(14, 165, 233, 0.15) 0%, transparent 60%)",
          zIndex: 0,
        }}
      />
    </section>
  );
}
