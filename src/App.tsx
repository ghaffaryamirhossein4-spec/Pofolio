import React, { useState, useEffect } from 'react';
import { PageId, Language, ProjectItem } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AboutView } from './components/AboutView';
import { SkillsView } from './components/SkillsView';
import { ProjectsView } from './components/ProjectsView';
import { ExperienceView } from './components/ExperienceView';
import { ContactView } from './components/ContactView';
import { ResumeModal } from './components/ResumeModal';
import { ProjectSandboxModal } from './components/ProjectSandboxModal';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('about');
  const [language, setLanguage] = useState<Language>('en');
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const [cvDefaultLang, setCvDefaultLang] = useState<Language>('en');
  const [sandboxProject, setSandboxProject] = useState<ProjectItem | null>(null);

  // Sync hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (['about', 'skills', 'projects', 'experience', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
  };

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'fa' ? 'rtl' : 'ltr');
  };

  const handleOpenCvModal = (defaultLang: Language = 'en') => {
    setCvDefaultLang(defaultLang);
    setIsCvModalOpen(true);
  };

  return (
    <div className="bg-background min-h-screen flex flex-col justify-between text-on-surface antialiased selection:bg-primary-container selection:text-on-primary-container">
      {/* Fixed Sticky Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        language={language}
        onLanguageChange={handleLanguageChange}
        onOpenCvModal={() => handleOpenCvModal(language)}
      />

      {/* Main Page Body Container */}
      <main className="w-full pt-20 bg-background flex-1 max-w-[1280px] mx-auto px-margin-mobile lg:px-margin">
        {currentPage === 'about' && (
          <AboutView
            onNavigate={handleNavigate}
            language={language}
            onOpenCvModal={() => handleOpenCvModal('en')}
          />
        )}
        {currentPage === 'skills' && (
          <SkillsView
            onNavigate={handleNavigate}
            language={language}
          />
        )}
        {currentPage === 'projects' && (
          <ProjectsView
            onNavigate={handleNavigate}
            language={language}
            onOpenProjectSandbox={(project) => setSandboxProject(project)}
          />
        )}
        {currentPage === 'experience' && (
          <ExperienceView
            onNavigate={handleNavigate}
            language={language}
            onOpenCvModal={() => handleOpenCvModal('en')}
          />
        )}
        {currentPage === 'contact' && (
          <ContactView
            language={language}
            onOpenCvModal={(prefLang) => handleOpenCvModal(prefLang || language)}
          />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} language={language} />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
        defaultLang={cvDefaultLang}
      />

      {/* Interactive Project Sandbox Modal */}
      <ProjectSandboxModal
        project={sandboxProject}
        onClose={() => setSandboxProject(null)}
      />
    </div>
  );
}
