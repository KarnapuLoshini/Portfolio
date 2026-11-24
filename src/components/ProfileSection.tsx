import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { PROFILE } from '../data/resumeData';

export default function ProfileSection() {
  const [copiedAddress, setCopiedAddress] = useState(false);

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.address);
      setCopiedAddress(true);
      window.setTimeout(() => setCopiedAddress(false), 1800);
    } catch {
      setCopiedAddress(false);
    }
  };

  return (
    <section id="profile" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Section Heading & Official Declaration */}
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold text-blue-600 mb-2">
              03. Personal Profile &amp; Declaration
            </p>
            <h2
              className="font-display text-2xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6"
              style={{ textWrap: 'balance' }}
            >
              Background, Languages &amp; Particulars
            </h2>

            {/* Official Declaration rendered in Editorial Monograph Serif */}
            <div className="pt-6 border-t border-slate-200">
              <p className="text-xs font-semibold text-slate-500 mb-3">
                Official Declaration
              </p>
              <blockquote className="font-editorial italic text-base md:text-lg text-slate-700 leading-relaxed">
                “{PROFILE.declaration}”
              </blockquote>
              <div className="mt-5 flex items-center justify-between text-xs text-slate-500">
                <span>Place: {PROFILE.declarationPlace}</span>
                <span className="font-display font-semibold text-slate-900 text-sm">
                  {PROFILE.signature}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Structured Personal Particulars Grid */}
          <div className="lg:col-span-7">
            <div className="border border-slate-200 rounded-xl divide-y divide-slate-200 bg-white">
              <div className="p-5 md:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="text-xs font-medium text-slate-500">Full Name</span>
                <span className="text-sm font-semibold text-slate-900">
                  {PROFILE.fullName}
                </span>
              </div>

              <div className="p-5 md:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="text-xs font-medium text-slate-500">Date of Birth</span>
                <span className="text-sm font-medium text-slate-900 font-mono-tabular">
                  {PROFILE.dob} ({PROFILE.dobReadable})
                </span>
              </div>

              <div className="p-5 md:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="text-xs font-medium text-slate-500">Father’s Name</span>
                <span className="text-sm font-medium text-slate-900">
                  {PROFILE.fatherName}
                </span>
              </div>

              <div className="p-5 md:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="text-xs font-medium text-slate-500">Mother’s Name</span>
                <span className="text-sm font-medium text-slate-900">
                  {PROFILE.motherName}
                </span>
              </div>

              <div className="p-5 md:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="text-xs font-medium text-slate-500">Languages Known</span>
                <span className="text-sm font-medium text-slate-900">
                  {PROFILE.languages.join(' · ')}
                </span>
              </div>

              <div className="p-5 md:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="text-xs font-medium text-slate-500">Hobbies &amp; Interests</span>
                <span className="text-sm font-medium text-slate-900">
                  {PROFILE.hobbies.join(' · ')}
                </span>
              </div>

              <div className="p-5 md:p-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <span className="text-xs font-medium text-slate-500 shrink-0 pt-0.5">
                  Address for Communication
                </span>
                <div className="sm:text-right flex flex-col sm:items-end gap-2">
                  <span className="text-sm font-medium text-slate-900 leading-relaxed">
                    {PROFILE.address}
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyAddress}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-600 hover:text-blue-700 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-sm"
                  >
                    {copiedAddress ? (
                      <>
                        <Check className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>Address copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>Copy address</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
