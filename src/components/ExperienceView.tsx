import React, { useState } from 'react';
import { PageId, Language } from '../types';
import { EXPERIENCE_DATA, CERTIFICATIONS_DATA } from '../data/portfolioData';

interface ExperienceViewProps {
  onNavigate: (page: PageId) => void;
  language: Language;
  onOpenCvModal: () => void;
}

export const ExperienceView: React.FC<ExperienceViewProps> = ({
  onNavigate,
  language,
  onOpenCvModal
}) => {
  const [filterMode, setFilterMode] = useState<'all' | 'highlights'>('all');

  return (
    <div className="flex flex-col w-full pb-space-xl">
      {/* Dynamic Atmospheric Glow Accent */}
      <div className="relative w-full">
        <div className="absolute -top-12 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-20 right-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none"></div>

        {/* Telemetry Header Strip */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md pt-space-lg pb-space-xl">
          <div className="flex flex-col gap-space-xs max-w-2xl">
            <div className="flex items-center gap-space-sm font-label-sm text-label-sm text-primary tracking-widest uppercase">
              <span className="inline-block w-2 h-2 rounded-full bg-primary animate-ping"></span>
              <span>Career Log // مسار حرفه‌ای</span>
              <span className="text-outline">/</span>
              <span className="text-on-surface-variant font-code-sm text-code-sm">
                24 Months of Production Engineering
              </span>
            </div>
            <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
              Systems Trajectory
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Production-grade engineering across distributed microservices, reactive user
              interfaces, and cloud persistence layers. Delivered within high-velocity delivery cycles.
            </p>
          </div>

          {/* Quick Metrics Ribbon */}
          <div className="flex items-center gap-space-md bg-surface-container-low p-space-sm rounded-xl shadow-sm self-start md:self-auto border border-surface-container-high/60">
            <div className="px-space-md py-space-xs flex flex-col">
              <span className="font-code-sm text-code-sm text-on-surface-variant uppercase">
                Uptime Ratio
              </span>
              <span className="font-headline-sm text-headline-sm text-secondary font-code-md">
                99.98%
              </span>
            </div>
            <div className="w-px h-8 bg-surface-container-highest"></div>
            <div className="px-space-md py-space-xs flex flex-col">
              <span className="font-code-sm text-code-sm text-on-surface-variant uppercase">
                Latency Delta
              </span>
              <span className="font-headline-sm text-headline-sm text-primary font-code-md">
                -35.4%
              </span>
            </div>
            <div className="w-px h-8 bg-surface-container-highest"></div>
            <div className="px-space-md py-space-xs flex flex-col">
              <span className="font-code-sm text-code-sm text-on-surface-variant uppercase">
                Deployments
              </span>
              <span className="font-headline-sm text-headline-sm text-tertiary font-code-md">
                180+
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bento Stats & Key Milestones Strip */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-space-lg mb-space-xl">
        {/* Stat Card 1 */}
        <div className="bg-surface-container p-space-lg rounded-xl flex flex-col justify-between shadow-sm relative overflow-hidden group border border-surface-container-high/50">
          <div className="absolute -right-4 -bottom-4 opacity-5 text-on-surface group-hover:opacity-10 transition-opacity">
            <span className="material-symbols-outlined text-[120px]">bolt</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[20px]">speed</span>
            </div>
            <span className="font-code-sm text-code-sm text-secondary bg-surface-container-lowest px-space-sm py-space-xs rounded-full border border-secondary/30">
              P95 Optimized
            </span>
          </div>
          <div className="mt-space-md">
            <span className="font-headline-lg text-headline-lg text-on-surface">35% Cut</span>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs leading-relaxed">
              Mean endpoint response reduced from 420ms to 270ms via NestJS connection pooling and
              Redis in-memory caching.
            </p>
            <p className="font-body-sm text-body-sm text-primary mt-space-xs text-right dir-rtl" dir="rtl">
              کاهش ۳۵ درصدی تاخیر پاسخ سرور با بهینه‌سازی اتصال دیتابیس
            </p>
          </div>
        </div>

        {/* Stat Card 2 */}
        <div className="bg-surface-container p-space-lg rounded-xl flex flex-col justify-between shadow-sm relative overflow-hidden group border border-surface-container-high/50">
          <div className="absolute -right-4 -bottom-4 opacity-5 text-on-surface group-hover:opacity-10 transition-opacity">
            <span className="material-symbols-outlined text-[120px]">layers</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary">
              <span className="material-symbols-outlined text-[20px]">transform</span>
            </div>
            <span className="font-code-sm text-code-sm text-primary bg-surface-container-lowest px-space-sm py-space-xs rounded-full border border-primary/30">
              Core Web Vitals
            </span>
          </div>
          <div className="mt-space-md">
            <span className="font-headline-lg text-headline-lg text-on-surface">Next.js 14</span>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs leading-relaxed">
              Spearheaded legacy SPA migration to Next.js App Router, boosting Lighthouse SEO &amp;
              Performance scores from 68 to 97.
            </p>
            <p className="font-body-sm text-body-sm text-secondary mt-space-xs text-right dir-rtl" dir="rtl">
              بازنویسی معماری فرانت‌اند و ارتقای امتیاز عملکرد به ۹۷
            </p>
          </div>
        </div>

        {/* Stat Card 3: Interactive SVG Telemetry Radar */}
        <div className="bg-surface-container p-space-lg rounded-xl flex flex-col justify-between shadow-sm border border-surface-container-high/50">
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-tertiary">
              <span className="material-symbols-outlined text-[20px]">monitoring</span>
            </div>
            <span className="font-code-sm text-code-sm text-on-surface-variant">24-Month Trajectory</span>
          </div>
          {/* Visual sparkline / progress diagram */}
          <div className="py-space-sm flex items-center gap-space-md">
            <div className="w-20 h-20 shrink-0 relative flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-surface-container-highest"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.5"
                ></path>
                <path
                  className="text-primary transition-all duration-1000"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeDasharray="100, 100"
                  strokeLinecap="round"
                  strokeWidth="3.5"
                ></path>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="font-label-md text-label-md text-on-surface">2.0y</span>
                <span className="font-code-sm text-code-sm text-primary -mt-1 font-bold">Full</span>
              </div>
            </div>
            <div className="flex flex-col gap-space-xs min-w-0">
              <div className="flex items-center gap-space-xs">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                <span className="font-code-sm text-code-sm text-on-surface">14m Senior Full-Stack</span>
              </div>
              <div className="flex items-center gap-space-xs">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                <span className="font-code-sm text-code-sm text-on-surface-variant">
                  10m Junior Dev Phase
                </span>
              </div>
              <span className="font-body-sm text-body-sm text-on-surface-variant truncate">
                0 to 1 Architecture Ownership
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between text-on-surface-variant font-code-sm text-code-sm pt-space-xs border-t border-surface-container-highest/60">
            <span>Sprint Velocity: High</span>
            <span className="text-secondary font-label-md">Active</span>
          </div>
        </div>
      </section>

      {/* Interactive Timeline Control Toggle */}
      <div className="flex items-center justify-between mb-space-lg">
        <div className="flex items-center gap-space-sm">
          <span className="material-symbols-outlined text-primary text-[20px]">account_tree</span>
          <h2 className="font-headline-md text-headline-md text-on-surface">Chronological Sequence</h2>
          <span className="font-code-sm text-code-sm text-on-surface-variant">/ توالی تجارب کاری</span>
        </div>
        <div className="flex items-center gap-space-xs bg-surface-container-low p-space-xs rounded-xl border border-surface-container-high">
          <button
            onClick={() => setFilterMode('all')}
            className={`px-space-md py-space-xs rounded-lg font-label-md text-label-md transition-all cursor-pointer ${
              filterMode === 'all'
                ? 'bg-surface-container-high text-primary shadow-sm font-semibold'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
            type="button"
          >
            All Roles
          </button>
          <button
            onClick={() => setFilterMode('highlights')}
            className={`px-space-md py-space-xs rounded-lg font-label-md text-label-md transition-all cursor-pointer ${
              filterMode === 'highlights'
                ? 'bg-surface-container-high text-secondary shadow-sm font-semibold'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
            type="button"
          >
            Impact Only
          </button>
        </div>
      </div>

      {/* Primary Architectural Timeline Section */}
      <div className="relative w-full flex flex-col gap-space-xl mb-space-xl">
        {/* Continuous Vertical Trace Line */}
        <div className="absolute left-4 md:left-8 top-6 bottom-6 w-0.5 bg-surface-container-highest pointer-events-none"></div>

        {/* ENTRY 1: Full-Stack Software Engineer */}
        <div className="relative flex flex-col md:flex-row items-start gap-space-lg group">
          {/* Node Indicator */}
          <div className="z-10 ml-2 md:ml-6 shrink-0 w-5 h-5 rounded-full bg-surface-container-lowest flex items-center justify-center border border-primary/40">
            <span className="w-3 h-3 rounded-full bg-primary shadow-[0_0_12px_2px_rgba(76,215,246,0.6)]"></span>
          </div>

          {/* Main Node Content Container */}
          <div className="flex-1 w-full bg-surface-container p-space-lg md:p-space-xl rounded-xl shadow-md transition-all duration-300 hover:shadow-xl border border-surface-container-high/60">
            {/* Header row */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-sm pb-space-md border-b border-surface-container-highest/60">
              <div className="flex flex-col gap-space-xs">
                <div className="flex flex-wrap items-center gap-space-sm">
                  <h3 className="font-headline-md text-headline-md text-on-surface font-semibold tracking-tight">
                    {EXPERIENCE_DATA[0].roleEn}
                  </h3>
                  <span className="px-space-sm py-space-xs rounded-full font-code-sm text-code-sm bg-primary/10 text-primary border border-primary/20">
                    {EXPERIENCE_DATA[0].periodEn} / {EXPERIENCE_DATA[0].periodFa}
                  </span>
                  <span className="px-space-sm py-space-xs rounded-full font-code-sm text-code-sm bg-secondary/10 text-secondary border border-secondary/20">
                    {EXPERIENCE_DATA[0].durationEn}
                  </span>
                </div>
                {/* Company & Location */}
                <div className="flex flex-wrap items-center gap-space-sm text-on-surface-variant font-label-md text-label-md">
                  <span className="text-primary font-medium">{EXPERIENCE_DATA[0].company}</span>
                  <span>•</span>
                  <span className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-[16px]">location_on</span>
                    {EXPERIENCE_DATA[0].location}
                  </span>
                  <span>•</span>
                  <span className="font-code-sm text-code-sm text-outline">
                    {EXPERIENCE_DATA[0].tag}
                  </span>
                </div>
              </div>

              {/* Bilingual Quick Translation Switch / Display Pill */}
              <div className="flex items-center gap-space-xs bg-surface-container-low px-space-sm py-space-xs rounded-lg self-start lg:self-center border border-surface-container-highest">
                <span className="material-symbols-outlined text-[16px] text-primary">translate</span>
                <span className="font-code-sm text-code-sm text-on-surface">
                  {EXPERIENCE_DATA[0].roleFa}
                </span>
              </div>
            </div>

            {/* Role Narrative & Technical Contributions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-lg pt-space-sm">
              {/* English Technical Description */}
              <div className="flex flex-col gap-space-sm">
                <span className="font-code-sm text-code-sm text-outline uppercase tracking-wider">
                  Scope &amp; Architecture (EN)
                </span>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {EXPERIENCE_DATA[0].scopeEn}
                </p>
                <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface pt-space-xs">
                  {EXPERIENCE_DATA[0].bulletsEn.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-space-xs">
                      <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Persian Technical Description (RTL) */}
              <div
                className="flex flex-col gap-space-sm bg-surface-container-low p-space-md rounded-xl text-right border border-surface-container-highest"
                dir="rtl"
              >
                <span className="font-code-sm text-code-sm text-secondary uppercase tracking-wider">
                  شرح وظایف و دستاوردها (فارسی)
                </span>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {EXPERIENCE_DATA[0].scopeFa}
                </p>
                <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface pt-space-xs">
                  {EXPERIENCE_DATA[0].bulletsFa.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-space-xs">
                      <span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">
                        done_all
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Visual Highlight Metric Strip inside Card */}
            {EXPERIENCE_DATA[0].keyMilestone && (
              <div className="mt-space-lg p-space-md bg-surface-container-highest/60 rounded-xl flex flex-wrap items-center justify-between gap-space-md border border-surface-container-highest">
                <div className="flex items-center gap-space-md">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[18px]">rocket_launch</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-md text-label-md text-on-surface">Key Milestone</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      {EXPERIENCE_DATA[0].keyMilestone.title}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-space-xs">
                  {EXPERIENCE_DATA[0].keyMilestone.badges.map((b) => (
                    <span
                      key={b}
                      className="font-code-sm text-code-sm text-secondary bg-surface-container-lowest px-space-sm py-space-xs rounded-full border border-surface-container-highest"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack Badges Row */}
            <div className="flex flex-wrap items-center gap-space-xs mt-space-md pt-space-sm border-t border-surface-container-highest/60">
              <span className="font-code-sm text-code-sm text-outline mr-space-xs">Stack:</span>
              {EXPERIENCE_DATA[0].stack.map((stk, i) => (
                <span
                  key={stk}
                  className="px-space-md py-space-xs rounded-full bg-surface-container-low font-code-sm text-code-sm text-on-surface flex items-center gap-space-xs border border-surface-container-high"
                >
                  {i < 4 && <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-sm"></span>}
                  {stk}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ENTRY 2: Junior Full-Stack Developer */}
        {filterMode === 'all' && (
          <div className="relative flex flex-col md:flex-row items-start gap-space-lg group">
            {/* Node Indicator */}
            <div className="z-10 ml-2 md:ml-6 shrink-0 w-5 h-5 rounded-full bg-surface-container-lowest flex items-center justify-center border border-secondary/40">
              <span className="w-3 h-3 rounded-full bg-secondary shadow-[0_0_10px_2px_rgba(78,222,163,0.5)]"></span>
            </div>

            {/* Main Node Content Container */}
            <div className="flex-1 w-full bg-surface-container p-space-lg md:p-space-xl rounded-xl shadow-md transition-all duration-300 hover:shadow-xl border border-surface-container-high/60">
              {/* Header row */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-sm pb-space-md border-b border-surface-container-highest/60">
                <div className="flex flex-col gap-space-xs">
                  <div className="flex flex-wrap items-center gap-space-sm">
                    <h3 className="font-headline-md text-headline-md text-on-surface font-semibold tracking-tight">
                      {EXPERIENCE_DATA[1].roleEn}
                    </h3>
                    <span className="px-space-sm py-space-xs rounded-full font-code-sm text-code-sm bg-surface-container-high text-on-surface-variant border border-surface-container-highest">
                      {EXPERIENCE_DATA[1].periodEn}
                    </span>
                    <span className="px-space-sm py-space-xs rounded-full font-code-sm text-code-sm bg-secondary/10 text-secondary border border-secondary/20">
                      {EXPERIENCE_DATA[1].durationEn}
                    </span>
                  </div>
                  {/* Company & Location */}
                  <div className="flex flex-wrap items-center gap-space-sm text-on-surface-variant font-label-md text-label-md">
                    <span className="text-secondary font-medium">{EXPERIENCE_DATA[1].company}</span>
                    <span>•</span>
                    <span className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-[16px]">domain</span>
                      {EXPERIENCE_DATA[1].location}
                    </span>
                    <span>•</span>
                    <span className="font-code-sm text-code-sm text-outline">
                      {EXPERIENCE_DATA[1].tag}
                    </span>
                  </div>
                </div>

                {/* Bilingual Quick Translation Switch / Display Pill */}
                <div className="flex items-center gap-space-xs bg-surface-container-low px-space-sm py-space-xs rounded-lg self-start lg:self-center border border-surface-container-highest">
                  <span className="material-symbols-outlined text-[16px] text-secondary">translate</span>
                  <span className="font-code-sm text-code-sm text-on-surface">
                    {EXPERIENCE_DATA[1].roleFa}
                  </span>
                </div>
              </div>

              {/* Role Narrative & Technical Contributions */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-lg pt-space-sm">
                {/* English Technical Description */}
                <div className="flex flex-col gap-space-sm">
                  <span className="font-code-sm text-code-sm text-outline uppercase tracking-wider">
                    Responsibilities &amp; Impact (EN)
                  </span>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {EXPERIENCE_DATA[1].scopeEn}
                  </p>
                  <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface pt-space-xs">
                    {EXPERIENCE_DATA[1].bulletsEn.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-space-xs">
                        <span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">
                          check_circle
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Persian Technical Description (RTL) */}
                <div
                  className="flex flex-col gap-space-sm bg-surface-container-low p-space-md rounded-xl text-right border border-surface-container-highest"
                  dir="rtl"
                >
                  <span className="font-code-sm text-code-sm text-secondary uppercase tracking-wider">
                    شرح وظایف و دستاوردها (فارسی)
                  </span>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {EXPERIENCE_DATA[1].scopeFa}
                  </p>
                  <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface pt-space-xs">
                    {EXPERIENCE_DATA[1].bulletsFa.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-space-xs">
                        <span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">
                          done_all
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tech Stack Badges Row */}
              <div className="flex flex-wrap items-center gap-space-xs mt-space-md pt-space-sm border-t border-surface-container-highest/60">
                <span className="font-code-sm text-code-sm text-outline mr-space-xs">Stack:</span>
                {EXPERIENCE_DATA[1].stack.map((stk, i) => (
                  <span
                    key={stk}
                    className="px-space-md py-space-xs rounded-full bg-surface-container-low font-code-sm text-code-sm text-on-surface flex items-center gap-space-xs border border-surface-container-high"
                  >
                    {i === 0 && <span className="w-1.5 h-1.5 rounded-full bg-secondary shadow-sm"></span>}
                    {stk}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Deep Dive Highlights & Operational Excellence Impact Grid */}
      <section className="mb-space-xl">
        <div className="flex flex-col gap-space-xs mb-space-lg">
          <div className="flex items-center gap-space-xs text-primary font-code-sm text-code-sm uppercase">
            <span className="material-symbols-outlined text-[16px]">verified</span>
            <span>Operational Excellence // برتری عملیاتی</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            Performance Milestones &amp; Team Impact
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
          {/* Highlight Card 1 */}
          <div className="bg-surface-container p-space-lg rounded-xl flex flex-col justify-between shadow-sm border border-surface-container-high/60">
            <div className="flex flex-col gap-space-sm">
              <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[24px]">architecture</span>
              </div>
              <h4 className="font-headline-sm text-headline-sm text-on-surface">
                Microservice Decoupling
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Transitioned a legacy monorail backend into independent containerized Node.js services
                communicating through asynchronous RabbitMQ queues, eliminating single points of
                bottleneck.
              </p>
              <div className="text-right dir-rtl font-body-sm text-body-sm text-primary" dir="rtl">
                تفکیک ساختار مونو‌لیت به سرویس‌های مستقل بر بستر صف پیام
              </div>
            </div>
            <div className="pt-space-md mt-space-md border-t border-surface-container-highest flex items-center justify-between">
              <span className="font-code-sm text-code-sm text-outline">Fault Isolation</span>
              <span className="font-code-sm text-code-sm text-secondary font-semibold">
                Zero Cascade Failures
              </span>
            </div>
          </div>

          {/* Highlight Card 2 */}
          <div className="bg-surface-container p-space-lg rounded-xl flex flex-col justify-between shadow-sm border border-surface-container-high/60">
            <div className="flex flex-col gap-space-sm">
              <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-[24px]">group_work</span>
              </div>
              <h4 className="font-headline-sm text-headline-sm text-on-surface">
                Team Mentorship &amp; Standards
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Standardized TypeScript strict configs, linting rules, and git commit hooks across the
                6-engineer pod. Authored comprehensive internal documentation for local staging setups.
              </p>
              <div className="text-right dir-rtl font-body-sm text-body-sm text-secondary" dir="rtl">
                یکپارچه‌سازی فرآیندهای کدنویسی، ارزیابی پول‌ریکوئست‌ها و آموزش
              </div>
            </div>
            <div className="pt-space-md mt-space-md border-t border-surface-container-highest flex items-center justify-between">
              <span className="font-code-sm text-code-sm text-outline">Code Review Rate</span>
              <span className="font-code-sm text-code-sm text-primary font-semibold">
                120+ PRs Reviewed
              </span>
            </div>
          </div>

          {/* Highlight Card 3 */}
          <div className="bg-surface-container p-space-lg rounded-xl flex flex-col justify-between shadow-sm border border-surface-container-high/60">
            <div className="flex flex-col gap-space-sm">
              <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-tertiary">
                <span className="material-symbols-outlined text-[24px]">database</span>
              </div>
              <h4 className="font-headline-sm text-headline-sm text-on-surface">
                Data Query Optimization
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Audited execution plans across PostgreSQL databases with `EXPLAIN ANALYZE`. Replaced
                sequential table scans with composite indexes and CTEs, avoiding expensive locks.
              </p>
              <div className="text-right dir-rtl font-body-sm text-body-sm text-tertiary" dir="rtl">
                بهینه‌سازی ایندکس‌ها و کوئری‌های پیچیده پایگاه داده
              </div>
            </div>
            <div className="pt-space-md mt-space-md border-t border-surface-container-highest flex items-center justify-between">
              <span className="font-code-sm text-code-sm text-outline">Query Cost Reduction</span>
              <span className="font-code-sm text-code-sm text-secondary font-semibold">
                -60% Disk I/O
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Terminal Sandbox: Career Architecture Code Snippet */}
      <section className="bg-surface-container-lowest rounded-xl p-space-md md:p-space-lg shadow-xl mb-space-xl border border-surface-container-high/60">
        {/* Chrome Bar */}
        <div className="flex items-center justify-between pb-space-sm mb-space-sm border-b border-surface-container-high">
          <div className="flex items-center gap-space-xs">
            <span className="w-3 h-3 rounded-full bg-error inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-secondary-container inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-secondary inline-block"></span>
            <span className="ml-space-sm font-code-sm text-code-sm text-on-surface-variant">
              career_manifest.ts — 24mo_runtime
            </span>
          </div>
          <div className="flex items-center gap-space-sm text-on-surface-variant font-code-sm text-code-sm">
            <span className="text-secondary flex items-center gap-1 font-semibold">
              <span className="w-2 h-2 rounded-full bg-secondary"></span> live
            </span>
            <span>UTF-8</span>
          </div>
        </div>

        {/* Monospaced Code Block */}
        <div className="font-code-sm text-code-sm overflow-x-auto leading-relaxed text-on-surface-variant">
          <p>
            <span className="text-tertiary">import</span> &#123;{' '}
            <span className="text-primary">SoftwareEngineer</span>,{' '}
            <span className="text-primary">CareerTrack</span> &#125;{' '}
            <span className="text-tertiary">from</span>{' '}
            <span className="text-secondary">'@industry/standards'</span>;
          </p>
          <p className="mt-space-xs">
            <span className="text-outline">// System state definition: 2 years continuous production iteration</span>
          </p>
          <p>
            <span className="text-tertiary">export const</span>{' '}
            <span className="text-primary font-bold">developerTrajectory</span>:{' '}
            <span className="text-tertiary">CareerTrack</span> = &#123;
          </p>
          <p className="pl-space-md">
            yearsOfExperience: <span className="text-secondary font-bold">2.0</span>,
          </p>
          <p className="pl-space-md">
            primaryFocus: [<span className="text-secondary">'Next.js'</span>,{' '}
            <span className="text-secondary">'NestJS'</span>,{' '}
            <span className="text-secondary">'Distributed Systems'</span>,{' '}
            <span className="text-secondary">'PostgreSQL'</span>],
          </p>
          <p className="pl-space-md">metrics: &#123;</p>
          <p className="pl-space-xl">
            latencyImprovement: <span className="text-secondary font-semibold">'-35%'</span>,
          </p>
          <p className="pl-space-xl">
            reliabilityRecord: <span className="text-secondary font-semibold">'99.98%'</span>,
          </p>
          <p className="pl-space-xl">
            persianBilingualProficiency:{' '}
            <span className="text-primary font-bold">true</span>{' '}
            <span className="text-outline">// تسلط کامل به ارتباطات فنی و تیمی</span>
          </p>
          <p className="pl-space-md">&#125;,</p>
          <p className="pl-space-md">
            status: <span className="text-secondary">'SCALING_NEW_CHALLENGES'</span>
          </p>
          <p>&#125;;</p>
        </div>
      </section>

      {/* Educational Background & Technical Certifications Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-space-lg mb-space-lg">
        {/* Education Card */}
        <div className="bg-surface-container p-space-lg md:p-space-xl rounded-xl shadow-sm flex flex-col justify-between border border-surface-container-high/60">
          <div>
            <div className="flex items-center justify-between mb-space-md">
              <div className="flex items-center gap-space-sm">
                <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[20px]">school</span>
                </div>
                <div>
                  <span className="font-code-sm text-code-sm text-primary uppercase">
                    Academic Background
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">
                    Education // تحصیلات
                  </h3>
                </div>
              </div>
              <span className="px-space-sm py-space-xs rounded-full font-code-sm text-code-sm bg-surface-container-low text-on-surface-variant border border-surface-container-highest">
                2019 — 2023
              </span>
            </div>

            <div className="flex flex-col gap-space-xs mt-space-md">
              <div className="flex items-center justify-between">
                <h4 className="font-headline-sm text-headline-sm text-on-surface font-medium">
                  B.Sc. in Software Engineering
                </h4>
                <span className="font-code-sm text-code-sm text-secondary font-semibold">
                  Graduated
                </span>
              </div>
              <p className="font-label-md text-label-md text-primary">
                Amirkabir University of Technology (Tehran Polytechnic)
              </p>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
                Focused on distributed systems, computational complexity, object-oriented design
                patterns, and relational database management.
              </p>
              <div
                className="bg-surface-container-low p-space-sm rounded-lg mt-space-sm text-right dir-rtl border border-surface-container-high/50"
                dir="rtl"
              >
                <span className="font-label-md text-label-md text-on-surface">
                  کارشناسی مهندسی نرم‌افزار - دانشگاه صنعتی امیرکبیر (پلی‌تکنیک تهران)
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                  تمرکز بر طراحی سیستم‌های توزیع‌شده، الگوریتم‌ها و پایگاه‌های داده ساختاریافته.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-space-xs pt-space-md mt-space-md border-t border-surface-container-highest">
            <span className="material-symbols-outlined text-outline text-[16px]">menu_book</span>
            <span className="font-code-sm text-code-sm text-on-surface-variant">
              Core Coursework: Operating Systems, Distributed Algorithms, Data Structures
            </span>
          </div>
        </div>

        {/* Certifications & Verification Card */}
        <div className="bg-surface-container p-space-lg md:p-space-xl rounded-xl shadow-sm flex flex-col justify-between border border-surface-container-high/60">
          <div>
            <div className="flex items-center justify-between mb-space-md">
              <div className="flex items-center gap-space-sm">
                <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined text-[20px]">workspace_premium</span>
                </div>
                <div>
                  <span className="font-code-sm text-code-sm text-secondary uppercase">
                    Accreditations
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">
                    Certifications // مدارک تخصصی
                  </h3>
                </div>
              </div>
              <span className="font-code-sm text-code-sm text-primary font-bold">Verified</span>
            </div>

            <div className="flex flex-col gap-space-md mt-space-md">
              {CERTIFICATIONS_DATA.map((cert) => (
                <div
                  key={cert.id}
                  className="flex items-start justify-between gap-space-md bg-surface-container-low p-space-sm rounded-lg border border-surface-container-high/50"
                >
                  <div className="flex items-start gap-space-sm">
                    <div
                      className={`w-8 h-8 rounded bg-surface-container-high flex items-center justify-center text-${cert.color} shrink-0 mt-0.5`}
                    >
                      <span className="material-symbols-outlined text-[18px]">{cert.icon}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-md text-label-md text-on-surface">
                        {cert.title}
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        {cert.issuer}
                      </span>
                    </div>
                  </div>
                  <span className="font-code-sm text-code-sm text-outline shrink-0">{cert.year}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between pt-space-md mt-space-md border-t border-surface-container-highest">
            <span className="font-code-sm text-code-sm text-on-surface-variant">
              All credentials verified via digital ledger
            </span>
            <button
              onClick={onOpenCvModal}
              className="font-code-sm text-code-sm text-primary hover:underline flex items-center gap-space-xs cursor-pointer"
            >
              <span>View Public Credentials</span>
              <span className="material-symbols-outlined text-[14px]">open_in_new</span>
            </button>
          </div>
        </div>
      </section>

      {/* Interactive Action Banner */}
      <section className="bg-gradient-to-r from-surface-container to-surface-container-high p-space-lg md:p-space-xl rounded-xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-space-lg border border-surface-container-high/60">
        <div className="flex items-center gap-space-md">
          <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-on-primary shrink-0 shadow-md">
            <span className="material-symbols-outlined text-[24px]">contact_support</span>
          </div>
          <div className="flex flex-col">
            <h4 className="font-headline-sm text-headline-sm text-on-surface">
              Need a specialized technical reference?
            </h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Complete engineering logs, git repository commit histories, and peer endorsements
              available upon verified request.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-space-sm shrink-0">
          <button
            onClick={() => onNavigate('contact')}
            className="px-space-lg py-space-sm rounded-lg bg-primary text-on-primary font-label-md text-label-md shadow-md hover:bg-primary-container transition-all flex items-center gap-space-xs cursor-pointer font-bold"
          >
            <span className="material-symbols-outlined text-[18px]">mail</span>
            <span>Initiate Inquiry</span>
          </button>
          <button
            onClick={() => onNavigate('projects')}
            className="px-space-lg py-space-sm rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md hover:bg-surface-container-low transition-all cursor-pointer border border-surface-container-high"
          >
            Inspect Artifacts
          </button>
        </div>
      </section>
    </div>
  );
};
