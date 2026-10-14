import React, { useState } from 'react';
import { Mail, Github, Linkedin, Copy, Check, ArrowUpRight, MessageSquare, Send } from 'lucide-react';
import { profileData } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 border-t border-border/60 relative">
      {/* Subtle ambient glow in contact */}
      <div className="absolute inset-0 bg-radial-glow opacity-60 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-accent-lime">
            // 05. Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-3 tracking-tight">
            Let's connect &amp; build together
          </h2>
          <p className="text-secondary text-sm sm:text-base mt-3 leading-relaxed max-w-xl mx-auto">
            I am always open to discussing internship opportunities, engineering collaborations, open-source projects, or tech discussions. Feel free to reach out directly.
          </p>

          {/* Contact Card */}
          <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-surface border border-border shadow-card-subtle text-left max-w-xl mx-auto relative overflow-hidden">
            <div className="flex items-center gap-2.5 text-xs font-mono text-accent-lime mb-3">
              <span className="w-2 h-2 rounded-full bg-accent-lime animate-pulse" />
              <span>Direct Communication</span>
            </div>

            <div className="text-sm text-secondary mb-6 leading-relaxed">
              Whether you are a recruiter, mentor, hackathon teammate, or fellow student, my inbox is open.
            </div>

            {/* Email Address & Quick Actions */}
            <div className="p-3.5 rounded-xl bg-surface-subtle border border-border flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-2.5 min-w-0">
                <Mail className="w-4 h-4 text-accent-lime flex-shrink-0" />
                <span className="font-mono text-xs sm:text-sm text-primary truncate select-all">
                  {profileData.contact.displayEmail}
                </span>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-auto">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-secondary hover:text-primary bg-surface border border-border hover:border-secondary/40 transition-colors"
                  aria-label="Copy email address to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-accent-lime" />
                      <span className="text-accent-lime">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${profileData.contact.email}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-bg bg-accent-lime hover:bg-accent-limeHover transition-colors shadow-glow-lime"
                >
                  <Send className="w-3 h-3" />
                  <span>Send</span>
                </a>
              </div>
            </div>

            {/* Social & Professional Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-border">
              <a
                href={profileData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-surface-subtle border border-border hover:border-secondary/40 transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <Github className="w-4 h-4 text-secondary group-hover:text-primary transition-colors" />
                  <span className="text-xs font-medium text-primary">GitHub Profile</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-secondary group-hover:text-accent-lime transition-colors" />
              </a>

              <a
                href={profileData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-surface-subtle border border-border hover:border-secondary/40 transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <Linkedin className="w-4 h-4 text-secondary group-hover:text-accent-blue transition-colors" />
                  <span className="text-xs font-medium text-primary">LinkedIn Network</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-secondary group-hover:text-accent-blue transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
