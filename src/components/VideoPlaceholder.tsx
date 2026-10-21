import React from 'react';
import { Play, Volume2, Maximize2, Shield } from 'lucide-react';

interface VideoPlaceholderProps {
  title?: string;
  subtitle?: string;
  aspectRatio?: '16/9' | '4/3';
  className?: string;
  duration?: string;
}

export const VideoPlaceholder: React.FC<VideoPlaceholderProps> = ({
  title = 'FortuneSchool Campus Tour & Heritage Documentary',
  subtitle = 'Official School Video Archive • 1080p Full HD',
  aspectRatio = '16/9',
  className = '',
  duration = '04:18',
}) => {
  return (
    <div className={`w-full overflow-hidden rounded-2xl shadow-xl border border-slate-800 bg-slate-950 ${className}`}>
      {/* Video frame top bar */}
      <div className="flex items-center justify-between bg-slate-900/90 px-4 py-2.5 text-xs text-slate-300 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
          </div>
          <span className="font-medium text-slate-200 ml-2 truncate max-w-[240px] sm:max-w-md">{title}</span>
        </div>
        <div className="flex items-center gap-2 text-[11px] text-slate-400">
          <Shield className="w-3.5 h-3.5 text-amber-400" />
          <span className="hidden sm:inline">Stream Placeholder (YouTube Player Spec)</span>
        </div>
      </div>

      {/* 16:9 Aspect Ratio Area - Clean Blank Video Canvas */}
      <div className="relative aspect-video w-full bg-gradient-to-b from-slate-900 via-slate-950 to-black flex flex-col items-center justify-center p-6 select-none group">
        {/* Subtle grid lines reflecting high-def video monitor */}
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>

        {/* Center player indicator */}
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-blue-900/60 border border-blue-400/30 text-amber-400 shadow-2xl backdrop-blur-sm transition-transform duration-300 group-hover:scale-105">
            <Play className="w-8 h-8 sm:w-10 sm:h-10 ml-1 fill-amber-400 text-amber-400 opacity-90" />
            <div className="absolute inset-0 rounded-full border-2 border-amber-400/20 animate-ping"></div>
          </div>
          <h4 className="mt-4 text-sm sm:text-base font-semibold text-white tracking-wide">
            {title}
          </h4>
          <p className="mt-1 text-xs text-slate-400 max-w-sm">
            {subtitle}
          </p>
          <span className="mt-3 inline-flex items-center rounded-full bg-slate-800/90 px-3 py-1 text-[11px] font-mono text-slate-300 border border-slate-700">
            Duration: {duration} • YouTube Layout Placeholder
          </span>
        </div>

        {/* Video Player Bottom Control Bar reproduction */}
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 flex flex-col gap-2">
          {/* Progress track */}
          <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-red-600 to-amber-500 w-1/3 rounded-full"></div>
          </div>
          {/* Controls */}
          <div className="flex items-center justify-between text-slate-300 text-xs">
            <div className="flex items-center gap-3">
              <Play className="w-4 h-4 fill-current cursor-pointer hover:text-white" />
              <Volume2 className="w-4 h-4 cursor-pointer hover:text-white" />
              <span className="font-mono text-[11px] text-slate-400">01:24 / {duration}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="rounded bg-slate-800 px-1.5 py-0.5 text-[10px] font-bold text-slate-300 border border-slate-700">HD 1080p</span>
              <Maximize2 className="w-4 h-4 cursor-pointer hover:text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
