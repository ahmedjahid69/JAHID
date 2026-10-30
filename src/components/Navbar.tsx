import { useState, useEffect } from 'react';
import { Mail, PhoneCall, Sun, Moon, Gamepad2, Menu, X } from 'lucide-react';
import { portfolioConfig } from '../data/portfolioData';

interface NavbarProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenPlay: () => void;
}

export default function Navbar({ darkMode, onToggleDarkMode, onOpenPlay }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'stack', 'contact'];
      const scrollPos = window.scrollY + 250;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="fixed inset-x-0 top-4 z-50 transition-[opacity,translate] duration-300">
      <div className="container">
        <nav
          className={`glass relative mx-auto flex max-w-3xl items-center justify-between rounded-full py-2 pr-3 pl-6 shadow-[0_8px_32px_-12px_rgb(0_0_0/0.6)] backdrop-blur-xl transition-colors duration-300 ${
            darkMode ? 'bg-white/4 text-white' : 'bg-white/80 text-zinc-900 border-zinc-200/80 shadow-zinc-200/50'
          }`}
        >
          {/* Logo */}
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="hover:text-emerald-400 font-serif text-2xl tracking-tight italic transition-colors duration-300 select-none cursor-pointer"
          >
            {portfolioConfig.brandName}
          </a>

          {/* Desktop Navigation Links */}
          <div className="flex items-center gap-x-5">
            <ul className="hidden items-center gap-1 md:flex">
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('about');
                  }}
                  className={`inline-block rounded-full px-3.5 py-1.5 text-sm transition-colors duration-300 cursor-pointer ${
                    activeSection === 'about'
                      ? 'text-emerald-400 bg-white/10 font-medium'
                      : darkMode
                      ? 'text-zinc-400 hover:text-white hover:bg-white/6'
                      : 'text-zinc-600 hover:text-zinc-950 hover:bg-black/5'
                  }`}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('experience');
                  }}
                  className={`inline-block rounded-full px-3.5 py-1.5 text-sm transition-colors duration-300 cursor-pointer ${
                    activeSection === 'experience'
                      ? 'text-emerald-400 bg-white/10 font-medium'
                      : darkMode
                      ? 'text-zinc-400 hover:text-white hover:bg-white/6'
                      : 'text-zinc-600 hover:text-zinc-950 hover:bg-black/5'
                  }`}
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#stack"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('stack');
                  }}
                  className={`inline-block rounded-full px-3.5 py-1.5 text-sm transition-colors duration-300 cursor-pointer ${
                    activeSection === 'stack'
                      ? 'text-emerald-400 bg-white/10 font-medium'
                      : darkMode
                      ? 'text-zinc-400 hover:text-white hover:bg-white/6'
                      : 'text-zinc-600 hover:text-zinc-950 hover:bg-black/5'
                  }`}
                >
                  Stack
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('contact');
                  }}
                  className={`inline-block rounded-full px-3.5 py-1.5 text-sm transition-colors duration-300 cursor-pointer ${
                    activeSection === 'contact'
                      ? 'text-emerald-400 bg-white/10 font-medium'
                      : darkMode
                      ? 'text-zinc-400 hover:text-white hover:bg-white/6'
                      : 'text-zinc-600 hover:text-zinc-950 hover:bg-black/5'
                  }`}
                >
                  Contact
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenPlay}
                  className="text-emerald-400 hover:bg-emerald-500/10 flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm transition-colors duration-300 font-medium"
                >
                  <Gamepad2 className="w-4 h-4" />
                  <span>Play</span>
                </button>
              </li>
            </ul>

            {/* Action Buttons on Right (Spaced cleanly matching reference image 2) */}
            <div className="flex items-center gap-x-5 sm:gap-x-6">
              {/* Mail */}
              <a
                href={`mailto:${portfolioConfig.email}`}
                aria-label="Email me"
                className={`inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors duration-300 hover:opacity-80 ${
                  darkMode ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-zinc-950'
                }`}
              >
                <Mail className="h-4 w-4 text-emerald-400" />
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${portfolioConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message me on WhatsApp"
                className={`inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors duration-300 hover:opacity-80 ${
                  darkMode ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-zinc-950'
                }`}
              >
                <svg role="img" aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 shrink-0 fill-[#25D366]">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>

              {/* Call */}
              <a
                href={`tel:${portfolioConfig.phoneNumber}`}
                aria-label="Call me"
                className={`inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors duration-300 hover:opacity-80 ${
                  darkMode ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-zinc-950'
                }`}
              >
                <PhoneCall className="h-4 w-4 text-emerald-400" />
              </a>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center">
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-expanded={mobileMenuOpen}
                  aria-label="Open menu"
                  className="grid h-8 w-8 place-items-center rounded-full transition-colors hover:bg-white/6"
                >
                  {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="glass mt-2 mx-auto max-w-3xl rounded-3xl p-5 shadow-2xl backdrop-blur-2xl md:hidden">
            <div className="flex flex-col gap-2">
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('about');
                }}
                className="text-left px-4 py-2.5 rounded-xl text-sm font-medium text-zinc-300 hover:bg-white/10 cursor-pointer block"
              >
                About
              </a>
              <a
                href="#experience"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('experience');
                }}
                className="text-left px-4 py-2.5 rounded-xl text-sm font-medium text-zinc-300 hover:bg-white/10 cursor-pointer block"
              >
                Experience
              </a>
              <a
                href="#stack"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('stack');
                }}
                className="text-left px-4 py-2.5 rounded-xl text-sm font-medium text-zinc-300 hover:bg-white/10 cursor-pointer block"
              >
                Stack
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('contact');
                }}
                className="text-left px-4 py-2.5 rounded-xl text-sm font-medium text-zinc-300 hover:bg-white/10 cursor-pointer block"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
