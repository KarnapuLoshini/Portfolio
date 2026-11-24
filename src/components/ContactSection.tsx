import { useState } from 'react';
import { Check, Copy, FileText, Mail, MapPin, Phone } from 'lucide-react';
import { PROFILE } from '../data/resumeData';

interface ContactSectionProps {
  onOpenResume: () => void;
}

export default function ContactSection({ onOpenResume }: ContactSectionProps) {
  const [copiedField, setCopiedField] = useState<'email' | 'phone' | null>(null);

  const copyValue = async (text: string, field: 'email' | 'phone') => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      window.setTimeout(() => setCopiedField(null), 2000);
    } catch {
      setCopiedField(null);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-10">
          <p className="text-xs font-semibold text-blue-600 mb-2">
            04. Contact &amp; Availability
          </p>
          <h2
            className="font-display text-2xl md:text-4xl font-bold tracking-tight text-slate-900 mb-3"
            style={{ textWrap: 'balance' }}
          >
            Connect Directly
          </h2>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            Available for entry-level opportunities, internships, and academic collaborations in software and technical roles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Email Card */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col justify-between gap-5">
            <div className="min-w-0">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-2">
                <Mail className="w-4 h-4 text-blue-600" aria-hidden="true" />
                <span>Email Address</span>
              </div>
              <a
                href={`mailto:${PROFILE.email}`}
                className="text-sm md:text-base font-semibold text-slate-900 hover:text-blue-600 transition-colors block truncate"
              >
                {PROFILE.email}
              </a>
            </div>
            <div className="flex items-center gap-2.5 pt-4 border-t border-slate-100">
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center justify-center px-3.5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                Send Email
              </a>
              <button
                type="button"
                onClick={() => copyValue(PROFILE.email, 'email')}
                aria-label="Copy email address"
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                {copiedField === 'email' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-blue-600" aria-hidden="true" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Phone Card */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col justify-between gap-5">
            <div className="min-w-0">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-2">
                <Phone className="w-4 h-4 text-blue-600" aria-hidden="true" />
                <span>Phone Number</span>
              </div>
              <a
                href={`tel:${PROFILE.phone}`}
                className="font-mono-tabular text-sm md:text-base font-semibold text-slate-900 hover:text-blue-600 transition-colors block"
              >
                +91 {PROFILE.phone}
              </a>
            </div>
            <div className="flex items-center gap-2.5 pt-4 border-t border-slate-100">
              <a
                href={`tel:${PROFILE.phone}`}
                className="inline-flex items-center justify-center px-3.5 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-blue-600 rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                Call Now
              </a>
              <button
                type="button"
                onClick={() => copyValue(PROFILE.phone, 'phone')}
                aria-label="Copy phone number"
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                {copiedField === 'phone' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-blue-600" aria-hidden="true" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Location & Resume Quick Action */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col justify-between gap-5">
            <div className="min-w-0">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-2">
                <MapPin className="w-4 h-4 text-blue-600" aria-hidden="true" />
                <span>Location</span>
              </div>
              <p className="text-sm md:text-base font-semibold text-slate-900">
                {PROFILE.shortLocation}
              </p>
            </div>
            <div className="flex items-center pt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-blue-600 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                <FileText className="w-3.5 h-3.5" aria-hidden="true" />
                <span>View Resume PDF</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
