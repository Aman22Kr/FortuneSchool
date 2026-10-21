import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FileText,
  Search,
  Bookmark,
  Download,
  Calendar,
  Filter,
  ArrowRight,
  Sparkles,
  Check,
  ChevronRight,
} from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { NOTICES, NoticeItem } from '../data/schoolData';
import { useApp } from '../context/AppContext';
import { AdPlaceholder } from '../components/AdPlaceholder';

export const CircularsPage: React.FC = () => {
  const { bookmarkedNoticeIds, toggleBookmarkNotice, isNoticeBookmarked } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [downloadNoticeId, setDownloadNoticeId] = useState<string | null>(null);

  const categories = ['All', 'Admissions', 'Academics', 'Examinations', 'Holidays', 'Events', 'General', 'Bookmarked'];

  const filteredNotices = NOTICES.filter((notice) => {
    // 1. Search Query
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      notice.title.toLowerCase().includes(q) ||
      notice.content.toLowerCase().includes(q) ||
      notice.targetGrades.toLowerCase().includes(q) ||
      notice.category.toLowerCase().includes(q);

    // 2. Category Filter
    if (selectedCategory === 'Bookmarked') {
      return matchesSearch && bookmarkedNoticeIds.includes(notice.id);
    }
    const matchesCat = selectedCategory === 'All' || notice.category === selectedCategory;

    return matchesSearch && matchesCat;
  });

  const handleMockDownload = (notice: NoticeItem) => {
    setDownloadNoticeId(notice.id);
    // Create mock printable / downloadable text file
    const element = document.createElement('a');
    const file = new Blob([
      `FORTUNESCHOOL, NEW DELHI\nOfficial Institutional Circular\nReference ID: ${notice.id}\nDate: ${notice.date}\nCategory: ${notice.category}\nTarget: ${notice.targetGrades}\n\nTitle: ${notice.title}\n\nContent:\n${notice.content}\n\nBy Order:\nPrincipal's Secretariat\nFortuneSchool, Chanakyapuri, New Delhi\nAffiliation No: 2730048`
    ], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${notice.id}-FortuneSchool.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    setTimeout(() => setDownloadNoticeId(null), 2000);
  };

  return (
    <div className="space-y-12">
      <Breadcrumbs items={[{ label: 'Notices & Circulars' }]} />

      {/* Header Banner */}
      <section className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-b-4 border-amber-500">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-400/30">
            <FileText className="w-3.5 h-3.5" />
            <span>Digital Circular Desk</span>
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight">
            Official Notices & Circulars
          </h1>
          <p className="font-serif-body text-amber-200 text-sm sm:text-lg max-w-2xl mx-auto">
            Authorized Announcements, Schedules & Guidelines for Parents & Students
          </p>
          <p className="text-slate-300 text-xs sm:text-sm max-w-3xl mx-auto leading-relaxed">
            All circulars published here are authenticated by the Principal's Secretariat and archived for reference.
          </p>
        </div>
      </section>

      {/* Search & Category Filter Controls */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 shadow-md border border-slate-200 space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search circulars by title, grade, exam date, or keyword..."
                className="w-full text-xs sm:text-sm pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-900"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Bookmarks Counter */}
            <div className="flex items-center gap-2 text-xs text-slate-600 self-end md:self-auto">
              <Bookmark className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span>
                Saved in browser: <strong>{bookmarkedNoticeIds.length}</strong>
              </span>
            </div>
          </div>

          {/* Categories Pill bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1">
            <Filter className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-blue-950 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <span>{cat}</span>
                  {cat === 'Bookmarked' && bookmarkedNoticeIds.length > 0 && (
                    <span className="w-4 h-4 rounded-full bg-amber-500 text-slate-950 text-[10px] font-bold flex items-center justify-center">
                      {bookmarkedNoticeIds.length}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Circulars List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-4 flex items-center justify-between text-xs text-slate-500">
          <span>
            Showing <strong>{filteredNotices.length}</strong> of {NOTICES.length} notices
          </span>
          {selectedCategory !== 'All' && (
            <button
              onClick={() => setSelectedCategory('All')}
              className="text-blue-900 font-semibold hover:underline"
            >
              Reset to All
            </button>
          )}
        </div>

        {filteredNotices.length > 0 ? (
          <div className="space-y-4">
            {filteredNotices.map((notice) => {
              const isBookmarked = isNoticeBookmarked(notice.id);
              const isDownloading = downloadNoticeId === notice.id;

              return (
                <div
                  key={notice.id}
                  className="bg-white rounded-3xl p-5 sm:p-6 shadow-sm border border-slate-200 hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="flex-1 space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-900">
                        {notice.category}
                      </span>
                      {notice.isNew && (
                        <span className="text-[9px] font-bold px-2 py-0.5 rounded bg-red-600 text-white uppercase tracking-wider animate-pulse">
                          New Notice
                        </span>
                      )}
                      <span className="text-xs text-slate-400 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {notice.date}
                      </span>
                      <span className="text-slate-300 hidden sm:inline">•</span>
                      <span className="text-xs text-slate-500">Ref: {notice.id}</span>
                    </div>

                    <Link
                      to={`/circulars/${notice.id}`}
                      className="block text-base font-bold text-slate-900 hover:text-blue-900 transition-colors"
                    >
                      {notice.title}
                    </Link>

                    <p className="text-xs text-slate-600 line-clamp-2 font-serif-body leading-relaxed">
                      {notice.content}
                    </p>

                    <div className="flex items-center gap-4 text-[11px] text-slate-500 pt-1">
                      <span>Target Audience: <strong className="text-slate-700">{notice.targetGrades}</strong></span>
                      <span>•</span>
                      <span>Format: PDF ({notice.fileSize})</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0 pt-2 md:pt-0 border-t md:border-0 border-slate-100">
                    <button
                      onClick={() => toggleBookmarkNotice(notice.id)}
                      className={`p-2.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                        isBookmarked
                          ? 'bg-amber-100 text-amber-800 border-amber-300'
                          : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                      }`}
                      title={isBookmarked ? 'Remove bookmark' : 'Bookmark this notice'}
                    >
                      <Bookmark className="w-4 h-4 fill-current" />
                      <span className="hidden sm:inline">{isBookmarked ? 'Saved' : 'Save'}</span>
                    </button>

                    <button
                      onClick={() => handleMockDownload(notice)}
                      className="p-2.5 rounded-xl bg-blue-50 text-blue-900 border border-blue-200 hover:bg-blue-100 text-xs font-bold flex items-center gap-1.5 transition-colors"
                      title="Download authentic signed copy"
                    >
                      {isDownloading ? <Check className="w-4 h-4 text-emerald-600" /> : <Download className="w-4 h-4" />}
                      <span className="hidden sm:inline">{isDownloading ? 'Downloaded' : 'Download'}</span>
                    </button>

                    <Link
                      to={`/circulars/${notice.id}`}
                      className="p-2.5 rounded-xl bg-blue-950 text-white hover:bg-blue-900 text-xs font-bold flex items-center gap-1 transition-colors"
                    >
                      <span>Read</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 space-y-3">
            <Search className="w-10 h-10 text-slate-300 mx-auto" />
            <h4 className="font-bold text-slate-800 text-base">No Notices Found</h4>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              No circulars matched your filter criteria "{selectedCategory}" or search query.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="text-xs font-bold text-blue-900 underline"
            >
              Reset filters
            </button>
          </div>
        )}
      </section>

      {/* Ad slot */}
      <AdPlaceholder />
    </div>
  );
};
