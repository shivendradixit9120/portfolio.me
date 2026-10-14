import React from 'react';
import { Code, Terminal, Globe, Cpu, Wrench, CheckCircle2, Flame, Sparkles } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

// Map categories to appropriate icons
const categoryIcons = {
  "Programming": Code,
  "Core Computer Science": Terminal,
  "Web Development": Globe,
  "AI & Machine Learning": Cpu,
  "Developer Tools": Wrench,
};

// Map status badges to distinctive subtle styles
function StatusBadge({ status }) {
  if (status === 'Used in project') {
    return (
      <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded-md bg-accent-lime/10 text-accent-lime border border-accent-lime/20">
        <CheckCircle2 className="w-3 h-3" />
        Used in project
      </span>
    );
  }
  if (status === 'Practicing') {
    return (
      <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded-md bg-accent-blue/10 text-accent-blue border border-accent-blue/20">
        <Flame className="w-3 h-3" />
        Practicing
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded-md bg-surface text-secondary border border-border">
      <Sparkles className="w-3 h-3 text-secondary/60" />
      Learning
    </span>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-24 border-t border-border/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-12">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-accent-lime">
            // 02. Skills &amp; Competencies
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mt-2">
            Technical toolkit &amp; current focus
          </h2>
          <p className="text-secondary text-sm sm:text-base mt-2 max-w-2xl">
            Represented honestly with transparent status indicators — highlighting languages, foundational computer science concepts, and tools actively practiced.
          </p>

          {/* Legend */}
          <div className="mt-4 flex flex-wrap items-center gap-3 text-xs font-mono text-secondary">
            <span className="text-secondary/70">Legend:</span>
            <span className="inline-flex items-center gap-1 text-accent-lime bg-accent-lime/5 px-2 py-0.5 rounded border border-accent-lime/20">
              ● Used in project
            </span>
            <span className="inline-flex items-center gap-1 text-accent-blue bg-accent-blue/5 px-2 py-0.5 rounded border border-accent-blue/20">
              ● Practicing
            </span>
            <span className="inline-flex items-center gap-1 text-secondary bg-surface px-2 py-0.5 rounded border border-border">
              ● Learning
            </span>
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category) => {
            const Icon = categoryIcons[category.category] || Code;
            return (
              <div
                key={category.category}
                className="p-6 rounded-2xl bg-surface border border-border hover:border-secondary/30 transition-all shadow-card-subtle flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-surface-subtle border border-border flex items-center justify-center text-accent-lime">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-primary">
                        {category.category}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-secondary mb-5 leading-relaxed">
                    {category.description}
                  </p>

                  <div className="space-y-3">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-2.5 rounded-xl bg-surface-subtle border border-border/70 flex flex-col gap-1"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-sm font-medium text-primary">
                            {skill.name}
                          </span>
                          <StatusBadge status={skill.status} />
                        </div>
                        {skill.note && (
                          <span className="text-[11px] text-secondary/70 font-sans">
                            {skill.note}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
