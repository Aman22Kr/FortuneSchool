import React from 'react';
import {
  Building2,
  CheckCircle2,
  Shield,
  Sparkles,
  MapPin,
  Flame,
  Bus,
  HeartPulse,
  Eye,
  Volume2,
} from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { FACILITIES, SCHOOL_INFO } from '../data/schoolData';
import { AdPlaceholder } from '../components/AdPlaceholder';
import { VideoPlaceholder } from '../components/VideoPlaceholder';

export const CampusPage: React.FC = () => {
  return (
    <div className="space-y-12">
      <Breadcrumbs items={[{ label: 'Campus & Facilities' }]} />

      {/* Header Banner */}
      <section className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-b-4 border-amber-500">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-400/30">
            <Building2 className="w-3.5 h-3.5" />
            <span>18 Acres in Diplomatic Chanakyapuri</span>
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight">
            Campus Infrastructure & Facilities
          </h1>
          <p className="font-serif-body text-amber-200 text-sm sm:text-lg max-w-2xl mx-auto">
            A Serene Oasis Designed for Discovery, Fitness & Aesthetic Expression
          </p>
          <p className="text-slate-300 text-xs sm:text-sm max-w-3xl mx-auto leading-relaxed">
            From interactive smart classrooms and high-throughput research laboratories to Olympic athletic arenas, FortuneSchool offers an inspiring environment where physical health and academic rigor flourish hand in hand.
          </p>
        </div>
      </section>

      {/* 1. FACILITIES LISTING */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {FACILITIES.map((facility, index) => {
          const isReversed = index % 2 === 1;
          return (
            <div
              key={facility.id}
              id={facility.id}
              className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-md border border-slate-200 scroll-mt-24"
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className={`lg:col-span-6 ${isReversed ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-slate-100 group">
                    <img
                      src={facility.imageUrl}
                      alt={facility.name}
                      className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute bottom-3 left-3 bg-slate-950/80 backdrop-blur-sm text-amber-400 text-[11px] font-semibold px-3 py-1 rounded-lg border border-slate-800">
                      {facility.specifications}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`lg:col-span-6 space-y-4 ${isReversed ? 'lg:order-1' : ''}`}>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                      Institutional Facility #{index + 1}
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                      {facility.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-blue-900 font-serif-body mt-0.5">
                      {facility.tagline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-serif-body">
                    {facility.description}
                  </p>

                  <div className="space-y-2 pt-1">
                    <strong className="text-xs font-bold text-slate-800 block">
                      Salient Key Features:
                    </strong>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                      {facility.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* 2. CAMPUS VIDEO TOUR (Prompt spec YouTube layout blank placeholder) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
            Aerial & Architectural Tour
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900">
            A Glimpse into Our 18-Acre Green Sanctuary
          </h2>
        </div>
        <VideoPlaceholder
          title="FortuneSchool Infrastructure & Athletic Complex Video Tour"
          subtitle="Tour our science labs, central library, and synthetic football fields • 1080p HD"
          duration="04:45"
        />
      </section>

      {/* 3. SAFETY, HEALTH & TRANSPORTATION */}
      <section className="bg-slate-100 py-16 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
              Student Safety & Well-being
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900">
              Health, Transport & Security Infrastructure
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center">
                <HeartPulse className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Infirmary & Medical Care</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-serif-body">
                Fully equipped on-campus wellness infirmary staffed with a resident pediatrician and qualified certified nursing officers. Emergency tie-ups with leading multi-specialty hospitals in New Delhi.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-900 flex items-center justify-center">
                <Bus className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">GPS-Monitored Fleet</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-serif-body">
                35+ air-conditioned school buses fitted with GPS speed governors, real-time parent mobile tracking, internal CCTV cameras, first-aid kits, and trained female bus marshals on all routes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">24/7 Campus Vigilance</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-serif-body">
                250+ high-definition night-vision CCTV cameras monitored by a central security command cell, biometric access at entry points, and certified fire hydrant systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ad slot */}
      <AdPlaceholder />
    </div>
  );
};
