import React, { useState } from 'react';
import { PageId, Language, ProjectCategory, ProjectItem } from '../types';
import { PROJECTS_DATA } from '../data/portfolioData';

interface ProjectsViewProps {
  onNavigate: (page: PageId) => void;
  language: Language;
  onOpenProjectSandbox: (project: ProjectItem) => void;
}

export const ProjectsView: React.FC<ProjectsViewProps> = ({
  onNavigate,
  language,
  onOpenProjectSandbox
}) => {
  const [filter, setFilter] = useState<ProjectCategory>('all');

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (filter === 'all') return true;
    if (filter === 'fullstack') return project.category === 'fullstack';
    if (filter === 'frontend') return project.category === 'frontend';
    if (filter === 'backend') return project.category === 'backend';
    return true;
  });

  return (
    <div className="flex flex-col w-full">
      <div className="relative py-space-xl overflow-hidden">
        {/* Glow orbs */}
        <div className="absolute -top-32 -left-20 w-96 h-96 rounded-full bg-primary/10 blur-[120px] pointer-events-none"></div>
        <div className="absolute top-1/2 -right-32 w-80 h-80 rounded-full bg-secondary/10 blur-[140px] pointer-events-none"></div>

        {/* Header and Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-lg mb-space-xl">
          <div className="flex flex-col max-w-2xl">
            <div className="flex items-center gap-space-sm mb-space-xs">
              <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_12px_2px_rgba(76,215,246,0.5)]"></span>
              <span className="font-code-sm text-code-sm uppercase tracking-widest text-primary">
                PORTFOLIO // SELECTED WORK
              </span>
              <span className="font-code-sm text-code-sm text-outline">/ نمونه پروژه‌های منتخب</span>
            </div>
            <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
              Production Systems &amp; Distributed Architectures
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs leading-relaxed">
              High-load web platforms, resilient API gateways, and ultra-responsive interfaces
              engineered with clean abstractions and end-to-end type safety.
            </p>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center gap-space-xs p-1.5 rounded-xl bg-surface-container-low backdrop-blur-xl shadow-md border border-surface-container-high/60">
            <button
              onClick={() => setFilter('all')}
              className={`px-space-md py-space-xs rounded-lg font-label-md text-label-md transition-all duration-200 cursor-pointer ${
                filter === 'all'
                  ? 'bg-primary-container text-on-primary-container shadow-sm font-semibold'
                  : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
              }`}
              type="button"
            >
              All (4)
            </button>
            <button
              onClick={() => setFilter('fullstack')}
              className={`px-space-md py-space-xs rounded-lg font-label-md text-label-md transition-all duration-200 cursor-pointer ${
                filter === 'fullstack'
                  ? 'bg-primary-container text-on-primary-container shadow-sm font-semibold'
                  : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
              }`}
              type="button"
            >
              Full-Stack
            </button>
            <button
              onClick={() => setFilter('frontend')}
              className={`px-space-md py-space-xs rounded-lg font-label-md text-label-md transition-all duration-200 cursor-pointer ${
                filter === 'frontend'
                  ? 'bg-primary-container text-on-primary-container shadow-sm font-semibold'
                  : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
              }`}
              type="button"
            >
              Frontend Focus
            </button>
            <button
              onClick={() => setFilter('backend')}
              className={`px-space-md py-space-xs rounded-lg font-label-md text-label-md transition-all duration-200 cursor-pointer ${
                filter === 'backend'
                  ? 'bg-primary-container text-on-primary-container shadow-sm font-semibold'
                  : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
              }`}
              type="button"
            >
              Backend &amp; APIs
            </button>
          </div>
        </div>

        {/* Projects Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
          {/* SYSTEM 01: CloudSaaS Analytics (Full-width 12 cols) */}
          {(filter === 'all' || filter === 'fullstack') && (
            <article className="lg:col-span-12 group rounded-xl bg-surface-container-low/80 backdrop-blur-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl border border-surface-container-high/60">
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                <div className="lg:col-span-7 p-space-lg lg:p-space-xl flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-space-sm mb-space-sm">
                      <div className="flex items-center gap-space-xs">
                        <span className="px-space-sm py-0.5 rounded-full bg-primary/10 text-primary font-code-sm text-code-sm border border-primary/20">
                          SYSTEM 01 // SAAS
                        </span>
                        <span className="px-space-sm py-0.5 rounded-full bg-secondary-container/20 text-secondary-fixed-dim font-code-sm text-code-sm flex items-center gap-1 border border-secondary/20">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
                          Live Streaming
                        </span>
                      </div>
                      <span className="font-code-sm text-code-sm text-outline">Q4 2024</span>
                    </div>

                    <h2 className="font-headline-md text-headline-md text-on-surface flex flex-wrap items-baseline gap-x-space-sm gap-y-1">
                      <span>CloudSaaS Analytics Platform</span>
                      <span className="font-body-md text-body-md text-primary font-normal dir-rtl" dir="rtl">
                        پلتفرم جامع تحلیل داده ابری
                      </span>
                    </h2>

                    <div className="mt-space-md grid grid-cols-1 md:grid-cols-2 gap-space-md bg-surface-container/60 p-space-md rounded-lg border border-surface-container-high/40">
                      <div>
                        <p className="font-label-sm text-label-sm text-primary uppercase tracking-wider mb-1">
                          Architecture Summary (EN)
                        </p>
                        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                          Event-driven cloud telemetrics engine built with Next.js 14 App Router and high-concurrency Node.js microservices. Employs Redis pub/sub streams and PostgreSQL time-series partitioning to deliver sub-100ms real-time metric updates.
                        </p>
                      </div>
                      <div className="text-right" dir="rtl">
                        <p className="font-label-sm text-label-sm text-secondary-fixed-dim uppercase tracking-wider mb-1">
                          معماری سیستم (فارسی)
                        </p>
                        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                          موتور رویدادمحور پردازش داده‌های ابری با فریمورک Next.js 14 و معماری میکروسرویس Node.js. استفاده از Redis Pub/Sub و پارتیشن‌بندی زمانی در PostgreSQL برای ارائه داشبوردهای بی‌درنگ با تاخیر کمتر از ۱۰۰ میلی‌ثانیه.
                        </p>
                      </div>
                    </div>

                    <div className="mt-space-md grid grid-cols-3 gap-space-sm">
                      <div className="bg-surface-container-high/40 p-space-sm rounded-lg flex flex-col border border-surface-container-high/30">
                        <span className="font-code-sm text-code-sm text-on-surface-variant">Throughput</span>
                        <span className="font-headline-sm text-headline-sm text-primary mt-0.5">24.5k</span>
                        <span className="font-code-sm text-code-sm text-outline">events / sec</span>
                      </div>
                      <div className="bg-surface-container-high/40 p-space-sm rounded-lg flex flex-col border border-surface-container-high/30">
                        <span className="font-code-sm text-code-sm text-on-surface-variant">Latency</span>
                        <span className="font-headline-sm text-headline-sm text-secondary-fixed mt-0.5">48ms</span>
                        <span className="font-code-sm text-code-sm text-outline">P99 ingest</span>
                      </div>
                      <div className="bg-surface-container-high/40 p-space-sm rounded-lg flex flex-col border border-surface-container-high/30">
                        <span className="font-code-sm text-code-sm text-on-surface-variant">Availability</span>
                        <span className="font-headline-sm text-headline-sm text-on-surface mt-0.5">99.98%</span>
                        <span className="font-code-sm text-code-sm text-outline">uptime SLA</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-space-xs mt-space-md">
                      {['Next.js 14', 'Node.js', 'PostgreSQL', 'Redis', 'WebSockets', 'TailwindCSS'].map((tag) => (
                        <span key={tag} className="font-code-sm text-code-sm px-space-sm py-1 rounded-full bg-surface-container-high text-on-surface border border-surface-container-highest">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-space-md mt-space-lg pt-space-md bg-surface-container-low/40">
                    <button
                      onClick={() => onOpenProjectSandbox(PROJECTS_DATA[0])}
                      className="inline-flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-primary-container text-on-primary-container font-label-md text-label-md transition-all duration-200 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] cursor-pointer"
                    >
                      <span>Launch Live Platform</span>
                      <span className="material-symbols-outlined text-[18px]">arrow_outward</span>
                    </button>
                    <a
                      className="inline-flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-surface-container-high text-on-surface hover:text-primary transition-all duration-200 font-label-md text-label-md border border-surface-container-highest"
                      href="https://github.com"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <span className="material-symbols-outlined text-[18px]">code</span>
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-5 relative bg-surface-container-lowest min-h-[340px] flex items-center justify-center overflow-hidden p-space-md border-t lg:border-t-0 lg:border-l border-surface-container-high/60">
                  <div className="w-full h-full rounded-lg overflow-hidden relative shadow-2xl">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src={PROJECTS_DATA[0].image}
                      alt={PROJECTS_DATA[0].imageAlt}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent"></div>
                    <div className="absolute bottom-space-md left-space-md right-space-md p-space-sm rounded-lg bg-surface-container-lowest/80 backdrop-blur-md flex items-center justify-between border border-surface-container-high">
                      <div className="flex items-center gap-space-xs">
                        <span className="w-2 h-2 rounded-full bg-secondary"></span>
                        <span className="font-code-sm text-code-sm text-on-surface">cluster-eu-west-1 // healthy</span>
                      </div>
                      <span className="font-code-sm text-code-sm text-primary">v2.18.4</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          )}

          {/* SYSTEM 02: FinTech Payment Gateway (6 cols) */}
          {(filter === 'all' || filter === 'backend') && (
            <article className="lg:col-span-6 group rounded-xl bg-surface-container-low/80 backdrop-blur-xl shadow-xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl border border-surface-container-high/60">
              <div>
                <div className="relative w-full h-60 bg-surface-container-lowest overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={PROJECTS_DATA[1].image}
                    alt={PROJECTS_DATA[1].imageAlt}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-surface-container-low/20 to-transparent"></div>
                  <div className="absolute top-space-sm left-space-sm flex items-center gap-space-xs">
                    <span className="px-space-sm py-0.5 rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-primary font-code-sm text-code-sm border border-primary/20">
                      SYSTEM 02 // FINTECH
                    </span>
                  </div>
                  <div className="absolute top-space-sm right-space-sm">
                    <span className="px-space-sm py-0.5 rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-secondary font-code-sm text-code-sm border border-secondary/20">
                      PCI-DSS Compliant
                    </span>
                  </div>
                </div>

                <div className="p-space-lg">
                  <div className="flex items-baseline justify-between mb-space-xs">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface">
                      FinTech Payment Gateway &amp; Dashboard
                    </h3>
                    <span className="font-code-sm text-code-sm text-outline">Q3 2024</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-primary mb-space-md dir-rtl text-right" dir="rtl">
                    درگاه و داشبورد پرداخت امن بین‌المللی و محلی
                  </p>

                  <div className="space-y-space-sm bg-surface-container/60 p-space-md rounded-lg mb-space-md border border-surface-container-high/40">
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      <strong className="text-on-surface font-label-md">EN:</strong> NestJS microservice architecture implementing idempotent Stripe &amp; Zarinpal transaction pipelines, dual-factor JWT verification, and automated cryptographic ledger auditing.
                    </p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed dir-rtl text-right" dir="rtl">
                      <strong className="text-on-surface font-label-md">فارسی:</strong> میکروسرویس پیشرفته با فریمورک NestJS جهت پردازش تراکنش‌های همزمان با درگاه‌های بانکی و استرایپ، سیستم تایید دومرحله‌ای امن و ثبت غیرقابل تغییر گردش‌های مالی.
                    </p>
                  </div>

                  <div className="p-space-sm bg-surface-container-lowest/90 rounded-lg mb-space-md font-code-sm text-code-sm border border-surface-container-high">
                    <div className="flex items-center justify-between text-outline mb-1">
                      <span className="text-on-surface-variant">Security Audit</span>
                      <span className="text-secondary font-semibold">Passed (100%)</span>
                    </div>
                    <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
                      <div className="bg-secondary h-full rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-space-xs">
                    {PROJECTS_DATA[1].techStack.map((tag) => (
                      <span key={tag} className="font-code-sm text-code-sm px-space-sm py-1 rounded-full bg-surface-container-high text-on-surface border border-surface-container-highest">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-space-lg pt-0 flex items-center justify-between">
                <a
                  className="inline-flex items-center gap-space-xs font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
                  href="https://github.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[18px]">terminal</span>
                  <span>API Docs &amp; Repo</span>
                </a>
                <button
                  onClick={() => onOpenProjectSandbox(PROJECTS_DATA[1])}
                  className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-lg bg-surface-container-high text-on-surface hover:bg-primary-container hover:text-on-primary-container transition-all cursor-pointer border border-surface-container-highest"
                >
                  <span>Sandbox Preview</span>
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                </button>
              </div>
            </article>
          )}

          {/* SYSTEM 03: E-Commerce Marketplace (6 cols) */}
          {(filter === 'all' || filter === 'frontend') && (
            <article className="lg:col-span-6 group rounded-xl bg-surface-container-low/80 backdrop-blur-xl shadow-xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl border border-surface-container-high/60">
              <div>
                <div className="relative w-full h-60 bg-surface-container-lowest overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={PROJECTS_DATA[2].image}
                    alt={PROJECTS_DATA[2].imageAlt}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-surface-container-low/20 to-transparent"></div>
                  <div className="absolute top-space-sm left-space-sm flex items-center gap-space-xs">
                    <span className="px-space-sm py-0.5 rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-primary font-code-sm text-code-sm border border-primary/20">
                      SYSTEM 03 // E-COMMERCE
                    </span>
                  </div>
                  <div className="absolute top-space-sm right-space-sm">
                    <span className="px-space-sm py-0.5 rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-on-surface-variant font-code-sm text-code-sm border border-surface-container-highest">
                      Headless Store
                    </span>
                  </div>
                </div>

                <div className="p-space-lg">
                  <div className="flex items-baseline justify-between mb-space-xs">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface">
                      E-Commerce Marketplace
                    </h3>
                    <span className="font-code-sm text-code-sm text-outline">Q2 2024</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-primary mb-space-md dir-rtl text-right" dir="rtl">
                    فروشگاه آنلاین ماژولار با جستجوی فوق‌سریع
                  </p>

                  <div className="space-y-space-sm bg-surface-container/60 p-space-md rounded-lg mb-space-md border border-surface-container-high/40">
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      <strong className="text-on-surface font-label-md">EN:</strong> High-speed headless storefront with Next.js SSR, faceted ElasticSearch queries under 15ms, dynamic multi-currency cart state, and optimistic inventory locking.
                    </p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed dir-rtl text-right" dir="rtl">
                      <strong className="text-on-surface font-label-md">فارسی:</strong> فروشگاه اینترنتی مدرن مبتنی بر معماری Headless با رندرینگ سمت سرور (SSR)، موتور جستجوی ElasticSearch با نتایج آنی و مدیریت سبد خرید چندارزی بدون افت پرفورمنس.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-space-sm mb-space-md">
                    <div className="p-space-sm bg-surface-container-lowest/90 rounded-lg flex items-center justify-between border border-surface-container-high">
                      <span className="font-code-sm text-code-sm text-on-surface-variant">Lighthouse Score</span>
                      <span className="font-code-sm text-code-sm text-secondary font-bold">99 / 100</span>
                    </div>
                    <div className="p-space-sm bg-surface-container-lowest/90 rounded-lg flex items-center justify-between border border-surface-container-high">
                      <span className="font-code-sm text-code-sm text-on-surface-variant">Search Query</span>
                      <span className="font-code-sm text-code-sm text-primary font-bold">12ms avg</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-space-xs">
                    {PROJECTS_DATA[2].techStack.map((tag) => (
                      <span key={tag} className="font-code-sm text-code-sm px-space-sm py-1 rounded-full bg-surface-container-high text-on-surface border border-surface-container-highest">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-space-lg pt-0 flex items-center justify-between">
                <a
                  className="inline-flex items-center gap-space-xs font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
                  href="https://github.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[18px]">terminal</span>
                  <span>View Repository</span>
                </a>
                <button
                  onClick={() => onOpenProjectSandbox(PROJECTS_DATA[2])}
                  className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-lg bg-surface-container-high text-on-surface hover:bg-primary-container hover:text-on-primary-container transition-all cursor-pointer border border-surface-container-highest"
                >
                  <span>Explore Demo</span>
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                </button>
              </div>
            </article>
          )}

          {/* SYSTEM 04: TaskFlow Collaboration Tool (Full width 12 cols) */}
          {(filter === 'all' || filter === 'fullstack') && (
            <article className="lg:col-span-12 group rounded-xl bg-surface-container-low/80 backdrop-blur-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl border border-surface-container-high/60">
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                <div className="lg:col-span-5 relative bg-surface-container-lowest min-h-[320px] order-2 lg:order-1 flex items-center justify-center overflow-hidden p-space-md border-b lg:border-b-0 lg:border-r border-surface-container-high/60">
                  <div className="w-full h-full rounded-lg overflow-hidden relative shadow-2xl">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src={PROJECTS_DATA[3].image}
                      alt={PROJECTS_DATA[3].imageAlt}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent"></div>
                    <div className="absolute bottom-space-md left-space-md right-space-md p-space-sm rounded-lg bg-surface-container-lowest/80 backdrop-blur-md flex items-center justify-between border border-surface-container-high">
                      <div className="flex items-center gap-space-xs">
                        <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
                        <span className="font-code-sm text-code-sm text-on-surface">34 Active Peers Online</span>
                      </div>
                      <span className="font-code-sm text-code-sm text-secondary">Sync: 16ms</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7 p-space-lg lg:p-space-xl flex flex-col justify-between order-1 lg:order-2">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-space-sm mb-space-sm">
                      <div className="flex items-center gap-space-xs">
                        <span className="px-space-sm py-0.5 rounded-full bg-primary/10 text-primary font-code-sm text-code-sm border border-primary/20">
                          SYSTEM 04 // COLLABORATION
                        </span>
                        <span className="px-space-sm py-0.5 rounded-full bg-tertiary-container/30 text-tertiary font-code-sm text-code-sm border border-tertiary/20">
                          Multi-tenant
                        </span>
                      </div>
                      <span className="font-code-sm text-code-sm text-outline">Q1 2024</span>
                    </div>

                    <h2 className="font-headline-md text-headline-md text-on-surface flex flex-wrap items-baseline gap-x-space-sm gap-y-1">
                      <span>TaskFlow Collaboration Tool</span>
                      <span className="font-body-md text-body-md text-primary font-normal dir-rtl" dir="rtl">
                        سیستم مدیریت وظایف تیمی و بلادرنگ
                      </span>
                    </h2>

                    <div className="mt-space-md grid grid-cols-1 md:grid-cols-2 gap-space-md bg-surface-container/60 p-space-md rounded-lg border border-surface-container-high/40">
                      <div>
                        <p className="font-label-sm text-label-sm text-primary uppercase tracking-wider mb-1">
                          Architecture Summary (EN)
                        </p>
                        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                          Real-time workspace built with React DnD and Socket.io. Features conflict-free replicated data types (CRDTs) for concurrent editing, granular role-based access control (RBAC), and automated webhook delivery pipelines.
                        </p>
                      </div>
                      <div className="text-right" dir="rtl">
                        <p className="font-label-sm text-label-sm text-secondary-fixed-dim uppercase tracking-wider mb-1">
                          معماری سیستم (فارسی)
                        </p>
                        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                          محیط کار اشتراکی بلادرنگ با امکان درگ اند دراپ، همگام‌سازی بلادرنگ توسط Socket.io و ساختار CRDT جهت جلوگیری از تداخل ویرایش همزمان اعضا، همراه با کنترل دسترسی سازمانی چندسطحی (RBAC).
                        </p>
                      </div>
                    </div>

                    <div className="mt-space-md flex flex-wrap items-center gap-space-xs">
                      {PROJECTS_DATA[3].techStack.map((tag) => (
                        <span key={tag} className="font-code-sm text-code-sm px-space-sm py-1 rounded-full bg-surface-container-high text-on-surface border border-surface-container-highest">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-space-md mt-space-lg pt-space-md bg-surface-container-low/40">
                    <button
                      onClick={() => onOpenProjectSandbox(PROJECTS_DATA[3])}
                      className="inline-flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-primary-container text-on-primary-container font-label-md text-label-md transition-all duration-200 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] cursor-pointer"
                    >
                      <span>Open TaskFlow Live</span>
                      <span className="material-symbols-outlined text-[18px]">arrow_outward</span>
                    </button>
                    <a
                      className="inline-flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-surface-container-high text-on-surface hover:text-primary transition-all duration-200 font-label-md text-label-md border border-surface-container-highest"
                      href="https://github.com"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <span className="material-symbols-outlined text-[18px]">code</span>
                      <span>GitHub Repository</span>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          )}
        </div>

        {/* Interested in Custom Architecture CTA */}
        <div className="mt-space-xl p-space-lg lg:p-space-xl rounded-xl bg-surface-container-low/70 backdrop-blur-xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-space-lg border border-surface-container-high/60">
          <div className="flex items-center gap-space-md">
            <div className="w-12 h-12 rounded-xl bg-primary-container/20 flex items-center justify-center shrink-0 border border-primary/30">
              <span className="material-symbols-outlined text-[28px] text-primary">terminal</span>
            </div>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">
                Interested in a custom architecture? / تمایل به همکاری؟
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                Open to senior full-stack roles, system design consultations, and high-stakes technical projects.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-space-sm shrink-0">
            <button
              onClick={() => onNavigate('contact')}
              className="px-space-lg py-space-sm rounded-lg bg-primary text-on-primary font-label-md text-label-md transition-all duration-200 hover:shadow-[0_0_25px_rgba(76,215,246,0.4)] cursor-pointer font-bold"
            >
              Get in Touch
            </button>
            <a
              className="px-space-md py-space-sm rounded-lg bg-surface-container-high text-on-surface font-label-md text-label-md hover:bg-surface-bright transition-colors border border-surface-container-highest"
              href="https://github.com"
              rel="noreferrer"
              target="_blank"
            >
              View All Repos
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
