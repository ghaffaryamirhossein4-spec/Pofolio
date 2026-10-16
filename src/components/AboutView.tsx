import React, { useState } from 'react';
import { PageId, Language } from '../types';
import { ASSETS } from '../data/portfolioData';

interface AboutViewProps {
  onNavigate: (page: PageId) => void;
  language: Language;
  onOpenCvModal: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  onNavigate,
  language,
  onOpenCvModal
}) => {
  const [emailCopied, setEmailCopied] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState<string>('Engine initialized. All healthchecks reporting normal.');
  const [terminalRunning, setTerminalRunning] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('contact@domain.dev');
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2500);
  };

  const runTerminalCommand = () => {
    setTerminalRunning(true);
    setTerminalOutput('Pinging distributed cluster & node endpoints...');
    setTimeout(() => {
      setTerminalOutput('Cluster: OK (Latency 42ms) • Memory: 124MB • Uptime: 99.98%');
      setTerminalRunning(false);
    }, 800);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Dynamic Bilingual Atmosphere & Hero Section */}
      <section className="relative w-full pt-6 pb-12 overflow-hidden">
        {/* Ambient Backdrop Gradient Blurs */}
        <div className="absolute -top-24 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 -right-24 w-80 h-80 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-tertiary-container/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Header Meta Tag / Availability Indicator */}
        <div className="flex flex-wrap items-center justify-between gap-space-md mb-8">
          <div className="inline-flex items-center gap-space-sm px-4 py-1.5 rounded-full bg-surface-container-low shadow-sm border border-surface-container-high/60">
            <span className="w-2.5 h-2.5 rounded-full bg-secondary shadow-[0_0_10px_rgba(78,222,163,0.8)] animate-pulse"></span>
            <span className="font-code-sm text-code-sm text-on-surface-variant">
              SYS_STATUS: ACTIVE
            </span>
            <span className="text-outline font-code-sm">•</span>
            <span className="font-code-sm text-code-sm text-primary tracking-wide">
              OPEN TO REMOTE &amp; HYBRID ROLES
            </span>
          </div>

          {/* Quick Language Mode Hint Pill */}
          <div className="inline-flex items-center gap-space-xs font-code-sm text-code-sm text-on-surface-variant bg-surface-container-lowest px-3 py-1 rounded-md shadow-sm border border-surface-container-high/40">
            <span className="material-symbols-outlined text-[15px] text-primary">translate</span>
            <span>Dual Language Mode: EN / فارسی</span>
          </div>
        </div>

        {/* Main Hero Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          {/* Left Column: Bilingual Titles, Value Proposition & Actions */}
          <div className="lg:col-span-7 flex flex-col gap-space-md">
            {/* Overline Tagging */}
            <div className="flex items-center gap-2 text-primary font-code-sm text-code-sm uppercase tracking-wider">
              <span>// 01_ENGINEERING_PROFILE</span>
              <span className="w-12 h-px bg-primary/30"></span>
              <span className="text-on-surface-variant font-code-sm">EST. 2023</span>
            </div>

            {/* Symmetrical Bilingual Main Headline */}
            <div className="flex flex-col gap-2">
              <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight leading-tight">
                Full-Stack Developer
              </h1>
              <div className="text-end" dir="rtl">
                <span className="font-headline-lg text-headline-lg text-secondary-fixed font-semibold tracking-normal block text-transparent bg-clip-text bg-gradient-to-l from-secondary to-primary">
                  توسعه‌دهنده فول‌استک و زیرساخت وب
                </span>
              </div>
            </div>

            {/* Subtitle & Descriptive Engineering Narrative */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md pt-2">
              {/* English Summary */}
              <div className="bg-surface-container-low p-space-md rounded-xl shadow-sm flex flex-col justify-between border border-surface-container-high/50">
                <div className="flex items-center gap-space-xs mb-2 text-primary">
                  <span className="material-symbols-outlined text-[18px]">verified</span>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider">
                    Core Proposition
                  </span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  2 years of professional craftsmanship engineering scalable web apps, high-throughput
                  REST/GraphQL APIs, and resilient data engines with minimalist front-end ergonomics.
                </p>
              </div>

              {/* Persian Summary (RTL) */}
              <div
                className="bg-surface-container-low p-space-md rounded-xl shadow-sm flex flex-col justify-between text-right border border-surface-container-high/50"
                dir="rtl"
              >
                <div className="flex items-center gap-space-xs mb-2 text-secondary">
                  <span className="material-symbols-outlined text-[18px]">bolt</span>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider">
                    ماموریت تخصصی
                  </span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  ۲ سال تجربه حرفه‌ای در معماری سیستم‌های توزیع‌شده، پیاده‌سازی APIهای کارآمد با معماری
                  تمیز، و خلق رابط‌های مدرن با پرفورمنس پایدار و مقیاس‌پذیر.
                </p>
              </div>
            </div>

            {/* Primary Call to Actions */}
            <div className="flex flex-wrap items-center gap-space-md pt-4">
              <button
                onClick={() => onNavigate('projects')}
                className="inline-flex items-center gap-space-sm px-6 py-3.5 rounded-lg bg-primary font-label-md text-label-md text-on-primary font-bold shadow-[0_0_20px_rgba(6,182,212,0.35)] hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">layers</span>
                <span>View Selected Projects</span>
                <span className="text-on-primary/60 font-code-sm">/</span>
                <span className="font-body-sm">مشاهده پروژه‌ها</span>
              </button>

              <button
                onClick={onOpenCvModal}
                className="inline-flex items-center gap-space-sm px-5 py-3.5 rounded-lg bg-surface-container-high font-label-md text-label-md text-on-surface hover:bg-surface-bright transition-all shadow-sm cursor-pointer border border-surface-container-highest"
              >
                <span className="material-symbols-outlined text-[20px] text-primary">download</span>
                <span>Download CV (EN &amp; FA)</span>
              </button>

              <a
                aria-label="GitHub Source"
                className="w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-colors shadow-sm border border-surface-container-high"
                href="https://github.com"
                rel="noreferrer"
                target="_blank"
                title="GitHub Repositories"
              >
                <span className="material-symbols-outlined text-[22px]">code</span>
              </a>
            </div>

            {/* Quick Live Telemetry Ticker */}
            <div className="flex flex-wrap items-center gap-space-md font-code-sm text-code-sm text-on-surface-variant pt-2">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                Latency: &lt;45ms
              </span>
              <span className="text-outline">|</span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                Stack: TypeScript / Node / Go / Next.js
              </span>
              <span className="text-outline hidden sm:inline">|</span>
              <span className="hidden sm:inline text-secondary-fixed">
                تهران / Tehran (UTC+3.5)
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Code Workspace & System Visualizer */}
          <div className="lg:col-span-5 flex flex-col gap-space-md">
            {/* Interactive Terminal Card */}
            <div className="w-full bg-surface-container-lowest rounded-xl shadow-xl overflow-hidden flex flex-col border border-surface-container-high/60">
              {/* Terminal Chrome Bar */}
              <div className="bg-surface-container-low px-4 py-3 flex items-center justify-between border-b border-surface-container-high/40">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ef4444]/80"></span>
                  <span className="w-3 h-3 rounded-full bg-[#eab308]/80"></span>
                  <span className="w-3 h-3 rounded-full bg-[#22c55e]/80"></span>
                </div>
                <div className="font-code-sm text-code-sm text-on-surface-variant flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px] text-primary">terminal</span>
                  <span>engineer.config.ts</span>
                </div>
                <div className="font-code-sm text-code-sm text-outline">v2.4</div>
              </div>

              {/* Code Body with Syntax Highlights */}
              <div className="p-space-lg font-code-sm text-code-sm leading-relaxed overflow-x-auto bg-surface-container-lowest">
                <p className="text-outline mb-1">// Production runtime configuration</p>
                <p>
                  <span className="text-tertiary">export const</span>{' '}
                  <span className="text-primary font-semibold">developer</span> = &#123;
                </p>
                <div className="pl-5 flex flex-col gap-0.5">
                  <p>
                    <span className="text-on-surface-variant">name:</span>{' '}
                    <span className="text-secondary">'Kian Rafiei / کیان رافعی'</span>,
                  </p>
                  <p>
                    <span className="text-on-surface-variant">experienceYears:</span>{' '}
                    <span className="text-primary-container font-semibold">2.0</span>,
                  </p>
                  <p>
                    <span className="text-on-surface-variant">focus:</span> [
                    <span className="text-secondary">'Distributed Systems'</span>,{' '}
                    <span className="text-secondary">'React UI/UX'</span>],
                  </p>
                  <p>
                    <span className="text-on-surface-variant">currentStack:</span> &#123;
                  </p>
                  <div className="pl-5 flex flex-col gap-0.5">
                    <p>
                      <span className="text-on-surface-variant">frontend:</span> [
                      <span className="text-secondary">'Next.js 14'</span>,{' '}
                      <span className="text-secondary">'TypeScript'</span>,{' '}
                      <span className="text-secondary">'Tailwind'</span>],
                    </p>
                    <p>
                      <span className="text-on-surface-variant">backend:</span> [
                      <span className="text-secondary">'Node.js'</span>,{' '}
                      <span className="text-secondary">'Go'</span>,{' '}
                      <span className="text-secondary">'GraphQL'</span>,{' '}
                      <span className="text-secondary">'REST'</span>],
                    </p>
                    <p>
                      <span className="text-on-surface-variant">database:</span> [
                      <span className="text-secondary">'PostgreSQL'</span>,{' '}
                      <span className="text-secondary">'Redis'</span>,{' '}
                      <span className="text-secondary">'Prisma'</span>],
                    </p>
                    <p>
                      <span className="text-on-surface-variant">devops:</span> [
                      <span className="text-secondary">'Docker'</span>,{' '}
                      <span className="text-secondary">'CI/CD'</span>,{' '}
                      <span className="text-secondary">'Cloudflare Workers'</span>]
                    </p>
                  </div>
                  <p>&#125;,</p>
                  <p>
                    <span className="text-on-surface-variant">availableForWork:</span>{' '}
                    <span className="text-secondary-fixed font-bold">true</span>,
                  </p>
                  <p>
                    <span className="text-on-surface-variant">languages:</span> [
                    <span className="text-secondary">'English (Fluent)'</span>,{' '}
                    <span className="text-secondary">'فارسی (زبان مادری)'</span>]
                  </p>
                </div>
                <p>&#125;;</p>

                {/* Interactive Status-Check Prompt */}
                <div className="mt-4 pt-3 bg-surface-container-low/50 -mx-2 px-3 py-2 rounded-lg border border-surface-container-high/40">
                  <div className="flex items-center justify-between text-outline text-xs">
                    <button
                      onClick={runTerminalCommand}
                      disabled={terminalRunning}
                      className="text-primary hover:underline flex items-center gap-1 cursor-pointer"
                      title="Run live terminal check"
                    >
                      <span>$ kian --status-check</span>
                      <span className="material-symbols-outlined text-[13px]">refresh</span>
                    </button>
                    <span className="text-secondary text-[11px] font-semibold">
                      {terminalRunning ? 'TESTING...' : 'READY (100%)'}
                    </span>
                  </div>
                  <div className="text-primary font-semibold text-xs mt-1">
                    &gt; {terminalOutput}
                  </div>
                </div>
              </div>
            </div>

            {/* Micro Bio Card Below Terminal */}
            <div className="bg-surface-container p-space-md rounded-xl shadow-md flex items-center justify-between gap-space-md border border-surface-container-high/50">
              <div className="flex items-center gap-space-sm min-w-0">
                <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center shrink-0 text-primary">
                  <span className="material-symbols-outlined text-[22px]">developer_mode_tv</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-label-md text-label-md text-on-surface truncate">
                    Full Lifecycle Architect
                  </span>
                  <span className="font-code-sm text-code-sm text-on-surface-variant truncate">
                    Ideation → Schema → Wire → Deployment
                  </span>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded bg-surface-container-lowest font-code-sm text-code-sm text-secondary shrink-0 border border-surface-container-high">
                L3 Stack
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics & Real-time Counters Bento Strip */}
      <section className="w-full py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {/* Metric 1: Experience */}
          <div className="bg-surface-container-low p-space-lg rounded-xl shadow-md relative overflow-hidden group hover:bg-surface-container transition-all border border-surface-container-high/50">
            <div className="flex items-center justify-between mb-4">
              <span className="p-2.5 rounded-lg bg-surface-container-high text-primary">
                <span className="material-symbols-outlined text-[24px]">history_toggle_off</span>
              </span>
              <span className="font-code-sm text-code-sm px-2 py-0.5 rounded bg-surface-container-lowest text-on-surface-variant border border-surface-container-high">
                EXPERIENCE
              </span>
            </div>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
                2+
              </span>
              <span className="font-label-md text-label-md text-primary font-bold">Years Prof.</span>
            </div>
            <div className="flex flex-col">
              <span className="font-body-md text-body-md text-on-surface-variant">
                Production Engineering
              </span>
              <span className="font-body-sm text-body-sm text-secondary-fixed mt-1" dir="rtl">
                ۲+ سال تجربه مهندسی نرم‌افزار حرفه‌ای
              </span>
            </div>
          </div>

          {/* Metric 2: Completed Projects */}
          <div className="bg-surface-container-low p-space-lg rounded-xl shadow-md relative overflow-hidden group hover:bg-surface-container transition-all border border-surface-container-high/50">
            <div className="flex items-center justify-between mb-4">
              <span className="p-2.5 rounded-lg bg-surface-container-high text-secondary">
                <span className="material-symbols-outlined text-[24px]">check_circle</span>
              </span>
              <span className="font-code-sm text-code-sm px-2 py-0.5 rounded bg-surface-container-lowest text-on-surface-variant border border-surface-container-high">
                SHIPPED
              </span>
            </div>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
                15+
              </span>
              <span className="font-label-md text-label-md text-secondary font-bold">Deployments</span>
            </div>
            <div className="flex flex-col">
              <span className="font-body-md text-body-md text-on-surface-variant">
                From scratch to cloud host
              </span>
              <span className="font-body-sm text-body-sm text-secondary-fixed mt-1" dir="rtl">
                ۱۵+ پروژه پیاده‌سازی و نهایی‌شده
              </span>
            </div>
          </div>

          {/* Metric 3: Reliability & Uptime */}
          <div className="bg-surface-container-low p-space-lg rounded-xl shadow-md relative overflow-hidden group hover:bg-surface-container transition-all border border-surface-container-high/50">
            <div className="flex items-center justify-between mb-4">
              <span className="p-2.5 rounded-lg bg-surface-container-high text-primary-container">
                <span className="material-symbols-outlined text-[24px]">security</span>
              </span>
              <span className="font-code-sm text-code-sm px-2 py-0.5 rounded bg-surface-container-lowest text-on-surface-variant border border-surface-container-high">
                RELIABILITY
              </span>
            </div>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
                99.9%
              </span>
              <span className="font-label-md text-label-md text-primary-container font-bold">
                SLA Quality
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-body-md text-body-md text-on-surface-variant">
                Zero-loss DB schemas &amp; tests
              </span>
              <span className="font-body-sm text-body-sm text-secondary-fixed mt-1" dir="rtl">
                تفکر کیفیت‌محور با حداکثر پایداری سرور
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Bio & Engineering Philosophy (Asymmetric Bento Grid) */}
      <section className="w-full py-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 text-primary font-code-sm text-code-sm uppercase tracking-wider mb-1">
              <span>// 02_PHILOSOPHY &amp; CAPABILITIES</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">About My Craft</h2>
          </div>
          <div className="hidden sm:block text-right" dir="rtl">
            <span className="font-headline-md text-headline-md text-on-surface-variant font-medium">
              درباره سبک و متدولوژی مهندسی
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* 7-Col Main Bio Card with Rich Visuals */}
          <div className="lg:col-span-7 bg-surface-container-low p-space-xl rounded-xl shadow-md flex flex-col justify-between gap-space-lg border border-surface-container-high/60">
            <div className="flex flex-col gap-space-md">
              <div className="flex items-center gap-space-sm text-primary">
                <span className="material-symbols-outlined text-[26px]">precision_manufacturing</span>
                <span className="font-label-md text-label-md uppercase tracking-wider font-semibold">
                  Bridging Ergonomics &amp; Cloud Infra
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface font-semibold leading-snug">
                Crafting resilient backends paired with high-polish responsive user interfaces.
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Over the past two years, I have navigated high-growth environments creating both the
                backbone data pipelines and the final user pixels. I treat state management, cache
                invalidation, network latency, and typography with equal respect. Whether optimizing a
                complex SQL query to run under 10ms or building buttery smooth animated charts, my
                workflow prioritizes long-term maintainability.
              </p>
              {/* Bilingual Parallel Excerpt in Persian */}
              <div className="bg-surface-container p-space-md rounded-lg text-right border border-surface-container-highest" dir="rtl">
                <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                  تمرکز من بر اتصال معماری‌های پایدار بک‌اند به اینترفیس‌های بسیار سریع است. نوشتن کدهای
                  ماژولار، درک عمیق از تایپ‌سیفتی (TypeScript) و استفاده حساب‌شده از منابع دیتابیس در کنار
                  بهینه‌سازی تجربه کاربری، اصول بنیادین هر خط کدی است که می‌نویسم.
                </p>
              </div>
            </div>

            {/* Architectural Visual Flowchart SVG */}
            <div className="w-full bg-surface-container-lowest p-space-md rounded-xl shadow-inner mt-4 border border-surface-container-high/40">
              <div className="flex items-center justify-between text-outline font-code-sm text-code-sm mb-3">
                <span>DATA &amp; INTERFACE TOPOLOGY</span>
                <span className="text-secondary font-semibold">HEALTH: 100% PASS</span>
              </div>
              {/* Inline Technical SVG Chart */}
              <svg
                className="w-full h-auto text-on-surface"
                fill="none"
                viewBox="0 0 700 130"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Client Layer */}
                <rect className="fill-surface-container-high" height="80" rx="8" width="130" x="10" y="25"></rect>
                <text className="fill-primary font-code-sm text-[12px] font-semibold" textAnchor="middle" x="75" y="55">
                  CLIENT UI
                </text>
                <text className="fill-on-surface-variant text-[10px]" textAnchor="middle" x="75" y="75">
                  Next.js / React 18
                </text>
                <text className="fill-outline text-[9px]" textAnchor="middle" x="75" y="90">
                  Tailwind &amp; State
                </text>

                {/* Connector 1 */}
                <path className="text-primary/60" d="M140 65 L210 65" stroke="currentColor" strokeDasharray="4 4"></path>
                <polygon className="fill-primary" points="210,65 202,60 202,70"></polygon>
                <text className="fill-outline font-code-sm text-[9px]" textAnchor="middle" x="175" y="58">
                  JSON / GQL
                </text>

                {/* Gateway Layer */}
                <rect className="fill-surface-container-high" height="80" rx="8" width="130" x="210" y="25"></rect>
                <text className="fill-secondary font-code-sm text-[12px] font-semibold" textAnchor="middle" x="275" y="55">
                  API GATEWAY
                </text>
                <text className="fill-on-surface-variant text-[10px]" textAnchor="middle" x="275" y="75">
                  Node / Express / Go
                </text>
                <text className="fill-outline text-[9px]" textAnchor="middle" x="275" y="90">
                  JWT Auth &amp; Rate-Limit
                </text>

                {/* Connector 2 */}
                <path className="text-secondary/60" d="M340 65 L410 65" stroke="currentColor" strokeDasharray="4 4"></path>
                <polygon className="fill-secondary" points="410,65 402,60 402,70"></polygon>
                <text className="fill-outline font-code-sm text-[9px]" textAnchor="middle" x="375" y="58">
                  TCP Pool
                </text>

                {/* Services & DB Layer */}
                <rect className="fill-surface-container-high" height="80" rx="8" width="130" x="410" y="25"></rect>
                <text className="fill-tertiary font-code-sm text-[12px] font-semibold" textAnchor="middle" x="475" y="55">
                  SERVICES
                </text>
                <text className="fill-on-surface-variant text-[10px]" textAnchor="middle" x="475" y="75">
                  Micro-workers / Queue
                </text>
                <text className="fill-outline text-[9px]" textAnchor="middle" x="475" y="90">
                  Redis Cache 1.2ms
                </text>

                {/* Connector 3 */}
                <path className="text-tertiary-container/60" d="M540 65 L610 65" stroke="currentColor"></path>
                <polygon className="fill-tertiary-container" points="610,65 602,60 602,70"></polygon>

                {/* Persistence Layer */}
                <rect className="fill-surface-container-high" height="80" rx="8" width="80" x="610" y="25"></rect>
                <text className="fill-primary-fixed-dim font-code-sm text-[11px] font-semibold" textAnchor="middle" x="650" y="55">
                  SQL DB
                </text>
                <text className="fill-on-surface-variant text-[10px]" textAnchor="middle" x="650" y="75">
                  PostgreSQL
                </text>
                <text className="fill-secondary text-[9px]" textAnchor="middle" x="650" y="90">
                  ACID Safe
                </text>
              </svg>
            </div>
          </div>

          {/* 5-Col Work Environment & Personal Focus Mosaic */}
          <div className="lg:col-span-5 flex flex-col gap-space-md">
            {/* Developer Profile & Workstation Visual */}
            <div className="bg-surface-container-low p-space-md rounded-xl shadow-md flex flex-col gap-space-md border border-surface-container-high/60">
              <div className="flex items-center justify-between">
                <span className="font-label-md text-label-md text-on-surface font-semibold">
                  Workspace &amp; Engineering Lab
                </span>
                <span className="font-code-sm text-code-sm text-primary">ENV: PROD</span>
              </div>
              <div className="w-full h-44 rounded-lg overflow-hidden relative shadow-inner border border-surface-container-high">
                <img
                  className="w-full h-full object-cover"
                  src={ASSETS.workspaceMain}
                  alt="A clean modern developer desk setup with dual ultra-wide monitors"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-on-surface">
                  <span className="font-code-sm text-code-sm bg-surface/90 px-2.5 py-1 rounded backdrop-blur-md border border-surface-container-high">
                    Local Node: UTC+03:30
                  </span>
                  <span className="font-code-sm text-code-sm text-secondary bg-surface/90 px-2 py-1 rounded border border-surface-container-high">
                    Fast Fiber 1 Gbps
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between text-on-surface font-label-md text-label-md">
                  <span>Code Quality Standard</span>
                  <span className="text-primary font-code-sm">A+ (ESLint / Prettier / CI)</span>
                </div>
                {/* Custom Progress Bar */}
                <div className="w-full h-2 rounded-full bg-surface-container-highest overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-1000"
                    style={{ width: '94%' }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Quick Experience Highlights Card */}
            <div className="bg-surface-container-low p-space-md rounded-xl shadow-md flex flex-col gap-3 border border-surface-container-high/60">
              <span className="font-label-md text-label-md text-on-surface font-semibold flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-secondary">commit</span>
                Recent Engineering Milestones
              </span>
              <div className="flex flex-col gap-3 text-body-sm text-body-sm">
                <div className="p-space-sm rounded-lg bg-surface-container flex items-start gap-3 border border-surface-container-high/40">
                  <span className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0"></span>
                  <div className="flex flex-col">
                    <span className="font-label-md text-on-surface">Microservice Optimization</span>
                    <span className="text-on-surface-variant font-code-sm text-xs">
                      Reduced payload parsing latency by 42% utilizing Node cluster workers and Redis query caching.
                    </span>
                  </div>
                </div>
                <div className="p-space-sm rounded-lg bg-surface-container flex items-start gap-3 border border-surface-container-high/40">
                  <span className="w-2 h-2 rounded-full bg-secondary mt-1.5 shrink-0"></span>
                  <div className="flex flex-col">
                    <span className="font-label-md text-on-surface">Modern RTL UI Systems</span>
                    <span className="text-on-surface-variant font-code-sm text-xs">
                      Architected bi-directional design token libraries with seamless zero-reflash layout flipping.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Stack Chips & Skills Spectrum */}
      <section className="w-full py-10">
        <div className="bg-surface-container-low p-space-xl rounded-xl shadow-lg flex flex-col gap-space-lg border border-surface-container-high/60">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md">
            <div>
              <div className="flex items-center gap-2 text-primary font-code-sm text-code-sm uppercase tracking-wider mb-1">
                <span>// 03_TECH_SPECTRUM</span>
              </div>
              <h2 className="font-headline-md text-headline-md text-on-surface font-bold">
                Battle-Tested Technologies
              </h2>
            </div>
            <div className="font-code-sm text-code-sm text-on-surface-variant bg-surface-container px-3 py-1.5 rounded-lg border border-surface-container-high">
              Updated for 2025 LTS Releases
            </div>
          </div>

          {/* Category Filterable Stack Pills */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
            {/* Frontend */}
            <div className="bg-surface-container p-space-md rounded-xl flex flex-col gap-3 border border-surface-container-high/40">
              <div className="flex items-center gap-2 text-primary font-label-md text-label-md font-semibold">
                <span className="material-symbols-outlined text-[20px]">web</span>
                <span>Frontend &amp; UI</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-surface-container-high font-code-sm text-code-sm text-on-surface inline-flex items-center gap-1.5 border border-surface-container-highest">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>Next.js 14
                </span>
                <span className="px-3 py-1 rounded-full bg-surface-container-high font-code-sm text-code-sm text-on-surface inline-flex items-center gap-1.5 border border-surface-container-highest">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>React
                </span>
                <span className="px-3 py-1 rounded-full bg-surface-container-high font-code-sm text-code-sm text-on-surface border border-surface-container-highest">
                  TypeScript
                </span>
                <span className="px-3 py-1 rounded-full bg-surface-container-high font-code-sm text-code-sm text-on-surface border border-surface-container-highest">
                  Tailwind CSS
                </span>
                <span className="px-3 py-1 rounded-full bg-surface-container-high font-code-sm text-code-sm text-on-surface border border-surface-container-highest">
                  Redux / Zustand
                </span>
                <span className="px-3 py-1 rounded-full bg-surface-container-high font-code-sm text-code-sm text-on-surface border border-surface-container-highest">
                  Framer Motion
                </span>
              </div>
            </div>

            {/* Backend & Systems */}
            <div className="bg-surface-container p-space-md rounded-xl flex flex-col gap-3 border border-surface-container-high/40">
              <div className="flex items-center gap-2 text-secondary font-label-md text-label-md font-semibold">
                <span className="material-symbols-outlined text-[20px]">dns</span>
                <span>Backend &amp; Core</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-surface-container-high font-code-sm text-code-sm text-on-surface inline-flex items-center gap-1.5 border border-surface-container-highest">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>Node.js
                </span>
                <span className="px-3 py-1 rounded-full bg-surface-container-high font-code-sm text-code-sm text-on-surface border border-surface-container-highest">
                  Express / Nest
                </span>
                <span className="px-3 py-1 rounded-full bg-surface-container-high font-code-sm text-code-sm text-on-surface border border-surface-container-highest">
                  RESTful APIs
                </span>
                <span className="px-3 py-1 rounded-full bg-surface-container-high font-code-sm text-code-sm text-on-surface border border-surface-container-highest">
                  GraphQL
                </span>
                <span className="px-3 py-1 rounded-full bg-surface-container-high font-code-sm text-code-sm text-on-surface border border-surface-container-highest">
                  Golang (Basic)
                </span>
                <span className="px-3 py-1 rounded-full bg-surface-container-high font-code-sm text-code-sm text-on-surface border border-surface-container-highest">
                  WebSockets
                </span>
              </div>
            </div>

            {/* Storage & Persistence */}
            <div className="bg-surface-container p-space-md rounded-xl flex flex-col gap-3 border border-surface-container-high/40">
              <div className="flex items-center gap-2 text-tertiary font-label-md text-label-md font-semibold">
                <span className="material-symbols-outlined text-[20px]">database</span>
                <span>Databases</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-surface-container-high font-code-sm text-code-sm text-on-surface inline-flex items-center gap-1.5 border border-surface-container-highest">
                  <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>PostgreSQL
                </span>
                <span className="px-3 py-1 rounded-full bg-surface-container-high font-code-sm text-code-sm text-on-surface border border-surface-container-highest">
                  Redis Cache
                </span>
                <span className="px-3 py-1 rounded-full bg-surface-container-high font-code-sm text-code-sm text-on-surface border border-surface-container-highest">
                  MongoDB
                </span>
                <span className="px-3 py-1 rounded-full bg-surface-container-high font-code-sm text-code-sm text-on-surface border border-surface-container-highest">
                  Prisma ORM
                </span>
                <span className="px-3 py-1 rounded-full bg-surface-container-high font-code-sm text-code-sm text-on-surface border border-surface-container-highest">
                  Supabase
                </span>
              </div>
            </div>

            {/* DevOps & Protocols */}
            <div className="bg-surface-container p-space-md rounded-xl flex flex-col gap-3 border border-surface-container-high/40">
              <div className="flex items-center gap-2 text-primary-container font-label-md text-label-md font-semibold">
                <span className="material-symbols-outlined text-[20px]">cloud_sync</span>
                <span>Cloud &amp; DevOps</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-surface-container-high font-code-sm text-code-sm text-on-surface inline-flex items-center gap-1.5 border border-surface-container-highest">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>Docker
                </span>
                <span className="px-3 py-1 rounded-full bg-surface-container-high font-code-sm text-code-sm text-on-surface border border-surface-container-highest">
                  Linux / Nginx
                </span>
                <span className="px-3 py-1 rounded-full bg-surface-container-high font-code-sm text-code-sm text-on-surface border border-surface-container-highest">
                  GitHub Actions
                </span>
                <span className="px-3 py-1 rounded-full bg-surface-container-high font-code-sm text-code-sm text-on-surface border border-surface-container-highest">
                  Vercel / AWS EC2
                </span>
                <span className="px-3 py-1 rounded-full bg-surface-container-high font-code-sm text-code-sm text-on-surface border border-surface-container-highest">
                  Postman / OpenAPI
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bilingual Work Inquiry Callout Banner */}
      <section className="w-full pt-4 pb-12">
        <div className="bg-gradient-to-r from-surface-container-low via-surface-container to-surface-container-low p-space-xl rounded-xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-space-lg border border-surface-container-high/60">
          <div className="flex flex-col gap-2 max-w-xl">
            <div className="flex items-center gap-2 text-secondary font-code-sm text-code-sm">
              <span className="material-symbols-outlined text-[18px]">handshake</span>
              <span>INITIATE COLLABORATION</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface font-bold leading-tight">
              Ready to scale your next web product?
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Whether you need a dedicated full-stack collaborator or backend contract engineering, my calendar is open for discussions.
            </p>
            <p className="font-body-sm text-body-sm text-secondary-fixed text-right pt-1" dir="rtl">
              برای مشاوره، مصاحبه شغلی و همکاری در پروژه‌های نرم‌افزاری مقیاس‌پذیر در دسترس هستم.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-space-md shrink-0 w-full sm:w-auto">
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-space-sm px-6 py-3.5 rounded-lg bg-primary font-label-md text-label-md text-on-primary font-bold shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:-translate-y-0.5 transition-all text-center cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">send</span>
              <span>Contact Me / ارتباط مستقیم</span>
            </button>
            <button
              onClick={handleCopyEmail}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-space-sm px-5 py-3.5 rounded-lg bg-surface-container-high font-label-md text-label-md text-on-surface hover:bg-surface-bright transition-colors text-center cursor-pointer border border-surface-container-highest"
            >
              <span className="material-symbols-outlined text-[20px] text-outline">
                {emailCopied ? 'check' : 'mail'}
              </span>
              <span>{emailCopied ? 'Email Copied!' : 'Copy Email'}</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
