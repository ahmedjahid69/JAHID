import { useState, useEffect, MouseEvent } from 'react';
import { Clock, Bot, Globe } from 'lucide-react';
import { portfolioConfig } from '../data/portfolioData';

interface AboutSectionProps {
  darkMode: boolean;
}

function SpotlightCard({
  children,
  className = '',
  darkMode,
}: {
  children: React.ReactNode;
  className?: string;
  darkMode: boolean;
}) {
  const [spotlightPos, setSpotlightPos] = useState({ x: -500, y: -500 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setSpotlightPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative h-full overflow-hidden rounded-3xl border p-6 transition-colors duration-500 md:p-8 ${
        darkMode
          ? 'border-white/[0.07] bg-linear-to-b from-white/4 to-white/1 hover:border-white/[0.14]'
          : 'border-zinc-200 bg-white hover:border-zinc-300 shadow-sm'
      } ${className}`}
    >
      {/* Radial spotlight effect following cursor */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 transition-opacity duration-500 will-change-transform"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(360px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(52, 211, 153, 0.10), transparent 70%)`,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
}

// Website 7 main theme colors
const CLOCK_THEME_COLORS = [
  '#10b981', // Emerald (primary accent)
  '#8b5cf6', // Violet (aurora / secondary accent)
  '#06b6d4', // Cyan (tertiary accent)
  '#d97757', // Terracotta / Orange (agentic / flame)
  '#3b82f6', // Blue (TypeScript / links)
  '#f43f5e', // Rose (flame / badge accent)
  '#f4f4f5', // Zinc / White (neutral)
];

export default function AboutSection({ darkMode }: AboutSectionProps) {
  const [liveClock, setLiveClock] = useState('--:--');
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatted = new Intl.DateTimeFormat('en-US', {
          timeZone: portfolioConfig.timezone,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        }).format(now);
        setLiveClock(formatted);
      } catch {
        setLiveClock(new Date().toLocaleTimeString());
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Smoothly rotate the clock color through the 7 theme colors every 4 seconds
  useEffect(() => {
    const colorTimer = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % CLOCK_THEME_COLORS.length);
    }, 4000);
    return () => clearInterval(colorTimer);
  }, []);

  return (
    <section id="about" className="scroll-mt-28 py-16 md:py-20">
      <div className="container">
        {/* Header matching sifath.me */}
        <div className="reveal mb-12 md:mb-16">
          <p className="text-emerald-400 mb-4 flex items-center gap-3 text-xs tracking-[0.25em] uppercase font-mono">
            <span className="bg-emerald-400/60 h-px w-8" aria-hidden="true" />
            About
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
            A little{' '}
            <span className="text-zinc-400 font-serif font-normal italic">
              about me.
            </span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid gap-4 md:grid-cols-6">
          {/* Card 1: Narrative (4 cols) */}
          <div className="reveal md:col-span-4">
            <SpotlightCard darkMode={darkMode}>
              <div className="text-zinc-300 space-y-5 text-base sm:text-lg leading-relaxed">
                {portfolioConfig.aboutParagraphs.map((para, i) => (
                  <p key={i} className="leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </SpotlightCard>
          </div>

          {/* Card 2: Based in & Live Time (2 cols) */}
          <div className="reveal md:col-span-2">
            <SpotlightCard darkMode={darkMode} className="flex flex-col justify-between">
              <div className="text-zinc-400 flex items-center gap-2 text-sm font-medium">
                <Clock className="h-4 w-4 text-emerald-400" />
                <span>Based in</span>
              </div>

              <div className="pt-8 md:pt-0">
                <p className="text-2xl font-semibold text-zinc-100">
                  {portfolioConfig.location}
                </p>
                <p className="mt-2 font-serif text-4xl sm:text-5xl italic font-bold">
                  <time
                    style={{
                      color: CLOCK_THEME_COLORS[colorIndex],
                      transition: 'color 1000ms ease-in-out',
                    }}
                  >
                    {liveClock}
                  </time>
                </p>
                <p className="text-zinc-400 mt-2 text-sm font-mono">
                  {portfolioConfig.timezoneLabel} · Available for remote work
                </p>
              </div>
            </SpotlightCard>
          </div>

          {/* Card 3: How I work (6 cols) */}
          <div className="reveal md:col-span-6">
            <SpotlightCard darkMode={darkMode}>
              <div className="text-zinc-400 mb-8 flex items-center gap-2 text-sm font-medium">
                <Bot className="h-4 w-4 text-emerald-400" />
                <span>How I work</span>
              </div>

              <ol className="grid gap-8 md:grid-cols-3">
                {portfolioConfig.howIWorkSteps.map((step) => (
                  <li key={step.step} className="relative">
                    <span className="text-emerald-400 font-mono text-xs font-semibold">
                      {step.step}
                    </span>
                    <h3 className="mt-2 text-xl font-medium text-zinc-100">
                      {step.title}
                    </h3>
                    <p className="text-zinc-400 mt-2 leading-relaxed text-sm sm:text-base">
                      {step.description}
                    </p>
                  </li>
                ))}
              </ol>
            </SpotlightCard>
          </div>

          {/* Card 4: Open to (6 cols) */}
          <div className="reveal md:col-span-6">
            <SpotlightCard darkMode={darkMode}>
              <div className="flex items-start gap-4">
                <span className="glass grid h-11 w-11 shrink-0 place-items-center rounded-2xl">
                  <Globe className="text-emerald-400 h-5 w-5" />
                </span>
                <div>
                  <p className="text-zinc-400 text-sm">Open to</p>
                  <p className="mt-1 text-base sm:text-lg font-medium text-zinc-100">
                    {portfolioConfig.openToText}
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  );
}
