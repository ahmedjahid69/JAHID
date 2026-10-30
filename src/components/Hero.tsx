import { useState, useEffect, useRef } from 'react';
import { Mail, Clock, ArrowRight, MapPin } from 'lucide-react';
import { portfolioConfig, marqueeSkills } from '../data/portfolioData';
import { ToolIcon } from './ToolIcons';

interface HeroProps {
  darkMode: boolean;
}

export default function Hero({ darkMode }: HeroProps) {
  const [localTime, setLocalTime] = useState<string>('--:--');
  const [showTooltip, setShowTooltip] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Live ticking clock for configured timezone
  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatted = new Intl.DateTimeFormat('en-US', {
          timeZone: portfolioConfig.timezone,
          hour: 'numeric',
          minute: '2-digit',
          hour12: true,
        }).format(now);
        setLocalTime(formatted);
      } catch {
        setLocalTime(new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }));
      }
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // Subtle starfield canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const stars: { x: number; y: number; size: number; alpha: number; speed: number }[] = [];
    for (let i = 0; i < 60; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.7 + 0.2,
        speed: Math.random() * 0.015 + 0.005,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      for (const star of stars) {
        star.alpha += star.speed;
        if (star.alpha > 0.9 || star.alpha < 0.15) {
          star.speed = -star.speed;
        }
        ctx.fillStyle = darkMode
          ? `rgba(255, 255, 255, ${Math.abs(star.alpha)})`
          : `rgba(0, 0, 0, ${Math.abs(star.alpha * 0.5)})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      }
      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [darkMode]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative isolate overflow-hidden min-h-[min(100svh,64rem)] flex flex-col justify-between pt-32 md:pt-40">
      {/* Background Aurora Blobs matching sifath.me */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden [mask-image:linear-gradient(to_bottom,black_65%,transparent)]"
      >
        <div className="animate-aurora absolute -top-40 left-1/2 h-96 sm:h-144 w-96 sm:w-xl -translate-x-[70%] rounded-full bg-emerald-500/20 blur-[120px] will-change-transform" />
        <div className="animate-aurora absolute -top-20 left-1/2 h-80 sm:h-120 w-80 sm:w-120 -translate-x-[10%] rounded-full bg-violet-600/20 blur-[120px] will-change-transform [animation-delay:-9s]" />
        <div className="absolute bottom-0 left-1/2 h-64 sm:h-80 w-96 sm:w-160 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_80%)]"
      />

      {/* Main Hero Content */}
      <div className="container relative z-20 flex-1 flex flex-col items-center justify-center text-center">
        {/* Avatar with Orbiting Agent Icons */}
        <div className="mb-6">
          <div className="relative grid place-items-center p-8 sm:p-9">
            {/* Tooltip speech bubble */}
            {showTooltip && (
              <div className="pointer-events-none absolute -top-8 z-20 animate-in fade-in zoom-in-95 duration-200">
                <span className="glass rounded-full px-3 py-1 text-xs font-medium shadow-xl text-zinc-100 border border-white/20 whitespace-nowrap">
                  {portfolioConfig.heroGreeting}
                </span>
              </div>
            )}

            {/* Orbiting dashed ring */}
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-full border border-dashed border-white/10 dark:border-white/10"
            />

            {/* 3 Satellite Icons in continuous 40s orbit */}
            <div aria-hidden="true" className="absolute inset-0">
              <div className="absolute inset-0 animate-[spin_40s_linear_infinite]">
                {/* 0 deg: Claude */}
                <div className="absolute inset-0" style={{ transform: 'rotate(0deg)' }}>
                  <div className="absolute top-0 left-1/2" style={{ transform: 'translate(-50%, -50%) rotate(0deg)' }}>
                    <span className="bg-[#08080a] grid h-7 w-7 animate-[spin_40s_linear_infinite_reverse] place-items-center rounded-full border border-white/10 shadow-[0_4px_14px_-4px_rgb(0_0_0/0.8)]">
                      <ToolIcon name="Claude Code" className="shrink-0 h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>

                {/* 120 deg: Codex */}
                <div className="absolute inset-0" style={{ transform: 'rotate(120deg)' }}>
                  <div className="absolute top-0 left-1/2" style={{ transform: 'translate(-50%, -50%) rotate(-120deg)' }}>
                    <span className="bg-[#08080a] grid h-7 w-7 animate-[spin_40s_linear_infinite_reverse] place-items-center rounded-full border border-white/10 shadow-[0_4px_14px_-4px_rgb(0_0_0/0.8)]">
                      <ToolIcon name="Codex" className="shrink-0 h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>

                {/* 240 deg: Cursor */}
                <div className="absolute inset-0" style={{ transform: 'rotate(240deg)' }}>
                  <div className="absolute top-0 left-1/2" style={{ transform: 'translate(-50%, -50%) rotate(-240deg)' }}>
                    <span className="bg-[#08080a] grid h-7 w-7 animate-[spin_40s_linear_infinite_reverse] place-items-center rounded-full border border-white/10 shadow-[0_4px_14px_-4px_rgb(0_0_0/0.8)]">
                      <ToolIcon name="Cursor" className="shrink-0 h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Central Avatar Container */}
            <div className="relative z-10 h-24 w-24 sm:h-28 sm:w-28 transition-transform duration-300 hover:scale-105">
              <button
                onClick={() => setShowTooltip(!showTooltip)}
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                className="h-full w-full grid place-items-center rounded-full border border-white/15 bg-[#08080a] shadow-2xl cursor-pointer focus:outline-none overflow-hidden"
                aria-label="Toggle greeting"
              >
                {portfolioConfig.avatarImage ? (
                  <img
                    src={portfolioConfig.avatarImage}
                    alt={portfolioConfig.fullName}
                    className="h-full w-full object-cover object-[center_28%] rounded-full"
                    onError={(e) => {
                      (e.currentTarget as HTMLElement).style.display = 'none';
                    }}
                  />
                ) : (
                  <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white italic">
                    {portfolioConfig.avatarText}
                  </span>
                )}
              </button>

              {/* Status indicator dot positioned at bottom-right edge (50% overlap) matching Image 2 */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute top-[75%] left-[93.3%] -translate-x-1/2 -translate-y-1/2 h-[18px] w-[18px] rounded-full bg-[#28E28B] border-[2.5px] border-[#08080a] shadow-[0_0_10px_rgba(40,226,139,0.8)] z-20"
              />
            </div>
          </div>
        </div>

        {/* Hero Text Content */}
        <div className="max-w-3xl space-y-4">
          <p className="text-zinc-400 font-medium text-base sm:text-lg">
            {portfolioConfig.heroGreeting}
          </p>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-balance leading-[1.15]">
            <span className="block text-zinc-100">
              {portfolioConfig.headlineMain}
            </span>
            <span className="block text-2xl sm:text-4xl md:text-5xl font-serif font-normal italic mt-1.5 sm:mt-2.5 text-[#94a3b8] tracking-tight">
              <span>with </span>
              <span className="animated-gradient-text font-medium italic">
                AI agents
              </span>
              <span> as my teammates.</span>
            </span>
          </h1>

          <div className="text-zinc-400 text-sm sm:text-base font-mono pt-1 space-y-1">
            <p className="inline-flex items-center justify-center gap-1.5 flex-wrap">
              <span>{portfolioConfig.role}</span>
              <span className="opacity-60">/</span>
              <span className="inline-flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5 shrink-0 text-zinc-400" />
                <span>{portfolioConfig.location}</span>
              </span>
            </p>
            <p className="text-zinc-400">
              <span className="text-zinc-200 font-semibold">{localTime}</span> local time
            </p>
          </div>

          {/* Primary Action Button matching reference screenshot */}
          <div className="pt-4 flex justify-center">
            <button
              onClick={() => scrollTo('contact')}
              className="inline-flex items-center justify-center whitespace-nowrap font-medium h-10 sm:h-11 rounded-full px-6 text-sm sm:text-base bg-white hover:bg-zinc-100 text-zinc-950 shadow-md transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>Get in touch</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Ticker Marquee ("What I work with") matching sifath.me */}
      <div className="relative mt-16 sm:mt-24 border-t border-white/6 py-5 overflow-hidden">
        <div className="container mb-3 flex items-center justify-center">
          <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 font-mono">
            What I work with
          </p>
        </div>

        {/* Infinite scrolling ribbon */}
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="animate-marquee flex items-center gap-3 pr-3">
            {marqueeSkills.concat(marqueeSkills).map((skill, index) => (
              <span
                key={`${skill}-${index}`}
                className="glass flex items-center gap-2 rounded-full px-4 py-1.5 text-xs sm:text-sm text-zinc-300 transition-colors duration-300 hover:text-white hover:border-white/20 whitespace-nowrap border-white/8 bg-white/3"
              >
                <ToolIcon name={skill} className="h-4 w-4 shrink-0" />
                <span>{skill}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
