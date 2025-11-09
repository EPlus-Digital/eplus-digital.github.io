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
  const hasRedirected = useRef(false);

  useEffect(() => {
    // Only process redirect once on initial mount
    // This prevents infinite loops
    if (hasRedirected.current) {
      return;
    }

    const search = location.search;
    const pathname = location.pathname;
    
    // Check if we have the GitHub Pages redirect pattern from 404.html
    // Format: /?/about means we need to redirect to /about
    if (search && search.startsWith('?/')) {
      // Mark as redirected immediately to prevent re-processing
      hasRedirected.current = true;
      
      // Extract the actual path from the query string
      let actualPath = search.substring(2); // Remove '?/'
      actualPath = actualPath.replace(/~and~/g, '&');
      
      // Parse hash if present
      const hashIndex = actualPath.indexOf('#');
      let path = actualPath;
      let hash = '';
      
      if (hashIndex !== -1) {
        path = actualPath.substring(0, hashIndex);
        hash = actualPath.substring(hashIndex);
      }
      
      // Ensure path starts with /
      if (!path.startsWith('/')) {
        path = '/' + path;
      }
      
      // Build final path with hash
      const targetPath = path + hash;
      
      // Only redirect if we're not already on the target path
      // This prevents unnecessary redirects
      if (pathname !== path) {
        // Use React Router navigate with replace to clean the URL
        // This removes the ?/ parameter from the URL and updates to clean path
        navigate(targetPath, { replace: true });
      } else {
        // Already on the correct path, just clean the URL by removing query params
        window.history.replaceState({}, '', pathname + hash);
      }
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
