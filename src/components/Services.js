import React from 'react';
import ParallaxSection from './ParallaxSection';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Original Artwork & Prints",
      description: "Purchase unique, original artwork or high-quality prints from our curated selection of emerging South African artists.",
      image: "/1.jpg",
    },
    {
      id: 2,
      title: "Commissioned Art",
      description: "Collaborate with our talented artists to create a custom, commissioned piece tailored to your specific needs and preferences.",
      image: "/2.jpg",
    },
    {
      id: 3,
      title: "Artist Feature Program",
      description: "Gain exposure and showcase your work to a wider audience through our artist feature program, highlight emerging talent in South African.",
      image: "/3.jpg",
    }
  ];

  return (
    <div className="relative">
      {/* Background texture */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/1.jpg" 
          alt="Textured background"
          className="w-full h-full object-cover opacity-5"
        />
      </div>
      
      <ParallaxSection
        bgImage="/2.jpg"
        overlayColor="rgba(26, 0, 0, 0.92)"
      >
        <section className="py-20 relative">
          {/* Background elements - reduced since parallax handles the background */}
          <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-[#ff1a1a] opacity-5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-[#800000] opacity-5 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="artistic-heading mb-4">Our Services</h2>
              <div className="w-20 h-1 bg-[#ff1a1a] mx-auto my-6 torn-edge rounded-full"></div>
              <p className="text-white/80 max-w-2xl mx-auto">
              EKSPERIMENT offers a range of services to facilitate your art journey, from purchasing original artwork to showcasing emerging talent.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {services.map((service, index) => (
                <div 
                  key={service.id} 
                  className="group"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="relative overflow-hidden rounded-xl mb-6">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a0000] to-transparent opacity-70"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <div className="inline-block px-3 py-1 mb-2 text-xs bg-[#ff1a1a] text-white uppercase tracking-wider rounded-full">
                        Service {service.id}
                      </div>
                      <h3 className="text-xl text-white font-bold">{service.title}</h3>
                    </div>
                  </div>
                  <p className="text-white/80">{service.description}</p>
                  <Link to="/contact" className="mt-4 artistic-button py-2 px-4 inline-block">Learn More</Link>
                </div>
              ))}
            </div>

            {/* Additional Service Information */}
            <div 
              className="mt-20 backdrop-blur-sm bg-white/5 rounded-xl p-8 border border-white/10"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Custom Services for Artists</h3>
                  <p className="text-white/80 mb-4">
                    Beyond our standard offerings, EKSPERIMENT provides customized services tailored to each artist's unique needs and goals.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start" data-aos="fade-right" data-aos-delay="200">
                      <div className="text-[#ff1a1a] mr-2">●</div>
                      <span className="text-white/80">Portfolio development and optimization</span>
                    </li>
                    <li className="flex items-start" data-aos="fade-right" data-aos-delay="300">
                      <div className="text-[#ff1a1a] mr-2">●</div>
                      <span className="text-white/80">Marketing strategy and brand development</span>
                    </li>
                    <li className="flex items-start" data-aos="fade-right" data-aos-delay="400">
                      <div className="text-[#ff1a1a] mr-2">●</div>
                      <span className="text-white/80">Connection with galleries and collectors</span>
                    </li>
                    <li className="flex items-start" data-aos="fade-right" data-aos-delay="500">
                      <div className="text-[#ff1a1a] mr-2">●</div>
                      <span className="text-white/80">Grant application assistance</span>
                    </li>
                  </ul>
                  <Link to="/contact" className="mt-6 artistic-button inline-block" data-aos="fade-up" data-aos-delay="600">Request Consultation</Link>
                </div>
                <div 
                  data-aos="fade-left"
                  data-aos-delay="200"
                >
                  <img 
                    src="/25.jpg" 
                    alt="Artist Consultation" 
                    className="w-full h-80 object-cover"
                  />
                  <p className="text-center text-black mt-2 text-sm">Artist consultation session at EKSPERIMENT</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ParallaxSection>
    </div>
  );
};

export default Services; 