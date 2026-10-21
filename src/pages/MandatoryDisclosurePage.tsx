import React from 'react';
import {
  ShieldCheck,
  FileText,
  Download,
  Building2,
  Users,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SCHOOL_INFO } from '../data/schoolData';
import { AdPlaceholder } from '../components/AdPlaceholder';

export const MandatoryDisclosurePage: React.FC = () => {
  const documents = [
    { name: 'Copies of Affiliation / Upgradation Letter & Recent Extension of Affiliation', file: 'CBSE-Affiliation-Letter-2730048.pdf', size: '1.2 MB' },
    { name: 'Copies of Societies / Trust / Company Registration / Renewal Certificate', file: 'Society-Registration-Deed.pdf', size: '2.4 MB' },
    { name: 'Copy of No Objection Certificate (NOC) Issued by Directorate of Education, Delhi', file: 'State-Govt-NOC-Delhi.pdf', size: '940 KB' },
    { name: 'Copies of Recognition Certificate under RTE Act, 2009', file: 'RTE-Recognition-Cert.pdf', size: '820 KB' },
    { name: 'Copy of Valid Building Safety Certificate as per National Building Code (NBC)', file: 'PWD-Building-Safety-NBC.pdf', size: '1.5 MB' },
    { name: 'Copy of Valid Fire Safety Certificate Issued by Delhi Fire Service', file: 'Delhi-Fire-Service-NOC.pdf', size: '1.1 MB' },
    { name: 'Copy of DEO Certificate Submitted for Affiliation', file: 'DEO-Self-Certification.pdf', size: '640 KB' },
    { name: 'Copies of Valid Water, Health & Sanitation Certificates (MCD/NDMC)', file: 'NDMC-Water-Sanitation.pdf', size: '890 KB' },
    { name: 'Fee Structure of the School (Approved by Directorate of Education)', file: 'DoE-Approved-Fee-Structure-2025-26.pdf', size: '510 KB' },
    { name: 'Annual Academic Calendar & Holiday List', file: 'Academic-Calendar-2025-26.pdf', size: '750 KB' },
    { name: 'List of School Management Committee (SMC) Members', file: 'SMC-Governing-Council-2025.pdf', size: '430 KB' },
    { name: 'List of Parents Teachers Association (PTA) Executive Body', file: 'PTA-Executive-Council-2025.pdf', size: '380 KB' },
  ];

  return (
    <div className="space-y-12">
      <Breadcrumbs items={[{ label: 'CBSE Mandatory Public Disclosure' }]} />

      {/* Header Banner */}
      <section className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-b-4 border-amber-500">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-400/30">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Statutory Compliance (Appendix IX)</span>
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight">
            Mandatory Public Disclosure
          </h1>
          <p className="font-serif-body text-amber-200 text-sm sm:text-lg max-w-2xl mx-auto">
            Central Board of Secondary Education (CBSE) Compliance Documents
          </p>
        </div>
      </section>

      {/* General School Information Table */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-slate-200 space-y-4">
          <h2 className="text-sm font-bold text-blue-950 uppercase tracking-wider border-b border-slate-200 pb-2">
            A: General Institutional Details
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left text-slate-700">
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="p-3 font-semibold text-slate-900 w-1/3">Name of the School</td>
                  <td className="p-3 font-bold text-blue-900">{SCHOOL_INFO.fullName}</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-900">Affiliation Number</td>
                  <td className="p-3 font-mono font-bold">{SCHOOL_INFO.affiliationNo}</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-900">School Code</td>
                  <td className="p-3 font-mono font-bold">{SCHOOL_INFO.schoolCode}</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-900">Complete Address with Pincode</td>
                  <td className="p-3">{SCHOOL_INFO.address}</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-900">Principal Name & Qualification</td>
                  <td className="p-3 font-bold">{SCHOOL_INFO.principalName}</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-900">School Email Address</td>
                  <td className="p-3">{SCHOOL_INFO.email}</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-900">Contact Details (Landline / Mobile)</td>
                  <td className="p-3">{SCHOOL_INFO.phone}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Documents & Compliance Certificates */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-slate-200 space-y-4">
          <h2 className="text-sm font-bold text-blue-950 uppercase tracking-wider border-b border-slate-200 pb-2">
            B: Statutory Documents & Information
          </h2>

          <div className="space-y-3">
            {documents.map((doc, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-amber-50/40 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-semibold text-slate-900">{doc.name}</h3>
                    <span className="text-[11px] font-mono text-slate-500">
                      File: {doc.file} ({doc.size})
                    </span>
                  </div>
                </div>

                <a
                  href={`#view-${doc.file}`}
                  onClick={(e) => {
                    e.preventDefault();
                    alert(`Statutory record preview: ${doc.name} (Authenticated copy on physical archive)`);
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-300 text-blue-900 text-xs font-bold hover:bg-blue-50 transition-colors self-end sm:self-auto"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>View Document</span>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* POCSO & Child Protection Policy */}
        <div id="pocso" className="bg-blue-950 text-white rounded-3xl p-6 sm:p-8 shadow-md border border-blue-900 space-y-4 scroll-mt-24">
          <h2 className="text-base font-bold text-amber-400 uppercase tracking-wider">
            POCSO & Internal Complaints Committee (ICC)
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 font-serif-body leading-relaxed">
            FortuneSchool enforces a zero-tolerance policy against any form of harassment, discrimination, or child mistreatment. In compliance with POCSO Act 2012, our committee convenes regularly and handles all concerns with utmost confidentiality and statutory promptness.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-2">
            <div className="p-3 bg-blue-900/50 rounded-xl border border-blue-800">
              <span className="text-amber-400 font-bold block mb-1">Chairperson:</span>
              <span>Mrs. Margaret D’Souza (Headmistress)</span>
            </div>
            <div className="p-3 bg-blue-900/50 rounded-xl border border-blue-800">
              <span className="text-amber-400 font-bold block mb-1">Legal Counsel:</span>
              <span>Adv. Priya Nambiar (Supreme Court of India)</span>
            </div>
            <div className="p-3 bg-blue-900/50 rounded-xl border border-blue-800">
              <span className="text-amber-400 font-bold block mb-1">Child Psychologist:</span>
              <span>Dr. Renu Vashishta, Ph.D.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Ad slot */}
      <AdPlaceholder />
    </div>
  );
};
