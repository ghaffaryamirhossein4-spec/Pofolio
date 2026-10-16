import React, { useState } from 'react';
import { Language } from '../types';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultLang?: Language;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  defaultLang = 'en'
}) => {
  const [activeTab, setActiveTab] = useState<'en' | 'fa'>(defaultLang);
  const [downloading, setDownloading] = useState(false);

  if (!isOpen) return null;

  const handleDownloadPdf = (lang: 'en' | 'fa') => {
    setDownloading(true);
    // Simulate generation and download
    setTimeout(() => {
      const fileName = lang === 'en' ? 'Kian_Rafiei_Resume_EN.pdf' : 'Kian_Rafiei_Resume_FA.pdf';
      const dummyContent = `Kian Rafiei - Full-Stack Software Engineer Dossier (${lang.toUpperCase()})`;
      const blob = new Blob([dummyContent], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      setDownloading(false);
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-surface-container-lowest/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="bg-surface-container-low border border-surface-container-high rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="px-space-lg py-space-md bg-surface-container border-b border-surface-container-high flex items-center justify-between">
          <div className="flex items-center gap-space-sm">
            <span className="material-symbols-outlined text-primary text-[24px]">description</span>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">
                Curriculum Vitae / دانلود رزومه
              </h3>
              <p className="font-code-sm text-code-sm text-on-surface-variant">
                Verified Production Telemetry • PDF v2.4
              </p>
            </div>
          </div>

          <div className="flex items-center gap-space-sm">
            {/* Language toggle within modal */}
            <div className="flex items-center p-1 bg-surface-container-lowest rounded-lg border border-surface-container-high">
              <button
                onClick={() => setActiveTab('en')}
                className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  activeTab === 'en'
                    ? 'bg-primary-container text-on-primary-container shadow-sm'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                English (184 KB)
              </button>
              <button
                onClick={() => setActiveTab('fa')}
                className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  activeTab === 'fa'
                    ? 'bg-secondary text-surface font-bold shadow-sm'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                فارسی (۲۱۰ کیلوبایت)
              </button>
            </div>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg bg-surface-container-high hover:bg-surface-bright flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>
        </div>

        {/* Scrollable Document Content Preview */}
        <div className="p-space-lg overflow-y-auto flex-1 bg-surface-container-lowest font-body-sm leading-relaxed text-on-surface-variant">
          {activeTab === 'en' ? (
            <div className="space-y-6 text-left" dir="ltr">
              {/* Header section */}
              <div className="border-b border-surface-container-high pb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <div>
                  <h1 className="text-2xl font-bold text-on-surface tracking-tight">Kian Rafiei</h1>
                  <p className="text-primary font-medium text-sm">
                    Full-Stack Software Engineer • Next.js | Node.js | Distributed Systems
                  </p>
                </div>
                <div className="font-code-sm text-xs text-outline sm:text-right">
                  <p>Tehran, Iran • contact@domain.dev</p>
                  <p>github.com/kian-systems • linkedin.com/in/kianrafiei</p>
                </div>
              </div>

              {/* Summary */}
              <div>
                <h4 className="text-xs uppercase tracking-wider text-primary font-bold mb-1">
                  Professional Summary
                </h4>
                <p className="text-on-surface text-sm">
                  Full-stack software engineer with 2+ years of production experience architecting
                  high-concurrency web services, event-driven microservices, and reactive user
                  interfaces. Demonstrated expertise in cutting endpoint response latencies by 35%
                  and managing zero-downtime database migrations serving 250k+ daily users.
                </p>
              </div>

              {/* Work Experience */}
              <div>
                <h4 className="text-xs uppercase tracking-wider text-primary font-bold mb-3">
                  Experience
                </h4>
                <div className="space-y-4">
                  <div className="border-l-2 border-primary/40 pl-3">
                    <div className="flex justify-between items-baseline">
                      <span className="text-base font-semibold text-on-surface">
                        Full-Stack Software Engineer — Nexura Systems Corp.
                      </span>
                      <span className="font-code-sm text-xs text-primary">2023 — Present</span>
                    </div>
                    <p className="text-xs text-outline mb-1.5">Tehran / Hybrid • Full-Time</p>
                    <ul className="list-disc list-inside space-y-1 text-xs text-on-surface">
                      <li>
                        Orchestrated legacy monolithic migration to Next.js 14 App Router, decreasing
                        SSR load times by 42%.
                      </li>
                      <li>
                        Constructed resilient microservices using NestJS and RabbitMQ, cutting API P99
                        latency by 35%.
                      </li>
                      <li>
                        Achieved zero-downtime database schema migration serving 250k daily active
                        sessions.
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-2 border-secondary/40 pl-3">
                    <div className="flex justify-between items-baseline">
                      <span className="text-base font-semibold text-on-surface">
                        Junior Full-Stack Developer — Arta Tech Solutions
                      </span>
                      <span className="font-code-sm text-xs text-secondary">2022 — 2023</span>
                    </div>
                    <p className="text-xs text-outline mb-1.5">Tehran • On-site</p>
                    <ul className="list-disc list-inside space-y-1 text-xs text-on-surface">
                      <li>
                        Engineered 20+ accessible and responsive UI components with React 18,
                        TypeScript, and Tailwind CSS.
                      </li>
                      <li>
                        Maintained PostgreSQL relational schemas and authored RESTful API endpoints in
                        Express.js.
                      </li>
                      <li>
                        Integrated payment gateways (Zarinpal, Stripe Sandbox) with idempotent retry
                        policies.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Education & Certs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-primary font-bold mb-2">
                    Education
                  </h4>
                  <p className="font-semibold text-on-surface text-sm">
                    B.Sc. in Software Engineering
                  </p>
                  <p className="text-xs text-primary">
                    Amirkabir University of Technology (Tehran Polytechnic)
                  </p>
                  <p className="text-xs text-outline">Graduated 2023</p>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-secondary font-bold mb-2">
                    Certifications
                  </h4>
                  <ul className="text-xs space-y-1 text-on-surface">
                    <li>• AWS Certified Cloud Practitioner (2023)</li>
                    <li>• Meta Certified Front-End Developer (2022)</li>
                    <li>• PostgreSQL High Performance Tuning (2023)</li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6 text-right" dir="rtl">
              {/* Header section Persian */}
              <div className="border-b border-surface-container-high pb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <div>
                  <h1 className="text-2xl font-bold text-on-surface tracking-tight">کیان رافعی</h1>
                  <p className="text-secondary font-medium text-sm">
                    مهندس نرم‌افزار فول‌استک • توسعه وب، میکروسرویس‌ها و سیستم‌های توزیع‌شده
                  </p>
                </div>
                <div className="font-code-sm text-xs text-outline sm:text-left" dir="ltr">
                  <p>Tehran, Iran • contact@domain.dev</p>
                  <p>github.com/kian-systems</p>
                </div>
              </div>

              {/* Summary */}
              <div>
                <h4 className="text-xs uppercase tracking-wider text-secondary font-bold mb-1">
                  خلاصه تجارب کاری
                </h4>
                <p className="text-on-surface text-sm leading-relaxed">
                  توسعه‌دهنده فول‌استک با بیش از ۲ سال تجربه کار با سیستم‌های توزیع‌شده در مقیاس سازمانی،
                  فریمورک Next.js 14، سرویس‌های NestJS و پایگاه‌های داده PostgreSQL. سابقه موفق کاهش ۳۵
                  درصدی زمان پاسخگویی APIها و انجام مایگریشن دیتابیس بدون هیچ‌گونه زمان توقف (Zero
                  Downtime).
                </p>
              </div>

              {/* Work Experience */}
              <div>
                <h4 className="text-xs uppercase tracking-wider text-secondary font-bold mb-3">
                  سوابق شغلی
                </h4>
                <div className="space-y-4">
                  <div className="border-r-2 border-primary/40 pr-3">
                    <div className="flex justify-between items-baseline">
                      <span className="text-base font-semibold text-on-surface">
                        مهندس نرم‌افزار فول‌استک — شرکت نکسورا سیستمز (Nexura Systems)
                      </span>
                      <span className="font-code-sm text-xs text-primary" dir="ltr">
                        2023 — Present
                      </span>
                    </div>
                    <p className="text-xs text-outline mb-1.5">تهران / هیبرید • تمام وقت</p>
                    <ul className="list-disc list-inside space-y-1 text-xs text-on-surface">
                      <li>
                        بازنویسی معماری فرانت‌اند به Next.js 14 App Router و کاهش ۴۲ درصدی زمان بارگذاری
                        سمت سرور.
                      </li>
                      <li>
                        طراحی و استقرار میکروسرویس‌های مقیاس‌پذیر با NestJS و RabbitMQ با کاهش ۳۵ درصدی
                        تاخیر سرور.
                      </li>
                      <li>
                        مدیریت صفر تا صد مایگریشن ساختار پایگاه‌داده با پشتیبانی از ۲۵۰ هزار کاربر فعال
                        روزانه.
                      </li>
                    </ul>
                  </div>

                  <div className="border-r-2 border-secondary/40 pr-3">
                    <div className="flex justify-between items-baseline">
                      <span className="text-base font-semibold text-on-surface">
                        برنامه‌نویس جونیور فول‌استک — استودیو آرتا تک (Arta Tech Solutions)
                      </span>
                      <span className="font-code-sm text-xs text-secondary" dir="ltr">
                        2022 — 2023
                      </span>
                    </div>
                    <p className="text-xs text-outline mb-1.5">تهران • حضوری</p>
                    <ul className="list-disc list-inside space-y-1 text-xs text-on-surface">
                      <li>
                        توسعه بیش از ۲۰ کامپوننت ری‌اکت و تایپ‌اسکریپت با استانداردهای ریسپانسیو و
                        دسترسی‌پذیری.
                      </li>
                      <li>پیاده‌سازی اندپوینت‌های RESTful با Express.js و اتصال به PostgreSQL.</li>
                      <li>اتصال و اعتبارسنجی درگاه‌های پرداخت آنلاین با مدیریت تراکنش‌های امن.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-secondary font-bold mb-2">
                    تحصیلات
                  </h4>
                  <p className="font-semibold text-on-surface text-sm">
                    کارشناسی مهندسی کامپیوتر (نرم‌افزار)
                  </p>
                  <p className="text-xs text-secondary">
                    دانشگاه صنعتی امیرکبیر (پلی‌تکنیک تهران)
                  </p>
                  <p className="text-xs text-outline">فارغ‌التحصیل سال ۱۴۰۲</p>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-primary font-bold mb-2">
                    مدارک و گواهینامه‌ها
                  </h4>
                  <ul className="text-xs space-y-1 text-on-surface">
                    <li>• AWS Certified Cloud Practitioner (2023)</li>
                    <li>• Meta Certified Front-End Developer (2022)</li>
                    <li>• دوره تخصصی بهینه‌سازی دیتابیس PostgreSQL (2023)</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Action buttons footer */}
        <div className="px-space-lg py-3.5 bg-surface-container border-t border-surface-container-high flex items-center justify-between">
          <span className="font-code-sm text-xs text-on-surface-variant">
            SHA256: 8a4c10e...29f8 • Ready for verified employment review
          </span>
          <div className="flex items-center gap-space-sm">
            <button
              onClick={() => handleDownloadPdf(activeTab)}
              disabled={downloading}
              className="px-space-md py-2 rounded-lg bg-primary-container text-on-primary-container font-label-md text-xs font-semibold flex items-center gap-1.5 hover:bg-primary transition-all cursor-pointer shadow-md disabled:opacity-50"
            >
              <span className="material-symbols-outlined text-[16px]">
                {downloading ? 'refresh' : 'download'}
              </span>
              <span>
                {downloading
                  ? 'Generating PDF...'
                  : activeTab === 'en'
                  ? 'Download PDF (EN)'
                  : 'دانلود فایل رزومه (فارسی)'}
              </span>
            </button>
            <button
              onClick={() => window.print()}
              className="px-space-md py-2 rounded-lg bg-surface-container-high text-on-surface font-label-md text-xs hover:bg-surface-bright transition-colors cursor-pointer"
            >
              Print / چاپ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
