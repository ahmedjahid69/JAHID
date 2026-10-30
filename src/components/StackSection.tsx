import { useState, MouseEvent } from 'react';
import { stackCategories, StackCategory } from '../data/portfolioData';
import { ToolIcon } from './ToolIcons';

interface StackSectionProps {
  darkMode: boolean;
}

function StackCard({ cat, darkMode }: { cat: StackCategory; darkMode: boolean }) {
  const [spotlightPos, setSpotlightPos] = useState({ x: -500, y: -500 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setSpotlightPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const isHighlighted = cat.highlighted;

  return (
    <div className="reveal">
      <div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`group relative h-full overflow-hidden rounded-3xl border p-6 transition-colors duration-500 md:p-8 ${
          isHighlighted
            ? darkMode
              ? 'border-emerald-500/20 from-emerald-500/8 bg-linear-to-br via-white/2 to-violet-500/6 hover:border-white/[0.14]'
              : 'border-emerald-500/30 bg-emerald-50/60 shadow-sm hover:border-emerald-500/50'
            : darkMode
            ? 'border-white/[0.07] bg-linear-to-b from-white/4 to-white/1 hover:border-white/[0.14]'
            : 'border-zinc-200 bg-white hover:border-zinc-300 shadow-sm'
        }`}
      >
        {/* Radial cursor spotlight matching sifath.me */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 transition-opacity duration-500 will-change-transform"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(360px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(52, 211, 153, 0.10), transparent 70%)`,
          }}
        />

        <div className="relative h-full">
          <h3 className="mb-6 text-lg font-medium text-zinc-100">
            {cat.category}
          </h3>

          <ul className="flex flex-wrap gap-2">
            {cat.skills.map((skill) => (
              <li
                key={skill.name}
                className={`flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm transition-colors duration-300 select-none ${
                  skill.highlighted
                    ? 'border-emerald-500/30 bg-emerald-500/10 text-foreground text-zinc-100 font-medium'
                    : darkMode
                    ? 'border-white/8 bg-white/3 text-zinc-400 hover:text-white hover:border-white/15'
                    : 'border-zinc-200 bg-zinc-100 text-zinc-700 hover:text-black hover:border-zinc-300'
                }`}
              >
                {/* Official Brand SVG Logo */}
                <ToolIcon name={skill.name} className="h-4 w-4 shrink-0" />
                <span>{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function StackSection({ darkMode }: StackSectionProps) {
  return (
    <section id="stack" className="scroll-mt-28 py-16 md:py-20">
      <div className="container">
        {/* Header matching sifath.me */}
        <div className="reveal mb-12 md:mb-16">
          <p className="text-emerald-400 mb-4 flex items-center gap-3 text-xs tracking-[0.25em] uppercase font-mono">
            <span className="bg-emerald-400/60 h-px w-8" aria-hidden="true" />
            Stack
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
            Tools I trust{' '}
            <span className="text-zinc-400 font-serif font-normal italic">
              to ship.
            </span>
          </h2>
        </div>

        {/* 6 Category Cards in 2-column grid */}
        <div className="grid gap-4 md:grid-cols-2">
          {stackCategories.map((cat) => (
            <StackCard key={cat.category} cat={cat} darkMode={darkMode} />
          ))}
        </div>
      </div>
    </section>
  );
}
