import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  ShieldCheck,
  Send,
  Heart,
  FileCheck,
  ChevronRight,
  Github,
} from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export const Footer: React.FC = () => {
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      try {
        const existing = JSON.parse(localStorage.getItem('fs_newsletter_emails') || '[]');
        if (!existing.includes(emailInput.trim())) {
          existing.push(emailInput.trim());
          localStorage.setItem('fs_newsletter_emails', JSON.stringify(existing));
        }
      } catch (err) {
        console.warn(err);
      }
      setSubscribed(true);
      setEmailInput('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t-4 border-amber-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Institutional Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-blue-900 border border-amber-400 p-1 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path
                    d="M50 8 L88 24 L88 58 C88 78 50 94 50 94 C50 94 12 78 12 58 L12 24 Z"
                    fill="#0e2038"
                    stroke="#eab308"
                    strokeWidth="3"
                  />
                  <path d="M50 20 L50 68" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
                  <path d="M32 38 L68 38" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
                  <circle cx="50" cy="22" r="4.5" fill="#f59e0b" />
                </svg>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-white tracking-wide">
                  {SCHOOL_INFO.name}
                </h3>
                <p className="text-xs text-amber-400 font-serif-body">New Delhi • Estd. {SCHOOL_INFO.foundedYear}</p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed font-serif-body">
              Inspired by the noble tradition of premier convent institutions, {SCHOOL_INFO.name} is dedicated to fostering spiritual growth, moral fortitude, intellectual depth, and compassionate leadership.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Affiliation No: <strong className="text-slate-200">{SCHOOL_INFO.affiliationNo}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-amber-400" />
                <span>School Code: <strong className="text-slate-200">{SCHOOL_INFO.schoolCode}</strong></span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400 mb-4 border-b border-slate-800 pb-2">
              Explore Campus
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/about" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500/70" />
                  <span>History & School Heritage</span>
                </Link>
              </li>
              <li>
                <Link to="/about#principal" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500/70" />
                  <span>Principal's Desk & Philosophy</span>
                </Link>
              </li>
              <li>
                <Link to="/academics" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500/70" />
                  <span>CBSE Curriculum & Streams</span>
                </Link>
              </li>
              <li>
                <Link to="/campus" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500/70" />
                  <span>Campus Facilities & STEAM Labs</span>
                </Link>
              </li>
              <li>
                <Link to="/student-life" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500/70" />
                  <span>House System & Student Council</span>
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500/70" />
                  <span>Photo & Video Archives</span>
                </Link>
              </li>
              <li>
                <Link to="/circulars" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500/70" />
                  <span>Notices & Circulars Board</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Statutory & Admissions */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400 mb-4 border-b border-slate-800 pb-2">
              Statutory & Admissions
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/admissions" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500/70" />
                  <span>Pre-School Registration 2025-26</span>
                </Link>
              </li>
              <li>
                <Link to="/admissions#fees" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500/70" />
                  <span>Fee Structure & Online Payment</span>
                </Link>
              </li>
              <li>
                <Link to="/transfer-certificate" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500/70" />
                  <span>Transfer Certificate (TC) Verification</span>
                </Link>
              </li>
              <li>
                <Link to="/mandatory-disclosure" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500/70" />
                  <span>CBSE Mandatory Public Disclosure</span>
                </Link>
              </li>
              <li>
                <Link to="/mandatory-disclosure#pocso" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500/70" />
                  <span>POCSO & Child Protection Policy</span>
                </Link>
              </li>
              <li>
                <Link to="/mandatory-disclosure#safety" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500/70" />
                  <span>School Safety & Anti-Bullying Cell</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500/70" />
                  <span>Grievance Redressal Committee</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Newsletter */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400 mb-4 border-b border-slate-800 pb-2">
              Contact & Hours
            </h4>

            <div className="text-xs text-slate-400 space-y-2.5">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>{SCHOOL_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>{SCHOOL_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>{SCHOOL_INFO.email}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-[11px] leading-tight">{SCHOOL_INFO.timings}</span>
              </div>
            </div>

            {/* Newsletter input */}
            <div className="pt-2">
              <span className="text-xs font-semibold text-slate-200 block mb-2">
                Subscribe to School Chronicle
              </span>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Enter parent email address"
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  required
                />
                <button
                  type="submit"
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-3 py-2 rounded-lg font-bold text-xs flex items-center justify-center transition-colors"
                  aria-label="Subscribe"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
              {subscribed && (
                <p className="text-[11px] text-emerald-400 mt-1.5 flex items-center gap-1">
                  ✓ Thank you! You will receive official school dispatches.
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, GitHub deployment attribution, and Disclaimer */}
        <div className="pt-8 mt-8 border-t border-slate-800 text-xs text-slate-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <span>© {new Date().getFullYear()} {SCHOOL_INFO.name}. All Rights Reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span>Managed with Academic Integrity & Ethical Stewardship</span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href="https://github.com/Aman22kr/FortuneSchool"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-amber-400 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub: Aman22kr/FortuneSchool</span>
            </a>
            <span>•</span>
            <Link to="/mandatory-disclosure" className="hover:text-amber-400">
              Mandatory Disclosure
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
