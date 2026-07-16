import Link from "next/link";

const footerLinks = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505] px-6 py-10 text-white/60 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.35em] text-white/80">Fremevora</p>
          <p className="max-w-xl text-sm leading-6 text-white/60">
            Premium web design, UI/UX systems and launch-ready product experiences for ambitious teams.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm uppercase tracking-[0.3em] text-white/60">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-10 border-t border-white/5 pt-6 text-sm text-white/40">
        © 2026 Fremevora. Built for bold brands.
      </div>
    </footer>
  );
}
