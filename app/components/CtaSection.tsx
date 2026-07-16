import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm text-white/50">READY TO ELEVATE YOUR DIGITAL PRESENCE?</p>
        
        <h2 className="mt-6 text-5xl font-medium tracking-tight text-white sm:text-6xl md:text-7xl leading-[1.1]">
          Let's Turn Your Vision Into an Exceptional Digital Experience.
        </h2>
        
        <div className="relative my-12 flex items-center justify-center">
          <div className="absolute left-0 right-0 h-[1px] bg-white/10"></div>
          <div className="absolute left-0 h-1.5 w-1.5 rounded-full border border-white/30 bg-[#06080f]"></div>
          <div className="absolute right-0 h-1.5 w-1.5 rounded-full border border-white/30 bg-[#06080f]"></div>
        </div>

        <p className="mx-auto max-w-3xl text-lg leading-8 text-white/60">
          At Framevora, we specialize in UI/UX design and web development that combines creativity, strategy, and technology. Whether you're launching a new product or scaling your business, we'll build a solution that's fast, user-focused, and designed for success.
        </p>
        
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
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
          <Link
            href="/contact"
            className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-medium text-white transition-all hover:border-white/30 hover:bg-white/10"
          >
            Schedule a Free Consultation
          </Link>
        </div>
        
        <p className="mt-8 text-sm text-white/40">Free consultation • Tailored proposal • Response within 24 hours</p>
      </div>
    </section>
  );
}
