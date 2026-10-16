import React from 'react';
import { PageId, Language } from '../types';
import { ASSETS } from '../data/portfolioData';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, language }) => {
  const navItems: { id: PageId; labelEn: string; labelFa: string }[] = [
    { id: 'about', labelEn: 'About', labelFa: 'درباره من' },
    { id: 'skills', labelEn: 'Skills', labelFa: 'مهارت‌ها' },
    { id: 'projects', labelEn: 'Projects', labelFa: 'پروژه‌ها' },
    { id: 'experience', labelEn: 'Experience', labelFa: 'تجربیات' },
    { id: 'contact', labelEn: 'Contact', labelFa: 'ارتباط' }
  ];

  return (
    <footer className="w-full bg-surface-container-lowest/80 backdrop-blur-xl border-t border-surface-container-high/60 mt-space-xl">
      <div className="max-w-[1280px] mx-auto px-margin-mobile lg:px-margin py-space-xl flex flex-col md:flex-row items-center justify-between gap-space-lg">
        {/* Monogram Brand Lockup */}
        <div className="flex flex-col items-center md:items-start gap-space-xs">
          <div className="flex items-center gap-space-sm">
            <img
              alt="Developer Monogram Logo"
              className="h-6 w-auto object-contain opacity-75"
              src={ASSETS.logoMonogram}
            />
            <span className="font-label-md text-label-md text-on-surface tracking-wide">
              Amirhosein Ghaffary
            </span>
            <span className="font-code-sm text-code-sm text-outline">—</span>
            <span className="font-code-sm text-code-sm text-primary">v2.4.0</span>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant text-center md:text-start">
            © 2025 Kian Rafiei. Engineered with systems-level precision. All rights reserved.
          </p>
        </div>

        {/* Footer Nav Links */}
        <div className="flex flex-wrap items-center justify-center gap-space-md font-label-md text-label-md text-on-surface-variant">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-primary transition-colors cursor-pointer"
            >
              {language === 'fa' ? item.labelFa : item.labelEn}
            </button>
          ))}
        </div>

        {/* Footer Social Highways */}
        <div className="flex items-center gap-space-sm">
          <a
            aria-label="GitHub Profile"
            className="w-8 h-8 rounded-lg flex items-center justify-center bg-surface-container-low hover:bg-surface-container-high hover:text-on-surface text-on-surface-variant transition-colors border border-surface-container-high/40"
            href="https://github.com"
            rel="noreferrer"
            target="_blank"
            title="GitHub"
          >
            <span className="material-symbols-outlined text-[16px]">terminal</span>
          </a>
          <a
            aria-label="LinkedIn Profile"
            className="w-8 h-8 rounded-lg flex items-center justify-center bg-surface-container-low hover:bg-surface-container-high hover:text-on-surface text-on-surface-variant transition-colors border border-surface-container-high/40"
            href="https://linkedin.com"
            rel="noreferrer"
            target="_blank"
            title="LinkedIn"
          >
            <span className="material-symbols-outlined text-[16px]">hub</span>
          </a>
          <a
            aria-label="Email Address"
            className="w-8 h-8 rounded-lg flex items-center justify-center bg-surface-container-low hover:bg-surface-container-high hover:text-on-surface text-on-surface-variant transition-colors border border-surface-container-high/40"
            href="mailto:contact@domain.dev"
            title="Email"
          >
            <span className="material-symbols-outlined text-[16px]">alternate_email</span>
          </a>
        </div>
      </div>
    </footer>
  );
};
