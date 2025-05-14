import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Link, useNavigate } from 'react-router-dom';
import './styles/theme.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Services from './components/Services';
import Gallery from './components/Gallery';
import ParallaxSection from './components/ParallaxSection';
import Contact from './components/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';

// ScrollToTop component - ensures page starts at the top when navigating
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

// Home page component with EKSPERIMENT platform information
const Home = () => {
  const navigate = useNavigate();

  const goToGallery = () => {
    navigate('/gallery');
  };

  return (
    <div className="gradient-dark min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16" id="hero-section">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/3.jpg"
            alt="Abstract background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-[#330000]/90 to-[#1a0000]/80 z-0"></div>
        
        {/* Background blur elements */}
        <div className="absolute top-1/4 left-1/4 w-60 h-60 bg-[#ff1a1a] opacity-10 rounded-full blur-3xl z-0"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#800000] opacity-10 rounded-full blur-3xl z-0"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content - Left Side */}
          <div className="order-1 lg:order-1 text-left">
            <div className="slide-in">
              <h1 className="artistic-heading mb-2">EKSPERIMENT</h1>
              <h2 className="text-white text-2xl mb-8">Where Art Meets Audience</h2>
            </div>

            <div className="max-w-lg mb-10 slide-in" style={{ animationDelay: '0.2s' }}>
              <p className="text-white/90 text-lg">
                A platform dedicated to showcasing the raw, unfiltered creativity of South African artists. 
                Acting as the bridge between artists and audiences, we provide a space for unique features, 
                exhibitions, and collaborations.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-8 slide-in" style={{ animationDelay: '0.3s' }}>
              <button 
                onClick={goToGallery} 
                className="artistic-button hover:scale-105 transform transition-all duration-300"
                aria-label="Go to gallery"
              >
                Explore Now
              </button>
              <Link to="/contact" className="artistic-button" style={{ background: 'rgba(255, 26, 26, 0.3)', backdropFilter: 'blur(5px)' }}>
                Contact Us
              </Link>
            </div>
          </div>

          {/* Image Content - Right Side (Desktop), Below Text (Mobile) */}
          <div className="order-0 lg:order-2 relative">
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-20 h-20 border-t-2 border-l-2 border-[#ff1a1a]/40 z-10 rounded-tl-lg"></div>
            <div className="absolute -bottom-10 -right-10 w-20 h-20 border-b-2 border-r-2 border-[#ff1a1a]/40 z-10 rounded-br-lg"></div>

            <div className="hero-image" data-aos="fade-up">
              <img 
                src="/13.jpg"
                alt="EKSPERIMENT Art"
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a0000] to-transparent opacity-40 rounded-lg"></div>
              <div className="absolute bottom-3 left-3 bg-black/50 px-2 py-1 rounded text-xs text-white backdrop-blur-sm">
                Featured Artwork
              </div>
            </div>
          </div>
        </div>

      
      </section>

      {/* Features Section with Parallax */}
      <ParallaxSection 
        bgImage="/7.jpg" 
        overlayColor="rgba(26, 0, 0, 0.85)"
        id="features-section"
      >
        <section className="py-20 relative">
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="artistic-heading mb-4">Explore & Discover</h2>
              <div className="w-20 h-1 bg-[#ff1a1a] mx-auto my-6 torn-edge rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Left Side - Image */}
              <div className="relative" data-aos="fade-right">
                <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#ff1a1a]/40 rounded-tl-lg"></div>
                <a 
                  href="https://simplebooklet.com/previewissue1artcatalog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative overflow-hidden rounded-lg shadow-2xl group cursor-pointer"
                >
                  <img 
                    src="/9.jpg" 
                    alt="Art gallery"
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a0000] to-transparent opacity-50 transition-opacity duration-500 group-hover:opacity-70"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-white text-xl font-bold mb-2">Latest Catalog</h3>
                    <p className="text-white/80 max-w-md">Get a glimpse of the talented features in our latest Artist Catalog.</p>
                    <span className="inline-block mt-3 text-white/90 text-sm border border-white/30 px-4 py-2 rounded-full backdrop-blur-sm transition-all duration-300 group-hover:bg-white/20">
                      View Catalog →
                    </span>
                  </div>
                </a>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-[#ff1a1a]/40 rounded-br-lg"></div>
              </div>
              
              {/* Right Side - Three Cards */}
              <div className="space-y-6" data-aos="fade-left">
                <div className="collage-paper p-8 transition-transform hover:-translate-y-2" data-aos="fade-up" data-aos-delay="100">
                  <h3 className="artistic-text text-xl mb-4 gradient-text">Discover Artists</h3>
                  <p className="text-black">Browse a curated selection of South Africa's most exciting emerging and established artists.</p>
                </div>
                
                <div className="collage-newspaper p-8 transition-transform hover:-translate-y-2" data-aos="fade-up" data-aos-delay="200">
                  <h3 className="artistic-text text-xl mb-4 gradient-text">Showcase Your Work</h3>
                  <p className="text-black">A platform designed to bring your art to the world. Share your vision, get featured, and reach new audiences.</p>
                </div>
                
                <div className="collage-polaroid p-8 transition-transform hover:-translate-y-2" data-aos="fade-up" data-aos-delay="300">
                  <h3 className="artistic-text text-xl mb-4 gradient-text">Upcoming Features</h3>
                  <p className="text-black">A sneak peak of the upcoming talent in South African visual art.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ParallaxSection>
      
      {/* Services Section */}
      <Services />
    </div>
  );
};

function App() {
  // Initialize AOS animation library
  useEffect(() => {
    AOS.init({
      duration: 150, // Even faster animations
      easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)', // Custom easing for smoother transitions
      once: true, // Only animate once to improve performance
      mirror: false, // Don't mirror animations when scrolling back up
      offset: 20, // Trigger earlier
      delay: 0, // No delay between animations
      anchorPlacement: 'top-bottom', // Trigger when top of element hits bottom of viewport
      disableMutationObserver: false, // Enable mutation observer for dynamic content
    });

    // Disable animations on mobile devices for better performance
    if (window.innerWidth < 768) {
      document.querySelectorAll('[data-aos]').forEach(el => {
        el.removeAttribute('data-aos');
        el.removeAttribute('data-aos-delay');
      });
    }
  }, []);

  return (
    <div className="App relative">
      {/* Global texture overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-10 mix-blend-overlay">
        <img 
          src="/1.jpg"
          alt="Texture"
          className="w-full h-full object-cover"
        />
      </div>
      
      <Navbar />
      <div className="relative z-10"> {/* Main content area */}
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App; 