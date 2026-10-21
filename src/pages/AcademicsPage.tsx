import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  Calendar,
  Award,
  CheckCircle2,
  Atom,
  Briefcase,
  Palette,
  FileText,
  Clock,
  Sparkles,
  ArrowRight,
  HelpCircle,
} from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { AdPlaceholder } from '../components/AdPlaceholder';

export const AcademicsPage: React.FC = () => {
  const [selectedStream, setSelectedStream] = useState<'science' | 'commerce' | 'humanities'>('science');

  const streamData = {
    science: {
      name: 'Science Stream (Medical & Non-Medical)',
      tagline: 'Gateway to Medicine, Engineering, AI, and Foundational Research',
      compulsory: ['English Core', 'Physics', 'Chemistry'],
      electives: [
        'Option A: Mathematics & Computer Science / AI',
        'Option B: Biology & Biotechnology',
        'Option C: Mathematics & Economics',
      ],
      vocational: 'Artificial Intelligence / Web Application / Physical Education',
      careerOutcomes: 'IIT-JEE, NEET, AIIMS, B.Tech CS, MBBS, Pure Science Research, Architecture',
    },
    commerce: {
      name: 'Commerce Stream (Finance & Enterprise)',
      tagline: 'Chartering the Worlds of Global Banking, Markets & Corporate Leadership',
      compulsory: ['English Core', 'Accountancy', 'Business Studies', 'Economics'],
      electives: [
        'Mathematics / Applied Mathematics',
        'Informatics Practices (Python & SQL)',
        'Entrepreneurship & Commercial Law',
      ],
      vocational: 'Financial Markets Management / Retail Operations',
      careerOutcomes: 'Chartered Accountancy (CA), CFA, Corporate Law, Investment Banking, BBA, B.Com (Hons)',
    },
    humanities: {
      name: 'Humanities & Liberal Arts',
      tagline: 'Critical Inquiry into Human Behavior, Global Policy & Jurisprudence',
      compulsory: ['English Core', 'History', 'Political Science'],
      electives: [
        'Psychology & Applied Behavioral Science',
        'Sociology & Social Transformation',
        'Legal Studies & Constitutional Law',
        'Economics / Fine Arts',
      ],
      vocational: 'Mass Media Studies / Heritage Crafts / Graphic Design',
      careerOutcomes: 'Civil Services (UPSC), International Diplomacy, Constitutional Law (CLAT), Journalism, Psychology',
    },
  };

  const currentStream = streamData[selectedStream];

  return (
    <div className="space-y-12">
      <Breadcrumbs items={[{ label: 'Academics & CBSE Curriculum' }]} />

      {/* Header Banner */}
      <section className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-b-4 border-amber-500">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-400/30">
            <BookOpen className="w-3.5 h-3.5" />
            <span>CBSE Affiliated • NEP 2020 Aligned</span>
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight">
            Academics at FortuneSchool
          </h1>
          <p className="font-serif-body text-amber-200 text-sm sm:text-lg max-w-2xl mx-auto">
            Inspiring Intellectual Curiosity, Analytical Depth & Global Competence
          </p>
          <p className="text-slate-300 text-xs sm:text-sm max-w-3xl mx-auto leading-relaxed">
            Our pedagogical approach balances rigorous preparation for competitive examinations with hands-on research, ethical inquiry, and holistic experiential education across all grades.
          </p>
        </div>
      </section>

      {/* 1. CURRICULUM OVERVIEW & NEP 2020 */}
      <section id="curriculum" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
              Pedagogical Framework
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900 leading-tight">
              NEP 2020 Aligned Holistic Education
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed font-serif-body">
              FortuneSchool strictly adheres to the Central Board of Secondary Education (CBSE) guidelines while actively implementing the principles of the National Education Policy (NEP 2020). We emphasize conceptual understanding over rote memorization, multidisciplinary learning, and early integration of digital literacy and coding.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-bold text-blue-900 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Experiential STEAM Pedagogy
                </span>
                <p className="text-[11px] text-slate-500 mt-1">
                  Hands-on inquiry in Physics, Chemistry, Biology, and Atal Tinkering Labs.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-bold text-blue-900 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Multilingual Fluency
                </span>
                <p className="text-[11px] text-slate-500 mt-1">
                  English, Hindi, Sanskrit, French, and German language training.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-bold text-blue-900 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Continuous Assessment (CCE)
                </span>
                <p className="text-[11px] text-slate-500 mt-1">
                  Formative quizzes, project portfolios, and standardized term evaluations.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-bold text-blue-900 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Remedial & Honors Tracks
                </span>
                <p className="text-[11px] text-slate-500 mt-1">
                  Tailored mentor support for board aspirants and olympiad participants.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-blue-900 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl">
              <h3 className="font-display text-lg font-bold text-amber-400 mb-2">
                CBSE Board Exam Distinction
              </h3>
              <p className="text-xs text-slate-300 font-serif-body leading-relaxed mb-6">
                In the recent Class X & XII CBSE Board Examinations, FortuneSchool students recorded a 100% pass rate with outstanding school averages.
              </p>

              <div className="space-y-4">
                <div className="bg-white/10 p-3 rounded-xl border border-white/10 flex items-center justify-between">
                  <span className="text-xs">Class XII School Aggregate Average</span>
                  <span className="text-base font-bold text-amber-400">89.4%</span>
                </div>
                <div className="bg-white/10 p-3 rounded-xl border border-white/10 flex items-center justify-between">
                  <span className="text-xs">Students Scoring Above 90%</span>
                  <span className="text-base font-bold text-amber-400">142 Students</span>
                </div>
                <div className="bg-white/10 p-3 rounded-xl border border-white/10 flex items-center justify-between">
                  <span className="text-xs">Perfect 100 Centum Scores</span>
                  <span className="text-base font-bold text-amber-400">38 Subjects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SENIOR SECONDARY STREAMS EXPLORER (Interactive Tool) */}
      <section id="senior" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-md border border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
              Grade XI & XII Specialization
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
              Senior Secondary Streams Explorer
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-serif-body mt-1">
              Select a stream below to explore subject combinations and prospective careers.
            </p>
          </div>

          {/* Stream Selector Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <button
              onClick={() => setSelectedStream('science')}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                selectedStream === 'science'
                  ? 'bg-blue-900 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Atom className="w-4 h-4" />
              <span>Science Stream</span>
            </button>

            <button
              onClick={() => setSelectedStream('commerce')}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                selectedStream === 'commerce'
                  ? 'bg-emerald-800 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Commerce Stream</span>
            </button>

            <button
              onClick={() => setSelectedStream('humanities')}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                selectedStream === 'humanities'
                  ? 'bg-amber-600 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Palette className="w-4 h-4" />
              <span>Humanities & Arts</span>
            </button>
          </div>

          {/* Stream Detail Card */}
          <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-200">
              <div>
                <h3 className="font-display text-xl font-bold text-slate-900">
                  {currentStream.name}
                </h3>
                <p className="text-xs sm:text-sm text-amber-700 font-medium font-serif-body">
                  {currentStream.tagline}
                </p>
              </div>

              <Link
                to="/admissions"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-900 text-white text-xs font-bold hover:bg-blue-800 transition-colors self-start md:self-auto"
              >
                <span>Register for Grade XI</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              {/* Compulsory */}
              <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  Compulsory Core Subjects
                </span>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  {currentStream.compulsory.map((sub, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                      <span>{sub}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Electives */}
              <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  Elective Combinations
                </span>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  {currentStream.electives.map((sub, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                      <span>{sub}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Careers */}
              <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  Prime Career Pathways
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {currentStream.careerOutcomes}
                </p>
                <div className="mt-3 pt-2 border-t border-slate-100 text-[11px] text-slate-500">
                  Skill Subject: <strong>{currentStream.vocational}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ACADEMIC CALENDAR 2025-26 */}
      <section id="calendar" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Institutional Schedule
              </span>
              <h2 className="font-display text-2xl font-bold text-white">
                Academic Calendar Highlights (2025-26)
              </h2>
            </div>
            <Link
              to="/circulars"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300"
            >
              <span>View Examination Datesheets</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="p-4 bg-slate-800/80 rounded-xl border border-slate-700">
              <span className="text-xs font-bold text-amber-400 block mb-1">
                Term I (April - September)
              </span>
              <ul className="space-y-1.5 text-xs text-slate-300">
                <li>• New Session Commences: April 02</li>
                <li>• Periodic Assessment I: July 15 - 24</li>
                <li>• Summer Vacation: May 20 - July 02</li>
                <li>• Mid-Term Evaluations: Sept 12 - 26</li>
              </ul>
            </div>

            <div className="p-4 bg-slate-800/80 rounded-xl border border-slate-700">
              <span className="text-xs font-bold text-amber-400 block mb-1">
                Term II (October - March)
              </span>
              <ul className="space-y-1.5 text-xs text-slate-300">
                <li>• Autumn Break: Oct 28 - Nov 03</li>
                <li>• Periodic Assessment II: Dec 01 - 10</li>
                <li>• Winter Break: Dec 28 - Jan 08</li>
                <li>• Annual & Board Exams: Feb 15 - March 22</li>
              </ul>
            </div>

            <div className="p-4 bg-slate-800/80 rounded-xl border border-slate-700">
              <span className="text-xs font-bold text-amber-400 block mb-1">
                Assessment Matrix (Grades IX - XII)
              </span>
              <ul className="space-y-1.5 text-xs text-slate-300">
                <li>• Theory Examination: 80 / 70 Marks</li>
                <li>• Internal Assessment: 20 Marks</li>
                <li>• Science / Lab Practicals: 30 Marks</li>
                <li>• Minimum Passing Aggregate: 33% per subject</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Reusable Ad Slot */}
      <AdPlaceholder />
    </div>
  );
};
