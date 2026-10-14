import React from 'react';
import { Compass, Sparkles, Award, ArrowRight } from 'lucide-react';
import { learningJourneyData, certificationsData } from '../data/portfolioData';

export default function LearningJourney() {
  return (
    <section id="journey" className="py-20 sm:py-24 border-t border-border/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-12">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-accent-lime">
            // 04. Continuous Learning
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mt-2">
            Currently exploring &amp; expanding
          </h2>
          <p className="text-secondary text-sm sm:text-base mt-2 max-w-2xl">
            A transparent overview of the technical areas I am actively studying, practicing, and sharpening through code.
          </p>
        </div>

        {/* Learning Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {learningJourneyData.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-surface border border-border hover:border-secondary/30 transition-all shadow-card-subtle flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="text-xs font-mono text-accent-blue bg-accent-blue/10 px-2.5 py-0.5 rounded-full border border-accent-blue/20">
                    {item.timeframe}
                  </span>
                  <Compass className="w-4 h-4 text-secondary/60" />
                </div>

                <h3 className="text-lg font-semibold text-primary mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-secondary leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border/70">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-surface-subtle text-secondary/80 border border-border"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications & Verified Credentials Area */}
        <div className="mt-12 p-6 rounded-2xl bg-surface/50 border border-border">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-lg bg-surface border border-border flex items-center justify-center text-accent-lime">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-primary">
                Certifications &amp; Credentials
              </h3>
              <p className="text-xs text-secondary">
                Verified coursework, technical certifications, and formal credentials.
              </p>
            </div>
          </div>

          {certificationsData && certificationsData.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {certificationsData.map((cert, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-surface border border-border">
                  <div className="text-sm font-semibold text-primary">{cert.title}</div>
                  <div className="text-xs text-secondary mt-1">{cert.issuer} · {cert.issueDate}</div>
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-accent-lime hover:underline mt-2 font-mono"
                    >
                      Verify Credential <ArrowRight className="w-3 h-3" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-3 p-4 rounded-xl bg-surface-subtle border border-border/60 text-xs text-secondary flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-accent-blue mt-0.5 flex-shrink-0" />
              <span>
                Verified credentials (e.g., Cisco Networking / Cybersecurity, academic honors, or online specializations) will be linked here once credential IDs are confirmed.
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
