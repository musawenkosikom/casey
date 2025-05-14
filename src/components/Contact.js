import React, { useState } from 'react';
import ParallaxSection from './ParallaxSection';
import emailjs from '@emailjs/browser';
import { emailConfig } from '../config/emailConfig';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [error, setError] = useState(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Initialize EmailJS with your public key
      emailjs.init(emailConfig.publicKey);

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: emailConfig.toName,
        reply_to: formData.email,
        customer_name: formData.name,
        customer_email: formData.email,
        customer_subject: formData.subject,
        customer_message: formData.message
      };

      const response = await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        templateParams
      );

      if (response.status !== 200) {
        throw new Error('Failed to send email');
      }

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (err) {
      console.error('Email sending error:', err);
      setError('Failed to send message. Please try again later.');
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ParallaxSection
      bgImage="/2.jpg"
      overlayColor="rgba(26, 0, 0, 0.9)"
    >
      <section className="py-20 min-h-screen">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="artistic-heading">Contact Us</h2>
            <div className="w-20 h-1 bg-[#ff1a1a] mx-auto my-6 torn-edge rounded-full"></div>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Get in touch with the EKSPERIMENT team. Whether you're an artist looking to showcase your work, 
              a gallery interested in collaboration, or just want to learn more about what we do.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <div 
              className="backdrop-blur-sm bg-white/5 rounded-xl p-8 border border-white/10"
              data-aos="fade-up"
            >
              <h3 className="text-2xl text-white font-bold mb-6">Send a Message</h3>
              
              {submitStatus === 'success' && (
                <div className="bg-green-900/50 border border-green-500/50 text-green-200 px-4 py-3 rounded mb-6">
                  Your message has been sent successfully! We'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="bg-red-900/50 border border-red-500/50 text-red-200 px-4 py-3 rounded mb-6">
                  {error || 'Failed to send message. Please try again later.'}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-white/80 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/10 border border-white/20 rounded px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#ff1a1a] focus:border-transparent"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-white/80 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/10 border border-white/20 rounded px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#ff1a1a] focus:border-transparent"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-white/80 mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/10 border border-white/20 rounded px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#ff1a1a] focus:border-transparent"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-white/80 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full bg-white/10 border border-white/20 rounded px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#ff1a1a] focus:border-transparent"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="artistic-button w-full py-3"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-2xl text-white font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="text-[#ff1a1a] mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white text-lg font-medium mb-1">Our Location</h4>
                    <p className="text-white/70">6 Hamilton Crescent, Cape Town<br />South Africa, 7441</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-[#ff1a1a] mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white text-lg font-medium mb-1">Email Us</h4>
                    <p className="text-white/70">eksperimentstudio@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-[#ff1a1a] mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white text-lg font-medium mb-1">Call Us</h4>
                    <p className="text-white/70">(+27)68-439-8658<br />Mon-Fri, 9AM-5PM</p>
                  </div>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="mt-12">
                <h4 className="text-white text-lg font-medium mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="https://www.instagram.com/eksperiment_studio?igsh=Yjk0anYyZDYxczY2" className="text-white/70 hover:text-[#ff1a1a] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>
              
              {/* Image */}
              <div className="mt-12">
                <img 
                  src="/6.jpg" 
                  alt="EKSPERIMENT Art" 
                  className="w-full h-auto max-h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </ParallaxSection>
  );
};

export default Contact; 