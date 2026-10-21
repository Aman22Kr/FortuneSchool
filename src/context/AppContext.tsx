import React, { createContext, useContext, useState, useEffect } from 'react';
import { NOTICES, NoticeItem, GalleryItem } from '../data/schoolData';

export interface AdmissionFormData {
  studentName: string;
  dob: string;
  gender: string;
  appliedGrade: string;
  parentName: string;
  email: string;
  phone: string;
  address: string;
  pincode: string;
  previousSchool: string;
  category: string;
  siblingEnrolled: boolean;
  notes?: string;
  applicationNo?: string;
  submittedAt?: string;
}

interface AppContextType {
  // Bookmarks
  bookmarkedNoticeIds: string[];
  toggleBookmarkNotice: (id: string) => void;
  isNoticeBookmarked: (id: string) => boolean;
  
  // Font Size
  fontSize: 'normal' | 'large' | 'xlarge';
  setFontSize: (size: 'normal' | 'large' | 'xlarge') => void;
  
  // High contrast mode
  highContrast: boolean;
  setHighContrast: (val: boolean) => void;

  // Search Modal
  isSearchOpen: boolean;
  setIsSearchOpen: (val: boolean) => void;

  // Lightbox Modal
  activeGalleryItem: GalleryItem | null;
  setActiveGalleryItem: (item: GalleryItem | null) => void;

  // Admission draft & submissions
  admissionDraft: AdmissionFormData;
  updateAdmissionDraft: (field: string, value: any) => void;
  resetAdmissionDraft: () => void;
  submittedApplications: AdmissionFormData[];
  submitAdmissionApplication: (data: AdmissionFormData) => string;

  // Contact messages
  contactSubmissions: any[];
  submitContactForm: (msg: any) => void;

  // Banner announcement dismissed
  bannerDismissed: boolean;
  dismissBanner: () => void;
}

const defaultAdmissionDraft: AdmissionFormData = {
  studentName: '',
  dob: '',
  gender: 'Female',
  appliedGrade: 'Pre-School (Nursery)',
  parentName: '',
  email: '',
  phone: '',
  address: '',
  pincode: '',
  previousSchool: '',
  category: 'General',
  siblingEnrolled: false,
  notes: '',
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // 1. Bookmarked Notices
  const [bookmarkedNoticeIds, setBookmarkedNoticeIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('fs_bookmarked_notices');
      return saved ? JSON.parse(saved) : ['cir-2025-01'];
    } catch {
      return ['cir-2025-01'];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('fs_bookmarked_notices', JSON.stringify(bookmarkedNoticeIds));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }, [bookmarkedNoticeIds]);

  const toggleBookmarkNotice = (id: string) => {
    setBookmarkedNoticeIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const isNoticeBookmarked = (id: string) => bookmarkedNoticeIds.includes(id);

  // 2. Font Size
  const [fontSize, setFontSizeState] = useState<'normal' | 'large' | 'xlarge'>(() => {
    try {
      return (localStorage.getItem('fs_font_size') as 'normal' | 'large' | 'xlarge') || 'normal';
    } catch {
      return 'normal';
    }
  });

  const setFontSize = (size: 'normal' | 'large' | 'xlarge') => {
    setFontSizeState(size);
    try {
      localStorage.setItem('fs_font_size', size);
    } catch (e) {
      console.warn(e);
    }
  };

  // 3. High Contrast
  const [highContrast, setHighContrastState] = useState<boolean>(() => {
    try {
      return localStorage.getItem('fs_high_contrast') === 'true';
    } catch {
      return false;
    }
  });

  const setHighContrast = (val: boolean) => {
    setHighContrastState(val);
    try {
      localStorage.setItem('fs_high_contrast', String(val));
    } catch (e) {
      console.warn(e);
    }
  };

  // 4. Modals
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeGalleryItem, setActiveGalleryItem] = useState<GalleryItem | null>(null);

  // 5. Admission Draft
  const [admissionDraft, setAdmissionDraft] = useState<AdmissionFormData>(() => {
    try {
      const saved = localStorage.getItem('fs_admission_draft');
      return saved ? JSON.parse(saved) : defaultAdmissionDraft;
    } catch {
      return defaultAdmissionDraft;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('fs_admission_draft', JSON.stringify(admissionDraft));
    } catch (e) {
      console.warn(e);
    }
  }, [admissionDraft]);

  const updateAdmissionDraft = (field: string, value: any) => {
    setAdmissionDraft((prev) => ({ ...prev, [field]: value }));
  };

  const resetAdmissionDraft = () => {
    setAdmissionDraft(defaultAdmissionDraft);
    try {
      localStorage.removeItem('fs_admission_draft');
    } catch (e) {
      console.warn(e);
    }
  };

  // 6. Submitted Applications
  const [submittedApplications, setSubmittedApplications] = useState<AdmissionFormData[]>(() => {
    try {
      const saved = localStorage.getItem('fs_submitted_applications');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const submitAdmissionApplication = (data: AdmissionFormData): string => {
    const appNo = `FS-2025-${Math.floor(100000 + Math.random() * 900000)}`;
    const newRecord: AdmissionFormData = {
      ...data,
      applicationNo: appNo,
      submittedAt: new Date().toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
    };
    const updated = [newRecord, ...submittedApplications];
    setSubmittedApplications(updated);
    try {
      localStorage.setItem('fs_submitted_applications', JSON.stringify(updated));
    } catch (e) {
      console.warn(e);
    }
    resetAdmissionDraft();
    return appNo;
  };

  // 7. Contact messages
  const [contactSubmissions, setContactSubmissions] = useState<any[]>(() => {
    try {
      const saved = localStorage.getItem('fs_contact_msgs');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const submitContactForm = (msg: any) => {
    const updated = [{ ...msg, id: Date.now(), date: new Date().toISOString() }, ...contactSubmissions];
    setContactSubmissions(updated);
    try {
      localStorage.setItem('fs_contact_msgs', JSON.stringify(updated));
    } catch (e) {
      console.warn(e);
    }
  };

  // 8. Announcement banner dismissed
  const [bannerDismissed, setBannerDismissed] = useState<boolean>(() => {
    try {
      return localStorage.getItem('fs_banner_dismissed') === 'true';
    } catch {
      return false;
    }
  });

  const dismissBanner = () => {
    setBannerDismissed(true);
    try {
      localStorage.setItem('fs_banner_dismissed', 'true');
    } catch (e) {
      console.warn(e);
    }
  };

  return (
    <AppContext.Provider
      value={{
        bookmarkedNoticeIds,
        toggleBookmarkNotice,
        isNoticeBookmarked,
        fontSize,
        setFontSize,
        highContrast,
        setHighContrast,
        isSearchOpen,
        setIsSearchOpen,
        activeGalleryItem,
        setActiveGalleryItem,
        admissionDraft,
        updateAdmissionDraft,
        resetAdmissionDraft,
        submittedApplications,
        submitAdmissionApplication,
        contactSubmissions,
        submitContactForm,
        bannerDismissed,
        dismissBanner,
      }}
    >
      <div
        className={`min-h-screen transition-all ${
          fontSize === 'large'
            ? 'text-lg [&_h1]:text-4xl [&_h2]:text-3xl'
            : fontSize === 'xlarge'
            ? 'text-xl [&_h1]:text-5xl [&_h2]:text-4xl'
            : 'text-base'
        } ${highContrast ? 'contrast-125 filter bg-slate-900 text-slate-100' : ''}`}
      >
        {children}
      </div>
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within an AppProvider');
  return ctx;
};
