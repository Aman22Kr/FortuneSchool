import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { NoticeTicker } from './components/NoticeTicker';
import { Footer } from './components/Footer';
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { LightboxModal } from './components/LightboxModal';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { AcademicsPage } from './pages/AcademicsPage';
import { AdmissionsPage } from './pages/AdmissionsPage';
import { CampusPage } from './pages/CampusPage';
import { StudentLifePage } from './pages/StudentLifePage';
import { CircularsPage } from './pages/CircularsPage';
import { CircularDetailPage } from './pages/CircularDetailPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { TransferCertificatePage } from './pages/TransferCertificatePage';
import { MandatoryDisclosurePage } from './pages/MandatoryDisclosurePage';
import { NotFoundPage } from './pages/NotFoundPage';

// Scroll to top on navigation helper
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, hash]);

  return null;
};

export default function App() {
  return (
    <HashRouter>
      <AppProvider>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800">
          <TopBar />
          <Navbar />
          <NoticeTicker />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/academics" element={<AcademicsPage />} />
              <Route path="/admissions" element={<AdmissionsPage />} />
              <Route path="/campus" element={<CampusPage />} />
              <Route path="/student-life" element={<StudentLifePage />} />
              <Route path="/circulars" element={<CircularsPage />} />
              <Route path="/circulars/:id" element={<CircularDetailPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/transfer-certificate" element={<TransferCertificatePage />} />
              <Route path="/mandatory-disclosure" element={<MandatoryDisclosurePage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
          <GlobalSearchModal />
          <LightboxModal />
        </div>
      </AppProvider>
    </HashRouter>
  );
}
