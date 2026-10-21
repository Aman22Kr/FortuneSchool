import React, { useState } from 'react';
import {
  FileText,
  Search,
  CheckCircle2,
  Printer,
  ShieldCheck,
  ArrowRight,
  Download,
  AlertCircle,
} from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { MOCK_TC_RECORDS, SCHOOL_INFO } from '../data/schoolData';
import { AdPlaceholder } from '../components/AdPlaceholder';

export const TransferCertificatePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRecord, setSelectedRecord] = useState<any | null>(null);

  const filteredRecords = searchTerm.trim()
    ? MOCK_TC_RECORDS.filter(
        (r) =>
          r.admissionNo.toLowerCase().includes(searchTerm.toLowerCase().trim()) ||
          r.studentName.toLowerCase().includes(searchTerm.toLowerCase().trim()) ||
          r.tcNo.toLowerCase().includes(searchTerm.toLowerCase().trim())
      )
    : MOCK_TC_RECORDS;

  return (
    <div className="space-y-12">
      <Breadcrumbs items={[{ label: 'Transfer Certificate (TC) Verification' }]} />

      {/* Header Banner */}
      <section className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-b-4 border-amber-500">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-400/30">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Public Statutory Verification</span>
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight">
            Transfer Certificate (TC) Verification
          </h1>
          <p className="font-serif-body text-amber-200 text-sm sm:text-lg max-w-2xl mx-auto">
            Official Public Registry of Issued Transfer Certificates
          </p>
          <p className="text-slate-300 text-xs sm:text-sm max-w-3xl mx-auto leading-relaxed">
            In compliance with CBSE Affiliation Bye-Laws, all Transfer Certificates issued by FortuneSchool are published here for immediate verification by other academic institutions and educational authorities.
          </p>
        </div>
      </section>

      {/* Search & Records */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="bg-white rounded-3xl p-6 shadow-md border border-slate-200 space-y-4">
          <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wider">
            Search Student TC Record
          </h2>
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by Admission No (e.g. ADM-2019-1422), Student Name, or TC No..."
              className="w-full text-xs sm:text-sm pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:border-blue-900"
            />
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
            <span>Quick search examples:</span>
            <button
              onClick={() => setSearchTerm('ADM-2019-1422')}
              className="px-2 py-0.5 rounded bg-slate-100 hover:bg-slate-200 font-mono text-blue-900"
            >
              ADM-2019-1422
            </button>
            <button
              onClick={() => setSearchTerm('Zoya')}
              className="px-2 py-0.5 rounded bg-slate-100 hover:bg-slate-200 font-mono text-blue-900"
            >
              Zoya
            </button>
            <button
              onClick={() => setSearchTerm('Devansh')}
              className="px-2 py-0.5 rounded bg-slate-100 hover:bg-slate-200 font-mono text-blue-900"
            >
              Devansh
            </button>
          </div>
        </div>

        {/* Results Table */}
        <div className="bg-white rounded-3xl p-6 shadow-md border border-slate-200 overflow-hidden">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-slate-900 text-sm">
              Verified Records Archive ({filteredRecords.length})
            </h3>
            <span className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              CBSE Linked Database
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left text-slate-700">
              <thead>
                <tr className="bg-slate-100 text-blue-950 font-bold border-b border-slate-200">
                  <th className="p-3">TC Number</th>
                  <th className="p-3">Student Name</th>
                  <th className="p-3">Admission No</th>
                  <th className="p-3">Grade Last Studied</th>
                  <th className="p-3">Date of Issue</th>
                  <th className="p-3">Status</th>
                  <th className="p-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredRecords.map((rec) => (
                  <tr key={rec.tcNo} className="hover:bg-slate-50 transition-colors">
                    <td className="p-3 font-mono font-bold text-blue-900">{rec.tcNo}</td>
                    <td className="p-3 font-semibold text-slate-900">{rec.studentName}</td>
                    <td className="p-3 font-mono text-slate-600">{rec.admissionNo}</td>
                    <td className="p-3">{rec.gradeLastStudied}</td>
                    <td className="p-3 text-slate-500">{rec.dateOfIssue}</td>
                    <td className="p-3">
                      <span className="inline-block px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                        {rec.status}
                      </span>
                    </td>
                    <td className="p-3 text-right">
                      <button
                        onClick={() => setSelectedRecord(rec)}
                        className="px-3 py-1 rounded-lg bg-blue-900 text-white text-xs font-semibold hover:bg-blue-800 transition-colors"
                      >
                        View TC
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Printable TC Preview Modal */}
      {selectedRecord && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-10 shadow-2xl border border-slate-200 text-slate-900 space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <span className="text-xs font-bold text-emerald-600 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                Verified Institutional Record
              </span>
              <button
                onClick={() => setSelectedRecord(null)}
                className="text-xs font-bold text-slate-400 hover:text-slate-600"
              >
                ✕ Close
              </button>
            </div>

            {/* School Certificate Header */}
            <div className="text-center space-y-1.5 border-b-2 border-slate-900 pb-4">
              <h2 className="font-display text-2xl font-bold text-blue-950">{SCHOOL_INFO.name}</h2>
              <p className="text-xs text-slate-600 font-serif-body">{SCHOOL_INFO.address}</p>
              <p className="text-[11px] font-semibold text-slate-700">
                CBSE Affiliation No: {SCHOOL_INFO.affiliationNo} | School Code: {SCHOOL_INFO.schoolCode}
              </p>
              <div className="inline-block px-4 py-1 rounded bg-amber-100 text-amber-900 font-bold text-xs uppercase tracking-wider mt-1">
                School Leaving / Transfer Certificate
              </div>
            </div>

            {/* Certificate Details */}
            <div className="grid grid-cols-2 gap-4 text-xs font-serif-body">
              <div>
                <span className="text-slate-500 block">Certificate No:</span>
                <strong className="text-sm font-mono text-blue-900 font-bold">{selectedRecord.tcNo}</strong>
              </div>
              <div>
                <span className="text-slate-500 block">Admission Number:</span>
                <strong className="text-sm font-mono text-slate-900">{selectedRecord.admissionNo}</strong>
              </div>
              <div>
                <span className="text-slate-500 block">Name of Pupil:</span>
                <strong className="text-sm text-slate-900">{selectedRecord.studentName}</strong>
              </div>
              <div>
                <span className="text-slate-500 block">Father's Name:</span>
                <strong className="text-slate-900">{selectedRecord.fatherName}</strong>
              </div>
              <div>
                <span className="text-slate-500 block">Mother's Name:</span>
                <strong className="text-slate-900">{selectedRecord.motherName}</strong>
              </div>
              <div>
                <span className="text-slate-500 block">Class Last Studied:</span>
                <strong className="text-slate-900">{selectedRecord.gradeLastStudied}</strong>
              </div>
              <div>
                <span className="text-slate-500 block">Date of Issue:</span>
                <strong className="text-slate-900">{selectedRecord.dateOfIssue}</strong>
              </div>
              <div>
                <span className="text-slate-500 block">Reason for Leaving:</span>
                <strong className="text-slate-900">{selectedRecord.reason}</strong>
              </div>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-[11px] text-slate-600">
              * This is an authentic digital reproduction of the transfer certificate record maintained in the school master register. No alteration or tampering is permitted.
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-200">
              <span className="text-xs text-slate-500 font-mono">Status: {selectedRecord.status}</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => window.print()}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-700 flex items-center gap-1.5"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Certificate</span>
                </button>
                <button
                  onClick={() => setSelectedRecord(null)}
                  className="px-4 py-2 rounded-xl bg-blue-900 hover:bg-blue-800 text-xs font-bold text-white"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Ad slot */}
      <AdPlaceholder />
    </div>
  );
};
