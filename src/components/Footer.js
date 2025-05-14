import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white/80 relative overflow-hidden">
      {/* Footer texture overlay */}
      <div className="absolute inset-0 opacity-5 mix-blend-overlay">
        <img 
          src="/1.jpg"
          alt="Texture"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">About EKSPERIMENT</h3>
            <p className="text-white/70 leading-relaxed">
              A platform dedicated to showcasing and supporting experimental art and artists. 
              We provide a space for innovative artistic expressions and creative collaborations.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/70 hover:text-[#ff1a1a] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-white/70 hover:text-[#ff1a1a] transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/70 hover:text-[#ff1a1a] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-[#ff1a1a] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="text-white/70">
                <span className="text-[#ff1a1a] mr-2">●</span>
                6 Hamilton Crescent, Cape Town<br />
                South Africa, 7441
              </p>
              <p className="text-white/70">
                <span className="text-[#ff1a1a] mr-2">●</span>
                eksperimentstudio@gmail.com
              </p>
              <p className="text-white/70">
                <span className="text-[#ff1a1a] mr-2">●</span>
                (+27) 68-439-8658
              </p>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-white/70 hover:text-[#ff1a1a] transition-colors">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="#" className="text-white/70 hover:text-[#ff1a1a] transition-colors">
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a href="#" className="text-white/70 hover:text-[#ff1a1a] transition-colors">
                <i className="fab fa-twitter text-xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} EKSPERIMENT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;