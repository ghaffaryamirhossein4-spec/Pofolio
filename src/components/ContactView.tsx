import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { ASSETS } from '../data/portfolioData';

interface ContactViewProps {
  language: Language;
  onOpenCvModal: (defaultLang?: 'en' | 'fa') => void;
}

export const ContactView: React.FC<ContactViewProps> = ({
  language,
  onOpenCvModal
}) => {
  // Live Tehran clock synchronizer
  const [tehranTime, setTehranTime] = useState<string>('00:00:00');

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Asia/Tehran',
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        });
        setTehranTime(formatter.format(now));
      } catch {
        const utcNow = new Date();
        // Fallback offset for UTC+3:30
        const irOffset = 3.5 * 60;
        const local = new Date(utcNow.getTime() + (utcNow.getTimezoneOffset() + irOffset) * 60000);
        setTehranTime(local.toTimeString().split(' ')[0]);
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Form states
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [projectType, setProjectType] = useState<'frontend' | 'backend' | 'fullstack'>('fullstack');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [transmissionState, setTransmissionState] = useState<'idle' | 'transmitting' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName || !senderEmail || !message) return;

    setTransmissionState('transmitting');
    setTimeout(() => {
      setTransmissionState('sent');
      // Store simulated transmission in localStorage
      try {
        const existing = JSON.parse(localStorage.getItem('kian_transmissions') || '[]');
        existing.push({
          senderName,
          senderEmail,
          projectType,
          subject,
          message,
          timestamp: new Date().toISOString()
        });
        localStorage.setItem('kian_transmissions', JSON.stringify(existing));
      } catch {
        // Safe fallback
      }

      // Reset form after delay
      setTimeout(() => {
        setSenderName('');
        setSenderEmail('');
        setSubject('');
        setMessage('');
        setTransmissionState('idle');
      }, 5000);
    }, 1200);
  };

  return (
    <div className="flex flex-col w-full pb-space-xl">
      {/* Subtle Ambient Glow Orbs */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute -top-24 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
        <div className="absolute top-1/2 -right-20 w-80 h-80 bg-secondary/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>

        {/* Section Header Area */}
        <div className="pt-space-lg pb-space-xl flex flex-col md:flex-row md:items-end justify-between gap-space-lg">
          <div className="max-w-2xl flex flex-col gap-space-xs">
            <div className="flex items-center gap-space-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse shadow-[0_0_12px_2px_rgba(76,215,246,0.5)]"></span>
              <span className="font-code-sm text-code-sm text-primary uppercase tracking-wider">
                ENDPOINT // COMMS_LINK
              </span>
              <span className="text-outline font-code-sm text-code-sm">::</span>
              <span className="font-code-sm text-code-sm text-on-surface-variant">
                PORT_8080.SECURE
              </span>
            </div>

            <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight mt-space-xs">
              Let's Build Something{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-fixed to-secondary">
                Exceptional
              </span>{' '}
              Together
            </h1>

            <p
              className="font-headline-md text-headline-md text-on-surface-variant font-normal leading-relaxed text-right mt-space-xs"
              dir="rtl"
            >
              بیایید با هم چیزی استثنایی بسازیم
            </p>
          </div>

          {/* Live Dispatch Telemetry Widget */}
          <div className="shrink-0 bg-surface-container-low px-space-md py-space-sm rounded-xl shadow-md flex items-center gap-space-md border border-surface-container-high/60">
            <div className="flex flex-col">
              <span className="font-code-sm text-code-sm text-outline uppercase">
                Response Latency
              </span>
              <span className="font-code-md text-code-md text-secondary font-semibold">
                &lt; 12 Hours SLA
              </span>
            </div>
            <div className="w-px h-8 bg-surface-container-highest"></div>
            <div className="flex flex-col">
              <span className="font-code-sm text-code-sm text-outline uppercase">
                Encryption
              </span>
              <span className="font-code-md text-code-md text-primary font-semibold">
                TLS 1.3 // PGP Ready
              </span>
            </div>
          </div>
        </div>

        {/* Main Grid: Bento Architectural Split (7 cols form + 5 cols direct telemetry) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
          {/* Interactive Contact Form Column (7 cols) */}
          <div className="lg:col-span-7 bg-surface-container-low/70 backdrop-blur-xl p-space-lg md:p-space-xl rounded-xl shadow-xl relative overflow-hidden border border-surface-container-high/60">
            <div className="flex items-center justify-between pb-space-md border-b border-surface-container-high/40">
              <div className="flex items-center gap-space-xs">
                <span className="w-3 h-3 rounded-full bg-error"></span>
                <span className="w-3 h-3 rounded-full bg-secondary-container"></span>
                <span className="w-3 h-3 rounded-full bg-primary-container"></span>
                <span className="font-code-sm text-code-sm text-on-surface-variant ml-space-sm">
                  transmission_form.ts
                </span>
              </div>
              <span className="font-code-sm text-code-sm text-primary bg-surface-container-high px-space-sm py-space-xs rounded-full border border-primary/20">
                MODE: ACTIVE_INQUIRY
              </span>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-space-md mt-space-md">
              {/* Name Field */}
              <div className="flex flex-col gap-space-xs">
                <div className="flex items-center justify-between">
                  <label
                    className="font-label-md text-label-md text-on-surface flex items-center gap-space-xs"
                    htmlFor="sender-name"
                  >
                    <span>Sender Identity / Full Name</span>
                    <span className="text-primary">*</span>
                  </label>
                  <span className="font-body-sm text-body-sm text-on-surface-variant" dir="rtl">
                    نام و نام خانوادگی
                  </span>
                </div>
                <div className="relative">
                  <input
                    id="sender-name"
                    type="text"
                    required
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g. Alex Mercer / آرش رحمانی"
                    className="w-full bg-surface-container-lowest text-on-surface placeholder:text-outline/60 font-body-md text-body-md px-space-md py-3 rounded-lg focus:outline-none focus:bg-surface-container focus:ring-1 focus:ring-primary border border-surface-container-high/60 transition-all"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="flex flex-col gap-space-xs">
                <div className="flex items-center justify-between">
                  <label
                    className="font-label-md text-label-md text-on-surface flex items-center gap-space-xs"
                    htmlFor="sender-email"
                  >
                    <span>Network Address / Work Email</span>
                    <span className="text-primary">*</span>
                  </label>
                  <span className="font-body-sm text-body-sm text-on-surface-variant" dir="rtl">
                    نشانی ایمیل کاری
                  </span>
                </div>
                <input
                  id="sender-email"
                  type="email"
                  required
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  placeholder="alex@company.com"
                  className="w-full bg-surface-container-lowest text-on-surface placeholder:text-outline/60 font-body-md text-body-md px-space-md py-3 rounded-lg focus:outline-none focus:bg-surface-container focus:ring-1 focus:ring-primary border border-surface-container-high/60 transition-all"
                />
              </div>

              {/* Project Type Selector */}
              <div className="flex flex-col gap-space-xs">
                <div className="flex items-center justify-between">
                  <label className="font-label-md text-label-md text-on-surface">
                    Project Scope / نوع پروژه
                  </label>
                  <span className="font-code-sm text-code-sm text-secondary">SELECT ONE</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm pt-space-xs">
                  {/* Frontend */}
                  <label
                    onClick={() => setProjectType('frontend')}
                    className={`p-space-sm rounded-lg transition-all flex flex-col gap-space-xs cursor-pointer border ${
                      projectType === 'frontend'
                        ? 'bg-surface-container-high text-primary border-primary/50 shadow-sm'
                        : 'bg-surface-container-lowest text-on-surface-variant border-surface-container-high/50 hover:bg-surface-container'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="material-symbols-outlined text-[18px]">web</span>
                      <span className="font-code-sm text-code-sm">01</span>
                    </div>
                    <span className="font-label-md text-label-md">Frontend</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant text-right" dir="rtl">
                      فرانت‌اند
                    </span>
                  </label>

                  {/* Backend */}
                  <label
                    onClick={() => setProjectType('backend')}
                    className={`p-space-sm rounded-lg transition-all flex flex-col gap-space-xs cursor-pointer border ${
                      projectType === 'backend'
                        ? 'bg-surface-container-high text-primary border-primary/50 shadow-sm'
                        : 'bg-surface-container-lowest text-on-surface-variant border-surface-container-high/50 hover:bg-surface-container'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="material-symbols-outlined text-[18px]">dns</span>
                      <span className="font-code-sm text-code-sm">02</span>
                    </div>
                    <span className="font-label-md text-label-md">Backend</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant text-right" dir="rtl">
                      بک‌اند و زیرساخت
                    </span>
                  </label>

                  {/* Full-Stack */}
                  <label
                    onClick={() => setProjectType('fullstack')}
                    className={`p-space-sm rounded-lg transition-all flex flex-col gap-space-xs cursor-pointer border ${
                      projectType === 'fullstack'
                        ? 'bg-surface-container-high text-primary border-primary/50 shadow-sm'
                        : 'bg-surface-container-lowest text-on-surface-variant border-surface-container-high/50 hover:bg-surface-container'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="material-symbols-outlined text-[18px]">layers</span>
                      <span className="font-code-sm text-code-sm">03</span>
                    </div>
                    <span className="font-label-md text-label-md">Full-Stack</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant text-right" dir="rtl">
                      سیستم جامع
                    </span>
                  </label>
                </div>
              </div>

              {/* Subject Line */}
              <div className="flex flex-col gap-space-xs">
                <div className="flex items-center justify-between">
                  <label className="font-label-md text-label-md text-on-surface" htmlFor="form-subject">
                    Subject Header / موضوع پیام
                  </label>
                  <span className="font-body-sm text-body-sm text-on-surface-variant" dir="rtl">
                    عنوان همکاری
                  </span>
                </div>
                <input
                  id="form-subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="e.g. Distributed Architecture Consulting / پیشنهاد همکاری"
                  className="w-full bg-surface-container-lowest text-on-surface placeholder:text-outline/60 font-body-md text-body-md px-space-md py-3 rounded-lg focus:outline-none focus:bg-surface-container focus:ring-1 focus:ring-primary border border-surface-container-high/60 transition-all"
                />
              </div>

              {/* Detailed Message */}
              <div className="flex flex-col gap-space-xs">
                <div className="flex items-center justify-between">
                  <label
                    className="font-label-md text-label-md text-on-surface flex items-center gap-space-xs"
                    htmlFor="form-message"
                  >
                    <span>Payload / Specifications</span>
                    <span className="text-primary">*</span>
                  </label>
                  <span className="font-body-sm text-body-sm text-on-surface-variant" dir="rtl">
                    شرح نیازمندی‌ها و جزئیات
                  </span>
                </div>
                <textarea
                  id="form-message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Outline technical goals, target timeline, stack constraints, or role expectations..."
                  className="w-full bg-surface-container-lowest text-on-surface placeholder:text-outline/60 font-body-md text-body-md px-space-md py-3 rounded-lg focus:outline-none focus:bg-surface-container focus:ring-1 focus:ring-primary border border-surface-container-high/60 transition-all resize-none"
                ></textarea>
              </div>

              {/* Submit Button Action */}
              <div className="pt-space-xs flex flex-col sm:flex-row items-center justify-between gap-space-md">
                <div className="flex items-center gap-space-xs text-on-surface-variant font-code-sm text-code-sm">
                  <span className="material-symbols-outlined text-[16px] text-secondary">
                    verified_user
                  </span>
                  <span>Encrypted via Secure Envelope</span>
                </div>
                <button
                  id="dispatch-submit-btn"
                  type="submit"
                  disabled={transmissionState === 'transmitting'}
                  className="w-full sm:w-auto px-space-xl py-3.5 rounded-lg bg-primary-container text-on-primary-container font-label-md text-label-md flex items-center justify-center gap-space-sm hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all cursor-pointer disabled:opacity-50 font-bold"
                >
                  {transmissionState === 'transmitting' ? (
                    <>
                      <span className="material-symbols-outlined text-[18px] animate-spin">
                        refresh
                      </span>
                      <span>Transmitting Payload...</span>
                    </>
                  ) : transmissionState === 'sent' ? (
                    <>
                      <span className="material-symbols-outlined text-[18px]">done</span>
                      <span>Transmitted // ارسال شد</span>
                    </>
                  ) : (
                    <>
                      <span>Transmit Message // ارسال پیام</span>
                      <span className="material-symbols-outlined text-[18px]">send</span>
                    </>
                  )}
                </button>
              </div>

              {/* Feedback Status Notification Box */}
              {transmissionState === 'sent' && (
                <div
                  id="form-toast"
                  className="bg-surface-container-high px-space-md py-space-sm rounded-lg flex items-center gap-space-sm border border-secondary/40 animate-in fade-in duration-300"
                >
                  <span className="material-symbols-outlined text-secondary text-[20px]">
                    task_alt
                  </span>
                  <div className="flex flex-col">
                    <span className="font-label-md text-label-md text-on-surface">
                      Payload Sent Successfully / پیام با موفقیت ارسال شد
                    </span>
                    <span className="font-code-sm text-code-sm text-on-surface-variant">
                      Packet logged. I'll get back to you within 12 hours.
                    </span>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Right Hand Info Bento Cluster (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-space-lg">
            {/* Availability Card with Interactive Micro-Indicators */}
            <div className="bg-surface-container-low p-space-lg rounded-xl shadow-xl flex flex-col gap-space-md relative overflow-hidden border border-surface-container-high/60">
              <div className="flex items-center justify-between">
                <span className="font-code-sm text-code-sm text-outline uppercase tracking-wider">
                  CAPACITY STATUS
                </span>
                <div className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded-full bg-surface-container-high border border-secondary/30">
                  <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_12px_2px_rgba(78,222,163,0.5)] animate-ping"></span>
                  <span className="font-code-sm text-code-sm text-secondary font-semibold">
                    Q2 2025 OPEN
                  </span>
                </div>
              </div>
              <div>
                <h2 className="font-headline-sm text-headline-sm text-on-surface">
                  Available for Hire &amp; Contracts
                </h2>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs leading-relaxed">
                  Open to senior full-stack roles, architectural advisory, and high-stakes performance
                  engineering contracts.
                </p>
              </div>

              {/* Engagement Modes Checkmarks */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-xs pt-space-xs">
                <div className="bg-surface-container-lowest p-space-sm rounded-lg flex flex-col gap-1 border border-surface-container-high/50">
                  <div className="flex items-center gap-1 text-secondary">
                    <span className="material-symbols-outlined text-[16px]">check_circle</span>
                    <span className="font-label-md text-label-md text-on-surface">Full-Time</span>
                  </div>
                  <span className="font-code-sm text-code-sm text-outline">Direct Hire</span>
                </div>
                <div className="bg-surface-container-lowest p-space-sm rounded-lg flex flex-col gap-1 border border-surface-container-high/50">
                  <div className="flex items-center gap-1 text-secondary">
                    <span className="material-symbols-outlined text-[16px]">check_circle</span>
                    <span className="font-label-md text-label-md text-on-surface">Contract</span>
                  </div>
                  <span className="font-code-sm text-code-sm text-outline">B2B / Milestone</span>
                </div>
                <div className="bg-surface-container-lowest p-space-sm rounded-lg flex flex-col gap-1 border border-surface-container-high/50">
                  <div className="flex items-center gap-1 text-secondary">
                    <span className="material-symbols-outlined text-[16px]">check_circle</span>
                    <span className="font-label-md text-label-md text-on-surface">Remote</span>
                  </div>
                  <span className="font-code-sm text-code-sm text-outline">Worldwide</span>
                </div>
              </div>
            </div>

            {/* Location, Coordinates & Timezone Card */}
            <div className="bg-surface-container-low p-space-lg rounded-xl shadow-xl flex flex-col gap-space-md border border-surface-container-high/60">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-space-xs text-on-surface">
                  <span className="material-symbols-outlined text-primary text-[20px]">public</span>
                  <span className="font-label-md text-label-md">Node Base &amp; Meridian</span>
                </div>
                <span className="font-code-sm text-code-sm text-outline">IR // THR</span>
              </div>
              <div className="flex items-center justify-between bg-surface-container-lowest p-space-md rounded-lg border border-surface-container-high">
                <div className="flex flex-col">
                  <span className="font-headline-sm text-headline-sm text-on-surface font-semibold tracking-tight">
                    Tehran, Iran
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    GMT+3:30 (IRST)
                  </span>
                </div>
                <div className="flex flex-col items-end">
                  <span id="local-clock" className="font-code-md text-code-md text-primary font-bold">
                    {tehranTime} IRST (UTC+3.5)
                  </span>
                  <span className="font-code-sm text-code-sm text-secondary">Synchronized</span>
                </div>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-[16px] text-outline">
                  flight_takeoff
                </span>
                <span>Accustomed to asynchronous workflows across US, EU, and APAC time zones.</span>
              </p>
            </div>

            {/* Direct Channels Contact Matrix */}
            <div className="bg-surface-container-low p-space-lg rounded-xl shadow-xl flex flex-col gap-space-md border border-surface-container-high/60">
              <div className="flex items-center justify-between">
                <span className="font-code-sm text-code-sm text-outline uppercase tracking-wider">
                  DIRECT HIGHWAYS
                </span>
                <span className="font-code-sm text-code-sm text-primary">INSTANT REACH</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
                {/* Email */}
                <a
                  className="p-space-sm rounded-lg bg-surface-container-lowest hover:bg-surface-container-high transition-colors flex items-center gap-space-sm group border border-surface-container-high/40"
                  href="mailto:contact@domain.dev"
                >
                  <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-[20px]">alternate_email</span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors">
                      Work Email
                    </span>
                    <span className="font-code-sm text-code-sm text-on-surface-variant truncate">
                      contact@domain.dev
                    </span>
                  </div>
                </a>

                {/* Telegram */}
                <a
                  className="p-space-sm rounded-lg bg-surface-container-lowest hover:bg-surface-container-high transition-colors flex items-center gap-space-sm group border border-surface-container-high/40"
                  href="https://t.me"
                  rel="noreferrer"
                  target="_blank"
                >
                  <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-[20px]">send</span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors">
                      Telegram
                    </span>
                    <span className="font-code-sm text-code-sm text-on-surface-variant truncate">
                      @kian_dev
                    </span>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  className="p-space-sm rounded-lg bg-surface-container-lowest hover:bg-surface-container-high transition-colors flex items-center gap-space-sm group border border-surface-container-high/40"
                  href="https://linkedin.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-[20px]">hub</span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors">
                      LinkedIn
                    </span>
                    <span className="font-code-sm text-code-sm text-on-surface-variant truncate">
                      /in/kianrafiei
                    </span>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  className="p-space-sm rounded-lg bg-surface-container-lowest hover:bg-surface-container-high transition-colors flex items-center gap-space-sm group border border-surface-container-high/40"
                  href="https://github.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-[20px]">terminal</span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors">
                      GitHub
                    </span>
                    <span className="font-code-sm text-code-sm text-on-surface-variant truncate">
                      @kian-systems
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Curriculum Vitae / Resume Downloads (Dual Language) */}
            <div className="bg-surface-container-low p-space-lg rounded-xl shadow-xl flex flex-col gap-space-md border border-surface-container-high/60">
              <div className="flex items-center justify-between">
                <span className="font-code-sm text-code-sm text-outline uppercase tracking-wider">
                  VERIFIED CREDENTIALS
                </span>
                <span className="font-code-sm text-code-sm text-secondary">PDF v2.4</span>
              </div>
              <div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">
                  Curriculum Vitae / دانلود رزومه
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                  Complete career dossier, verified production architecture contributions, and skill
                  telemetry.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-space-xs">
                {/* English Resume */}
                <button
                  onClick={() => onOpenCvModal('en')}
                  className="flex items-center justify-between p-space-md bg-surface-container-lowest rounded-lg hover:bg-surface-container-high transition-all group text-left cursor-pointer border border-surface-container-high/40"
                >
                  <div className="flex items-center gap-space-sm">
                    <span className="material-symbols-outlined text-primary text-[24px]">
                      description
                    </span>
                    <div className="flex flex-col">
                      <span className="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors">
                        Resume (EN)
                      </span>
                      <span className="font-code-sm text-code-sm text-outline">
                        English PDF // 184 KB
                      </span>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary group-hover:translate-y-0.5 transition-transform">
                    download
                  </span>
                </button>

                {/* Persian Resume */}
                <button
                  onClick={() => onOpenCvModal('fa')}
                  className="flex items-center justify-between p-space-md bg-surface-container-lowest rounded-lg hover:bg-surface-container-high transition-all group text-left cursor-pointer border border-surface-container-high/40"
                >
                  <div className="flex items-center gap-space-sm">
                    <span className="material-symbols-outlined text-secondary text-[24px]">
                      description
                    </span>
                    <div className="flex flex-col">
                      <span
                        className="font-label-md text-label-md text-on-surface group-hover:text-secondary transition-colors"
                        dir="rtl"
                      >
                        رزومه کاری (فارسی)
                      </span>
                      <span className="font-code-sm text-code-sm text-outline">
                        Persian PDF // 210 KB
                      </span>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-secondary group-hover:translate-y-0.5 transition-transform">
                    download
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Divider & Map Representation Strip */}
        <div className="mt-space-xl grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-stretch">
          <div className="lg:col-span-8 bg-surface-container-low rounded-xl p-space-lg shadow-xl flex flex-col justify-between gap-space-md border border-surface-container-high/60">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-space-sm">
                <span className="material-symbols-outlined text-primary">map</span>
                <span className="font-label-md text-label-md text-on-surface">
                  Primary Coordinates Node
                </span>
              </div>
              <span className="font-code-sm text-code-sm text-outline">35.6892° N, 51.3890° E</span>
            </div>

            <div
              className="w-full h-48 bg-cover bg-center rounded-lg shadow-inner relative overflow-hidden border border-surface-container-high"
              style={{ backgroundImage: `url('${ASSETS.tehranMap}')` }}
            >
              <div className="absolute inset-0 bg-surface-container-lowest/60 backdrop-blur-[2px] flex items-center justify-center">
                <div className="bg-surface-container-high/90 px-space-md py-space-sm rounded-full shadow-lg flex items-center gap-space-sm border border-surface-container-highest">
                  <span className="w-3 h-3 rounded-full bg-primary animate-ping"></span>
                  <span className="font-code-sm text-code-sm text-on-surface font-semibold">
                    Tehran Tech Corridor // Global Sync
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-space-sm font-code-sm text-code-sm text-on-surface-variant">
              <span>Relocation: Available for approved EU/Global opportunities</span>
              <span className="text-secondary font-semibold">Latency to Frankfurt: ~68ms</span>
            </div>
          </div>

          {/* Compact Technical Architecture Summary Banner */}
          <div className="lg:col-span-4 bg-surface-container-low rounded-xl p-space-lg shadow-xl flex flex-col justify-between gap-space-md border border-surface-container-high/60">
            <div className="flex items-center justify-between">
              <span className="font-code-sm text-code-sm text-outline">TECH STACK AFFINITY</span>
              <span className="material-symbols-outlined text-primary text-[18px]">bolt</span>
            </div>

            <div className="flex flex-col gap-space-xs">
              <div className="flex justify-between items-center font-code-sm text-code-sm">
                <span className="text-on-surface">Go / Node.js / TypeScript</span>
                <span className="text-primary font-semibold">95%</span>
              </div>
              <div className="w-full h-1.5 bg-surface-container-lowest rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: '95%' }}></div>
              </div>
            </div>

            <div className="flex flex-col gap-space-xs">
              <div className="flex justify-between items-center font-code-sm text-code-sm">
                <span className="text-on-surface">Next.js / Tailwind / React</span>
                <span className="text-secondary font-semibold">92%</span>
              </div>
              <div className="w-full h-1.5 bg-surface-container-lowest rounded-full overflow-hidden">
                <div className="h-full bg-secondary rounded-full" style={{ width: '92%' }}></div>
              </div>
            </div>

            <div className="flex flex-col gap-space-xs">
              <div className="flex justify-between items-center font-code-sm text-code-sm">
                <span className="text-on-surface">PostgreSQL / Redis / Docker</span>
                <span className="text-primary-fixed font-semibold">88%</span>
              </div>
              <div className="w-full h-1.5 bg-surface-container-lowest rounded-full overflow-hidden">
                <div className="h-full bg-primary-fixed rounded-full" style={{ width: '88%' }}></div>
              </div>
            </div>

            <div className="pt-space-xs">
              <span className="font-body-sm text-body-sm text-outline">
                Ready to deploy scalable solutions directly to your infra.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
