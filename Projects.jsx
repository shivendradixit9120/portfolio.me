import React from 'react';
import { ExternalLink, Github, FolderGit2, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

function ProjectBadge({ status, type }) {
  if (type === 'lime') {
    return (
      <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium px-2.5 py-1 rounded-full bg-accent-lime/10 text-accent-lime border border-accent-lime/25">
        <span className="w-1.5 h-1.5 rounded-full bg-accent-lime animate-pulse" />
        {status}
      </span>
    );
  }
  if (type === 'blue') {
    return (
      <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium px-2.5 py-1 rounded-full bg-accent-blue/10 text-accent-blue border border-accent-blue/25">
        <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
        {status}
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium px-2.5 py-1 rounded-full bg-surface text-secondary border border-border">
      {status}
    </span>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-24 border-t border-border/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-12">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-accent-lime">
            // 03. Featured Projects
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mt-2">
            Selected engineering prototypes
          </h2>
          <p className="text-secondary text-sm sm:text-base mt-2 max-w-2xl">
            Practical applications built to address real-world problems in agriculture and public safety. Clearly outlining the core problem, architecture, and current implementation progress.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {projectsData.map((project) => (
            <article
              key={project.id}
              className="p-6 sm:p-8 rounded-2xl bg-surface border border-border hover:border-secondary/30 transition-all shadow-card-subtle flex flex-col justify-between relative group"
            >
              {/* Header: Title & Status Badge */}
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-surface-subtle border border-border flex items-center justify-center text-accent-lime group-hover:border-accent-lime/40 transition-colors">
                      <FolderGit2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary tracking-tight">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <ProjectBadge status={project.badge} type={project.badgeType} />
                </div>

                {/* One-Liner Value Proposition */}
                <p className="text-sm font-medium text-accent-lime/90 mb-5">
                  {project.oneLiner}
                </p>

                {/* Problem Statement */}
                <div className="mb-4 p-4 rounded-xl bg-surface-subtle border border-border/80">
                  <div className="text-xs font-mono uppercase text-secondary/70 mb-1 flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 text-accent-blue" />
                    The Challenge
                  </div>
                  <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                {/* Contribution & Role */}
                <div className="mb-5">
                  <span className="text-xs font-mono uppercase text-secondary/70 block mb-1">
                    Role &amp; Contribution
                  </span>
                  <p className="text-xs sm:text-sm text-primary/90 leading-relaxed font-sans">
                    {project.role}
                  </p>
                </div>

                {/* Architecture Highlights */}
                {project.highlights && project.highlights.length > 0 && (
                  <div className="mb-6 space-y-1.5">
                    <span className="text-xs font-mono uppercase text-secondary/70 block mb-2">
                      Key Capabilities &amp; Architecture
                    </span>
                    {project.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-secondary leading-relaxed">
                        <span className="text-accent-lime mt-0.5">▹</span>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Bottom: Tech Stack & Action Links */}
              <div className="pt-6 border-t border-border mt-auto">
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-surface-subtle text-secondary border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links (Handles null URLs gracefully without fake links) */}
                <div className="flex items-center gap-3">
                  {project.liveDemo ? (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-bg bg-accent-lime hover:bg-accent-limeHover px-3.5 py-2 rounded-lg transition-colors shadow-glow-lime"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live Demo
                    </a>
                  ) : (
                    <span
                      title="Demo in active development"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-secondary/60 bg-surface-subtle px-3 py-1.5 rounded-lg border border-border cursor-not-allowed"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-secondary/40" />
                      Demo in Progress
                    </span>
                  )}

                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-secondary hover:text-primary px-3 py-1.5 rounded-lg border border-border hover:border-secondary/40 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      Repository
                    </a>
                  ) : (
                    <span
                      title="Code repository being prepared for public release"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-secondary/50 px-3 py-1.5 rounded-lg border border-border/50 cursor-not-allowed"
                    >
                      <Github className="w-3.5 h-3.5" />
                      Source (Pending Release)
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
