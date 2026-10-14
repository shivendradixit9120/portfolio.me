import React from 'react';
import { BookOpen, Cpu, Layers, Sparkles } from 'lucide-react';
import { profileData } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-24 border-t border-border/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-12">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-accent-lime">
            // 01. About Me
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mt-2">
            Engineering with curiosity &amp; code
          </h2>
          <p className="text-secondary text-sm sm:text-base mt-2 max-w-2xl">
            A snapshot of my academic journey, engineering mindset, and current technical pursuits.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Bio / Narrative */}
          <div className="lg:col-span-7 space-y-5 text-secondary text-sm sm:text-base leading-relaxed">
            <p>
              I am currently in my <span className="text-primary font-medium">second year of B.Tech</span> in Computer Science and Engineering, specializing in <span className="text-accent-lime font-medium">Artificial Intelligence &amp; Machine Learning</span> at GL Bajaj Institute of Technology and Management.
            </p>
            <p>
              My focus is driven by a deep interest in turning algorithmic ideas into practical software. Whether experimenting with smart agricultural decision-support systems or building real-time location-aware safety dashboards, I believe the best way to develop engineering intuition is by building real prototypes.
            </p>
            <p>
              I approach software development with an honest student mindset: committing to strong computer science fundamentals, staying curious about emerging AI workflows, and continuously refining code quality through peer feedback, documentation, and iteration.
            </p>

            {/* Quick Principles / Focus list */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-surface border border-border">
                <div className="flex items-center gap-2.5 text-primary font-semibold text-sm mb-1.5">
                  <Cpu className="w-4 h-4 text-accent-lime" />
                  <span>AI &amp; Data Integration</span>
                </div>
                <p className="text-xs text-secondary leading-relaxed">
                  Exploring practical machine learning pipelines, prompt engineering, and intelligent assistants.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-surface border border-border">
                <div className="flex items-center gap-2.5 text-primary font-semibold text-sm mb-1.5">
                  <Layers className="w-4 h-4 text-accent-blue" />
                  <span>Modern Web Interfaces</span>
                </div>
                <p className="text-xs text-secondary leading-relaxed">
                  Crafting clean, responsive frontends in React with structured state and semantic accessibility.
                </p>
              </div>
            </div>
          </div>

          {/* Academic Context & Snapshot Card */}
          <div className="lg:col-span-5">
            <div className="p-6 rounded-2xl bg-surface border border-border shadow-card-subtle relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-lime/5 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
                <span className="text-xs font-mono text-secondary uppercase tracking-wider">Academic Profile</span>
                <span className="text-xs font-mono text-accent-lime bg-accent-lime/10 px-2.5 py-0.5 rounded-full border border-accent-lime/20">
                  Active Student
                </span>
              </div>

              <div className="space-y-4 text-xs font-mono">
                <div>
                  <span className="text-secondary/70 block mb-1">Institution</span>
                  <span className="text-primary font-medium text-sm block">GL Bajaj Institute of Technology and Management</span>
                </div>

                <div>
                  <span className="text-secondary/70 block mb-1">Degree &amp; Branch</span>
                  <span className="text-primary font-medium text-sm block">B.Tech in Computer Science &amp; Engineering</span>
                </div>

                <div>
                  <span className="text-secondary/70 block mb-1">Specialization</span>
                  <span className="text-accent-blue font-medium text-sm block">Artificial Intelligence &amp; Machine Learning</span>
                </div>

                <div>
                  <span className="text-secondary/70 block mb-1">Current Standing</span>
                  <span className="text-primary font-medium text-sm block">2nd Year (Undergraduate)</span>
                </div>

                <div>
                  <span className="text-secondary/70 block mb-1">Learning Philosophy</span>
                  <p className="text-secondary font-sans text-xs leading-relaxed mt-1">
                    "Build to understand. Write code that solves real problems, iterate transparently, and master the fundamentals first."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
