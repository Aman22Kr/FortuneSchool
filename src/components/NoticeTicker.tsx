import React from 'react';
import { Link } from 'react-router-dom';
import { Megaphone, X, ArrowRight } from 'lucide-react';
import { NOTICES } from '../data/schoolData';
import { useApp } from '../context/AppContext';

export const NoticeTicker: React.FC = () => {
  const { bannerDismissed, dismissBanner } = useApp();

  if (bannerDismissed) return null;

  return (
    <div className="bg-gradient-to-r from-blue-900 via-blue-950 to-slate-900 text-white text-xs py-2 px-4 shadow-sm relative overflow-hidden border-b border-amber-500/30">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        {/* Flash Label */}
        <div className="flex items-center gap-2 flex-shrink-0 bg-amber-500 text-slate-950 font-bold px-2.5 py-1 rounded shadow text-[11px] uppercase tracking-wider">
          <Megaphone className="w-3.5 h-3.5 animate-bounce" />
          <span>Announcements</span>
        </div>

        {/* Marquee ticker */}
        <div className="overflow-hidden whitespace-nowrap flex-1 relative flex items-center">
          <div className="animate-marquee flex items-center gap-8 py-0.5">
            {NOTICES.map((notice) => (
              <Link
                key={notice.id}
                to={`/circulars/${notice.id}`}
                className="inline-flex items-center gap-2 hover:text-amber-300 transition-colors cursor-pointer group"
              >
                {notice.isNew && (
                  <span className="bg-red-600 text-white text-[9px] font-bold px-1.5 py-0.2 rounded-full uppercase tracking-wider animate-pulse">
                    New
                  </span>
                )}
                <span className="font-medium text-slate-100 group-hover:underline">
                  {notice.title}
                </span>
                <span className="text-amber-400/80 text-[10px]">({notice.date})</span>
                <span className="text-slate-600">★</span>
              </Link>
            ))}
          </div>
        </div>

        {/* View all + Close */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <Link
            to="/circulars"
            className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold text-amber-400 hover:text-amber-300 hover:underline"
          >
            <span>View All</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
          <button
            onClick={dismissBanner}
            className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            title="Dismiss Announcement Bar"
            aria-label="Dismiss banner"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
