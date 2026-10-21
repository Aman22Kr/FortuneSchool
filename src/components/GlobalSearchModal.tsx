import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, FileText, Users, Building2, BookOpen, ArrowRight, CornerDownLeft } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { NOTICES, FACILITIES, FACULTY_MEMBERS } from '../data/schoolData';

export const GlobalSearchModal: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen } = useApp();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isSearchOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, setIsSearchOpen]);

  if (!isSearchOpen) return null;

  const q = query.toLowerCase().trim();

  // Search through circulars
  const matchedNotices = q
    ? NOTICES.filter(
        (n) =>
          n.title.toLowerCase().includes(q) ||
          n.content.toLowerCase().includes(q) ||
          n.category.toLowerCase().includes(q)
      )
    : [];

  // Search through facilities
  const matchedFacilities = q
    ? FACILITIES.filter(
        (f) =>
          f.name.toLowerCase().includes(q) ||
          f.description.toLowerCase().includes(q) ||
          f.tagline.toLowerCase().includes(q)
      )
    : [];

  // Search through faculty
  const matchedFaculty = q
    ? FACULTY_MEMBERS.filter(
        (f) =>
          f.name.toLowerCase().includes(q) ||
          f.role.toLowerCase().includes(q) ||
          f.department.toLowerCase().includes(q)
      )
    : [];

  // Static key pages matching
  const staticPages = [
    { title: 'Admissions 2025-26 & Online Registration', path: '/admissions', desc: 'Eligibility, fee schedule, guidelines and application form' },
    { title: 'Transfer Certificate (TC) Verification', path: '/transfer-certificate', desc: 'Search and verify student transfer certificates' },
    { title: 'CBSE Mandatory Public Disclosure', path: '/mandatory-disclosure', desc: 'Statutory compliance, safety documents, and committee details' },
    { title: 'Academics & CBSE Curriculum', path: '/academics', desc: 'Primary, Middle, and Senior Secondary Streams' },
    { title: 'Campus Facilities & Labs', path: '/campus', desc: 'Smart classrooms, 45k book library, sports arena' },
    { title: 'Four House System & Student Council', path: '/student-life', desc: 'Ruby, Sapphire, Emerald, Topaz houses and clubs' },
    { title: 'Photo & Video Gallery Archives', path: '/gallery', desc: 'Celebrations, sports day, annual day and campus life' },
    { title: 'Contact Us & Visiting Hours', path: '/contact', desc: 'Location, directions, phone numbers and enquiry form' },
    { title: 'School Heritage, Vision & Leadership', path: '/about', desc: 'Established 1970, Principal desk and values' },
  ];

  const matchedPages = q
    ? staticPages.filter(
        (p) => p.title.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q)
      )
    : staticPages.slice(0, 4);

  const handleSelect = (path: string) => {
    setIsSearchOpen(false);
    navigate(path);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-200 flex items-center gap-3 bg-slate-50">
          <Search className="w-5 h-5 text-amber-500 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search circulars, admissions, faculty, facilities, TC..."
            className="w-full bg-transparent text-sm sm:text-base text-slate-800 placeholder-slate-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded text-slate-400 hover:text-slate-600"
              aria-label="Clear Search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => setIsSearchOpen(false)}
            className="p-1.5 rounded-lg bg-slate-200 text-slate-600 hover:bg-slate-300 text-xs font-semibold px-2.5"
            aria-label="Close Modal"
          >
            Esc
          </button>
        </div>

        {/* Results Area */}
        <div className="overflow-y-auto p-4 space-y-6 flex-1">
          {/* Quick Pages */}
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
              {q ? 'Matching Pages & Portals' : 'Recommended Quick Portals'}
            </span>
            <div className="space-y-1">
              {matchedPages.map((page) => (
                <button
                  key={page.path}
                  onClick={() => handleSelect(page.path)}
                  className="w-full text-left p-2.5 rounded-xl hover:bg-amber-50 group flex items-center justify-between transition-colors border border-transparent hover:border-amber-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-900 flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-blue-950">
                        {page.title}
                      </h5>
                      <p className="text-[11px] text-slate-500 line-clamp-1">{page.desc}</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
                </button>
              ))}
            </div>
          </div>

          {/* Notices */}
          {matchedNotices.length > 0 && (
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Circulars & Official Notices ({matchedNotices.length})
              </span>
              <div className="space-y-1">
                {matchedNotices.map((n) => (
                  <button
                    key={n.id}
                    onClick={() => handleSelect(`/circulars/${n.id}`)}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-blue-50 group flex items-start gap-3 transition-colors border border-transparent hover:border-blue-200"
                  >
                    <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-slate-200 text-slate-700">
                          {n.category}
                        </span>
                        <span className="text-[11px] text-slate-400">{n.date}</span>
                      </div>
                      <h5 className="text-xs sm:text-sm font-medium text-slate-800 group-hover:text-blue-900 mt-0.5">
                        {n.title}
                      </h5>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Facilities */}
          {matchedFacilities.length > 0 && (
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Campus Facilities ({matchedFacilities.length})
              </span>
              <div className="space-y-1">
                {matchedFacilities.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => handleSelect(`/campus#${f.id}`)}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-emerald-50 group flex items-center gap-3 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-emerald-900">
                        {f.name}
                      </h5>
                      <p className="text-[11px] text-slate-500 line-clamp-1">{f.tagline}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Faculty */}
          {matchedFaculty.length > 0 && (
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Faculty & Administration ({matchedFaculty.length})
              </span>
              <div className="space-y-1">
                {matchedFaculty.map((fac) => (
                  <button
                    key={fac.id}
                    onClick={() => handleSelect(`/about#faculty`)}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-purple-50 group flex items-center gap-3 transition-colors"
                  >
                    <img
                      src={fac.image}
                      alt={fac.name}
                      className="w-8 h-8 rounded-full object-cover flex-shrink-0 border border-purple-200"
                    />
                    <div>
                      <h5 className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-purple-900">
                        {fac.name}
                      </h5>
                      <p className="text-[11px] text-slate-500">
                        {fac.role} • {fac.department}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {q &&
            matchedNotices.length === 0 &&
            matchedFacilities.length === 0 &&
            matchedFaculty.length === 0 &&
            matchedPages.length === 0 && (
              <div className="text-center py-8 text-slate-400">
                <Search className="w-10 h-10 mx-auto text-slate-300 mb-2" />
                <p className="text-sm">No results found for "{query}"</p>
                <p className="text-xs text-slate-500 mt-1">
                  Try searching for "Admission", "CBSE", "Fees", "Sports", "Library", or "Exam".
                </p>
              </div>
            )}
        </div>

        {/* Modal Footer Tips */}
        <div className="p-3 bg-slate-50 border-t border-slate-200 text-[11px] text-slate-500 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-white border border-slate-300 text-[10px]">Esc</kbd> to close
            </span>
            <span className="flex items-center gap-1 hidden sm:inline-flex">
              <kbd className="px-1.5 py-0.5 rounded bg-white border border-slate-300 text-[10px]">⌘</kbd> + <kbd className="px-1.5 py-0.5 rounded bg-white border border-slate-300 text-[10px]">K</kbd> to open anytime
            </span>
          </div>
          <span className="text-amber-600 font-medium">FortuneSchool Knowledge Portal</span>
        </div>
      </div>
    </div>
  );
};
