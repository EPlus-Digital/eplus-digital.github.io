import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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

  useEffect(() => {
    // Check if we're on a 404 redirect from GitHub Pages
    // GitHub Pages 404.html redirects to /?/path format
    const search = location.search;
    if (search && search.startsWith('?/')) {
      // Extract the actual path from the query string
      // Format: /?/about -> /about
      const actualPath = search.replace('?/', '/').replace(/~and~/g, '&');
      window.history.replaceState({}, '', actualPath + location.hash);
      // Force a navigation to the actual path
      window.location.replace(actualPath + location.hash);
    }
  }, [location]);

  return null;
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <RedirectHandler />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
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
