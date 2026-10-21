import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Award,
  BookOpen,
  Heart,
  Shield,
  Star,
  Users,
  CheckCircle2,
  Quote,
  Sparkles,
  ArrowRight,
  Filter,
} from 'lucide-react';
import { SCHOOL_INFO, FACULTY_MEMBERS } from '../data/schoolData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { AdPlaceholder } from '../components/AdPlaceholder';

export const AboutPage: React.FC = () => {
  const [selectedDept, setSelectedDept] = useState<string>('All');

  const departments = [
    'All',
    'Administration & Policy',
    'Mathematics & STEM',
    'English & Humanities',
    'Early Childhood Education',
    'Physics & Robotics',
    'Biology & Life Sciences',
  ];

  const filteredFaculty =
    selectedDept === 'All'
      ? FACULTY_MEMBERS
      : FACULTY_MEMBERS.filter((f) => f.department === selectedDept);

  return (
    <div className="space-y-12">
      <Breadcrumbs items={[{ label: 'About Us' }]} />

      {/* Header Banner */}
      <section className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-b-4 border-amber-500">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Over 5 Decades of Scholastic Glory</span>
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight">
            About {SCHOOL_INFO.name}
          </h1>
          <p className="font-serif-body text-amber-200 text-sm sm:text-lg max-w-2xl mx-auto">
            {SCHOOL_INFO.motto}
          </p>
          <p className="text-slate-300 text-xs sm:text-sm max-w-3xl mx-auto leading-relaxed">
            Founded in 1970 in the historic diplomatic heart of New Delhi, {SCHOOL_INFO.name} stands as an emblem of principled convent education, academic rigor, ethical stewardship, and holistic transformation.
          </p>
        </div>
      </section>

      {/* 1. HERITAGE & LEGACY */}
      <section id="heritage" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
              Our Journey (1970 - Present)
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900 leading-tight">
              A Legacy Built on Truth, Compassion & Academic Mastery
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed font-serif-body">
              Established over fifty years ago by visionaries committed to enlightened education, {SCHOOL_INFO.name} began with a modest cohort of students and dedicated teachers. Over the decades, it has evolved into one of the country's preeminent institutions, while steadfastly holding onto the timeless moral values of truth, compassion, and humility.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Nestled across 18 acres of lush green environs in Chanakyapuri, the school has nurtured generations of cabinet diplomats, supreme court advocates, pioneering doctors, corporate captains, and creative artists.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200">
                <span className="font-display text-2xl font-bold text-amber-700">1970</span>
                <p className="text-xs text-slate-700 font-medium mt-1">Foundation Stone Laid in Chanakyapuri</p>
              </div>
              <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200">
                <span className="font-display text-2xl font-bold text-blue-900">3800+</span>
                <p className="text-xs text-slate-700 font-medium mt-1">Alumni Leaders Across the Globe</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1000&q=80"
                alt="School Heritage"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <span className="text-xs font-bold text-amber-400">Archival Campus Facade</span>
                  <p className="text-sm font-serif-body">Architectural blend of classic convent masonry and green sustainable design.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VISION, MISSION & CORE VALUES */}
      <section id="vision" className="bg-slate-100 py-16 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
              Guiding Principles
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900">
              Our Vision & Mission
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-blue-900 text-amber-400 flex items-center justify-center mb-4">
                <Star className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-3">Our Vision</h3>
              <p className="text-sm text-slate-700 font-serif-body leading-relaxed">
                To be a premier temple of learning that awakens the inherent divine potential in every child, forging conscientious global citizens grounded in moral integrity, intellectual acuity, and selfless dedication to society.
              </p>
              <ul className="mt-4 space-y-2 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Nurturing emotional, intellectual, and spiritual harmony.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Instilling courage to stand for justice and human dignity.</span>
                </li>
              </ul>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center mb-4">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-3">Our Mission</h3>
              <p className="text-sm text-slate-700 font-serif-body leading-relaxed">
                To provide a stimulating, value-centric educational environment that cultivates critical thinking, creative expression, scientific temperament, and empathetic leadership through rigorous CBSE curricula and comprehensive co-curricular engagement.
              </p>
              <ul className="mt-4 space-y-2 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Promoting environmental stewardship and social sensitivity.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Emphasizing equal opportunities, inclusivity, and holistic well-being.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SCHOOL CREST & ANTHEM */}
      <section id="crest" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="bg-gradient-to-br from-slate-900 to-blue-950 rounded-3xl p-8 sm:p-12 text-white shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-44 h-44 sm:w-56 sm:h-56 rounded-2xl bg-blue-950 border-4 border-amber-400 p-4 shadow-2xl flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path
                    d="M50 8 L88 24 L88 58 C88 78 50 94 50 94 C50 94 12 78 12 58 L12 24 Z"
                    fill="#0e2038"
                    stroke="#eab308"
                    strokeWidth="3"
                  />
                  <path d="M50 20 L50 68" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
                  <path d="M32 38 L68 38" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
                  <path d="M30 72 Q50 66 70 72 L70 82 Q50 76 30 82 Z" fill="#eab308" opacity="0.9" />
                  <circle cx="50" cy="22" r="4.5" fill="#f59e0b" />
                </svg>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Insignia & Symbolism
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold">
                The School Crest: A Sacred Shield of Values
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-300">
                <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">
                  <strong className="text-amber-400 block mb-1">The Golden Shield:</strong>
                  Represents moral strength, virtue, and resilience against worldly compromises.
                </div>
                <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">
                  <strong className="text-amber-400 block mb-1">The Holy Cross & Flame:</strong>
                  Symbolizes divine guidance, selfless love, service to the needy, and spiritual enlightenment.
                </div>
                <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">
                  <strong className="text-amber-400 block mb-1">The Open Book:</strong>
                  Signifies the endless quest for truth, scientific knowledge, and universal wisdom.
                </div>
                <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">
                  <strong className="text-amber-400 block mb-1">The Motto Scroll:</strong>
                  "In Veritate et Sapientia" (In Truth & Wisdom) reminding students of their sacred mission.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FACULTY & ADMINISTRATION DIRECTORY */}
      <section id="faculty" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
              Mentors & Leadership
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900 mt-1">
              Faculty & Academic Leadership
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-serif-body mt-1">
              Over 180 qualified educators dedicated to igniting curiosity and character.
            </p>
          </div>

          {/* Department Filter */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full">
            <Filter className="w-4 h-4 text-slate-400 flex-shrink-0" />
            {departments.slice(0, 4).map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                  selectedDept === dept
                    ? 'bg-blue-900 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFaculty.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-3xl p-5 shadow-sm border border-slate-200 hover:shadow-lg transition-all flex items-start gap-4"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-20 h-24 rounded-2xl object-cover border border-slate-200 shadow-sm flex-shrink-0"
              />
              <div className="space-y-1">
                <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800">
                  {member.department}
                </span>
                <h4 className="font-bold text-slate-900 text-sm">{member.name}</h4>
                <p className="text-xs text-blue-900 font-medium">{member.role}</p>
                <p className="text-[11px] text-slate-500 leading-tight pt-1">
                  {member.qualification}
                </p>
                <span className="text-[10px] text-slate-400 block pt-0.5">
                  Experience: {member.experience}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ad slot */}
      <AdPlaceholder />
    </div>
  );
};
