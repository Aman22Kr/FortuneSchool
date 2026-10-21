import React from 'react';
import { X, Calendar, Tag } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const LightboxModal: React.FC = () => {
  const { activeGalleryItem, setActiveGalleryItem } = useApp();

  if (!activeGalleryItem) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn"
      onClick={() => setActiveGalleryItem(null)}
    >
      <div
        className="relative max-w-4xl w-full bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setActiveGalleryItem(null)}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-900/80 text-white hover:bg-red-600 transition-colors shadow-lg"
          aria-label="Close Preview"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Display */}
        <div className="relative max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
          <img
            src={activeGalleryItem.imageUrl}
            alt={activeGalleryItem.title}
            className="w-full max-h-[70vh] object-contain"
          />
        </div>

        {/* Caption & Metadata */}
        <div className="p-5 bg-slate-900 border-t border-slate-800 text-white">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <h3 className="text-lg font-bold font-serif-body text-amber-400">
              {activeGalleryItem.title}
            </h3>
            <div className="flex items-center gap-3 text-xs text-slate-400">
              <span className="flex items-center gap-1 bg-slate-800 px-2.5 py-1 rounded-full text-slate-300">
                <Tag className="w-3 h-3 text-amber-400" />
                {activeGalleryItem.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {activeGalleryItem.year}
              </span>
            </div>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            {activeGalleryItem.caption}
          </p>
        </div>
      </div>
    </div>
  );
};
