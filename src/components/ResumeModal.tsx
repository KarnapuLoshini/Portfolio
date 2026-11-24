import { useEffect } from 'react';
import { Download, X } from 'lucide-react';
import { PROFILE, RESUME_PDF_PATH } from '../data/resumeData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 p-4 md:p-6"
      onClick={onClose}
    >
      <div
        className="w-full max-w-5xl h-[88vh] bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-5 py-4 border-b border-slate-200 flex items-center justify-between gap-4 bg-white">
          <div className="min-w-0">
            <h2
              id="resume-modal-title"
              className="font-display text-base md:text-lg font-bold text-slate-900 truncate"
            >
              {PROFILE.fullName} — Curriculum Vitae
            </h2>
            <p className="text-xs text-slate-500 truncate">
              Official attached PDF resume · {PROFILE.shortLocation}
            </p>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href={RESUME_PDF_PATH}
              download="KARNAPU_LOSHINI_Resume.pdf"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              <Download className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Download PDF</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close resume viewer"
              className="inline-flex items-center justify-center w-9 h-9 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Embedded PDF Viewer */}
        <div className="flex-1 bg-slate-100 relative">
          <iframe
            title="Karnapu Loshini Resume PDF"
            src={RESUME_PDF_PATH}
            className="w-full h-full border-0"
          />
        </div>
      </div>
    </div>
  );
}
