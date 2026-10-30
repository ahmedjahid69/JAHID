import { Mail, ArrowUpRight } from 'lucide-react';
import { portfolioConfig } from '../data/portfolioData';

interface ContactSectionProps {
  darkMode: boolean;
}

export default function ContactSection({ darkMode }: ContactSectionProps) {

  return (
    <section id="contact" className="scroll-mt-28 py-16 md:py-20">
      <div className="container">
        {/* Large Centered Glass Card */}
        <div
          className={`reveal relative overflow-hidden rounded-3xl border p-8 md:p-14 text-center transition-colors duration-500 ${
            darkMode
              ? 'border-white/[0.07] bg-linear-to-b from-white/4 to-white/1'
              : 'border-zinc-200 bg-white shadow-sm'
          }`}
        >
          {/* Subtle Ambient Radial Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 opacity-30"
            style={{
              background: 'radial-gradient(400px circle at 50% 30%, rgba(16, 185, 129, 0.15), transparent 70%)',
            }}
          />

          <p className="text-emerald-400 mb-4 text-xs tracking-[0.25em] uppercase font-mono font-medium">
            Open to new conversations
          </p>

          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl text-zinc-100 flex flex-col items-center justify-center gap-1.5 sm:gap-2">
            <span className="block">Have an idea?</span>
            <span className="block text-2xl md:text-4xl font-serif font-normal italic">
              <span className="animated-gradient-text font-normal italic">
                Let's ship it.
              </span>
            </span>
          </h2>

          <p className="text-zinc-400 relative mx-auto mt-6 max-w-xl text-base sm:text-lg leading-relaxed">
            Tell me a bit about what you're working on, and I'll get back to you.
          </p>

          {/* Action Buttons */}
          <div className="relative mt-10 flex flex-wrap justify-center gap-3">
            {/* Primary Email Button */}
            <a
              href={`mailto:${portfolioConfig.email}`}
              className="inline-flex items-center justify-center whitespace-nowrap font-medium h-12 rounded-full px-7 text-base bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold shadow-[0_0_40px_-8px_rgba(16,185,129,0.6)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <Mail className="mr-2 h-4 w-4" />
              <span>{portfolioConfig.email}</span>
            </a>

            {/* WhatsApp Button */}
            <a
              href={`https://wa.me/${portfolioConfig.whatsappNumber}?text=${encodeURIComponent(portfolioConfig.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="glass h-12 rounded-full px-7 text-base transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/6 inline-flex items-center text-zinc-200 hover:text-white"
            >
              <svg role="img" aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 shrink-0 mr-2 fill-[#25D366]">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span>WhatsApp me</span>
            </a>
          </div>

          {/* Social Links Cards */}
          <ul className="relative mx-auto mt-14 grid max-w-3xl gap-3 sm:grid-cols-3">
            {/* Facebook (Replaced GitHub) */}
            <li>
              <a
                href={portfolioConfig.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass group flex items-center justify-between rounded-2xl px-5 py-4 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20"
              >
                <span className="flex items-center gap-3">
                  <svg role="img" aria-hidden="true" viewBox="0 0 24 24" className="shrink-0 h-5 w-5 fill-[#1877F2]">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span>
                    <span className="block text-sm font-medium text-zinc-100">Facebook</span>
                    <span className="text-zinc-400 block font-mono text-xs">{portfolioConfig.facebookHandle}</span>
                  </span>
                </span>
                <ArrowUpRight className="text-zinc-400 group-hover:text-white h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </li>

            {/* Telegram (Replaced LinkedIn) */}
            <li>
              <a
                href={portfolioConfig.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass group flex items-center justify-between rounded-2xl px-5 py-4 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20"
              >
                <span className="flex items-center gap-3">
                  <svg role="img" aria-hidden="true" viewBox="0 0 24 24" className="shrink-0 h-5 w-5 fill-[#24A1DE]">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.458c.538-.196 1.006.128.832.941z" />
                  </svg>
                  <span>
                    <span className="block text-sm font-medium text-zinc-100">Telegram</span>
                    <span className="text-zinc-400 block font-mono text-xs">{portfolioConfig.telegramHandle}</span>
                  </span>
                </span>
                <ArrowUpRight className="text-zinc-400 group-hover:text-white h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </li>

            {/* Instagram (Replaced Social) */}
            <li>
              <a
                href={portfolioConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass group flex items-center justify-between rounded-2xl px-5 py-4 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20"
              >
                <span className="flex items-center gap-3">
                  <svg role="img" aria-hidden="true" viewBox="0 0 24 24" className="shrink-0 h-5 w-5">
                    <defs>
                      <radialGradient id="ig-grad-card" cx="30%" cy="107%" r="150%">
                        <stop offset="0%" stopColor="#fdf497" />
                        <stop offset="5%" stopColor="#fdf497" />
                        <stop offset="45%" stopColor="#fd5949" />
                        <stop offset="60%" stopColor="#d6249f" />
                        <stop offset="90%" stopColor="#285AEB" />
                      </radialGradient>
                    </defs>
                    <path
                      fill="url(#ig-grad-card)"
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                    />
                  </svg>
                  <span>
                    <span className="block text-sm font-medium text-zinc-100">Instagram</span>
                    <span className="text-zinc-400 block font-mono text-xs">{portfolioConfig.instagramHandle}</span>
                  </span>
                </span>
                <ArrowUpRight className="text-zinc-400 group-hover:text-white h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
