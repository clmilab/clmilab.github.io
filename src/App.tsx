import { useEffect, useState } from 'react';
import { MotionConfig } from 'motion/react';
import { ThemeProvider } from './context/ThemeContext';
import { RouterProvider, useRouter } from './context/RouterContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BibtexModal } from './components/BibtexModal';
import { Publication } from './data/types';
import { HomePage } from './pages/HomePage';
import { ResearchPage } from './pages/ResearchPage';
import { PublicationsPage } from './pages/PublicationsPage';
import { PeoplePage } from './pages/PeoplePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { NewsPage } from './pages/NewsPage';
import { JoinUsPage } from './pages/JoinUsPage';
import { ContactPage } from './pages/ContactPage';

const ROUTE_TITLES: Record<string, string> = {
  '/': 'CLMI Lab – Casual Language and Multimodal Intelligence Lab',
  '/research': 'Research Areas | CLMI Lab',
  '/publications': 'Publications | CLMI Lab',
  '/people': 'People | CLMI Lab',
  '/projects': 'Projects | CLMI Lab',
  '/news': 'News & Updates | CLMI Lab',
  '/join': 'Join Us | CLMI Lab',
  '/contact': 'Contact | CLMI Lab'
};

function AppShell() {
  const { path } = useRouter();
  const [activePublication, setActivePublication] = useState<Publication | null>(null);

  useEffect(() => {
    if (path.startsWith('/research/')) {
      document.title = 'Research Direction | CLMI Lab';
    } else if (path.startsWith('/projects/')) {
      document.title = 'Project Dossier | CLMI Lab';
    } else {
      document.title = ROUTE_TITLES[path] ?? 'CLMI Lab – Casual Language and Multimodal Intelligence Lab';
    }
  }, [path]);

  const renderPage = () => {
    if (path === '/') {
      return <HomePage onInspectPublication={setActivePublication} />;
    }
    if (path === '/research') {
      return <ResearchPage onInspectPublication={setActivePublication} />;
    }
    if (path.startsWith('/research/')) {
      const slug = path.replace('/research/', '');
      return <ResearchPage slug={slug} onInspectPublication={setActivePublication} />;
    }
    if (path === '/publications') {
      return <PublicationsPage onInspectPublication={setActivePublication} />;
    }
    if (path === '/people') {
      return <PeoplePage />;
    }
    if (path === '/projects') {
      return <ProjectsPage />;
    }
    if (path.startsWith('/projects/')) {
      const slug = path.replace('/projects/', '');
      return <ProjectDetailPage slug={slug} onInspectPublication={setActivePublication} />;
    }
    if (path === '/news') {
      return <NewsPage />;
    }
    if (path === '/join') {
      return <JoinUsPage />;
    }
    if (path === '/contact') {
      return <ContactPage />;
    }
    return <HomePage onInspectPublication={setActivePublication} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFBFD] dark:bg-[#070B14] text-slate-900 dark:text-slate-100">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#0F2942] focus:text-white focus:text-xs focus:font-semibold"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" className="flex-1">
        {renderPage()}
      </main>

      <Footer />

      <BibtexModal
        publication={activePublication}
        onClose={() => setActivePublication(null)}
      />
    </div>
  );
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <ThemeProvider>
        <RouterProvider>
          <AppShell />
        </RouterProvider>
      </ThemeProvider>
    </MotionConfig>
  );
}
