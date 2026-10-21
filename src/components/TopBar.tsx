import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Bookmark, Sun, Moon, Search, FileText } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';
import { useApp } from '../context/AppContext';

export const TopBar: React.FC = () => {
  const {
    bookmarkedNoticeIds,
    fontSize,
    setFontSize,
    highContrast,
    setHighContrast,
    setIsSearchOpen,
  } = useApp();

  return (
    <div className="bg-slate-900 text-slate-200 text-xs border-b border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between py-1.5 gap-2">
          {/* Left contact & affiliation info */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-slate-300">
            <span className="hidden sm:inline-flex items-center gap-1.5 font-medium text-amber-400">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
              CBSE Affiliation No: {SCHOOL_INFO.affiliationNo}
            </span>
            <span className="hidden lg:inline text-slate-600">|</span>
            <a
              href={`tel:${SCHOOL_INFO.phone.split('/')[0].trim()}`}
              className="inline-flex items-center gap-1 hover:text-amber-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{SCHOOL_INFO.phone.split('/')[0].trim()}</span>
            </a>
            <span className="hidden md:inline text-slate-600">|</span>
            <a
              href={`mailto:${SCHOOL_INFO.email}`}
              className="hidden sm:inline-flex items-center gap-1 hover:text-amber-300 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>{SCHOOL_INFO.email}</span>
            </a>
          </div>

          {/* Right utilities & accessibility */}
          <div className="flex items-center gap-3 ml-auto">
            {/* Quick Links */}
            <Link
              to="/circulars"
              className="relative inline-flex items-center gap-1 hover:text-amber-300 px-2 py-0.5 rounded transition-colors"
              title="Saved Circulars"
            >
              <Bookmark className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">Bookmarks</span>
              {bookmarkedNoticeIds.length > 0 && (
                <span className="ml-1 inline-flex items-center justify-center px-1.5 py-0.2 bg-amber-500 text-slate-950 font-bold rounded-full text-[10px]">
                  {bookmarkedNoticeIds.length}
                </span>
              )}
            </Link>

            <Link
              to="/transfer-certificate"
              className="hidden md:inline-flex items-center gap-1 hover:text-amber-300 transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-amber-400" />
              <span>TC Verification</span>
            </Link>

            <Link
              to="/mandatory-disclosure"
              className="hidden lg:inline-flex items-center hover:text-amber-300 transition-colors"
            >
              <span>CBSE Disclosure</span>
            </Link>

            <span className="text-slate-600 hidden sm:inline">|</span>

            {/* Font Resizer */}
            <div className="flex items-center bg-slate-800 rounded px-1 py-0.5 border border-slate-700">
              <span className="text-[10px] text-slate-400 mr-1.5 font-medium hidden sm:inline">Text:</span>
              <button
                onClick={() => setFontSize('normal')}
                className={`px-1 rounded font-bold hover:text-white ${fontSize === 'normal' ? 'text-amber-400' : 'text-slate-400'}`}
                title="Default Font Size"
              >
                A
              </button>
              <button
                onClick={() => setFontSize('large')}
                className={`px-1 rounded font-bold hover:text-white ${fontSize === 'large' ? 'text-amber-400' : 'text-slate-400'}`}
                title="Large Font Size"
              >
                A+
              </button>
              <button
                onClick={() => setFontSize('xlarge')}
                className={`px-1 rounded font-bold hover:text-white ${fontSize === 'xlarge' ? 'text-amber-400' : 'text-slate-400'}`}
                title="Extra Large Font Size"
              >
                A++
              </button>
            </div>

            {/* Contrast switch */}
            <button
              onClick={() => setHighContrast(!highContrast)}
              className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700"
              title="Toggle High Contrast / Dark Mode"
              aria-label="Toggle High Contrast"
            >
              {highContrast ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5" />}
            </button>

            {/* Global Search Trigger */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-amber-400 border border-slate-700 flex items-center gap-1 px-2"
              title="Search Website"
              aria-label="Search"
            >
              <Search className="w-3.5 h-3.5" />
              <span className="hidden sm:inline text-[11px]">Search</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
