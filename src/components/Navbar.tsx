import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  ChevronDown,
  GraduationCap,
  Sparkles,
  BookOpen,
  Building2,
  Users,
  Bell,
  Image as ImageIcon,
  PhoneCall,
  Search,
  Award,
} from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';
import { useApp } from '../context/AppContext';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { setIsSearchOpen } = useApp();
  const location = useLocation();

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    {
      name: 'About Us',
      path: '/about',
      dropdown: [
        { name: 'History & Heritage', path: '/about#heritage', desc: 'Over 5 decades of moral & scholastic excellence' },
        { name: 'Vision, Mission & Motto', path: '/about#vision', desc: 'In Veritate et Sapientia' },
        { name: "Principal's Desk", path: '/about#principal', desc: 'Message from Dr. Evelyn R. Vance' },
        { name: 'Faculty & Leadership', path: '/about#faculty', desc: 'Dedicated mentors and administration' },
        { name: 'School Crest & Anthem', path: '/about#crest', desc: 'Symbolism of our emblem' },
      ],
    },
    {
      name: 'Academics',
      path: '/academics',
      dropdown: [
        { name: 'Curriculum & CBSE Framework', path: '/academics#curriculum', desc: 'Holistic NEP 2020 aligned pedagogy' },
        { name: 'Primary Wing (K-V)', path: '/academics#primary', desc: 'Foundational learning and inquiry' },
        { name: 'Middle Wing (VI-VIII)', path: '/academics#middle', desc: 'Conceptual deepening & STEAM' },
        { name: 'Senior Wing & Streams (IX-XII)', path: '/academics#senior', desc: 'Science, Commerce & Humanities' },
        { name: 'Academic Calendar', path: '/academics#calendar', desc: 'Schedules, terms & examinations' },
      ],
    },
    {
      name: 'Admissions',
      path: '/admissions',
      dropdown: [
        { name: 'Admission Guidelines 2025-26', path: '/admissions#guidelines', desc: 'Eligibility, schedule & point criteria' },
        { name: 'Online Registration Form', path: '/admissions#form', desc: 'Apply online with instant preview' },
        { name: 'Fee Structure & Schedule', path: '/admissions#fees', desc: 'Transparent fee schedule & portal' },
        { name: 'Transfer Certificate (TC)', path: '/transfer-certificate', desc: 'Search and verify student TC records' },
        { name: 'Admissions FAQ', path: '/admissions#faq', desc: 'Common queries on enrollment' },
      ],
    },
    {
      name: 'Campus',
      path: '/campus',
      dropdown: [
        { name: 'Smart Classrooms', path: '/campus#smart-classrooms', desc: 'Digitally integrated learning' },
        { name: 'Science & Robotics Labs', path: '/campus#science-labs', desc: 'Cutting-edge experimental research' },
        { name: 'Central Knowledge Library', path: '/campus#library', desc: '45,000+ volumes & digital media' },
        { name: 'Sports & Aquatic Arena', path: '/campus#sports-complex', desc: 'Olympic turf, track & pool' },
        { name: 'Auditorium & Arts Studio', path: '/campus#auditorium', desc: '1,200 seat acoustic auditorium' },
      ],
    },
    {
      name: 'Student Life',
      path: '/student-life',
      dropdown: [
        { name: 'Four House System', path: '/student-life#houses', desc: 'Ruby, Sapphire, Emerald, Topaz' },
        { name: 'Student Council & Leadership', path: '/student-life#council', desc: 'Prefectorial board & captains' },
        { name: 'Clubs & Societies', path: '/student-life#clubs', desc: 'MUN, Robotics, Eco Club, Arts' },
        { name: 'Social Outreach & Service', path: '/student-life#outreach', desc: 'Community stewardship projects' },
      ],
    },
    { name: 'Circulars', path: '/circulars' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200">
      {/* Main Logo & Title Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo & School Crest */}
          <Link to="/" className="flex items-center gap-3.5 group">
            <div className="relative flex items-center justify-center w-13 h-13 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-blue-900 via-blue-950 to-slate-900 border-2 border-amber-500 shadow-md p-1.5 transition-transform duration-300 group-hover:scale-105">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* Shield background */}
                <path
                  d="M50 8 L88 24 L88 58 C88 78 50 94 50 94 C50 94 12 78 12 58 L12 24 Z"
                  fill="#0e2038"
                  stroke="#eab308"
                  strokeWidth="3"
                />
                {/* Cross and Flame */}
                <path d="M50 20 L50 68" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
                <path d="M32 38 L68 38" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
                {/* Book of wisdom */}
                <path d="M30 72 Q50 66 70 72 L70 82 Q50 76 30 82 Z" fill="#eab308" opacity="0.9" />
                {/* Star / Torch */}
                <circle cx="50" cy="22" r="4.5" fill="#f59e0b" />
              </svg>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 group-hover:text-blue-950 transition-colors">
                  {SCHOOL_INFO.name}
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-300">
                  ESTD. {SCHOOL_INFO.foundedYear}
                </span>
              </div>
              <span className="text-xs sm:text-sm font-serif-body text-slate-600 font-medium tracking-wide">
                New Delhi • {SCHOOL_INFO.motto}
              </span>
              <span className="text-[11px] text-slate-500 hidden md:block">
                {SCHOOL_INFO.affiliation}
              </span>
            </div>
          </Link>

          {/* Right Header Badges & CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="text-right border-r border-slate-200 pr-4">
              <div className="text-xs font-semibold text-slate-800 flex items-center justify-end gap-1">
                <Award className="w-3.5 h-3.5 text-amber-500" />
                <span>Admissions 2025-26</span>
              </div>
              <span className="text-[11px] text-emerald-600 font-medium">Pre-School to Grade XI Open</span>
            </div>

            <Link
              to="/admissions"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 px-4 py-2.5 text-xs font-bold text-slate-950 shadow-md hover:from-amber-400 hover:to-amber-500 hover:shadow-lg transition-all transform active:scale-95"
            >
              <Sparkles className="w-4 h-4" />
              <span>Apply Online</span>
            </Link>
          </div>

          {/* Mobile Menu & Search Buttons */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100"
              aria-label="Search"
            >
              <Search className="w-5 h-5 text-slate-700" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Main Navigation Bar */}
      <nav className="hidden lg:block bg-blue-950 text-white shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex items-center justify-between">
            {navLinks.map((link) => {
              const hasDropdown = link.dropdown && link.dropdown.length > 0;
              return (
                <li
                  key={link.name}
                  className="relative group"
                  onMouseEnter={() => hasDropdown && setActiveDropdown(link.name)}
                  onMouseLeave={() => hasDropdown && setActiveDropdown(null)}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `flex items-center gap-1 py-3 px-3.5 text-sm font-semibold tracking-wide transition-colors ${
                        isActive
                          ? 'text-amber-400 bg-blue-900/60'
                          : 'text-slate-200 hover:text-amber-300 hover:bg-blue-900/40'
                      }`
                    }
                  >
                    <span>{link.name}</span>
                    {hasDropdown && <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform" />}
                  </NavLink>

                  {/* Dropdown Menu */}
                  {hasDropdown && (
                    <div
                      className={`absolute top-full left-0 w-72 bg-white text-slate-900 rounded-b-xl shadow-2xl border border-slate-200 py-2 z-50 transition-all duration-200 origin-top ${
                        activeDropdown === link.name ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
                      }`}
                    >
                      {link.dropdown?.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          className="block px-4 py-2.5 hover:bg-amber-50 hover:text-blue-950 border-b border-slate-100 last:border-0 transition-colors group/item"
                        >
                          <div className="text-xs font-bold text-slate-900 group-hover/item:text-blue-900">
                            {sub.name}
                          </div>
                          <div className="text-[11px] text-slate-500 line-clamp-1">
                            {sub.desc}
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              );
            })}

            {/* Quick Action in desktop nav */}
            <li>
              <Link
                to="/admissions#form"
                className="inline-flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold px-3 py-1.5 rounded my-1.5 transition-colors"
              >
                <span>Admission Enquiry</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white shadow-xl max-h-[85vh] overflow-y-auto">
          <div className="p-4 space-y-2">
            {navLinks.map((link) => {
              const hasDropdown = link.dropdown && link.dropdown.length > 0;
              const isDropdownOpen = activeDropdown === link.name;
              return (
                <div key={link.name} className="border-b border-slate-100 pb-2">
                  <div className="flex items-center justify-between">
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `text-sm font-bold py-2 ${
                          isActive ? 'text-blue-900' : 'text-slate-800 hover:text-amber-600'
                        }`
                      }
                      onClick={() => !hasDropdown && setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </NavLink>
                    {hasDropdown && (
                      <button
                        onClick={() => setActiveDropdown(isDropdownOpen ? null : link.name)}
                        className="p-2 text-slate-500"
                        aria-label="Toggle Submenu"
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                        />
                      </button>
                    )}
                  </div>

                  {hasDropdown && isDropdownOpen && (
                    <div className="pl-4 mt-1 space-y-1.5 bg-slate-50 rounded-lg p-2">
                      {link.dropdown?.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-xs font-medium text-slate-700 py-1.5 hover:text-blue-900"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            <div className="pt-4 flex flex-col gap-2">
              <Link
                to="/admissions"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-lg bg-amber-500 text-slate-950 font-bold text-sm shadow hover:bg-amber-400"
              >
                Apply Online 2025-26
              </Link>
              <Link
                to="/transfer-certificate"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2 rounded-lg border border-slate-300 text-slate-700 font-medium text-xs hover:bg-slate-50"
              >
                Transfer Certificate (TC) Verification
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
