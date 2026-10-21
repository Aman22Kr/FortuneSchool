import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Building2,
  Navigation,
  Compass,
} from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SCHOOL_INFO } from '../data/schoolData';
import { useApp } from '../context/AppContext';
import { AdPlaceholder } from '../components/AdPlaceholder';

export const ContactPage: React.FC = () => {
  const { submitContactForm } = useApp();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Admissions Enquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Valid email address required';
    }
    if (!formData.phone.trim() || !/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      errs.phone = 'Valid 10-digit phone number required';
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      errs.message = 'Please provide a message with at least 10 characters';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      submitContactForm(formData);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'Admissions Enquiry',
        message: '',
      });
      setTimeout(() => setSubmitted(false), 6000);
    }
  };

  return (
    <div className="space-y-12">
      <Breadcrumbs items={[{ label: 'Contact Us & Campus Directions' }]} />

      {/* Header Banner */}
      <section className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-b-4 border-amber-500">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-400/30">
            <MapPin className="w-3.5 h-3.5" />
            <span>Chanakyapuri, New Delhi</span>
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight">
            Connect with {SCHOOL_INFO.name}
          </h1>
          <p className="font-serif-body text-amber-200 text-sm sm:text-lg max-w-2xl mx-auto">
            We are always here to guide parents, students, and visitors.
          </p>
        </div>
      </section>

      {/* Main Grid: Details + Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Details (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-slate-200 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                  Campus Address
                </span>
                <h3 className="text-xl font-display font-bold text-slate-900 mt-1">
                  Location & Contact Details
                </h3>
              </div>

              <div className="space-y-4 text-xs text-slate-700">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-semibold mb-0.5">Campus Location</strong>
                    <span className="leading-relaxed">{SCHOOL_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-semibold mb-0.5">Telephone Lines</strong>
                    <span>{SCHOOL_INFO.phone}</span>
                    <span className="block text-slate-500 mt-0.5">Toll-Free: {SCHOOL_INFO.tollFree}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-semibold mb-0.5">Official Inquiries</strong>
                    <span>{SCHOOL_INFO.email}</span>
                    <span className="block text-slate-500 mt-0.5">{SCHOOL_INFO.admissionsEmail}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-semibold mb-0.5">Campus Hours</strong>
                    <span>{SCHOOL_INFO.timings}</span>
                    <span className="block text-amber-700 font-medium mt-0.5">
                      {SCHOOL_INFO.visitingHours}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Department Directory */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 shadow-md border border-slate-800 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Departmental Extensions
              </span>
              <div className="space-y-2 text-xs divide-y divide-slate-800">
                <div className="pt-2 flex justify-between">
                  <span className="text-slate-300">Principal's Secretariat:</span>
                  <span className="text-amber-400 font-mono">Ext. 101 / 102</span>
                </div>
                <div className="pt-2 flex justify-between">
                  <span className="text-slate-300">Admissions & Counseling:</span>
                  <span className="text-amber-400 font-mono">Ext. 204</span>
                </div>
                <div className="pt-2 flex justify-between">
                  <span className="text-slate-300">Fee Accounts & Cashier:</span>
                  <span className="text-amber-400 font-mono">Ext. 301</span>
                </div>
                <div className="pt-2 flex justify-between">
                  <span className="text-slate-300">Transport & Bus Coordinator:</span>
                  <span className="text-amber-400 font-mono">Ext. 405</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-md border border-slate-200">
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                  Online Communication Desk
                </span>
                <h3 className="text-2xl font-display font-bold text-slate-900 mt-1">
                  Send an Inquiry or Feedback
                </h3>
                <p className="text-xs text-slate-500 font-serif-body mt-1">
                  Submissions are cataloged and routed directly to the concerned departmental administrator.
                </p>
              </div>

              {submitted && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <div>
                    <strong className="block font-bold">Your message has been dispatched!</strong>
                    <span>The administration cell will contact you via email or phone within 24 business hours.</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Vikram Sharma"
                      className={`w-full text-xs p-3 rounded-xl border ${
                        errors.name ? 'border-red-500 bg-red-50' : 'border-slate-300'
                      } focus:outline-none focus:border-blue-900`}
                    />
                    {errors.name && <span className="text-[10px] text-red-600 mt-0.5 block">{errors.name}</span>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Contact Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="98100XXXXX"
                      className={`w-full text-xs p-3 rounded-xl border ${
                        errors.phone ? 'border-red-500 bg-red-50' : 'border-slate-300'
                      } focus:outline-none focus:border-blue-900`}
                    />
                    {errors.phone && <span className="text-[10px] text-red-600 mt-0.5 block">{errors.phone}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className={`w-full text-xs p-3 rounded-xl border ${
                        errors.email ? 'border-red-500 bg-red-50' : 'border-slate-300'
                      } focus:outline-none focus:border-blue-900`}
                    />
                    {errors.email && <span className="text-[10px] text-red-600 mt-0.5 block">{errors.email}</span>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Inquiry Department *
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full text-xs p-3 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-900 bg-white"
                    >
                      <option value="Admissions Enquiry">Admissions & Registration 2025-26</option>
                      <option value="Fee Accounts">Fee Accounts & Billing</option>
                      <option value="Transfer Certificate">Transfer Certificate (TC) Search</option>
                      <option value="Transport Route">School Bus Routes & Safety</option>
                      <option value="Principal Desk">Appointment with Principal</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Message / Query *
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Please specify your query in detail..."
                    className={`w-full text-xs p-3 rounded-xl border ${
                      errors.message ? 'border-red-500 bg-red-50' : 'border-slate-300'
                    } focus:outline-none focus:border-blue-900`}
                  ></textarea>
                  {errors.message && <span className="text-[10px] text-red-600 mt-0.5 block">{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-8 py-3 text-xs font-bold text-slate-950 shadow-md hover:from-amber-400 hover:to-amber-500 hover:shadow-lg transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Official Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Map & Transit Placeholder */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-slate-200 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                Transit & Navigation
              </span>
              <h3 className="text-xl font-display font-bold text-slate-900">
                How to Reach FortuneSchool, New Delhi
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <Compass className="w-4 h-4 text-blue-900" />
              <span>Chanakyapuri Diplomatic Enclave</span>
            </div>
          </div>

          {/* Interactive Map Visual Placeholder */}
          <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 flex items-center justify-center">
            {/* Map styling grid & visual road elements */}
            <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>

            <div className="relative z-10 text-center text-white space-y-3 p-4">
              <div className="w-14 h-14 rounded-full bg-blue-900 border-2 border-amber-400 flex items-center justify-center mx-auto shadow-2xl animate-bounce">
                <MapPin className="w-7 h-7 text-amber-400" />
              </div>
              <div>
                <h4 className="font-display font-bold text-lg">{SCHOOL_INFO.fullName}</h4>
                <p className="text-xs text-amber-300 font-serif-body">Malcha Marg, Chanakyapuri, New Delhi - 110021</p>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-800/90 rounded-full text-[11px] text-slate-300 border border-slate-700">
                <span>Lat: 28.5983° N • Long: 77.1724° E</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <strong className="block text-slate-900 font-semibold mb-1">By Delhi Metro:</strong>
              <p className="text-slate-600">Lok Kalyan Marg (Yellow Line) - 2.5 km • Durgabai Deshmukh South Campus (Pink Line) - 3.2 km</p>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <strong className="block text-slate-900 font-semibold mb-1">By Air:</strong>
              <p className="text-slate-600">Indira Gandhi International Airport (IGI T3) - 12 km (approx 20 mins via NH-48)</p>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <strong className="block text-slate-900 font-semibold mb-1">By Railway:</strong>
              <p className="text-slate-600">New Delhi Railway Station (NDLS) - 8.5 km • Hazrat Nizamuddin (NZM) - 9 km</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ad slot */}
      <AdPlaceholder />
    </div>
  );
};
