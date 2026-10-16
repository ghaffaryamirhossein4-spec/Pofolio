import React, { useState, useEffect } from 'react';
import { ProjectItem } from '../types';

interface ProjectSandboxModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectSandboxModal: React.FC<ProjectSandboxModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  // Sandbox interactive states
  const [activeTab, setActiveTab] = useState<'interactive' | 'architecture' | 'telemetry'>('interactive');
  
  // System 01 state: simulated metrics streaming
  const [streamEvents, setStreamEvents] = useState<number>(24510);
  const [isStreaming, setIsStreaming] = useState(true);

  // System 02 state: payment simulation
  const [txAmount, setTxAmount] = useState('149.00');
  const [txStatus, setTxStatus] = useState<'idle' | 'signing' | 'verified'>('idle');
  const [txLogs, setTxLogs] = useState<string[]>([
    'IDEMPOTENCY_KEY: idemp_9921_verified',
    'GATEWAY: Stripe sandbox v2024-06 route established',
    'HASH: 0x48f9a2e8c9... passed HMAC validation'
  ]);

  // System 03 state: e-commerce catalog items
  const [currency, setCurrency] = useState<'USD' | 'EUR' | 'IRR'>('USD');
  const [cartCount, setCartCount] = useState(2);

  // System 04 state: TaskFlow tasks
  const [tasks, setTasks] = useState([
    { id: '1', title: 'Optimize Database Sharding', stage: 'in-progress', author: 'Kian R.' },
    { id: '2', title: 'Audit JWT Bearer Claims', stage: 'review', author: 'Alex M.' },
    { id: '3', title: 'RabbitMQ Dead-Letter Queue', stage: 'done', author: 'Sara T.' }
  ]);

  useEffect(() => {
    if (!isStreaming || project.id !== 'clouds-saas') return;
    const interval = setInterval(() => {
      setStreamEvents((prev) => prev + Math.floor(Math.random() * 8) + 1);
    }, 1500);
    return () => clearInterval(interval);
  }, [isStreaming, project.id]);

  const handleTestTransaction = () => {
    setTxStatus('signing');
    setTimeout(() => {
      setTxStatus('verified');
      setTxLogs((prev) => [
        `NEW_TX: ${txAmount} ${currency} verified at ${new Date().toLocaleTimeString()}`,
        ...prev.slice(0, 4)
      ]);
      setTimeout(() => setTxStatus('idle'), 3000);
    }, 800);
  };

  const moveTask = (taskId: string) => {
    setTasks((prev) =>
      prev.map((t) => {
        if (t.id === taskId) {
          const nextStage = t.stage === 'in-progress' ? 'review' : t.stage === 'review' ? 'done' : 'in-progress';
          return { ...t, stage: nextStage };
        }
        return t;
      })
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-surface-container-lowest/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="bg-surface-container-low border border-surface-container-high rounded-2xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Chrome */}
        <div className="px-space-lg py-space-md bg-surface-container border-b border-surface-container-high flex flex-wrap items-center justify-between gap-space-sm">
          <div className="flex items-center gap-space-sm">
            <span className="w-3 h-3 rounded-full bg-secondary animate-pulse"></span>
            <div>
              <div className="flex items-center gap-space-xs">
                <span className="font-code-sm text-xs text-primary">{project.systemCode}</span>
                <span className="text-outline">/</span>
                <span className="font-code-sm text-xs text-secondary">{project.badge}</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">
                {project.titleEn}
              </h3>
            </div>
          </div>

          {/* Navigation Mode Tabs & Close */}
          <div className="flex items-center gap-space-sm">
            <div className="flex items-center p-1 bg-surface-container-lowest rounded-lg border border-surface-container-high text-xs font-semibold">
              <button
                onClick={() => setActiveTab('interactive')}
                className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                  activeTab === 'interactive'
                    ? 'bg-primary-container text-on-primary-container'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                Interactive Sandbox
              </button>
              <button
                onClick={() => setActiveTab('architecture')}
                className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                  activeTab === 'architecture'
                    ? 'bg-primary-container text-on-primary-container'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                Architecture Specs
              </button>
              <button
                onClick={() => setActiveTab('telemetry')}
                className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                  activeTab === 'telemetry'
                    ? 'bg-primary-container text-on-primary-container'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                Telemetry Logs
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

        {/* Modal Main Body */}
        <div className="p-space-lg overflow-y-auto flex-1 bg-surface-container-lowest">
          {activeTab === 'interactive' && (
            <div className="space-y-6">
              {/* Project preview hero thumbnail */}
              <div className="relative rounded-xl overflow-hidden h-52 border border-surface-container-high shadow-inner">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-code-sm">
                  <span className="px-2.5 py-1 rounded-md bg-surface-container-high/90 text-on-surface flex items-center gap-1.5 backdrop-blur-sm">
                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                    {project.liveStatus || 'Production Node Live'}
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-surface-container-high/90 text-primary backdrop-blur-sm">
                    {project.version || 'v2.4.0'}
                  </span>
                </div>
              </div>

              {/* SPECIFIC INTERACTIVE SIMULATIONS BASED ON PROJECT */}
              {project.id === 'clouds-saas' && (
                <div className="bg-surface-container-low p-space-md rounded-xl border border-surface-container-high space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-label-md text-on-surface">Live Event Ingestion Stream</h4>
                      <p className="font-code-sm text-xs text-on-surface-variant">
                        Redis Streams + PostgreSQL Time-series worker pipeline
                      </p>
                    </div>
                    <button
                      onClick={() => setIsStreaming(!isStreaming)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-code-sm font-semibold flex items-center gap-1.5 cursor-pointer ${
                        isStreaming ? 'bg-secondary/20 text-secondary border border-secondary/40' : 'bg-surface-container-high text-on-surface-variant'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[14px]">
                        {isStreaming ? 'pause' : 'play_arrow'}
                      </span>
                      <span>{isStreaming ? 'Streaming Live' : 'Paused'}</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-code-sm">
                    <div className="p-3 bg-surface-container-lowest rounded-lg border border-surface-container-high">
                      <span className="text-outline text-xs block">Processed Events</span>
                      <span className="text-lg text-primary font-bold mt-1 block">
                        {streamEvents.toLocaleString()}
                      </span>
                      <span className="text-[11px] text-secondary">▲ +12% vs last min</span>
                    </div>
                    <div className="p-3 bg-surface-container-lowest rounded-lg border border-surface-container-high">
                      <span className="text-outline text-xs block">P99 Query Latency</span>
                      <span className="text-lg text-secondary font-bold mt-1 block">48.2 ms</span>
                      <span className="text-[11px] text-on-surface-variant">Redis cluster hit 99.4%</span>
                    </div>
                    <div className="p-3 bg-surface-container-lowest rounded-lg border border-surface-container-high">
                      <span className="text-outline text-xs block">Node Allocation</span>
                      <span className="text-lg text-tertiary font-bold mt-1 block">8 Workers</span>
                      <span className="text-[11px] text-primary">Autoscaling Active</span>
                    </div>
                  </div>
                </div>
              )}

              {project.id === 'fintech-gateway' && (
                <div className="bg-surface-container-low p-space-md rounded-xl border border-surface-container-high space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-label-md text-on-surface">Idempotent Payment Pipeline Tester</h4>
                      <p className="font-code-sm text-xs text-on-surface-variant">
                        Simulate duplicate request suppression and cryptographic hash ledgering
                      </p>
                    </div>
                    <span className="px-2 py-0.5 rounded text-xs font-code-sm bg-secondary/10 text-secondary">
                      PCI-DSS Sandbox
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="relative flex-1">
                      <span className="absolute left-3 top-2.5 text-xs text-outline">$</span>
                      <input
                        type="text"
                        value={txAmount}
                        onChange={(e) => setTxAmount(e.target.value)}
                        className="w-full bg-surface-container-lowest pl-7 pr-3 py-2 rounded-lg text-sm text-on-surface font-code-sm border border-surface-container-high focus:outline-none focus:border-primary"
                        placeholder="Amount"
                      />
                    </div>
                    <button
                      onClick={handleTestTransaction}
                      disabled={txStatus === 'signing'}
                      className="px-4 py-2 rounded-lg bg-primary-container text-on-primary-container font-label-md text-xs font-semibold hover:bg-primary transition-colors cursor-pointer disabled:opacity-50 flex items-center gap-1.5"
                    >
                      <span className="material-symbols-outlined text-[16px]">
                        {txStatus === 'signing' ? 'sync' : 'lock'}
                      </span>
                      <span>
                        {txStatus === 'signing'
                          ? 'Encrypting & Routing...'
                          : txStatus === 'verified'
                          ? 'Crypt-Verified!'
                          : 'Send Test Transaction'}
                      </span>
                    </button>
                  </div>

                  {/* Transaction log box */}
                  <div className="bg-surface-container-lowest p-3 rounded-lg border border-surface-container-high font-code-sm text-xs space-y-1">
                    <span className="text-outline block mb-1">// Real-time Ledger Stream:</span>
                    {txLogs.map((log, idx) => (
                      <p key={idx} className="text-on-surface-variant flex items-center gap-2">
                        <span className="text-secondary font-bold">›</span>
                        <span>{log}</span>
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {project.id === 'ecommerce-storefront' && (
                <div className="bg-surface-container-low p-space-md rounded-xl border border-surface-container-high space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-label-md text-on-surface">Headless Storefront Micro-App</h4>
                      <p className="font-code-sm text-xs text-on-surface-variant">
                        Optimistic state synchronization with sub-15ms search response
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center bg-surface-container-lowest p-1 rounded-lg border border-surface-container-high text-xs font-code-sm">
                        {(['USD', 'EUR', 'IRR'] as const).map((curr) => (
                          <button
                            key={curr}
                            onClick={() => setCurrency(curr)}
                            className={`px-2 py-0.5 rounded cursor-pointer ${
                              currency === curr ? 'bg-primary text-surface font-bold' : 'text-on-surface-variant'
                            }`}
                          >
                            {curr}
                          </button>
                        ))}
                      </div>
                      <span className="px-2.5 py-1 rounded-lg bg-surface-container-high text-xs font-code-sm text-primary flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">shopping_bag</span>
                        <span>Cart: {cartCount}</span>
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3 bg-surface-container-lowest rounded-lg border border-surface-container-high flex items-center justify-between">
                      <div>
                        <span className="font-label-md text-on-surface block text-sm">Industrial Titanium Knob</span>
                        <span className="font-code-sm text-xs text-secondary">
                          {currency === 'USD' ? '$120.00' : currency === 'EUR' ? '€110.00' : '۶,۰۰۰,۰۰۰ تومان'}
                        </span>
                      </div>
                      <button
                        onClick={() => setCartCount((c) => c + 1)}
                        className="px-2.5 py-1 rounded bg-surface-container-high hover:bg-primary hover:text-surface text-xs font-code-sm text-primary transition-colors cursor-pointer"
                      >
                        + Add to Cart
                      </button>
                    </div>
                    <div className="p-3 bg-surface-container-lowest rounded-lg border border-surface-container-high flex items-center justify-between">
                      <div>
                        <span className="font-label-md text-on-surface block text-sm">Brushed Stainless Pull Bar</span>
                        <span className="font-code-sm text-xs text-secondary">
                          {currency === 'USD' ? '$245.00' : currency === 'EUR' ? '€225.00' : '۱۲,۲۵۰,۰۰۰ تومان'}
                        </span>
                      </div>
                      <button
                        onClick={() => setCartCount((c) => c + 1)}
                        className="px-2.5 py-1 rounded bg-surface-container-high hover:bg-primary hover:text-surface text-xs font-code-sm text-primary transition-colors cursor-pointer"
                      >
                        + Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {project.id === 'taskflow-collab' && (
                <div className="bg-surface-container-low p-space-md rounded-xl border border-surface-container-high space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-label-md text-on-surface">Interactive CRDT Task Board</h4>
                      <p className="font-code-sm text-xs text-on-surface-variant">
                        Click any card to advance stage (In-Progress → Review → Done) with zero race condition
                      </p>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-code-sm flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                      <span>34 Active Peers Online</span>
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {['in-progress', 'review', 'done'].map((column) => (
                      <div key={column} className="bg-surface-container-lowest p-3 rounded-lg border border-surface-container-high">
                        <span className="font-code-sm text-xs uppercase text-outline block mb-2 font-semibold">
                          {column.replace('-', ' ')}
                        </span>
                        <div className="space-y-2">
                          {tasks
                            .filter((t) => t.stage === column)
                            .map((task) => (
                              <div
                                key={task.id}
                                onClick={() => moveTask(task.id)}
                                className="p-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high border border-surface-container-high cursor-pointer transition-all"
                                title="Click to advance stage"
                              >
                                <span className="font-label-md text-xs text-on-surface block leading-snug">
                                  {task.title}
                                </span>
                                <div className="mt-1 flex items-center justify-between font-code-sm text-[10px] text-outline">
                                  <span>{task.author}</span>
                                  <span className="text-primary hover:underline">Advance ›</span>
                                </div>
                              </div>
                            ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'architecture' && (
            <div className="space-y-4">
              <div className="bg-surface-container-low p-space-md rounded-xl border border-surface-container-high">
                <h4 className="font-headline-sm text-sm text-primary mb-2">Technical Blueprint & Decisions</h4>
                <p className="font-body-sm text-on-surface-variant leading-relaxed mb-3">
                  {project.summaryEn}
                </p>
                <div className="p-3 bg-surface-container-lowest rounded-lg border border-surface-container-high text-right" dir="rtl">
                  <p className="font-body-sm text-on-surface leading-relaxed">
                    {project.summaryFa}
                  </p>
                </div>
              </div>

              <div className="bg-surface-container-low p-space-md rounded-xl border border-surface-container-high">
                <h4 className="font-headline-sm text-sm text-on-surface mb-2">Integrated Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-surface-container font-code-sm text-xs text-primary border border-surface-container-highest"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'telemetry' && (
            <div className="bg-surface-container-lowest p-space-md rounded-xl border border-surface-container-high font-code-sm text-xs space-y-2">
              <span className="text-secondary block">// Telemetry & Observability Logs</span>
              <p className="text-on-surface-variant">SYSTEM_IDENTIFIER: {project.systemCode}</p>
              <p className="text-on-surface-variant">HOST_ENVIRONMENT: AWS ECS / Fargate Container</p>
              <p className="text-on-surface-variant">SSL_STATUS: TLS 1.3 Strict ALPN HTTP/2</p>
              <p className="text-on-surface-variant">MEMORY_FOOTPRINT: 124MB RSS / Node v20.12.0</p>
              <p className="text-primary">HEALTH_PROBE: 200 OK (every 10s)</p>
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        <div className="px-space-lg py-3.5 bg-surface-container border-t border-surface-container-high flex flex-wrap items-center justify-between gap-space-sm">
          <div className="flex items-center gap-space-xs text-xs font-code-sm text-on-surface-variant">
            <span className="material-symbols-outlined text-[16px] text-secondary">verified</span>
            <span>Production Verified Sandbox Node</span>
          </div>

          <div className="flex items-center gap-space-sm">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-lg bg-surface-container-high text-on-surface hover:text-primary font-label-md text-xs transition-colors flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[16px]">terminal</span>
              <span>Source Code</span>
            </a>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-primary-container text-on-primary-container font-label-md text-xs font-semibold hover:bg-primary transition-colors cursor-pointer"
            >
              Close Sandbox
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
