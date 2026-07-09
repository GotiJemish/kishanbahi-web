import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm text-white/50">Got a project in mind?</p>
        
        <h2 className="mt-6 text-5xl font-medium tracking-tight text-white sm:text-6xl md:text-7xl leading-[1.1]">
          Give your team the<br />firepower it deserves
        </h2>
        
        <div className="relative my-12 flex items-center justify-center">
          <div className="absolute left-0 right-0 h-[1px] bg-white/10"></div>
          <div className="absolute left-0 h-1.5 w-1.5 rounded-full border border-white/30 bg-[#06080f]"></div>
          <div className="absolute right-0 h-1.5 w-1.5 rounded-full border border-white/30 bg-[#06080f]"></div>
        </div>

        <p className="mx-auto max-w-3xl text-lg leading-8 text-white/60">
          Don&apos;t let limited resources or expertise hold you back. Level up your creative with design support that feels in-house, not outsourced. Get direct access to designers ready to bring your ideas to life.
        </p>
        
        <div className="mt-10 flex justify-center">
          <Link
            href="/work"
            className="group inline-flex items-center rounded-md bg-gradient-to-r from-indigo-900/40 via-purple-900/40 to-indigo-900/40 border border-purple-500/20 px-8 py-3.5 text-sm font-medium text-white transition-all hover:border-purple-500/40 hover:from-indigo-800/50 hover:via-purple-800/50 hover:to-indigo-800/50"
          >
            Start a project
            <svg
              className="ml-2.5 h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
        
        <p className="mt-8 text-sm text-white/40">Replies in 24 hours. No obligation.</p>
      </div>
    </section>
  );
}
