import React, { useState } from 'react';
import {
  Image as ImageIcon,
  Sparkles,
  Maximize2,
  Calendar,
  Tag,
  Film,
  Filter,
} from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { GALLERY_ITEMS, GalleryItem } from '../data/schoolData';
import { useApp } from '../context/AppContext';
import { VideoPlaceholder } from '../components/VideoPlaceholder';
import { AdPlaceholder } from '../components/AdPlaceholder';

export const GalleryPage: React.FC = () => {
  const { setActiveGalleryItem } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Campus', 'Sports', 'Cultural', 'Academics', 'Celebrations'];

  const filteredItems =
    selectedCategory === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <div className="space-y-12">
      <Breadcrumbs items={[{ label: 'Photo & Video Gallery' }]} />

      {/* Header Banner */}
      <section className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-b-4 border-amber-500">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-400/30">
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Visual Chronicles</span>
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight">
            School Gallery & Archives
          </h1>
          <p className="font-serif-body text-amber-200 text-sm sm:text-lg max-w-2xl mx-auto">
            Cherished Memories of Academic Triumph, Cultural Pageantry & Sports Conclaves
          </p>
        </div>
      </section>

      {/* Photo Gallery with Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900">
              Photographic Archives
            </h2>
            <p className="text-xs text-slate-500 font-serif-body">
              Click any photo to view full-resolution preview and archival notes.
            </p>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full">
            <Filter className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? 'bg-blue-950 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveGalleryItem(item)}
              className="group bg-white rounded-3xl overflow-hidden shadow-md border border-slate-200 hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col"
            >
              <div className="relative h-60 overflow-hidden bg-slate-900">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/40 shadow-xl">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>

                <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-sm text-amber-400 text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-slate-800">
                  {item.category}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 text-sm group-hover:text-blue-900 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-serif-body mt-1 line-clamp-2">
                    {item.caption}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    Session {item.year}
                  </span>
                  <span className="text-blue-900 font-semibold group-hover:underline">
                    View Photo →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video Showcase Section (with YouTube spec placeholder) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
            Video Archives
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mt-1">
            Annual Function & Sports Highlights
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-serif-body mt-1">
            Revisit our stage musicals, athletic relay races, and graduation ceremonies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <VideoPlaceholder
            title="Annual Day Pageant - 'Udaan' Symphony"
            subtitle="Stage orchestra and theatrical drama at Dr. Radhakrishnan Auditorium"
            duration="06:12"
          />
          <VideoPlaceholder
            title="Inter-School Athletic Conclave 2026"
            subtitle="March past, gymnastics, and 4x100m relay finals on synthetic turf"
            duration="04:48"
          />
        </div>
      </section>

      {/* Ad slot */}
      <AdPlaceholder />
    </div>
  );
};
