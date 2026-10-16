import React from 'react';
import { PageId, Language } from '../types';
import { ASSETS } from '../data/portfolioData';

interface SkillsViewProps {
  onNavigate: (page: PageId) => void;
  language: Language;
}

export const SkillsView: React.FC<SkillsViewProps> = ({ onNavigate, language }) => {
  return (
    <div className="flex flex-col w-full">
      <section className="relative w-full py-space-xl overflow-hidden">
        {/* Ambient Backdrops */}
        <div className="absolute -top-24 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-lg mb-space-xl">
          <div className="flex flex-col gap-space-xs max-w-2xl">
            <div className="flex items-center gap-space-sm">
              <span className="px-space-sm py-space-xs rounded-full bg-surface-container-high text-primary font-code-sm text-code-sm uppercase tracking-wider border border-surface-container-highest">
                Telemetry // Stack v2.4
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-secondary"></span>
              <span className="font-code-sm text-code-sm text-on-surface-variant">
                24 Mo. Active Deployment
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                Technical Matrix &amp; Architecture
              </h1>
              <p
                className="font-headline-sm text-headline-sm text-primary-fixed-dim text-right sm:text-left font-normal opacity-90"
                dir="rtl"
              >
                ماتریس مهارت‌های فنی و معماری سیستم
              </p>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs leading-relaxed">
              A systematic inventory of production-tested primitives, architectural patterns, and
              execution methodologies cultivated across 2 years of fast-paced fullstack lifecycle
              delivery.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-space-sm bg-surface-container-low p-space-sm rounded-xl border border-surface-container-high/60">
            <div className="flex items-center gap-space-xs px-space-sm py-space-xs rounded-lg bg-surface-container-high">
              <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
              <span className="font-code-sm text-code-sm text-on-surface">2 Yrs Hands-on</span>
            </div>
            <div className="flex items-center gap-space-xs px-space-sm py-space-xs rounded-lg bg-surface-container-high">
              <span className="material-symbols-outlined text-secondary text-[18px]">speed</span>
              <span className="font-code-sm text-code-sm text-on-surface">Production Ready</span>
            </div>
            <div className="flex items-center gap-space-xs px-space-sm py-space-xs rounded-lg bg-surface-container-high">
              <span className="material-symbols-outlined text-tertiary text-[18px]">alt_route</span>
              <span className="font-code-sm text-code-sm text-on-surface">Bilingual Syntax</span>
            </div>
          </div>
        </div>

        {/* Bento Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-gutter mb-space-xl">
          {/* Module 1: Frontend Engineering (7 cols) */}
          <div className="lg:col-span-7 bg-surface-container-low rounded-xl p-space-lg shadow-xl relative overflow-hidden group hover:bg-surface-container transition-all duration-300 border border-surface-container-high/60">
            <div className="flex items-start justify-between gap-space-md mb-space-md">
              <div className="flex items-center gap-space-sm">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[24px]">terminal</span>
                </div>
                <div>
                  <div className="flex items-center gap-space-xs">
                    <h2 className="font-headline-sm text-headline-sm text-on-surface">
                      Frontend Engineering
                    </h2>
                    <span className="font-label-sm text-label-sm text-primary opacity-80" dir="rtl">
                      (فرانت‌اند)
                    </span>
                  </div>
                  <p className="font-code-sm text-code-sm text-on-surface-variant">
                    Core Execution Layer • React Ecosystem Focus
                  </p>
                </div>
              </div>
              <span className="px-space-sm py-space-xs rounded-full bg-surface-container-highest text-secondary font-code-sm text-code-sm border border-secondary/30">
                Expert Core
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md leading-relaxed">
              Building resilient, reactive, accessible user interfaces with deterministic client-side
              state, modern SSR frameworks, and high-performance Web Vitals.
            </p>

            {/* Tech items bento layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm mb-space-md">
              <div className="bg-surface-container-high/60 p-space-sm rounded-lg flex flex-col justify-between border border-surface-container-high/40">
                <div className="flex items-center justify-between mb-space-xs">
                  <span className="font-label-md text-label-md text-on-surface flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Next.js / React 18+
                  </span>
                  <span className="font-code-sm text-code-sm text-primary">Prod Core</span>
                </div>
                <div className="w-full bg-surface-container-lowest h-1.5 rounded-full overflow-hidden">
                  <div className="bg-primary h-full rounded-full" style={{ width: '92%' }}></div>
                </div>
                <span className="font-code-sm text-[11px] text-on-surface-variant mt-1.5">
                  App Router, SSR/SSG, Suspense
                </span>
              </div>

              <div className="bg-surface-container-high/60 p-space-sm rounded-lg flex flex-col justify-between border border-surface-container-high/40">
                <div className="flex items-center justify-between mb-space-xs">
                  <span className="font-label-md text-label-md text-on-surface flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    TypeScript
                  </span>
                  <span className="font-code-sm text-code-sm text-primary">Strict</span>
                </div>
                <div className="w-full bg-surface-container-lowest h-1.5 rounded-full overflow-hidden">
                  <div className="bg-primary h-full rounded-full" style={{ width: '88%' }}></div>
                </div>
                <span className="font-code-sm text-[11px] text-on-surface-variant mt-1.5">
                  Type Narrowing, Generics, Discriminated Unions
                </span>
              </div>

              <div className="bg-surface-container-high/60 p-space-sm rounded-lg flex flex-col justify-between border border-surface-container-high/40">
                <div className="flex items-center justify-between mb-space-xs">
                  <span className="font-label-md text-label-md text-on-surface flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                    Tailwind CSS &amp; UI Systems
                  </span>
                  <span className="font-code-sm text-code-sm text-secondary">Advanced</span>
                </div>
                <div className="w-full bg-surface-container-lowest h-1.5 rounded-full overflow-hidden">
                  <div className="bg-secondary h-full rounded-full" style={{ width: '95%' }}></div>
                </div>
                <span className="font-code-sm text-[11px] text-on-surface-variant mt-1.5">
                  Tokens, RTL/LTR Mirroring, Micro-Interactions
                </span>
              </div>

              <div className="bg-surface-container-high/60 p-space-sm rounded-lg flex flex-col justify-between border border-surface-container-high/40">
                <div className="flex items-center justify-between mb-space-xs">
                  <span className="font-label-md text-label-md text-on-surface flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                    State (Zustand &amp; Redux)
                  </span>
                  <span className="font-code-sm text-code-sm text-secondary">Flow</span>
                </div>
                <div className="w-full bg-surface-container-lowest h-1.5 rounded-full overflow-hidden">
                  <div className="bg-secondary h-full rounded-full" style={{ width: '85%' }}></div>
                </div>
                <span className="font-code-sm text-[11px] text-on-surface-variant mt-1.5">
                  Context Slicing, Async Thunks, Persistence
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-space-xs pt-space-xs">
              <span className="px-space-sm py-space-xs rounded-full bg-surface-container-lowest text-on-surface-variant font-code-sm text-code-sm border border-surface-container-high">
                Vue.js 3
              </span>
              <span className="px-space-sm py-space-xs rounded-full bg-surface-container-lowest text-on-surface-variant font-code-sm text-code-sm border border-surface-container-high">
                WCAG 2.1 AA
              </span>
              <span className="px-space-sm py-space-xs rounded-full bg-surface-container-lowest text-on-surface-variant font-code-sm text-code-sm border border-surface-container-high">
                Lighthouse &gt; 95
              </span>
              <span className="px-space-sm py-space-xs rounded-full bg-surface-container-lowest text-on-surface-variant font-code-sm text-code-sm border border-surface-container-high">
                Bi-directional RTL
              </span>
            </div>
          </div>

          {/* Module 2: Backend Systems (5 cols) */}
          <div className="lg:col-span-5 bg-surface-container-low rounded-xl p-space-lg shadow-xl relative overflow-hidden group hover:bg-surface-container transition-all duration-300 border border-surface-container-high/60">
            <div className="flex items-start justify-between gap-space-md mb-space-md">
              <div className="flex items-center gap-space-sm">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined text-[24px]">dns</span>
                </div>
                <div>
                  <div className="flex items-center gap-space-xs">
                    <h2 className="font-headline-sm text-headline-sm text-on-surface">
                      Backend Engineering
                    </h2>
                    <span className="font-label-sm text-label-sm text-secondary opacity-80" dir="rtl">
                      (بک‌اند)
                    </span>
                  </div>
                  <p className="font-code-sm text-code-sm text-on-surface-variant">
                    API Architecture • Node &amp; Python
                  </p>
                </div>
              </div>
              <span className="px-space-sm py-space-xs rounded-full bg-surface-container-highest text-primary font-code-sm text-code-sm border border-primary/30">
                Microservices
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md leading-relaxed">
              Crafting type-safe endpoints, asynchronous message handling, modular NestJS patterns,
              and streamlined FastAPI microservices.
            </p>
            <div className="flex flex-col gap-space-sm mb-space-md">
              <div className="p-space-sm rounded-lg bg-surface-container-high/60 flex items-center justify-between border border-surface-container-high/40">
                <div className="flex flex-col">
                  <span className="font-label-md text-label-md text-on-surface">
                    Node.js &amp; Express / NestJS
                  </span>
                  <span className="font-code-sm text-[11px] text-on-surface-variant">
                    Dependency Injection, Guards, DTO Validation
                  </span>
                </div>
                <span className="font-code-sm text-code-sm text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/30">
                  Primary
                </span>
              </div>
              <div className="p-space-sm rounded-lg bg-surface-container-high/60 flex items-center justify-between border border-surface-container-high/40">
                <div className="flex flex-col">
                  <span className="font-label-md text-label-md text-on-surface">Python (FastAPI)</span>
                  <span className="font-code-sm text-[11px] text-on-surface-variant">
                    Async/Await IO, Pydantic, Swagger Docs
                  </span>
                </div>
                <span className="font-code-sm text-code-sm text-secondary bg-secondary/10 px-2 py-0.5 rounded border border-secondary/30">
                  Rapid API
                </span>
              </div>
              <div className="p-space-sm rounded-lg bg-surface-container-high/60 flex items-center justify-between border border-surface-container-high/40">
                <div className="flex flex-col">
                  <span className="font-label-md text-label-md text-on-surface">
                    RESTful &amp; GraphQL Protocols
                  </span>
                  <span className="font-code-sm text-[11px] text-on-surface-variant">
                    Rate Limiting, Schema Federation, JWT Auth
                  </span>
                </div>
                <span className="font-code-sm text-code-sm text-tertiary bg-tertiary/10 px-2 py-0.5 rounded border border-tertiary/30">
                  Standard
                </span>
              </div>
            </div>
            <div className="flex items-center gap-space-xs text-on-surface-variant font-code-sm text-code-sm">
              <span className="material-symbols-outlined text-[16px] text-primary">data_object</span>
              <span>OpenAPI / Postman Specs • Structured JSON Logging</span>
            </div>
          </div>

          {/* Module 3: Database & Caching (5 cols) */}
          <div className="lg:col-span-5 bg-surface-container-low rounded-xl p-space-lg shadow-xl relative overflow-hidden group hover:bg-surface-container transition-all duration-300 border border-surface-container-high/60">
            <div className="flex items-start justify-between gap-space-md mb-space-md">
              <div className="flex items-center gap-space-sm">
                <div className="w-10 h-10 rounded-lg bg-tertiary-container/20 flex items-center justify-center text-tertiary">
                  <span className="material-symbols-outlined text-[24px]">database</span>
                </div>
                <div>
                  <div className="flex items-center gap-space-xs">
                    <h2 className="font-headline-sm text-headline-sm text-on-surface">
                      Database &amp; Caching
                    </h2>
                    <span className="font-label-sm text-label-sm text-tertiary opacity-80" dir="rtl">
                      (پایگاه داده)
                    </span>
                  </div>
                  <p className="font-code-sm text-code-sm text-on-surface-variant">
                    Relational, Document &amp; Memory Stores
                  </p>
                </div>
              </div>
              <span className="px-space-sm py-space-xs rounded-full bg-surface-container-highest text-tertiary font-code-sm text-code-sm border border-tertiary/30">
                ACID
              </span>
            </div>
            <div className="grid grid-cols-2 gap-space-sm mb-space-md">
              <div className="bg-surface-container-high/60 p-space-sm rounded-lg border border-surface-container-high/40">
                <span className="font-label-md text-label-md text-on-surface block">PostgreSQL</span>
                <span className="font-code-sm text-[11px] text-primary block mt-0.5">Relational Core</span>
                <p className="font-body-sm text-[12px] text-on-surface-variant mt-2 leading-tight">
                  Complex Joins, Indexing strategies, JSONB usage.
                </p>
              </div>
              <div className="bg-surface-container-high/60 p-space-sm rounded-lg border border-surface-container-high/40">
                <span className="font-label-md text-label-md text-on-surface block">MongoDB</span>
                <span className="font-code-sm text-[11px] text-secondary block mt-0.5">Document Store</span>
                <p className="font-body-sm text-[12px] text-on-surface-variant mt-2 leading-tight">
                  Aggregation pipelines, Mongoose schema modeling.
                </p>
              </div>
              <div className="bg-surface-container-high/60 p-space-sm rounded-lg border border-surface-container-high/40">
                <span className="font-label-md text-label-md text-on-surface block">Redis</span>
                <span className="font-code-sm text-[11px] text-tertiary block mt-0.5">Cache &amp; TTL</span>
                <p className="font-body-sm text-[12px] text-on-surface-variant mt-2 leading-tight">
                  Session management, rate limit counters, pub/sub.
                </p>
              </div>
              <div className="bg-surface-container-high/60 p-space-sm rounded-lg border border-surface-container-high/40">
                <span className="font-label-md text-label-md text-on-surface block">Prisma ORM</span>
                <span className="font-code-sm text-[11px] text-on-surface block mt-0.5">Schema Driven</span>
                <p className="font-body-sm text-[12px] text-on-surface-variant mt-2 leading-tight">
                  Auto migrations, end-to-end typed queries.
                </p>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-space-sm rounded-lg flex items-center justify-between border border-surface-container-high">
              <span className="font-code-sm text-code-sm text-on-surface-variant">Benchmark Query SLA</span>
              <span className="font-code-sm text-code-sm text-secondary font-semibold">
                &lt; 35ms avg runtime
              </span>
            </div>
          </div>

          {/* Module 4: DevOps & Tooling (7 cols) */}
          <div className="lg:col-span-7 bg-surface-container-low rounded-xl p-space-lg shadow-xl relative overflow-hidden group hover:bg-surface-container transition-all duration-300 border border-surface-container-high/60">
            <div className="flex items-start justify-between gap-space-md mb-space-md">
              <div className="flex items-center gap-space-sm">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[24px]">hub</span>
                </div>
                <div>
                  <div className="flex items-center gap-space-xs">
                    <h2 className="font-headline-sm text-headline-sm text-on-surface">
                      DevOps &amp; Delivery Pipeline
                    </h2>
                    <span className="font-label-sm text-label-sm text-primary opacity-80" dir="rtl">
                      (ابزارها و استقرار)
                    </span>
                  </div>
                  <p className="font-code-sm text-code-sm text-on-surface-variant">
                    Continuous Integration &amp; Infrastructure
                  </p>
                </div>
              </div>
              <span className="px-space-sm py-space-xs rounded-full bg-surface-container-highest text-secondary font-code-sm text-code-sm border border-secondary/30">
                GitOps Ready
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md leading-relaxed">
              Standardizing developer environments through containerization, automated testing
              validation hooks, and seamless edge delivery workflows.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm mb-space-md">
              <div className="bg-surface-container-high/60 p-space-sm rounded-lg flex flex-col justify-between border border-surface-container-high/40">
                <div className="flex items-center gap-space-xs text-on-surface font-label-md text-label-md mb-1">
                  <span className="material-symbols-outlined text-primary text-[18px]">developer_board</span>
                  Docker
                </div>
                <p className="font-body-sm text-[12px] text-on-surface-variant">
                  Multi-stage builds, compose networks, image pruning.
                </p>
              </div>
              <div className="bg-surface-container-high/60 p-space-sm rounded-lg flex flex-col justify-between border border-surface-container-high/40">
                <div className="flex items-center gap-space-xs text-on-surface font-label-md text-label-md mb-1">
                  <span className="material-symbols-outlined text-secondary text-[18px]">sync_alt</span>
                  GitHub Actions
                </div>
                <p className="font-body-sm text-[12px] text-on-surface-variant">
                  Automated linting, Jest/Cypress runs, artifact builds.
                </p>
              </div>
              <div className="bg-surface-container-high/60 p-space-sm rounded-lg flex flex-col justify-between border border-surface-container-high/40">
                <div className="flex items-center gap-space-xs text-on-surface font-label-md text-label-md mb-1">
                  <span className="material-symbols-outlined text-tertiary text-[18px]">cloud</span>
                  Vercel &amp; AWS
                </div>
                <p className="font-body-sm text-[12px] text-on-surface-variant">
                  S3 storage, EC2 base configs, edge compute functions.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-space-sm p-space-sm rounded-lg bg-surface-container-lowest border border-surface-container-high">
              <div className="flex items-center gap-space-sm">
                <span className="material-symbols-outlined text-primary text-[18px]">terminal</span>
                <span className="font-code-sm text-code-sm text-on-surface">
                  Linux (Debian/Ubuntu) CLI Proficiency
                </span>
              </div>
              <span className="font-code-sm text-code-sm text-secondary">
                Bash • Systemd • SSH Keys
              </span>
            </div>
          </div>
        </div>

        {/* Engineering Methodologies Banner */}
        <div className="bg-surface-container-low rounded-xl p-space-lg lg:p-space-xl shadow-xl relative overflow-hidden mb-space-xl border border-surface-container-high/60">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-lg mb-space-lg">
            <div className="flex flex-col gap-1 max-w-xl">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-primary text-[20px]">architecture</span>
                <span className="font-code-sm text-code-sm text-primary uppercase tracking-wider">
                  Methodology Protocol
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface">
                Engineering Disciplines &amp; Quality Assurance
              </h3>
              <p className="font-label-md text-label-md text-on-surface-variant opacity-80" dir="rtl">
                اصول مهندسی، توسعه آزمون‌محور و استانداردهای چابک
              </p>
            </div>
            <div className="flex items-center gap-space-md">
              <div className="text-right">
                <span className="font-headline-sm text-headline-sm text-primary block leading-none">
                  100%
                </span>
                <span className="font-code-sm text-code-sm text-on-surface-variant">
                  Type Strictness
                </span>
              </div>
              <div className="w-px h-8 bg-surface-container-highest"></div>
              <div className="text-right">
                <span className="font-headline-sm text-headline-sm text-secondary block leading-none">
                  80%+
                </span>
                <span className="font-code-sm text-code-sm text-on-surface-variant">
                  Test Coverage SLA
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Principle 1 */}
            <div className="bg-surface-container p-space-md rounded-xl flex flex-col justify-between border border-surface-container-high/50">
              <div>
                <div className="flex items-center justify-between mb-space-sm">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-code-sm text-code-sm font-bold border border-primary/20">
                    01
                  </span>
                  <span className="font-code-sm text-code-sm text-secondary">SOLID &amp; DRY</span>
                </div>
                <h4 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs">
                  Clean Code &amp; Architecture
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Structuring repositories with clear boundaries: separation of concerns, repository
                  pattern, DTO layers, and idiomatic naming conventions.
                </p>
              </div>
              <div className="mt-space-md pt-space-sm bg-surface-container-high/40 rounded-lg p-2.5 text-right border border-surface-container-high/30" dir="rtl">
                <p className="font-code-sm text-[12px] text-on-surface-variant">
                  کدنویسی تمیز با قابلیت نگهداری بالا و ماژولار
                </p>
              </div>
            </div>

            {/* Principle 2 */}
            <div className="bg-surface-container p-space-md rounded-xl flex flex-col justify-between border border-surface-container-high/50">
              <div>
                <div className="flex items-center justify-between mb-space-sm">
                  <span className="w-8 h-8 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center font-code-sm text-code-sm font-bold border border-secondary/20">
                    02
                  </span>
                  <span className="font-code-sm text-code-sm text-primary">Jest • Playwright</span>
                </div>
                <h4 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs">
                  Test-Driven Mindset (TDD)
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Unit testing core domain services, mock API interactions, integration testing edge
                  paths, and preventing functional regressions.
                </p>
              </div>
              <div className="mt-space-md pt-space-sm bg-surface-container-high/40 rounded-lg p-2.5 text-right border border-surface-container-high/30" dir="rtl">
                <p className="font-code-sm text-[12px] text-on-surface-variant">
                  تست‌های واحد، یکپارچه‌سازی و اعتبارسنجی مداوم
                </p>
              </div>
            </div>

            {/* Principle 3 */}
            <div className="bg-surface-container p-space-md rounded-xl flex flex-col justify-between border border-surface-container-high/50">
              <div>
                <div className="flex items-center justify-between mb-space-sm">
                  <span className="w-8 h-8 rounded-lg bg-tertiary-container/20 text-tertiary flex items-center justify-center font-code-sm text-code-sm font-bold border border-tertiary/20">
                    03
                  </span>
                  <span className="font-code-sm text-code-sm text-tertiary">2-Week Sprints</span>
                </div>
                <h4 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs">
                  Agile &amp; Scrum Delivery
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Active contributor in grooming, daily standups, sprint reviews, and technical
                  estimations. Highly aligned with team velocity goals.
                </p>
              </div>
              <div className="mt-space-md pt-space-sm bg-surface-container-high/40 rounded-lg p-2.5 text-right border border-surface-container-high/30" dir="rtl">
                <p className="font-code-sm text-[12px] text-on-surface-variant">
                  همکاری موثر در چارچوب اسکرام و تحویل چابک محصول
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Telemetry / Architecture Terminal & Lab Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          {/* Terminal Live Telemetry Box */}
          <div className="lg:col-span-7 bg-surface-container-lowest rounded-xl p-space-md shadow-2xl relative overflow-hidden font-code-sm text-code-sm border border-surface-container-high/60">
            <div className="flex items-center justify-between pb-space-sm mb-space-sm bg-surface-container-high/30 px-space-sm py-1.5 rounded-lg border border-surface-container-high/30">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-error inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-secondary inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-primary inline-block"></span>
                <span className="text-on-surface-variant text-[12px] ml-2">architecture_inspection.ts</span>
              </div>
              <span className="text-[11px] text-primary font-semibold">STATUS: PRODUCTION_STABLE</span>
            </div>
            <div className="flex flex-col gap-1 text-[13px] leading-relaxed text-on-surface-variant">
              <div>
                <span className="text-tertiary">const</span>{' '}
                <span className="text-primary">developerProfile</span> = &#123;
              </div>
              <div className="pl-4">
                <span className="text-on-surface">experience</span>:{' '}
                <span className="text-secondary">'2.0 Years Hands-On'</span>,
              </div>
              <div className="pl-4">
                <span className="text-on-surface">focus</span>: [
                <span className="text-secondary">'React/Next.js'</span>,{' '}
                <span className="text-secondary">'Node/NestJS'</span>,{' '}
                <span className="text-secondary">'PostgreSQL'</span>],
              </div>
              <div className="pl-4">
                <span className="text-on-surface">patterns</span>: [
                <span className="text-secondary">'Clean Architecture'</span>,{' '}
                <span className="text-secondary">'Microservices'</span>,{' '}
                <span className="text-secondary">'CI/CD'</span>],
              </div>
              <div className="pl-4">
                <span className="text-on-surface">bilingualSupport</span>:{' '}
                <span className="text-primary-container font-bold">true</span>,{' '}
                <span className="text-outline">// EN &amp; FA localization</span>
              </div>
              <div className="pl-4">
                <span className="text-on-surface">uptimeCommitment</span>:{' '}
                <span className="text-secondary">0.999</span>
              </div>
              <div>&#125;;</div>
              <div className="mt-2 text-primary flex items-center gap-2">
                <span className="animate-pulse">❯</span>
                <span>ready_for_dispatch --mode=fullstack-engineer</span>
              </div>
            </div>
          </div>

          {/* Live Production Workspace Snapshot */}
          <div className="lg:col-span-5 flex flex-col gap-space-sm">
            <div className="relative w-full h-48 rounded-xl overflow-hidden shadow-lg group border border-surface-container-high/60">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src={ASSETS.workspaceSkills}
                alt="High-contrast developer workspace showing dark modern dual monitor setup"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent flex items-end p-space-md">
                <div>
                  <span className="font-code-sm text-code-sm text-primary block">
                    Active Lab &amp; Build Environment
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface">
                    Clean workspace setup for deterministic engineering
                  </span>
                </div>
              </div>
            </div>
            <div className="p-space-sm bg-surface-container-high/40 rounded-xl flex items-center justify-between border border-surface-container-high/40">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-secondary text-[20px]">bolt</span>
                <span className="font-label-md text-label-md text-on-surface">
                  Available for fullstack opportunities
                </span>
              </div>
              <button
                onClick={() => onNavigate('contact')}
                className="px-space-md py-1.5 rounded-lg bg-primary-container text-on-primary-container font-label-md text-label-md hover:bg-primary transition-colors cursor-pointer"
              >
                Engage System
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
