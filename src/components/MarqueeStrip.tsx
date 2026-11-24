const MARQUEE_ITEMS = [
  'B.Tech. Engineering',
  'C Programming',
  'Python',
  'M.S. Office',
  'JNTUGV Vizianagaram',
  'Self-Motivated',
  'Team & Individual Work',
  'Continuous Learning',
];

export default function MarqueeStrip() {
  const repeated = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div
      aria-hidden="true"
      className="border-y border-slate-200 bg-slate-50 py-3.5 overflow-hidden select-none"
    >
      <div className="flex w-max animate-marquee">
        {repeated.map((item, idx) => (
          <div key={`${item}-${idx}`} className="flex items-center gap-6 px-3 text-xs font-medium text-slate-500 whitespace-nowrap">
            <span>{item}</span>
            <span className="text-slate-300">·</span>
          </div>
        ))}
      </div>
    </div>
  );
}
