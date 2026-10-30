import { ArrowUpRight, Flame, Laptop } from 'lucide-react';
import { experiences } from '../data/portfolioData';

interface ExperienceSectionProps {
  darkMode: boolean;
}

const NittiiLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    className="h-full w-full object-cover"
    role="img"
    aria-label="Nittii logo"
  >
    <rect width="48" height="48" fill="#ffffff" />
    <line x1="24" y1="8" x2="24" y2="15" stroke="#5b5bf0" strokeWidth="2" />
    <circle cx="24" cy="7.5" r="2.6" fill="#5b5bf0" />
    <rect x="9" y="14" width="30" height="18" rx="2.5" fill="#5b5bf0" />
    <rect x="16.4" y="25" width="3.6" height="15.5" fill="#111111" />
    <rect x="27.6" y="25" width="3.6" height="15.5" fill="#111111" />
    <rect x="13.6" y="39.5" width="8.4" height="2.6" rx="0.6" fill="#111111" />
    <rect x="24.8" y="39.5" width="8.4" height="2.6" rx="0.6" fill="#111111" />
    <circle cx="18.2" cy="22" r="3.8" fill="#ffffff" />
    <circle cx="29.4" cy="22" r="3.8" fill="#ffffff" />
    <circle cx="18.7" cy="22.4" r="1.8" fill="#111111" />
    <circle cx="29.9" cy="22.4" r="1.8" fill="#111111" />
  </svg>
);

export default function ExperienceSection({ darkMode }: ExperienceSectionProps) {
  const getLogoIcon = (iconType: string, company: string) => {
    switch (iconType) {
      case 'nittii':
        return <NittiiLogo />;
      case 'flame':
        return <Flame className="h-6 w-6 text-white" />;
      case 'laptop':
        return <Laptop className="h-6 w-6 text-white" />;
      default:
        return (
          <span className="font-serif font-bold text-lg text-emerald-400">
            {company.charAt(0)}
          </span>
        );
    }
  };

  return (
    <section id="experience" className="scroll-mt-28 py-16 md:py-20">
      <div className="container">
        {/* Header matching sifath.me */}
        <div className="reveal mb-12 md:mb-16">
          <p className="text-emerald-400 mb-4 flex items-center gap-3 text-xs tracking-[0.25em] uppercase font-mono">
            <span className="bg-emerald-400/60 h-px w-8" aria-hidden="true" />
            Experience
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
            Where I've been{' '}
            <span className="text-zinc-400 font-serif font-normal italic">
              building.
            </span>
          </h2>
        </div>

        {/* Vertical Timeline */}
        <ol className="relative mt-12 md:mt-16">
          {experiences.map((exp, index) => {
            const isLast = index === experiences.length - 1;

            return (
              <li key={exp.id} className="relative pb-12 last:pb-0">
                {/* Vertical timeline connector */}
                {!isLast && (
                  <span
                    aria-hidden="true"
                    className="absolute top-14 bottom-2 left-6 w-px bg-white/12"
                  />
                )}

                <div className="reveal flex gap-5 md:gap-6">
                  {/* Company Logo Icon badge */}
                  <span
                    className={`relative z-10 grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-2xl border shadow-[0_8px_24px_-12px_rgb(0_0_0/0.8)] ${
                      exp.iconType === 'nittii'
                        ? 'bg-white border-white/20'
                        : exp.logoBg ||
                          (darkMode
                            ? 'bg-[#08080a] border-white/8'
                            : 'bg-white border-zinc-200 shadow-sm')
                    }`}
                  >
                    {getLogoIcon(exp.iconType, exp.company)}
                  </span>

                  {/* Role Details */}
                  <div className="min-w-0 flex-1 pt-1">
                    <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between md:gap-8">
                      <h3 className="text-2xl font-semibold tracking-tight">
                        {exp.url ? (
                          <a
                            href={exp.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group hover:text-emerald-400 inline-flex items-center gap-1 transition-colors duration-300 text-zinc-100"
                          >
                            <span>{exp.company}</span>
                            <ArrowUpRight className="text-zinc-400 group-hover:text-emerald-400 h-4 w-4 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </a>
                        ) : (
                          <span className="text-zinc-100">{exp.company}</span>
                        )}
                      </h3>
                      <p className="text-zinc-400 font-mono text-sm">
                        {exp.period}
                      </p>
                    </div>

                    {/* Role Badges */}
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      {exp.badges.map((badge, bIdx) => (
                        <span
                          key={bIdx}
                          className={`rounded-full px-3 py-1 text-sm font-medium ${
                            badge.variant === 'primary'
                              ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                              : 'glass text-zinc-400'
                          }`}
                        >
                          {badge.label}
                        </span>
                      ))}
                    </div>

                    {/* Narrative Description */}
                    <p className="text-zinc-400 mt-4 max-w-2xl leading-relaxed text-base">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
