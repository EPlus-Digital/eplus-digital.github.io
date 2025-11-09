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
  const hasProcessed = useRef(false);

  useEffect(() => {
    // Only process redirect once on mount
    if (hasProcessed.current) {
      return;
    }

    const search = location.search;
    
    // Check if we have the GitHub Pages redirect pattern from 404.html
    if (search && search.startsWith('?/')) {
      hasProcessed.current = true;
      
      // Extract the actual path from the query string
      // Format: /?/about -> /about
      let actualPath = search.substring(2); // Remove '?/'
      actualPath = actualPath.replace(/~and~/g, '&');
      
      // Parse path, query params, and hash
      const hashIndex = actualPath.indexOf('#');
      const ampersandIndex = actualPath.indexOf('&');
      
      let path = actualPath;
      let hash = '';
      let queryParams = '';
      
      // Determine the end of the path (before hash or query params)
      let pathEnd = actualPath.length;
      if (hashIndex !== -1) {
        pathEnd = Math.min(pathEnd, hashIndex);
        hash = actualPath.substring(hashIndex);
      }
      if (ampersandIndex !== -1 && ampersandIndex < pathEnd) {
        pathEnd = ampersandIndex;
        // Query params after & (but before # if hash exists)
        const queryStart = ampersandIndex + 1;
        const queryEnd = hashIndex !== -1 ? hashIndex : actualPath.length;
        queryParams = actualPath.substring(queryStart, queryEnd);
      }
      
      path = actualPath.substring(0, pathEnd);
      
      // Ensure path starts with /
      if (!path.startsWith('/')) {
        path = '/' + path;
      }
      
      // Build final URL
      let finalPath = path;
      if (queryParams) {
        finalPath += '?' + queryParams;
      }
      if (hash) {
        finalPath += hash;
      }
      
      // Use React Router navigate with replace to avoid adding to history
      // Small delay to ensure React Router is ready
      setTimeout(() => {
        navigate(finalPath, { replace: true });
      }, 0);
    } else {
      // Mark as processed even if no redirect needed
      hasProcessed.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array - only run once on mount

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
