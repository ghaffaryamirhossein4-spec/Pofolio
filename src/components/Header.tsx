import React, { useState } from "react";
import { PageId, Language } from "../types";
import { ASSETS } from "../data/portfolioData";

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenCvModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  language,
  onLanguageChange,
  onOpenCvModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageId; labelEn: string; labelFa: string }[] = [
    { id: "about", labelEn: "About", labelFa: "درباره من" },
    { id: "skills", labelEn: "Skills", labelFa: "مهارت‌ها" },
    { id: "projects", labelEn: "Projects", labelFa: "پروژه‌ها" },
    { id: "experience", labelEn: "Experience", labelFa: "تجربیات" },
    { id: "contact", labelEn: "Contact", labelFa: "ارتباط" },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-xl border-b border-surface-container-high/60 shadow-[0_1px_8px_rgba(0,0,0,0.25)]">
      <div className="h-20 max-w-[1280px] mx-auto px-margin-mobile lg:px-margin flex items-center justify-between gap-space-md">
        {/* Brand & Monogram */}
        <div className="flex items-center gap-space-md shrink-0">
          <button
            onClick={() => handleNavClick("about")}
            className="flex items-center gap-space-sm group cursor-pointer text-left"
            title="Amirhosein Ghaffary Portfolio"
          >
            <img
              alt="Developer Monogram Logo"
              className="h-15 w-15 rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
              src={ASSETS.logoMonogram}
            />
            <div className="hidden sm:flex flex-col">
              <span className="font-label-md text-label-md text-on-surface tracking-tight leading-tight">
                Amirhosein Ghaffary
              </span>
              <span className="font-code-sm text-code-sm text-primary leading-none">
                fullstack.sys
              </span>
            </div>
          </button>

          {/* Status Indicator Pill */}
          <div className="hidden xl:inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded-full bg-surface-container-high/60 border border-surface-container-highest/40">
            <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_12px_2px_rgba(78,222,163,0.5)] animate-pulse"></span>
            <span className="font-code-sm text-code-sm text-on-surface-variant">
              Available for hire <span className="text-outline">/</span> آماده
              همکاری
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-space-xs px-space-xs py-space-xs rounded-xl bg-surface-container-lowest/70 border border-surface-container-high/60">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-space-md py-space-xs rounded-lg font-label-md text-label-md transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-surface-container-high text-primary shadow-[0_0_25px_-5px_rgba(6,182,212,0.35)] font-semibold"
                    : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/50"
                }`}
              >
                {language === "fa" ? item.labelFa : item.labelEn}
              </button>
            );
          })}
        </nav>

        {/* Right Actions: Lang Switcher, Socials, Profile Avatar */}
        <div className="flex items-center gap-space-sm shrink-0">
          {/* Dual Language Switcher */}
          <div className="flex items-center p-space-xs bg-surface-container-low rounded-full border border-surface-container-high/50">
            <button
              onClick={() => onLanguageChange("en")}
              className={`px-space-sm py-space-xs rounded-full font-code-sm text-code-sm transition-all duration-200 flex items-center gap-space-xs cursor-pointer ${
                language === "en"
                  ? "text-primary bg-surface-container-high shadow-sm font-semibold"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
              type="button"
              aria-label="Switch to English"
            >
              <span className="material-symbols-outlined text-[14px] leading-none text-primary">
                language
              </span>
              <span>EN</span>
            </button>
            <button
              onClick={() => onLanguageChange("fa")}
              className={`px-space-sm py-space-xs rounded-full font-code-sm text-code-sm transition-all duration-200 cursor-pointer ${
                language === "fa"
                  ? "text-secondary bg-surface-container-high shadow-sm font-semibold"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
              type="button"
              aria-label="تغییر زبان به فارسی"
            >
              <span>FA</span>
            </button>
          </div>

          {/* Social Quick Links */}
          <div className="hidden md:flex items-center gap-space-xs text-on-surface-variant">
            <a
              aria-label="Developer GitHub"
              className="w-9 h-9 rounded-lg flex items-center justify-center bg-surface-container-lowest hover:bg-surface-container-high hover:text-primary transition-colors border border-surface-container-high/40"
              href="https://github.com"
              rel="noreferrer"
              target="_blank"
              title="GitHub Profile"
            >
              <span className="material-symbols-outlined text-[18px]">
                terminal
              </span>
            </a>
            <a
              aria-label="Developer LinkedIn"
              className="w-9 h-9 rounded-lg flex items-center justify-center bg-surface-container-lowest hover:bg-surface-container-high hover:text-primary transition-colors border border-surface-container-high/40"
              href="https://linkedin.com"
              rel="noreferrer"
              target="_blank"
              title="LinkedIn Profile"
            >
              <span className="material-symbols-outlined text-[18px]">hub</span>
            </a>
            <a
              aria-label="Developer Email"
              className="w-9 h-9 rounded-lg flex items-center justify-center bg-surface-container-lowest hover:bg-surface-container-high hover:text-primary transition-colors border border-surface-container-high/40"
              href="mailto:contact@domain.dev"
              title="Send Direct Email"
            >
              <span className="material-symbols-outlined text-[18px]">
                alternate_email
              </span>
            </a>
          </div>

          <div className="h-6 w-px bg-surface-container-highest hidden sm:block"></div>

          {/* Profile Photo / Avatar Trigger for CV */}
          <button
            onClick={onOpenCvModal}
            className="shrink-0 group cursor-pointer relative"
            title="Inspect Verified Credentials / Curriculum Vitae"
            aria-label="View Resume"
          >
            <img
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover ring-2 ring-surface-container-high group-hover:ring-primary transition-all shadow-md"
              src={ASSETS.profileAvatar}
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-secondary border-2 border-surface rounded-full"></span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-9 h-9 rounded-lg bg-surface-container-low flex items-center justify-center text-on-surface hover:text-primary transition-colors"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-[22px]">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface-container-lowest border-b border-surface-container-high px-margin-mobile py-space-md flex flex-col gap-space-sm animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-space-md py-space-sm rounded-lg text-left font-label-md text-label-md flex items-center justify-between transition-colors ${
                  currentPage === item.id
                    ? "bg-surface-container-high text-primary font-semibold"
                    : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
                }`}
              >
                <span>{language === "fa" ? item.labelFa : item.labelEn}</span>
                {currentPage === item.id && (
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                )}
              </button>
            ))}
          </div>

          <div className="pt-space-sm border-t border-surface-container-high flex items-center justify-between">
            <button
              onClick={() => {
                onOpenCvModal();
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-space-xs text-primary font-code-sm text-code-sm"
            >
              <span className="material-symbols-outlined text-[16px]">
                description
              </span>
              <span>Curriculum Vitae (PDF)</span>
            </button>
            <div className="flex items-center gap-space-xs text-on-surface-variant">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 hover:text-primary"
              >
                <span className="material-symbols-outlined text-[18px]">
                  terminal
                </span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 hover:text-primary"
              >
                <span className="material-symbols-outlined text-[18px]">
                  hub
                </span>
              </a>
              <a
                href="mailto:contact@domain.dev"
                className="p-2 hover:text-primary"
              >
                <span className="material-symbols-outlined text-[18px]">
                  alternate_email
                </span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
