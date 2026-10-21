import React from 'react';
import {
  Users,
  Award,
  Sparkles,
  Trophy,
  Heart,
  Globe,
  Radio,
  Music,
  Trees,
  CheckCircle2,
} from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { HOUSES } from '../data/schoolData';
import { AdPlaceholder } from '../components/AdPlaceholder';

export const StudentLifePage: React.FC = () => {
  const clubs = [
    {
      name: 'Model United Nations (FS-MUN)',
      icon: Globe,
      desc: 'Annual diplomacy conference hosting delegates across India to deliberate global governance, peacekeeping, and treaties.',
    },
    {
      name: 'Atal Robotics & AI Innovation Club',
      icon: Radio,
      desc: 'Hands-on programming with Arduino, Raspberry Pi, 3D printing, and automated rover competitions.',
    },
    {
      name: 'The Green Planet & Eco-Warriors',
      icon: Trees,
      desc: 'Active composting, zero-plastic drives, campus botanical conservation, and rooftop solar monitoring.',
    },
    {
      name: 'Orpheus Choir & Orchestra Society',
      icon: Music,
      desc: 'Western choir, Indian classical ensemble, annual musical productions, and festive Christmas cantatas.',
    },
    {
      name: 'Literary & Orators Guild',
      icon: Sparkles,
      desc: 'Debates, parliamentary declamation, poetry slams, and editing the annual school chronicle magazine.',
    },
    {
      name: 'Interact Club (Youth Rotary)',
      icon: Heart,
      desc: 'Student-led social outreach, food drives, donation camps, and literacy mentoring for underprivileged children.',
    },
  ];

  return (
    <div className="space-y-12">
      <Breadcrumbs items={[{ label: 'Student Life & Co-Curricular' }]} />

      {/* Header Banner */}
      <section className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-b-4 border-amber-500">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-400/30">
            <Trophy className="w-3.5 h-3.5" />
            <span>Beyond the Classroom</span>
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight">
            Student Life at FortuneSchool
          </h1>
          <p className="font-serif-body text-amber-200 text-sm sm:text-lg max-w-2xl mx-auto">
            Cultivating Leadership, Camaraderie, Creativity & Service
          </p>
          <p className="text-slate-300 text-xs sm:text-sm max-w-3xl mx-auto leading-relaxed">
            Education transcends textbooks. Our vibrant student council, century-old house traditions, competitive sports leagues, and co-curricular societies empower each pupil to explore their unique talents.
          </p>
        </div>
      </section>

      {/* 1. FOUR HOUSE SYSTEM & STANDINGS */}
      <section id="houses" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
            House Traditions
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
            The House System & Annual Trophy Standings
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-serif-body mt-1">
            Points are earned continuously across scholastic merit, sports championships, debates, and discipline.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOUSES.map((house, idx) => {
            const points = [1420, 1395, 1460, 1375][idx];
            return (
              <div
                key={house.name}
                className="bg-white rounded-3xl p-6 shadow-md border border-slate-200 hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className={`h-2.5 w-16 rounded-full bg-gradient-to-r ${house.color} mb-3`}></div>
                  <h3 className="font-display text-xl font-bold text-slate-900">{house.name}</h3>
                  <span className="text-xs font-bold text-amber-700 block mb-2">
                    Motto: "{house.motto}"
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed font-serif-body">
                    {house.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold">Trophy Points</span>
                    <span className="text-lg font-bold text-blue-950 block">{points} pts</span>
                  </div>
                  <span className="text-xs text-slate-500">
                    Emblem: <strong>{house.symbol.split(' ')[0]}</strong>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 2. STUDENT COUNCIL & PREFECTORIAL BOARD */}
      <section id="council" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Student Leadership
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold mt-1">
              Prefectorial Board & Student Council 2025-26
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-serif-body mt-2">
              Democratically elected through student vote and faculty evaluation, our prefects lead morning assemblies, organize cultural confluences, and serve as student voice to the Directorate.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700">
              <span className="text-xs font-bold text-amber-400 uppercase block">Head Girl</span>
              <h4 className="text-sm font-bold text-white mt-1">Ananya V. Sharma</h4>
              <span className="text-[11px] text-slate-400">Class XII-A</span>
            </div>

            <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700">
              <span className="text-xs font-bold text-amber-400 uppercase block">Head Boy</span>
              <h4 className="text-sm font-bold text-white mt-1">Kabir R. Mehra</h4>
              <span className="text-[11px] text-slate-400">Class XII-Science</span>
            </div>

            <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700">
              <span className="text-xs font-bold text-amber-400 uppercase block">Sports Captain</span>
              <h4 className="text-sm font-bold text-white mt-1">Tara Mukherjee</h4>
              <span className="text-[11px] text-slate-400">National Swimmer</span>
            </div>

            <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700">
              <span className="text-xs font-bold text-amber-400 uppercase block">Cultural Secretary</span>
              <h4 className="text-sm font-bold text-white mt-1">Zayan Siddiqui</h4>
              <span className="text-[11px] text-slate-400">Pianist & Orator</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CLUBS & SOCIETIES */}
      <section id="clubs" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
            Co-Curricular Enrichment
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
            Student Clubs & Creative Societies
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clubs.map((c, i) => {
            const Icon = c.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-900 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2">{c.name}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-serif-body">
                    {c.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-semibold text-blue-900">
                  Meets every Wednesday afternoon
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. SOCIAL OUTREACH */}
      <section id="outreach" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="bg-amber-50/70 border border-amber-200 rounded-3xl p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                Service to Humanity
              </span>
              <h3 className="font-display text-2xl font-bold text-slate-900">
                Community Outreach & Project "Umeed"
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 font-serif-body leading-relaxed">
                In line with the foundational convent tradition of selfless service, our high school pupils dedicate 60 hours per academic year to social impact initiatives: teaching basic literacy in rural schools, organizing blood donation drives with the Red Cross, and leading cleanliness campaigns around historical monuments.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-center">
              <div className="p-4 bg-white rounded-2xl shadow-sm border border-amber-200 text-center w-full">
                <span className="font-display text-3xl font-bold text-amber-700">60+ Hours</span>
                <p className="text-xs text-slate-600 font-medium mt-1">Annual Mandatory Community Service for Senior Students</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ad slot */}
      <AdPlaceholder />
    </div>
  );
};
