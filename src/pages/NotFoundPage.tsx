import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Home, BookOpen, GraduationCap, Phone, Search } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { AdPlaceholder } from '../components/AdPlaceholder';

export const NotFoundPage: React.FC = () => {
  const { setIsSearchOpen } = useApp();

  return (
    <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-6">
      <div className="w-20 h-20 rounded-3xl bg-amber-100 text-amber-700 flex items-center justify-center mx-auto shadow-lg border border-amber-200">
        <Compass className="w-10 h-10 animate-spin" style={{ animationDuration: '20s' }} />
      </div>

      <div className="space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-600 font-mono">
          Error 404 • Page Not Found
        </span>
        <h1 className="text-3xl sm:text-5xl font-display font-bold text-slate-900">
          Scholastic Destination Uncharted
        </h1>
        <p className="text-sm text-slate-600 font-serif-body max-w-md mx-auto leading-relaxed">
          The requested page or resource could not be found in the FortuneSchool digital archives. It may have been relocated or updated.
        </p>
      </div>

      <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-xl bg-blue-950 text-white font-bold px-6 py-3 text-xs shadow hover:bg-blue-900 transition-colors"
        >
          <Home className="w-4 h-4" />
          <span>Return to Homepage</span>
        </Link>

        <button
          onClick={() => setIsSearchOpen(true)}
          className="inline-flex items-center gap-2 rounded-xl bg-white border border-slate-300 text-slate-700 font-bold px-5 py-3 text-xs hover:bg-slate-50 transition-colors shadow-sm"
        >
          <Search className="w-4 h-4 text-amber-500" />
          <span>Search Portal</span>
        </button>

        <Link
          to="/admissions"
          className="inline-flex items-center gap-2 rounded-xl bg-amber-500 text-slate-950 font-bold px-5 py-3 text-xs hover:bg-amber-400 transition-colors shadow-sm"
        >
          <GraduationCap className="w-4 h-4" />
          <span>Admissions 2025-26</span>
        </Link>
      </div>

      <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs max-w-2xl mx-auto">
        <Link to="/about" className="p-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200">
          About Us & Heritage
        </Link>
        <Link to="/academics" className="p-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200">
          CBSE Curriculum
        </Link>
        <Link to="/circulars" className="p-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200">
          Circulars & Notices
        </Link>
        <Link to="/contact" className="p-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200">
          Contact & Directions
        </Link>
      </div>

      <AdPlaceholder />
    </div>
  );
};
