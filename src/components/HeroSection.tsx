import { useState } from 'react';
import { ArrowDownRight, ArrowUpRight, Download, FileText } from 'lucide-react';
import { PROFILE, RESUME_PDF_PATH, SNAPSHOT_METRICS } from '../data/resumeData';

interface HeroSectionProps {
  onOpenResume: () => void;
}

type DossierTab = 'summary' | 'stack' | 'facts';

export default function HeroSection({ onOpenResume }: HeroSectionProps) {
  const [activeTab, setActiveTab] = useState<DossierTab>('summary');

  return (
    <section id="overview" className="pt-12 pb-14 md:pt-16 md:pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* 2-Column Split Hero with items-stretch */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Typographic Hierarchy & Career Objective */}
          <div className="lg:col-span-7 flex flex-col justify-between py-2">
            <div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500 mb-5">
                <span className="text-blue-600 font-semibold">{PROFILE.roleLine}</span>
                <span aria-hidden="true">·</span>
                <span>SITAM College, Vizianagaram</span>
                <span aria-hidden="true">·</span>
                <span>JNTUGV</span>
              </div>

              <h1
                className="font-display font-bold tracking-tight text-slate-900 leading-[1.06] mb-6"
                style={{ fontSize: 'clamp(2.5rem, 4.5vw, 3.85rem)', textWrap: 'balance' }}
              >
                Karnapu Loshini
              </h1>

              <p className="font-editorial italic text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mb-6">
                Engineering undergraduate focused on disciplined growth, foundational programming in C &amp; Python, and collaborative problem solving.
              </p>

              <div className="border-t border-slate-200 pt-6 max-w-2xl">
                <h2 className="text-xs font-semibold text-slate-500 tracking-wide mb-2">
                  Career Objective
                </h2>
                <p className="text-base text-slate-700 leading-relaxed">
                  {PROFILE.careerObjective}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 mt-8 pt-2">
              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center gap-2.5 px-5 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              >
                <FileText className="w-4 h-4" aria-hidden="true" />
                <span>View Original Resume</span>
              </button>

              <a
                href={RESUME_PDF_PATH}
                download="KARNAPU_LOSHINI_Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              >
                <Download className="w-4 h-4" aria-hidden="true" />
                <span>Download PDF</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-2 py-3 text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-sm"
              >
                <span>Get in Touch</span>
                <ArrowDownRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right Column: Architectural Interactive Candidate Dossier Card */}
          <div className="lg:col-span-5 flex">
            <div className="w-full rounded-2xl bg-slate-950 text-slate-100 p-7 md:p-8 flex flex-col justify-between border border-slate-800">
              {/* Top Monogram & Interactive Tab Switcher */}
              <div>
                <div className="flex items-start justify-between gap-4 pb-6 border-b border-slate-800">
                  <div className="flex items-center gap-4">
                    {/* Crisp Geometric KL Monogram SVG */}
                    <svg
                      viewBox="0 0 56 56"
                      className="w-12 h-12 shrink-0"
                      aria-hidden="true"
                    >
                      <rect
                        x="1"
                        y="1"
                        width="54"
                        height="54"
                        rx="12"
                        fill="#0f172a"
                        stroke="#334155"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M15 16V40M15 28L26 16M20 23L27 40"
                        stroke="#f8fafc"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                      <path
                        d="M33 16V40H43"
                        stroke="#3b82f6"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                    </svg>
                    <div>
                      <p className="font-display text-base font-semibold text-white tracking-tight">
                        Candidate Dossier
                      </p>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {PROFILE.shortLocation}
                      </p>
                    </div>
                  </div>
                  <a
                    href="#education"
                    aria-label="Jump to academic qualifications"
                    className="w-9 h-9 rounded-lg border border-slate-800 bg-slate-900 hover:border-blue-500 flex items-center justify-center text-slate-300 hover:text-white transition-colors shrink-0"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Segmented Interactive Tabs */}
                <div
                  role="tablist"
                  aria-label="Candidate dossier views"
                  className="grid grid-cols-3 gap-1 p-1 bg-slate-900 rounded-lg mt-6 border border-slate-800"
                >
                  {(
                    [
                      { id: 'summary', label: 'Summary' },
                      { id: 'stack', label: 'Tech Stack' },
                      { id: 'facts', label: 'Details' },
                    ] as const
                  ).map((tab) => (
                    <button
                      key={tab.id}
                      role="tab"
                      type="button"
                      aria-selected={activeTab === tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`py-2 px-2 text-xs font-medium rounded-md transition-colors duration-150 whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                        activeTab === tab.id
                          ? 'bg-blue-600 text-white'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <div className="mt-6 min-h-[190px]">
                  {activeTab === 'summary' && (
                    <div className="space-y-4">
                      <div className="flex items-baseline justify-between py-2.5 border-b border-slate-800/80">
                        <span className="text-xs text-slate-400">Current Degree</span>
                        <span className="text-sm font-medium text-white">B.Tech. (Pursuing)</span>
                      </div>
                      <div className="flex items-baseline justify-between py-2.5 border-b border-slate-800/80">
                        <span className="text-xs text-slate-400">College</span>
                        <span className="text-sm font-medium text-white">SITAM, Vizianagaram</span>
                      </div>
                      <div className="flex items-baseline justify-between py-2.5 border-b border-slate-800/80">
                        <span className="text-xs text-slate-400">University</span>
                        <span className="text-sm font-medium text-white">JNTUGV, Vizianagaram</span>
                      </div>
                      <div className="flex items-baseline justify-between py-2.5">
                        <span className="text-xs text-slate-400">Current CGPA</span>
                        <span className="font-mono-tabular text-sm font-medium text-blue-400">
                          7.0 till date
                        </span>
                      </div>
                    </div>
                  )}

                  {activeTab === 'stack' && (
                    <div className="space-y-4">
                      <div className="py-2.5 border-b border-slate-800/80">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-white">C Language</span>
                          <span className="text-xs text-slate-400">Procedural &amp; Logic</span>
                        </div>
                        <p className="text-xs text-slate-400 mt-1">
                          Structured programming, functions, arrays, and core algorithms.
                        </p>
                      </div>
                      <div className="py-2.5 border-b border-slate-800/80">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-white">Python</span>
                          <span className="text-xs text-slate-400">Scripting &amp; Data</span>
                        </div>
                        <p className="text-xs text-slate-400 mt-1">
                          Clean syntax, core data structures, and problem solving.
                        </p>
                      </div>
                      <div className="py-2.5">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-white">M.S. Office</span>
                          <span className="text-xs text-slate-400">Productivity Suite</span>
                        </div>
                        <p className="text-xs text-slate-400 mt-1">
                          Word documentation, Excel tables, and PowerPoint decks.
                        </p>
                      </div>
                    </div>
                  )}

                  {activeTab === 'facts' && (
                    <div className="space-y-4">
                      <div className="flex items-baseline justify-between py-2.5 border-b border-slate-800/80">
                        <span className="text-xs text-slate-400">Date of Birth</span>
                        <span className="font-mono-tabular text-sm font-medium text-white">
                          {PROFILE.dob}
                        </span>
                      </div>
                      <div className="flex items-baseline justify-between py-2.5 border-b border-slate-800/80">
                        <span className="text-xs text-slate-400">Languages</span>
                        <span className="text-sm font-medium text-white">English, Telugu</span>
                      </div>
                      <div className="flex items-baseline justify-between py-2.5 border-b border-slate-800/80">
                        <span className="text-xs text-slate-400">Email</span>
                        <span className="text-sm font-medium text-white truncate max-w-[200px]">
                          {PROFILE.email}
                        </span>
                      </div>
                      <div className="flex items-baseline justify-between py-2.5">
                        <span className="text-xs text-slate-400">Phone</span>
                        <span className="font-mono-tabular text-sm font-medium text-white">
                          {PROFILE.phone}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Quiet Dossier Footer */}
              <div className="pt-5 mt-6 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>Balaji Nagar, Vizianagaram</span>
                <span className="font-mono-tabular">DOB · 2005</span>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Academic Snapshot Strip Below Split Hero */}
        <div className="mt-12 pt-10 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SNAPSHOT_METRICS.map((item) => (
            <div key={item.label} className="space-y-1.5">
              <div className="font-display font-bold text-3xl md:text-4xl tracking-tight text-slate-900 font-mono-tabular">
                {item.value}
              </div>
              <div className="text-sm font-semibold text-slate-800">{item.label}</div>
              <div className="text-xs text-slate-500">{item.context}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
