import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  Calendar,
  Download,
  Bookmark,
  CheckCircle2,
  Award,
  ChevronRight,
  BookOpen,
  GraduationCap,
  Building2,
  Users,
  ShieldCheck,
  Clock,
  Compass,
  FileText,
  Star,
  Quote,
} from 'lucide-react';
import {
  SCHOOL_INFO,
  NOTICES,
  EVENTS,
  HIGHLIGHTS,
  HOUSES,
  FACILITIES,
  TESTIMONIALS,
} from '../data/schoolData';
import { useApp } from '../context/AppContext';
import { VideoPlaceholder } from '../components/VideoPlaceholder';
import { AdPlaceholder } from '../components/AdPlaceholder';

export const HomePage: React.FC = () => {
  const { isNoticeBookmarked, toggleBookmarkNotice } = useApp();
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: 'Excellence in Truth and Wisdom',
      subtitle: 'Nurturing Intellect, Moral Integrity & Global Vision',
      description:
        'Affiliated to CBSE New Delhi, FortuneSchool delivers transformative K-12 education blending scholastic rigor with character building.',
      bg: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1800&q=80',
      badge: 'Admissions Open 2025-26',
    },
    {
      title: 'Future-Ready STEAM & Research Labs',
      subtitle: 'Where Curiosity Meets Innovation',
      description:
        'Equipped with 3D prototyping, AI robotics suites, and advanced biological laboratories for hands-on experiential discovery.',
      bg: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1800&q=80',
      badge: 'Atal Tinkering Hub',
    },
    {
      title: 'Champions on the Field, Leaders in Life',
      subtitle: '18-Acre Lush Diplomatic Enclave Campus',
      description:
        'Semi-Olympic swimming pool, FIFA-standard synthetic turf, and 400m athletic tracks led by NIS certified coaches.',
      bg: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1800&q=80',
      badge: 'Sports Excellence',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <div className="space-y-16">
      {/* 1. HERO BANNER SLIDER */}
      <section className="relative h-[550px] sm:h-[620px] lg:h-[680px] overflow-hidden bg-slate-950">
        {heroSlides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Background image with dramatic scholastic dark gradient overlay */}
            <img
              src={slide.bg}
              alt={slide.title}
              className="w-full h-full object-cover object-center filter brightness-50"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-blue-950/80 to-transparent"></div>

            {/* Slide Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-2xl text-white space-y-5">
                  <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/20 border border-amber-400/40 px-3.5 py-1 text-xs font-bold text-amber-300 backdrop-blur-sm">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>{slide.badge}</span>
                  </div>

                  <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                    {slide.title}
                  </h1>

                  <p className="text-base sm:text-xl font-serif-body text-amber-200/90 font-light">
                    {slide.subtitle}
                  </p>

                  <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-xl">
                    {slide.description}
                  </p>

                  <div className="pt-3 flex flex-wrap items-center gap-3.5">
                    <Link
                      to="/admissions"
                      className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-xl hover:from-amber-400 hover:to-amber-500 hover:scale-105 transition-all transform active:scale-95"
                    >
                      <span>Explore Admissions</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <Link
                      to="/campus"
                      className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all"
                    >
                      <span>Virtual Campus Tour</span>
                    </Link>

                    <Link
                      to="/academics"
                      className="inline-flex items-center gap-2 rounded-xl bg-blue-900/60 hover:bg-blue-800/80 border border-blue-400/30 px-5 py-3.5 text-sm font-semibold text-amber-200 backdrop-blur-sm transition-all"
                    >
                      <BookOpen className="w-4 h-4" />
                      <span>CBSE Streams</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentSlide ? 'w-8 bg-amber-400' : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 2. QUICK ACCESS ACTION TILES (Floating Overlap) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 sm:-mt-20 relative z-30">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            to="/admissions"
            className="group bg-white p-5 rounded-2xl shadow-xl border border-slate-100 hover:border-amber-300 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-3 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-base group-hover:text-amber-600 transition-colors">
              Admissions 2025-26
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Guidelines, criteria, age eligibility & online enquiry registration.
            </p>
            <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-amber-600">
              <span>Apply Online</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link
            to="/admissions#fees"
            className="group bg-white p-5 rounded-2xl shadow-xl border border-slate-100 hover:border-blue-300 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center mb-3 group-hover:bg-blue-900 group-hover:text-amber-300 transition-colors">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-base group-hover:text-blue-900 transition-colors">
              Fee Portal & Structure
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Transparent term fees, tuition schedules, and digital payment receipts.
            </p>
            <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-blue-900">
              <span>View Structure</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link
            to="/circulars"
            className="group bg-white p-5 rounded-2xl shadow-xl border border-slate-100 hover:border-emerald-300 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-3 group-hover:bg-emerald-700 group-hover:text-white transition-colors">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-base group-hover:text-emerald-700 transition-colors">
              Circulars & Notices
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Official school dispatches, examination datesheets, and holiday alerts.
            </p>
            <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-emerald-700">
              <span>View Notices</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link
            to="/transfer-certificate"
            className="group bg-white p-5 rounded-2xl shadow-xl border border-slate-100 hover:border-purple-300 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center mb-3 group-hover:bg-purple-800 group-hover:text-white transition-colors">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-base group-hover:text-purple-800 transition-colors">
              TC Verification
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Instant public verification of issued student transfer certificates.
            </p>
            <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-purple-800">
              <span>Search Records</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </section>

      {/* 3. PRINCIPAL'S WELCOME DESK */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900 rounded-3xl p-6 sm:p-10 lg:p-12 text-white shadow-2xl border border-blue-800/40 relative overflow-hidden">
          {/* Subtle crest watermark */}
          <div className="absolute right-0 top-0 translate-x-1/4 -translate-y-1/4 opacity-5 pointer-events-none w-96 h-96">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
              <path d="M50 8 L88 24 L88 58 C88 78 50 94 50 94 C50 94 12 78 12 58 L12 24 Z" />
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Portrait */}
            <div className="lg:col-span-4 flex flex-col items-center text-center">
              <div className="relative">
                <div className="w-52 h-64 sm:w-60 sm:h-72 rounded-2xl overflow-hidden border-4 border-amber-400 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                    alt={SCHOOL_INFO.principalName}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 bg-amber-500 text-slate-950 p-2.5 rounded-xl shadow-lg">
                  <Quote className="w-5 h-5" />
                </div>
              </div>

              <h4 className="font-display text-lg font-bold text-white mt-4">
                {SCHOOL_INFO.principalName}
              </h4>
              <p className="text-xs text-amber-300 font-medium">
                {SCHOOL_INFO.principalDesignation}
              </p>
              <span className="text-[11px] text-slate-400 mt-0.5">
                Ph.D. Educational Leadership, Harvard Alum
              </span>
            </div>

            {/* Message Body */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold border border-amber-400/30">
                <span>Principal's Desk</span>
              </div>

              <h2 className="font-display text-2xl sm:text-4xl font-bold text-white leading-tight">
                "Educating the Mind without Educating the Heart is No Education at All"
              </h2>

              <p className="font-serif-body text-slate-300 text-sm sm:text-base leading-relaxed">
                Welcome to <strong>{SCHOOL_INFO.name}</strong>, a sanctum where knowledge, moral convictions, and human compassion converge. Drawing inspiration from the profound legacy of disciplined convent education, we nurture young minds to not only excel in competitive board examinations and global olympiads, but to walk the earth with empathy, humility, and courage.
              </p>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Our 18-acre green campus in the heart of Chanakyapuri offers an environment free of urban frenzy where scientific curiosity thrives in our ATL Tinkering Labs, while spiritual and ethical grounding flourishes through our four-house community service modules.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/about#principal"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 hover:underline"
                >
                  <span>Read Full Philosophy</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <span className="text-slate-600">•</span>

                <Link
                  to="/about#faculty"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-300 hover:text-white"
                >
                  <Users className="w-3.5 h-3.5 text-amber-400" />
                  <span>Meet Our Faculty & Mentors</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. KEY METRICS & PILLARS */}
      <section className="bg-slate-100 py-12 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {HIGHLIGHTS.map((item, idx) => (
              <div key={idx} className="p-4 bg-white rounded-2xl shadow-sm border border-slate-200">
                <span className="font-display text-3xl sm:text-4xl font-bold text-blue-950 block">
                  {item.metric}
                </span>
                <span className="text-xs sm:text-sm font-bold text-amber-600 block mt-1">
                  {item.label}
                </span>
                <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. NOTICE BOARD & UPCOMING EVENTS (Side-by-side Hub) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Latest Circulars & Notices (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-slate-200 flex flex-col">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                  Institutional Circulars
                </span>
                <h3 className="text-xl font-display font-bold text-slate-900">
                  Official Notice Board
                </h3>
              </div>
              <Link
                to="/circulars"
                className="text-xs font-bold text-blue-900 hover:text-blue-700 flex items-center gap-1"
              >
                <span>View All ({NOTICES.length})</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="space-y-3.5 flex-1 overflow-hidden">
              {NOTICES.slice(0, 4).map((notice) => {
                const isBookmarked = isNoticeBookmarked(notice.id);
                return (
                  <div
                    key={notice.id}
                    className="p-3.5 rounded-2xl bg-slate-50 hover:bg-amber-50/50 border border-slate-200/80 transition-all flex items-start justify-between gap-3 group"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-900">
                          {notice.category}
                        </span>
                        {notice.isNew && (
                          <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-red-600 text-white uppercase">
                            New
                          </span>
                        )}
                        <span className="text-[11px] text-slate-400">{notice.date}</span>
                      </div>

                      <Link
                        to={`/circulars/${notice.id}`}
                        className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-blue-900 leading-snug line-clamp-2"
                      >
                        {notice.title}
                      </Link>

                      <div className="flex items-center gap-3 mt-1.5 text-[11px] text-slate-500">
                        <span>Target: <strong>{notice.targetGrades}</strong></span>
                        <span>•</span>
                        <span>PDF: {notice.fileSize}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <button
                        onClick={() => toggleBookmarkNotice(notice.id)}
                        className={`p-1.5 rounded-lg border transition-colors ${
                          isBookmarked
                            ? 'bg-amber-100 text-amber-700 border-amber-300'
                            : 'bg-white text-slate-400 border-slate-200 hover:text-slate-700'
                        }`}
                        title={isBookmarked ? 'Remove bookmark' : 'Bookmark notice'}
                        aria-label="Bookmark"
                      >
                        <Bookmark className="w-4 h-4 fill-current" />
                      </button>

                      <Link
                        to={`/circulars/${notice.id}`}
                        className="p-1.5 rounded-lg bg-white border border-slate-200 text-blue-900 hover:bg-blue-900 hover:text-white transition-colors"
                        title="Download / View Circular"
                      >
                        <Download className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>* Circulars are digitally signed by the Principal's Secretariat</span>
              <Link to="/circulars" className="text-amber-600 font-semibold hover:underline">
                Search Circular Archive →
              </Link>
            </div>
          </div>

          {/* Right: Upcoming Events Calendar (5 Cols) */}
          <div className="lg:col-span-5 bg-blue-950 text-white rounded-3xl p-6 sm:p-8 shadow-md border border-blue-900 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-blue-900 mb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    School Diary
                  </span>
                  <h3 className="text-xl font-display font-bold text-white">
                    Upcoming Events
                  </h3>
                </div>
                <Calendar className="w-5 h-5 text-amber-400" />
              </div>

              <div className="space-y-4">
                {EVENTS.map((event) => (
                  <div
                    key={event.id}
                    className="p-3.5 rounded-2xl bg-blue-900/40 border border-blue-800/60 hover:bg-blue-900/70 transition-colors"
                  >
                    <div className="flex items-center justify-between text-xs text-amber-300 font-semibold mb-1">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {event.date}
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-blue-800 text-[10px] text-slate-200">
                        {event.category}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-white mb-1">{event.title}</h4>
                    <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                      {event.description}
                    </p>

                    <div className="mt-2 text-[11px] text-slate-400 flex items-center gap-1">
                      <Compass className="w-3.5 h-3.5 text-amber-400" />
                      <span>{event.venue}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-blue-900 flex items-center justify-between text-xs">
              <span className="text-slate-400">Term II Calendar 2025-26</span>
              <Link to="/academics#calendar" className="text-amber-400 hover:text-amber-300 font-bold">
                Download Academic Calendar (PDF) →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ACADEMIC WINGS SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
            Nursery to Grade XII
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-slate-900 mt-1">
            Academic Wings & Curriculum
          </h2>
          <p className="text-sm text-slate-600 mt-2 font-serif-body">
            Fostering conceptual mastery, ethical reasoning, and future-ready 21st-century competencies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Primary */}
          <div className="bg-white rounded-3xl p-6 shadow-md border border-slate-200 hover:shadow-xl transition-shadow flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-full h-44 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80"
                  alt="Primary Wing"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-800">
                Pre-School to Grade V
              </span>
              <h3 className="text-lg font-bold text-slate-900">Primary Wing (Foundational)</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-serif-body">
                Play-way experiential learning, phonics, number sense, storytelling, music, and motor skill enhancement in child-centric smart environments.
              </p>
            </div>
            <Link
              to="/academics#primary"
              className="mt-4 pt-3 border-t border-slate-100 inline-flex items-center gap-1 text-xs font-bold text-amber-600 hover:text-amber-700"
            >
              <span>Explore Primary Wing</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Middle */}
          <div className="bg-white rounded-3xl p-6 shadow-md border border-slate-200 hover:shadow-xl transition-shadow flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-full h-44 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
                  alt="Middle Wing"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-900">
                Grades VI to VIII
              </span>
              <h3 className="text-lg font-bold text-slate-900">Middle Wing (Preparatory)</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-serif-body">
                Deepening scientific inquiry, mathematics problem-solving, multilingual communication (Sanskrit, French, German), and introductory coding.
              </p>
            </div>
            <Link
              to="/academics#middle"
              className="mt-4 pt-3 border-t border-slate-100 inline-flex items-center gap-1 text-xs font-bold text-blue-900 hover:text-blue-700"
            >
              <span>Explore Middle Wing</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Senior */}
          <div className="bg-white rounded-3xl p-6 shadow-md border border-slate-200 hover:shadow-xl transition-shadow flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-full h-44 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80"
                  alt="Senior Wing"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-900">
                Grades IX to XII
              </span>
              <h3 className="text-lg font-bold text-slate-900">Senior & Senior Secondary</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-serif-body">
                Advanced CBSE board preparation, specialized career streams (Medical/Non-Med Science, Commerce, Humanities), and national competitive guidance.
              </p>
            </div>
            <Link
              to="/academics#senior"
              className="mt-4 pt-3 border-t border-slate-100 inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-emerald-800"
            >
              <span>Explore Senior Streams</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. YOUTUBE VIDEO AREA (Prompt Requirement: YouTube embed layout with blank placeholder) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
            Audio-Visual Showcase
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900">
            Experience Life at FortuneSchool
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Campus walkthrough, athletic moments, and student cultural performances.
          </p>
        </div>

        {/* Video placeholder component strictly fulfilling prompt specs */}
        <VideoPlaceholder
          title="FortuneSchool Campus Walkthrough & Heritage Documentary"
          subtitle="A cinematic journey through our 18-acre Chanakyapuri green campus • 1080p HD"
          duration="05:32"
        />
      </section>

      {/* 8. FOUR HOUSE SYSTEM */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Character & Comradeship
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-bold text-white mt-1">
              The Four Houses of FortuneSchool
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 font-serif-body">
              Every student belongs to a house from their day of induction, forging lifelong bonds through sports, debates, theatricals, and community outreach.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOUSES.map((house) => (
              <div
                key={house.name}
                className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700/80 hover:border-amber-400/80 transition-all flex flex-col justify-between"
              >
                <div>
                  <div
                    className={`h-2.5 w-16 rounded-full bg-gradient-to-r ${house.color} mb-4`}
                  ></div>
                  <h3 className="text-lg font-bold text-white">{house.name}</h3>
                  <span className="text-xs font-semibold text-amber-300 block mb-2">
                    Motto: "{house.motto}"
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed font-serif-body">
                    {house.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-700/60 text-[11px] text-slate-400 flex items-center justify-between">
                  <span>Emblem: <strong>{house.symbol}</strong></span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/student-life"
              className="inline-flex items-center gap-2 rounded-xl bg-amber-500 text-slate-950 font-bold px-6 py-3 text-xs shadow hover:bg-amber-400 transition-colors"
            >
              <span>Explore Student Council, Clubs & Sports</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. TESTIMONIALS & VOICES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
            Voices of Trust
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-slate-900 mt-1">
            What Parents & Alumni Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-slate-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-700 font-serif-body leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <h4 className="text-sm font-bold text-slate-900">{t.name}</h4>
                <p className="text-[11px] text-slate-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. REUSABLE ADVERTISEMENT PLACEHOLDER (Prompt Requirement) */}
      <AdPlaceholder />
    </div>
  );
};
