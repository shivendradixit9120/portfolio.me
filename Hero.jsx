import React from 'react';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Sparkles, Terminal } from 'lucide-react';
import { profileData } from '../data/portfolioData';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      {/* Ambient background glow & grid */}
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none bg-grid" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Eyebrow & Status Pill */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-surface border border-border text-accent-lime shadow-sm">
              <span className="w-2 h-2 rounded-full bg-accent-lime animate-pulse" />
              {profileData.eyebrow}
            </span>

            {profileData.status && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-secondary bg-surface/50 border border-border">
                <Sparkles className="w-3 h-3 text-accent-blue" />
                {profileData.status}
              </span>
            )}
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary leading-[1.15] mb-6">
            Building at the intersection of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-lime via-emerald-300 to-accent-blue">
              AI and the web.
            </span>
          </h1>

          {/* Supporting Bio */}
          <p className="text-base sm:text-lg text-secondary leading-relaxed mb-8 max-w-2xl font-normal">
            {profileData.bio}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent-lime hover:bg-accent-limeHover text-bg font-semibold text-sm transition-all shadow-glow-lime focus-visible:outline-offset-2"
            >
              Explore My Work
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-surface hover:bg-surface-hover text-primary border border-border hover:border-secondary/40 font-medium text-sm transition-colors focus-visible:outline-offset-2"
            >
              Let's Connect
              <ArrowUpRight className="w-4 h-4 text-accent-lime" />
            </a>
          </div>

          {/* Social Links & Terminal Indicator */}
          <div className="pt-6 border-t border-border/80 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <a
                href={profileData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-secondary hover:text-accent-lime transition-colors"
                aria-label="Shivendra Dixit GitHub profile"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <span className="text-border">·</span>

              <a
                href={profileData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-secondary hover:text-accent-blue transition-colors"
                aria-label="Shivendra Dixit LinkedIn profile"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-secondary/70">
              <Terminal className="w-3.5 h-3.5 text-accent-lime/80" />
              <span>GL Bajaj Institute of Tech &amp; Mgmt</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
