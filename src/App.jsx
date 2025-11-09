import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Handle GitHub Pages 404.html redirect
function RedirectHandler() {
  const location = useLocation();
  const navigate = useNavigate();
  const redirectProcessed = useRef(false);

  useEffect(() => {
    // Only process redirect on initial mount or if search changes from initial
    // This prevents infinite loops
    const currentSearch = location.search;
    
    // Skip if we've already processed a redirect
    if (redirectProcessed.current) {
      // Only clean up URL if there are redirect markers but we've already processed
      if (currentSearch && (currentSearch.includes('_redirected') || currentSearch.includes('/'))) {
        const cleanUrl = location.pathname + (location.hash || '');
        if (window.location.href !== window.location.origin + cleanUrl) {
          window.history.replaceState({}, '', cleanUrl);
        }
      }
      return;
    }

    // Process redirect only if search contains redirect pattern
    if (currentSearch && currentSearch.includes('/')) {
      // Mark as processed immediately
      redirectProcessed.current = true;
      
      // Extract path from query string format: ?/path&_redirected=1
      let queryString = currentSearch.substring(1); // Remove '?'
      let actualPath = '';
      let hash = location.hash || '';
      
      // Parse query string
      if (queryString.startsWith('/')) {
        // Split by & to separate path from _redirected parameter
        const parts = queryString.split('&');
        actualPath = parts[0].substring(1); // Remove leading '/'
        
        // Handle hash if present in path
        const hashIndex = actualPath.indexOf('#');
        if (hashIndex !== -1) {
          hash = actualPath.substring(hashIndex);
          actualPath = actualPath.substring(0, hashIndex);
        }
      }
      
      // Restore & characters that were encoded as ~and~
      actualPath = actualPath.replace(/~and~/g, '&');
      
      // Ensure path starts with /
      if (!actualPath.startsWith('/')) {
        actualPath = '/' + actualPath;
      }
      
      // Build clean target path
      const targetPath = actualPath + hash;
      
      // Clear sessionStorage redirect flag and counter
      // This prevents future redirects from being blocked
      try {
        sessionStorage.removeItem('github-pages-redirect');
      } catch (e) {
        // Ignore sessionStorage errors
      }
      
      // Navigate to clean path immediately
      // This removes the query parameters and sets the correct route
      navigate(targetPath, { replace: true });
      
      return;
    }
    
    // If no redirect pattern but search has redirect markers, clean up
    if (currentSearch && currentSearch.includes('_redirected')) {
      redirectProcessed.current = true;
      const cleanUrl = location.pathname + (location.hash || '');
      window.history.replaceState({}, '', cleanUrl);
    }
  }, []); // Empty dependency - only run once on mount

  return null;
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <RedirectHandler />
      <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
        <Header />
        <main className="flex-grow w-full overflow-x-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <AppRoutes />
      </Router>
    </LanguageProvider>
  );
}

export default App;
