import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  FileText,
  Calendar,
  Bookmark,
  Printer,
  Download,
  ArrowLeft,
  ShieldCheck,
  Check,
  Share2,
} from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { NOTICES, SCHOOL_INFO, NoticeItem } from '../data/schoolData';
import { useApp } from '../context/AppContext';
import { AdPlaceholder } from '../components/AdPlaceholder';

export const CircularDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { isNoticeBookmarked, toggleBookmarkNotice } = useApp();
  const [downloaded, setDownloaded] = useState(false);
  const [copied, setCopied] = useState(false);

  const notice = NOTICES.find((n) => n.id === id);

  if (!notice) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center space-y-4">
        <FileText className="w-12 h-12 text-slate-300 mx-auto" />
        <h2 className="text-xl font-bold text-slate-800">Circular Not Found</h2>
        <p className="text-xs text-slate-500">
          The requested circular ID "{id}" may have expired or been relocated.
        </p>
        <Link
          to="/circulars"
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-900 text-white rounded-xl text-xs font-bold"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Notice Board</span>
        </Link>
      </div>
    );
  }

  const isBookmarked = isNoticeBookmarked(notice.id);

  const handleDownload = () => {
    setDownloaded(true);
    const element = document.createElement('a');
    const file = new Blob([
      `FORTUNESCHOOL, NEW DELHI\nOfficial Institutional Circular\nRef ID: ${notice.id}\nDate: ${notice.date}\nCategory: ${notice.category}\nTarget: ${notice.targetGrades}\n\nTitle: ${notice.title}\n\nContent:\n${notice.content}\n\nPrincipal's Secretariat\nFortuneSchool, Malcha Marg, Chanakyapuri, New Delhi - 110021\nAffiliation No: ${SCHOOL_INFO.affiliationNo} | School Code: ${SCHOOL_INFO.schoolCode}`
    ], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${notice.id}-FortuneSchool.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    setTimeout(() => setDownloaded(false), 2000);
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="space-y-10">
      <Breadcrumbs
        items={[
          { label: 'Notices & Circulars', path: '/circulars' },
          { label: notice.title },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation & Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <Link
            to="/circulars"
            className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-blue-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Circulars</span>
          </Link>

          <div className="flex items-center gap-2">
            <button
              onClick={() => toggleBookmarkNotice(notice.id)}
              className={`p-2 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                isBookmarked
                  ? 'bg-amber-100 text-amber-800 border-amber-300'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
              }`}
            >
              <Bookmark className="w-3.5 h-3.5 fill-current" />
              <span>{isBookmarked ? 'Bookmarked' : 'Bookmark'}</span>
            </button>

            <button
              onClick={handleShare}
              className="p-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 text-xs font-semibold flex items-center gap-1.5 transition-colors"
              title="Copy Link"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copied ? 'Copied!' : 'Share'}</span>
            </button>

            <button
              onClick={() => window.print()}
              className="p-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <button
              onClick={handleDownload}
              className="p-2 rounded-xl bg-blue-900 text-white hover:bg-blue-800 text-xs font-bold flex items-center gap-1.5 transition-colors"
            >
              {downloaded ? <Check className="w-3.5 h-3.5" /> : <Download className="w-3.5 h-3.5" />}
              <span>{downloaded ? 'Saved' : 'Download'}</span>
            </button>
          </div>
        </div>

        {/* Official School Letterhead Document Card */}
        <article className="bg-white rounded-3xl p-6 sm:p-12 shadow-xl border border-slate-200 print:shadow-none print:border-none space-y-8">
          {/* Official Letterhead */}
          <div className="border-b-2 border-slate-900 pb-6 text-center space-y-2">
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-blue-950 border border-amber-400 p-1 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-amber-400 stroke-2">
                  <path d="M50 8 L88 24 L88 58 C88 78 50 94 50 94 C50 94 12 78 12 58 L12 24 Z" />
                  <path d="M50 20 L50 68 M32 38 L68 38" stroke="white" strokeWidth="4" />
                </svg>
              </div>
              <div className="text-left">
                <h1 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-blue-950">
                  {SCHOOL_INFO.name}
                </h1>
                <p className="text-xs text-slate-600 font-serif-body">
                  {SCHOOL_INFO.address} • Affiliation No: {SCHOOL_INFO.affiliationNo}
                </p>
              </div>
            </div>
            <p className="text-[11px] font-mono uppercase tracking-widest text-slate-500 pt-1">
              Office of the Principal & Academic Directorate
            </p>
          </div>

          {/* Reference & Metadata Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs bg-slate-50 p-4 rounded-xl border border-slate-200">
            <div>
              <span className="text-slate-500 block">Circular Ref Number:</span>
              <strong className="font-mono text-slate-900 font-bold">{notice.id}</strong>
            </div>

            <div>
              <span className="text-slate-500 block">Date of Issue:</span>
              <strong className="text-slate-900 font-bold">{notice.date}</strong>
            </div>

            <div>
              <span className="text-slate-500 block">Category:</span>
              <span className="inline-block px-2 py-0.5 rounded font-bold bg-blue-100 text-blue-900 text-[11px]">
                {notice.category}
              </span>
            </div>

            <div>
              <span className="text-slate-500 block">Target Audience:</span>
              <strong className="text-slate-900 font-bold">{notice.targetGrades}</strong>
            </div>
          </div>

          {/* Title */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display leading-tight">
              {notice.title}
            </h2>
          </div>

          {/* Main Notice Body */}
          <div className="space-y-4 text-sm sm:text-base text-slate-800 font-serif-body leading-relaxed border-y border-slate-100 py-6">
            <p>{notice.content}</p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Parents, guardians, and students are requested to carefully note the instructions above and cooperate with the school administration for smooth execution. For any specific clarifications, kindly contact the respective wing headmistress or reach out via the official school email at <strong>{SCHOOL_INFO.email}</strong>.
            </p>
          </div>

          {/* Signature & Seal */}
          <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
            <div className="space-y-1 text-xs text-slate-500">
              <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                Digitally Authenticated Document
              </span>
              <p className="font-mono text-[10px]">Checksum: SHA256-FS-CIR-{notice.id.toUpperCase()}-VERIFIED</p>
            </div>

            <div className="text-right">
              <div className="font-serif-body italic text-base font-bold text-blue-950">
                Dr. Evelyn R. Vance
              </div>
              <p className="text-xs text-slate-700 font-bold">{SCHOOL_INFO.principalDesignation}</p>
              <p className="text-[11px] text-slate-500">{SCHOOL_INFO.fullName}</p>
            </div>
          </div>
        </article>
      </div>

      {/* Ad slot */}
      <AdPlaceholder />
    </div>
  );
};
