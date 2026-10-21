import React from 'react';

interface AdPlaceholderProps {
  className?: string;
  variant?: 'banner' | 'compact' | 'leaderboard';
}

export const AdPlaceholder: React.FC<AdPlaceholderProps> = ({ className = '', variant = 'banner' }) => {
  return (
    <div className={`w-full max-w-6xl mx-auto my-8 px-4 ${className}`} aria-label="Sponsor Advertisement Slot">
      <div className="relative overflow-hidden rounded-xl border border-dashed border-slate-300 bg-gradient-to-r from-slate-100 via-amber-50/40 to-slate-100 p-4 text-center transition-all hover:border-slate-400">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="inline-block rounded bg-slate-200 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-slate-600">
              Advertisement Placeholder
            </span>
            <span className="hidden md:inline text-slate-400">• Standard IAB 728x90 / Responsive Slot</span>
          </div>
          <div className="text-slate-500 font-medium">
            Educational Resources & Academic Partners Showcase
          </div>
          <span className="text-[11px] text-slate-400">Reserved for Verified Institutional Partners</span>
        </div>
      </div>
    </div>
  );
};
