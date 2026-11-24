import { useState } from 'react';
import { ChevronDown, ChevronUp, GraduationCap } from 'lucide-react';
import { QUALIFICATIONS, type Qualification } from '../data/resumeData';

type FilterOption = 'all' | 'university' | 'secondary';
type ViewMode = 'cards' | 'table';

export default function EducationSection() {
  const [filter, setFilter] = useState<FilterOption>('all');
  const [viewMode, setViewMode] = useState<ViewMode>('cards');
  const [expandedId, setExpandedId] = useState<string>('btech');

  const filteredQualifications = QUALIFICATIONS.filter((item) =>
    filter === 'all' ? true : item.level === filter
  );

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? '' : id));
  };

  return (
    <section id="education" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs font-semibold text-blue-600 mb-2">
              01. Academic Qualifications
            </p>
            <h2
              className="font-display text-2xl md:text-4xl font-bold tracking-tight text-slate-900"
              style={{ textWrap: 'balance' }}
            >
              Educational Foundation &amp; Credentials
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Level Filter */}
            <div
              role="group"
              aria-label="Filter academic credentials"
              className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg"
            >
              {(
                [
                  { id: 'all', label: 'All' },
                  { id: 'university', label: 'University' },
                  { id: 'secondary', label: 'Schooling' },
                ] as const
              ).map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setFilter(option.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                    filter === option.id
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>

            {/* View Toggle */}
            <div
              role="group"
              aria-label="Toggle education view layout"
              className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg"
            >
              <button
                type="button"
                onClick={() => setViewMode('cards')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                  viewMode === 'cards'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Editorial View
              </button>
              <button
                type="button"
                onClick={() => setViewMode('table')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                  viewMode === 'table'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Transcript Table
              </button>
            </div>
          </div>
        </div>

        {/* Editorial Cards View */}
        {viewMode === 'cards' ? (
          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {filteredQualifications.map((item: Qualification) => {
              const isExpanded = expandedId === item.id;
              return (
                <article key={item.id} className="py-7 md:py-8 transition-colors">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
                    {/* Year & Score Column */}
                    <div className="md:col-span-3 flex md:flex-col justify-between md:justify-start gap-2">
                      <span className="font-mono-tabular text-sm font-medium text-slate-500">
                        {item.yearOfPassing}
                      </span>
                      <div className="md:mt-2">
                        <span className="font-display text-2xl font-bold text-slate-900 font-mono-tabular">
                          {item.scoreValue}
                        </span>
                        <span className="block text-xs text-slate-500 mt-0.5">
                          {item.scoreLabel}
                        </span>
                      </div>
                    </div>

                    {/* Institution & Title Column */}
                    <div className="md:col-span-7">
                      <div className="flex items-center gap-2 text-xs text-slate-500 mb-1.5">
                        <span>{item.boardOrUniversity}</span>
                        <span aria-hidden="true">·</span>
                        <span>{item.location}</span>
                      </div>
                      <h3 className="font-display text-xl md:text-2xl font-semibold text-slate-900 tracking-tight">
                        {item.qualification}
                      </h3>
                      <p className="text-sm font-medium text-slate-700 mt-1">
                        {item.institute}
                      </p>

                      {isExpanded && (
                        <p className="text-sm text-slate-600 leading-relaxed mt-4 max-w-2xl">
                          {item.summary}
                        </p>
                      )}
                    </div>

                    {/* Expand Affordance */}
                    <div className="md:col-span-2 flex md:justify-end">
                      <button
                        type="button"
                        onClick={() => toggleExpand(item.id)}
                        aria-expanded={isExpanded}
                        className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-700 hover:text-blue-600 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                      >
                        <span>{isExpanded ? 'Hide Notes' : 'Read Notes'}</span>
                        {isExpanded ? (
                          <ChevronUp className="w-3.5 h-3.5" aria-hidden="true" />
                        ) : (
                          <ChevronDown className="w-3.5 h-3.5" aria-hidden="true" />
                        )}
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          /* Tabular Transcript View matching the exact Resume Academic Table */
          <div className="overflow-x-auto border border-slate-200 rounded-xl bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-xs font-semibold text-slate-600">
                  <th className="py-3.5 px-5">Qualification</th>
                  <th className="py-3.5 px-5">Institute / College</th>
                  <th className="py-3.5 px-5">University / Board</th>
                  <th className="py-3.5 px-5 text-right">Percentage / CGPA</th>
                  <th className="py-3.5 px-5 text-right">Year of Passing</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm">
                {filteredQualifications.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-4 px-5 font-semibold text-slate-900">
                      <span className="inline-flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-blue-600 shrink-0" aria-hidden="true" />
                        <span>{item.shortLabel}</span>
                      </span>
                    </td>
                    <td className="py-4 px-5 text-slate-700">{item.institute}</td>
                    <td className="py-4 px-5 text-slate-600">{item.boardOrUniversity}</td>
                    <td className="py-4 px-5 text-right font-mono-tabular font-semibold text-slate-900">
                      {item.scoreValue}
                    </td>
                    <td className="py-4 px-5 text-right font-mono-tabular text-slate-600">
                      {item.yearOfPassing}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}
