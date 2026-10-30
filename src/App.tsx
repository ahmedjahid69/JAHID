/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import StackSection from './components/StackSection';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';
import PlayModal from './components/PlayModal';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio_theme');
      if (saved) return saved === 'dark';
    }
    return true; // Match sifath.me dark baseline
  });

  const [playOpen, setPlayOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('portfolio_theme', darkMode ? 'dark' : 'light');
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      document.body.classList.remove('bg-white', 'text-zinc-900');
      document.body.classList.add('bg-[#08080a]', 'text-zinc-100');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      document.body.classList.remove('bg-[#08080a]', 'text-zinc-100');
      document.body.classList.add('bg-white', 'text-zinc-900');
    }
  }, [darkMode]);

  // Fallback IntersectionObserver for .reveal elements
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`min-h-screen selection:bg-emerald-500/20 selection:text-emerald-300 ${darkMode ? 'dark bg-[#08080a] text-zinc-100' : 'bg-white text-zinc-900'}`}>
      {/* Fixed Glass Navbar */}
      <Navbar
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
        onOpenPlay={() => setPlayOpen(true)}
      />

      {/* Main Single Page Content */}
      <main>
        {/* Hero Section with Aurora & Floating Agent Cursors */}
        <Hero darkMode={darkMode} />

        {/* About Section - Bento Grid */}
        <AboutSection darkMode={darkMode} />

        {/* Experience Section - Vertical Timeline */}
        <ExperienceSection darkMode={darkMode} />

        {/* Stack Section - Categorized Tools */}
        <StackSection darkMode={darkMode} />

        {/* Contact Section - Call to Action & Channels */}
        <ContactSection darkMode={darkMode} />
      </main>

      {/* Footer with Big Watermark */}
      <FooterSection darkMode={darkMode} />

      {/* Interactive AI Agent Play Sandbox */}
      <PlayModal
        isOpen={playOpen}
        onClose={() => setPlayOpen(false)}
        darkMode={darkMode}
      />
    </div>
  );
}
