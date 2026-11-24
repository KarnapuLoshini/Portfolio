import { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MarqueeStrip from './components/MarqueeStrip';
import EducationSection from './components/EducationSection';
import SkillsSection from './components/SkillsSection';
import ProfileSection from './components/ProfileSection';
import ContactSection from './components/ContactSection';
import ResumeModal from './components/ResumeModal';
import { PROFILE, RESUME_PDF_PATH } from './data/resumeData';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Header onOpenResume={() => setResumeOpen(true)} />

      <main className="flex-1">
        <HeroSection onOpenResume={() => setResumeOpen(true)} />
        <MarqueeStrip />
        <EducationSection />
        <SkillsSection />
        <ProfileSection />
        <ContactSection onOpenResume={() => setResumeOpen(true)} />
      </main>

      {/* Quiet Editorial Footer */}
      <footer className="bg-white border-t border-slate-200 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            <span className="font-semibold text-slate-900">{PROFILE.fullName}</span>
            <span className="mx-2" aria-hidden="true">·</span>
            <span>{PROFILE.shortLocation}</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={`mailto:${PROFILE.email}`}
              className="hover:text-slate-900 transition-colors whitespace-nowrap"
            >
              {PROFILE.email}
            </a>
            <a
              href={RESUME_PDF_PATH}
              download="KARNAPU_LOSHINI_Resume.pdf"
              className="hover:text-blue-600 transition-colors whitespace-nowrap font-medium text-slate-700"
            >
              Download Resume
            </a>
            <a
              href="#overview"
              className="hover:text-slate-900 transition-colors whitespace-nowrap"
            >
              Back to Top
            </a>
          </div>
        </div>
      </footer>

      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}
