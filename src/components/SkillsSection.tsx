import { useState } from 'react';
import { Code2, FileSpreadsheet, Terminal } from 'lucide-react';
import { KEY_STRENGTHS, TECHNICAL_SKILLS } from '../data/resumeData';

export default function SkillsSection() {
  const [selectedSkillId, setSelectedSkillId] = useState<string>(TECHNICAL_SKILLS[0].id);

  const activeSkill =
    TECHNICAL_SKILLS.find((skill) => skill.id === selectedSkillId) ?? TECHNICAL_SKILLS[0];

  const renderSkillIcon = (id: string) => {
    if (id === 'c-lang') return <Terminal className="w-4 h-4" aria-hidden="true" />;
    if (id === 'python') return <Code2 className="w-4 h-4" aria-hidden="true" />;
    return <FileSpreadsheet className="w-4 h-4" aria-hidden="true" />;
  };

  return (
    <section id="skills" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold text-blue-600 mb-2">
            02. Technical &amp; Key Competencies
          </p>
          <h2
            className="font-display text-2xl md:text-4xl font-bold tracking-tight text-slate-900"
            style={{ textWrap: 'balance' }}
          >
            Tools, Programming &amp; Personal Strengths
          </h2>
          <p className="text-sm md:text-base text-slate-600 mt-3 leading-relaxed">
            Core technical tools alongside the work habits that guide academic projects and team collaboration.
          </p>
        </div>

        {/* Interactive Technical Stack Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Selector List */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {TECHNICAL_SKILLS.map((skill) => {
              const isSelected = skill.id === activeSkill.id;
              return (
                <button
                  key={skill.id}
                  type="button"
                  onClick={() => setSelectedSkillId(skill.id)}
                  aria-pressed={isSelected}
                  className={`text-left p-5 rounded-xl border transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                    isSelected
                      ? 'bg-white border-slate-900 shadow-xs'
                      : 'bg-white/60 border-slate-200 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3 mb-1.5">
                    <span className="inline-flex items-center gap-2 font-display text-lg font-semibold text-slate-900">
                      <span
                        className={isSelected ? 'text-blue-600' : 'text-slate-500'}
                      >
                        {renderSkillIcon(skill.id)}
                      </span>
                      <span>{skill.name}</span>
                    </span>
                    <span className="text-xs font-medium text-slate-500 whitespace-nowrap shrink-0">
                      {skill.focusLabel}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mb-2">{skill.category}</p>
                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
                    {skill.summary}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Skill Details Panel */}
          <div className="lg:col-span-7 flex">
            <div className="w-full rounded-xl bg-white border border-slate-200 p-6 md:p-8 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-slate-200">
                  <div>
                    <p className="text-xs text-slate-500">{activeSkill.category}</p>
                    <h3 className="font-display text-xl md:text-2xl font-bold text-slate-900 mt-0.5">
                      {activeSkill.name}
                    </h3>
                  </div>
                  <span className="text-xs font-medium text-blue-600">
                    {activeSkill.focusLabel}
                  </span>
                </div>

                <p className="text-sm md:text-base text-slate-700 leading-relaxed mt-6">
                  {activeSkill.summary}
                </p>

                <div className="mt-8 pt-6 border-t border-slate-100">
                  <h4 className="text-xs font-semibold text-slate-500 mb-4">
                    Core Focus Areas
                  </h4>
                  <ul className="space-y-3">
                    {activeSkill.competencies.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-sm md:text-base text-slate-700"
                      >
                        <span className="text-blue-600 font-semibold mt-0.5" aria-hidden="true">
                          —
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Personal Strengths — 3-Column Editorial Row */}
        <div className="mt-14 pt-12 border-t border-slate-200">
          <div className="mb-8">
            <h3 className="font-display text-xl font-bold text-slate-900 tracking-tight">
              Key Personal Strengths
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {KEY_STRENGTHS.map((strength) => (
              <div
                key={strength.id}
                className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono-tabular text-xs font-semibold text-blue-600">
                    {strength.index}
                  </span>
                  <h4 className="font-display text-lg font-semibold text-slate-900 mt-2 mb-2.5">
                    {strength.title}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {strength.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
