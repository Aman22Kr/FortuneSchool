import React, { useState } from 'react';
import {
  GraduationCap,
  Sparkles,
  CheckCircle2,
  Calendar,
  CreditCard,
  FileText,
  AlertCircle,
  HelpCircle,
  ChevronDown,
  Printer,
  Download,
  Clock,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useApp, AdmissionFormData } from '../context/AppContext';
import { SCHOOL_INFO, FAQS } from '../data/schoolData';
import { AdPlaceholder } from '../components/AdPlaceholder';

export const AdmissionsPage: React.FC = () => {
  const {
    admissionDraft,
    updateAdmissionDraft,
    resetAdmissionDraft,
    submittedApplications,
    submitAdmissionApplication,
  } = useApp();

  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [submittedReceipt, setSubmittedReceipt] = useState<AdmissionFormData | null>(null);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!admissionDraft.studentName.trim()) errors.studentName = 'Student name is required';
    if (!admissionDraft.dob) errors.dob = 'Date of birth is required';
    if (!admissionDraft.parentName.trim()) errors.parentName = 'Parent / Guardian name is required';
    if (!admissionDraft.phone.trim() || !/^\d{10}$/.test(admissionDraft.phone.replace(/\D/g, ''))) {
      errors.phone = 'Valid 10-digit mobile number required';
    }
    if (!admissionDraft.email.trim() || !/\S+@\S+\.\S+/.test(admissionDraft.email)) {
      errors.email = 'Valid email address required';
    }
    if (!admissionDraft.address.trim()) errors.address = 'Residential address is required';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      const appNo = submitAdmissionApplication(admissionDraft);
      setSubmittedReceipt({
        ...admissionDraft,
        applicationNo: appNo,
        submittedAt: new Date().toLocaleString(),
      });
    }
  };

  return (
    <div className="space-y-12">
      <Breadcrumbs items={[{ label: 'Admissions 2025-26' }]} />

      {/* Header Banner */}
      <section className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-b-4 border-amber-500">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Academic Session 2025-26</span>
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight">
            Admissions at {SCHOOL_INFO.name}
          </h1>
          <p className="font-serif-body text-amber-200 text-sm sm:text-lg max-w-2xl mx-auto">
            Online Registration Open for Pre-School (Nursery) to Grade XI
          </p>
          <p className="text-slate-300 text-xs sm:text-sm max-w-3xl mx-auto leading-relaxed">
            We welcome prospective students and parents to join the FortuneSchool family. Admissions are conducted transparently in compliance with Directorate of Education (DoE) Delhi guidelines.
          </p>
        </div>
      </section>

      {/* 1. ADMISSION GUIDELINES & POINT CRITERIA */}
      <section id="guidelines" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Criteria Overview */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                Pre-School Admission Matrix
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                Criteria & Point System (100 Points Total)
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-serif-body mt-2 leading-relaxed">
                As per DoE norms, admission to entry-level classes (Pre-School / Nursery) is carried out on a 100-point parameter system ensuring fairness and neighborhood priority.
              </p>
            </div>

            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-900"></span>
                    <h4 className="text-sm font-bold text-slate-900">Neighborhood / Distance Parameter</h4>
                  </div>
                  <p className="text-xs text-slate-500">
                    0 to 3 km (70 pts) • 3.1 to 6 km (60 pts) • Above 6 km (50 pts)
                  </p>
                </div>
                <span className="px-3 py-1 bg-blue-50 text-blue-900 font-bold rounded-lg text-sm border border-blue-200">
                  70 Pts Max
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                    <h4 className="text-sm font-bold text-slate-900">Sibling Parameter</h4>
                  </div>
                  <p className="text-xs text-slate-500">
                    Real brother or sister currently studying at FortuneSchool (fee book copy required).
                  </p>
                </div>
                <span className="px-3 py-1 bg-amber-50 text-amber-800 font-bold rounded-lg text-sm border border-amber-200">
                  20 Points
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
                    <h4 className="text-sm font-bold text-slate-900">Alumni Parameter</h4>
                  </div>
                  <p className="text-xs text-slate-500">
                    Parent passed out of Class X or XII from FortuneSchool (Alumni card / marksheet).
                  </p>
                </div>
                <span className="px-3 py-1 bg-emerald-50 text-emerald-800 font-bold rounded-lg text-sm border border-emerald-200">
                  10 Points
                </span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-slate-700 space-y-1.5">
              <strong className="text-amber-900 block font-bold">Important Documents Required for Verification:</strong>
              <p>1. Original Birth Certificate issued by Municipal Corporation (MCD/NDMC).</p>
              <p>2. Proof of Residence (Aadhaar Card / Ration Card / Voter ID / Passport / Domicile Certificate).</p>
              <p>3. Two recent passport-size photographs of the student and both parents.</p>
            </div>
          </div>

          {/* Right: Age Eligibility Card */}
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-800 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Age Eligibility Matrix
              </span>
              <h3 className="font-display text-xl font-bold text-white mt-1 mb-4">
                As of March 31, 2025
              </h3>

              <div className="space-y-3 text-xs">
                <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700 flex items-center justify-between">
                  <span className="font-semibold text-slate-200">Pre-School (Nursery)</span>
                  <span className="text-amber-400 font-bold">3 Years to &lt; 4 Years</span>
                </div>
                <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700 flex items-center justify-between">
                  <span className="font-semibold text-slate-200">Pre-Primary (KG)</span>
                  <span className="text-amber-400 font-bold">4 Years to &lt; 5 Years</span>
                </div>
                <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700 flex items-center justify-between">
                  <span className="font-semibold text-slate-200">Class I</span>
                  <span className="text-amber-400 font-bold">5 Years to &lt; 6 Years</span>
                </div>
                <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700 flex items-center justify-between">
                  <span className="font-semibold text-slate-200">Grade XI Streams</span>
                  <span className="text-amber-400 font-bold">Class X Board Passed (Min 75%)</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-400">
              * A 30-day age relaxation in maximum or minimum age limit is permissible on written request to the Principal.
            </div>
          </div>
        </div>
      </section>

      {/* 2. ONLINE REGISTRATION / ADMISSION ENQUIRY FORM */}
      <section id="form" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
              Admissions Portal
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
              Online Admission Registration Form
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-serif-body mt-1">
              Fill the details below. Draft changes are automatically saved to your browser so you won't lose progress.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Student Info */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-blue-900 border-b border-slate-200 pb-1">
                1. Student Particulars
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Student Full Name *
                  </label>
                  <input
                    type="text"
                    value={admissionDraft.studentName}
                    onChange={(e) => updateAdmissionDraft('studentName', e.target.value)}
                    placeholder="e.g. Ananya Sharma"
                    className={`w-full text-xs p-3 rounded-xl border ${
                      formErrors.studentName ? 'border-red-500 bg-red-50' : 'border-slate-300'
                    } focus:outline-none focus:border-blue-900`}
                  />
                  {formErrors.studentName && (
                    <span className="text-[10px] text-red-600 mt-0.5 block">{formErrors.studentName}</span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    value={admissionDraft.dob}
                    onChange={(e) => updateAdmissionDraft('dob', e.target.value)}
                    className={`w-full text-xs p-3 rounded-xl border ${
                      formErrors.dob ? 'border-red-500 bg-red-50' : 'border-slate-300'
                    } focus:outline-none focus:border-blue-900`}
                  />
                  {formErrors.dob && (
                    <span className="text-[10px] text-red-600 mt-0.5 block">{formErrors.dob}</span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Gender *
                  </label>
                  <select
                    value={admissionDraft.gender}
                    onChange={(e) => updateAdmissionDraft('gender', e.target.value)}
                    className="w-full text-xs p-3 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-900 bg-white"
                  >
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Applying for Grade / Class *
                  </label>
                  <select
                    value={admissionDraft.appliedGrade}
                    onChange={(e) => updateAdmissionDraft('appliedGrade', e.target.value)}
                    className="w-full text-xs p-3 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-900 bg-white"
                  >
                    <option value="Pre-School (Nursery)">Pre-School (Nursery)</option>
                    <option value="Pre-Primary (KG)">Pre-Primary (KG)</option>
                    <option value="Grade I">Grade I</option>
                    <option value="Grade II">Grade II</option>
                    <option value="Grade III">Grade III</option>
                    <option value="Grade VI (Middle Wing)">Grade VI (Middle Wing)</option>
                    <option value="Grade IX (Secondary)">Grade IX (Secondary)</option>
                    <option value="Grade XI - Science">Grade XI - Science (Med / Non-Med)</option>
                    <option value="Grade XI - Commerce">Grade XI - Commerce</option>
                    <option value="Grade XI - Humanities">Grade XI - Humanities & Arts</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Category *
                  </label>
                  <select
                    value={admissionDraft.category}
                    onChange={(e) => updateAdmissionDraft('category', e.target.value)}
                    className="w-full text-xs p-3 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-900 bg-white"
                  >
                    <option value="General">General Category</option>
                    <option value="EWS/DG">EWS / Disadvantaged Group</option>
                    <option value="Staff Ward">Staff Ward</option>
                    <option value="Alumni Ward">Alumni Ward</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Parent Info */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-blue-900 border-b border-slate-200 pb-1">
                2. Parent / Guardian Particulars
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Parent / Guardian Name *
                  </label>
                  <input
                    type="text"
                    value={admissionDraft.parentName}
                    onChange={(e) => updateAdmissionDraft('parentName', e.target.value)}
                    placeholder="Father / Mother Name"
                    className={`w-full text-xs p-3 rounded-xl border ${
                      formErrors.parentName ? 'border-red-500 bg-red-50' : 'border-slate-300'
                    } focus:outline-none focus:border-blue-900`}
                  />
                  {formErrors.parentName && (
                    <span className="text-[10px] text-red-600 mt-0.5 block">{formErrors.parentName}</span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Mobile Phone (10-Digit) *
                  </label>
                  <input
                    type="tel"
                    value={admissionDraft.phone}
                    onChange={(e) => updateAdmissionDraft('phone', e.target.value)}
                    placeholder="98100XXXXX"
                    className={`w-full text-xs p-3 rounded-xl border ${
                      formErrors.phone ? 'border-red-500 bg-red-50' : 'border-slate-300'
                    } focus:outline-none focus:border-blue-900`}
                  />
                  {formErrors.phone && (
                    <span className="text-[10px] text-red-600 mt-0.5 block">{formErrors.phone}</span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={admissionDraft.email}
                    onChange={(e) => updateAdmissionDraft('email', e.target.value)}
                    placeholder="parent@example.com"
                    className={`w-full text-xs p-3 rounded-xl border ${
                      formErrors.email ? 'border-red-500 bg-red-50' : 'border-slate-300'
                    } focus:outline-none focus:border-blue-900`}
                  />
                  {formErrors.email && (
                    <span className="text-[10px] text-red-600 mt-0.5 block">{formErrors.email}</span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Residential Address *
                  </label>
                  <input
                    type="text"
                    value={admissionDraft.address}
                    onChange={(e) => updateAdmissionDraft('address', e.target.value)}
                    placeholder="Flat/House No, Street, Locality, New Delhi"
                    className={`w-full text-xs p-3 rounded-xl border ${
                      formErrors.address ? 'border-red-500 bg-red-50' : 'border-slate-300'
                    } focus:outline-none focus:border-blue-900`}
                  />
                  {formErrors.address && (
                    <span className="text-[10px] text-red-600 mt-0.5 block">{formErrors.address}</span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Pincode
                  </label>
                  <input
                    type="text"
                    value={admissionDraft.pincode}
                    onChange={(e) => updateAdmissionDraft('pincode', e.target.value)}
                    placeholder="110021"
                    className="w-full text-xs p-3 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-900"
                  />
                </div>
              </div>

              {/* Sibling Checkbox */}
              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="sibling"
                  checked={admissionDraft.siblingEnrolled}
                  onChange={(e) => updateAdmissionDraft('siblingEnrolled', e.target.checked)}
                  className="w-4 h-4 text-blue-900 rounded focus:ring-blue-900 border-slate-300"
                />
                <label htmlFor="sibling" className="text-xs text-slate-700 cursor-pointer">
                  A real sibling is currently enrolled at FortuneSchool (20 points criteria)
                </label>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200">
              <button
                type="button"
                onClick={resetAdmissionDraft}
                className="text-xs text-slate-500 hover:text-red-600 font-medium transition-colors"
              >
                Reset Draft
              </button>

              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3 text-xs font-bold text-slate-950 shadow-md hover:from-amber-400 hover:to-amber-500 hover:shadow-lg transition-all"
              >
                <span>Submit Online Registration</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* ACKNOWLEDGEMENT RECEIPT MODAL */}
      {submittedReceipt && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 text-slate-900 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm">
                <CheckCircle2 className="w-5 h-5" />
                <span>Application Submitted Successfully</span>
              </div>
              <button
                onClick={() => setSubmittedReceipt(null)}
                className="text-xs font-bold text-slate-400 hover:text-slate-600"
              >
                ✕ Close
              </button>
            </div>

            <div className="text-center py-2 bg-amber-50 rounded-2xl border border-amber-200">
              <span className="text-[11px] font-bold text-slate-600 uppercase">Official Registration ID</span>
              <h3 className="text-2xl font-mono font-bold text-blue-950 mt-0.5">
                {submittedReceipt.applicationNo}
              </h3>
              <p className="text-[11px] text-slate-500">Saved in browser record • Session 2025-26</p>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs bg-slate-50 p-4 rounded-xl border border-slate-200">
              <div>
                <span className="text-slate-500 block">Student Name:</span>
                <strong className="text-slate-900">{submittedReceipt.studentName}</strong>
              </div>
              <div>
                <span className="text-slate-500 block">Applied Grade:</span>
                <strong className="text-slate-900">{submittedReceipt.appliedGrade}</strong>
              </div>
              <div>
                <span className="text-slate-500 block">Parent / Guardian:</span>
                <strong className="text-slate-900">{submittedReceipt.parentName}</strong>
              </div>
              <div>
                <span className="text-slate-500 block">Contact Phone:</span>
                <strong className="text-slate-900">{submittedReceipt.phone}</strong>
              </div>
            </div>

            <p className="text-[11px] text-slate-500 leading-relaxed font-serif-body">
              A copy of this acknowledgement has been archived. Please preserve your Application Number for lottery draws, distance verification, and document scrutiny sessions at the school administrative desk.
            </p>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => window.print()}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-700 transition-colors"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print Slip</span>
              </button>
              <button
                onClick={() => setSubmittedReceipt(null)}
                className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl bg-blue-900 hover:bg-blue-800 text-xs font-bold text-white transition-colors"
              >
                <span>Done</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 3. FEE STRUCTURE TABLE */}
      <section id="fees" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-md border border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                Transparent Fee Policy
              </span>
              <h2 className="font-display text-2xl font-bold text-slate-900">
                Fee Schedule for Session 2025-26
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Regulated by Directorate of Education (DoE)</span>
            </div>
          </div>

          <div className="overflow-x-auto mt-6">
            <table className="w-full text-xs text-left text-slate-700 border-collapse">
              <thead>
                <tr className="bg-slate-100 text-blue-950 font-bold border-b border-slate-300">
                  <th className="p-3">Fee Component</th>
                  <th className="p-3">Pre-School (Nursery)</th>
                  <th className="p-3">Primary (I - V)</th>
                  <th className="p-3">Middle (VI - VIII)</th>
                  <th className="p-3">Senior Secondary (XI - XII)</th>
                  <th className="p-3">Billing Cycle</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="p-3 font-semibold">Admission Fee (One-Time)</td>
                  <td className="p-3">₹ 200</td>
                  <td className="p-3">₹ 200</td>
                  <td className="p-3">₹ 200</td>
                  <td className="p-3">₹ 200</td>
                  <td className="p-3 text-slate-500">At time of admission</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Caution Money (Refundable)</td>
                  <td className="p-3">₹ 500</td>
                  <td className="p-3">₹ 500</td>
                  <td className="p-3">₹ 500</td>
                  <td className="p-3">₹ 500</td>
                  <td className="p-3 text-slate-500">Refundable on TC</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Tuition Fee (Quarterly)</td>
                  <td className="p-3">₹ 14,200</td>
                  <td className="p-3">₹ 15,800</td>
                  <td className="p-3">₹ 17,400</td>
                  <td className="p-3">₹ 19,500</td>
                  <td className="p-3 text-slate-500">Every 3 Months</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Annual Charges & Library</td>
                  <td className="p-3">₹ 4,800</td>
                  <td className="p-3">₹ 5,200</td>
                  <td className="p-3">₹ 5,800</td>
                  <td className="p-3">₹ 6,400</td>
                  <td className="p-3 text-slate-500">Annually (April)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Development Fund</td>
                  <td className="p-3">₹ 2,100</td>
                  <td className="p-3">₹ 2,300</td>
                  <td className="p-3">₹ 2,600</td>
                  <td className="p-3">₹ 2,900</td>
                  <td className="p-3 text-slate-500">Quarterly</td>
                </tr>
                <tr className="bg-amber-50/50">
                  <td className="p-3 font-semibold">Science & Robotics Lab Fee</td>
                  <td className="p-3">N/A</td>
                  <td className="p-3">₹ 600</td>
                  <td className="p-3">₹ 900</td>
                  <td className="p-3">₹ 1,800</td>
                  <td className="p-3 text-slate-500">Quarterly</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] text-slate-500 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <span>* Fees can be remitted online via Debit Card / Net Banking / UPI with zero transaction charges.</span>
            <span className="font-semibold text-blue-900">Optional Air-Conditioned GPS Bus: ₹ 2,800 - ₹ 3,600/month depending on route distance.</span>
          </div>
        </div>
      </section>

      {/* 4. ADMISSIONS FAQ ACCORDION */}
      <section id="faq" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="text-center mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
            Common Inquiries
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-slate-900 hover:text-blue-900"
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-amber-500 flex-shrink-0" />
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform ${
                      isOpen ? 'rotate-180 text-blue-900' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs text-slate-600 font-serif-body leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Ad slot */}
      <AdPlaceholder />
    </div>
  );
};
