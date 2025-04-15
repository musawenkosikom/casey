import React, { useEffect, useMemo } from 'react';
import ParallaxSection from './ParallaxSection';
import { Link, useNavigate } from 'react-router-dom';

const Gallery = () => {
  const navigate = useNavigate();
  const [selectedArtwork, setSelectedArtwork] = React.useState(null);
  
  // Add effect to handle body scroll locking
  useEffect(() => {
    if (selectedArtwork) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup function to ensure scroll is restored when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedArtwork]);

  // Add these styles to your existing styles
  const styles = useMemo(() => `
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    @keyframes slideUp {
      from { 
        opacity: 0;
        transform: translateY(20px);
      }
      to { 
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .animate-fadeIn {
      animation: fadeIn 0.3s ease-out;
    }
    
    .animate-slideUp {
      animation: slideUp 0.4s ease-out;
    }
  `, []);

  // Add the styles to the document
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, [styles]);

  const artworks = [
    {
      id: 1,
      title: "Angelic",
      artist: "Jacqueline Casey",
      category: "Painting",
      year: "2024",
      medium: "Acrylic on Canvas",
      dimensions: "51cm X 41cm",
      image: "/11.jpg",
      featured: true,
      description: "A seductive woman sits poised, her bright red lips and yellow hair radiating confidence and allure"
    },
    {
      id: 2,
      title: "Commission",
      artist: "Jacqueline Casey",
      category: "Painting",
      year: "2019",
      medium: "Acrylic on Canvas",
      dimensions: "1.2m X 1.6m",
      image: "/10.jpg",
      featured: true,
      description: "A young adult man gazes upward, his expression calm, against a monochromatic pink and blue backdrop"
    },
    {
      id: 3,
      title: "Hats",
      artist: "Jacqueline Casey",
      category: "Painting",
      year: "2022",
      medium: "Acrylic on Canvas",
      dimensions: "42m X 30cm",
      image: "/28.jpg",
      featured: true,
      description: " A woman proudly wears a vibrant crochet hat, her direct gaze exuding warmth and confidence."
    },
    {
      id: 4,
      title: "Lust in Confusion",
      artist: "Jacqueline Casey",
      category: "Painting",
      year: "2024",
      medium: "Acrylic on Canvas",
      dimensions: "51cm X 41cm",
      image: "/12.jpg",
      featured: true,
      description: "Two women, lost in thought, sit amidst nature, their lush hair and intricate details inviting the viewer to ponder their story"
    },
    {
      id: 5,
      title: "Woman in Pink and Blue 1",
      artist: "Jacqueline Casey",
      category: "Painting",
      year: "2019",
      medium: "Acrylic on Canvas",
      dimensions: "35cm X 40cm",
      image: "/14.jpg",
      featured: true,
      description: "A contemplative woman gazes directly at the viewer, set against a vibrant pink and blue backdrop"
    },
    {
      id: 6,
      title: "Elephants",
      artist: "Jacqueline Casey",
      category: "Drawing",
      year: "2019",
      medium: "Graphite on Cartridge Paper",
      dimensions: "A1",
      image: "/16.jpg",
      featured: true,
      description: "Two elephants share a tender hug, their trunks entwined in a heartwarming display of affection"
    },
    {
      id: 7,
      title: "Women in Black & White",
      artist: "Jacqueline Casey",
      category: "Painting",
      year: "2019",
      medium: "Acrylic on Canvas",
      dimensions: "1.8m X 800cm",
      image: "/15.jpg",
      featured: true,
      description: "A confident woman stares directly ahead, her Afro a vibrant tangle of black paint, set against a stark white background"
    },
    {
      id: 8,
      title: "Woman in Pink and Blue 2",
      artist: "Jacqueline Casey",
      category: "Painting",
      year: "2019",
      medium: "Acrylic on Canvas",
      dimensions: "35cm X 40cm",
      image: "/17.jpg",
      featured: true,
      description: "A serene woman contemplates, her hands cupped in a gesture of introspection"
    },
    {
      id: 9,
      title: "GINA",
      artist: "Jacqueline Casey",
      category: "Painting",
      year: "2022",
      medium: "Acrylic on Canvas",
      dimensions: "27cm X 19cm",
      image: "/27.jpg",
      featured: true,
      description: "An adolescent girl cradles a cup with lush greenery, her gentle demeanor a soothing balm"
    },
    {
      id: 10,
      title: "Simple Things 1",
      artist: "Jacqueline Casey",
      category: "Mixed Media",
      year: "2022",
      medium: "Mixed media on Cartridge Paper",
      dimensions: "27cm X 19cm",
      image: "/24.jpg",
      featured: true,
      description: "A serene figure merges with nature, branches sprouting from their neck, as they sit in contemplative repose"
    },
    {
      id: 11,
      title: "Simple Things 2",
      artist: "Jacqueline Casey",
      category: "Mixed Media",
      year: "2022",
      medium: "Mixed media on Cartridge Paper",
      dimensions: "27cm X 19cm",
      image: "/22.jpg",
      featured: true,
      description: "A woman stands, connected to a tree stump, her body a fluid extension of the natural world"
    },
    {
      id: 12,
      title: "Beauty in the Simple Things",
      artist: "Jacqueline Casey",
      category: "Drawing",
      year: "2022",
      medium: "Graphite on Cartridge Paper",
      dimensions: "27cm X 19cm",
      image: "/23.jpg",
      featured: true,
      description: "A male ballet dancer balances, branches sprouting from his arm, as he becomes one with the surrounding flora"
    },
    {
      id: 13,
      title: "Family Ties",
      artist: "Jacqueline Casey",
      category: "Mixed Media",
      year: "2023",
      medium: "Mixed media on Canvas",
      image: "/19.jpg",
      featured: true,
      description: "Two young boys stand together, arms entwined, their faces vague, yet their bond palpable"
    },
    {
      id: 14,
      title: "Raw",
      artist: "Jacqueline Casey",
      category: "Painting",
      year: "2022",
      medium: "Acrylic on Canvas",
      dimensions: "26cm X 22cm",
      image: "/21.jpg",
      featured: true,
      description: "Vibrant, abstract colors clash and merge, evoking a primal, emotional response"
    },
    {
      id: 15,
      title: "Backwood Mood",
      artist: "Jacqueline Casey",
      category: "Painting",
      year: "2025",
      medium: "Acrylic on Canvas",
      dimensions: "34cm X 30cm",
      image: "/13.jpg",
      featured: true,
      description: "A relaxed figure ashes a smoke, surrounded by vibrant flora and fauna, exuding a sense of tranquil contentment"
    },
    {
      id: 16,
      title: "Watercolour Experimental (2/28)",
      artist: "Jacqueline Casey",
      category: "Mixed Media",
      year: "2024",
      medium: "Watercolour and Ink on Mounting Board",
      dimensions: "13,5cm X 19cm",
      image: "/20.jpg",
      featured: true,
      description: "A figure lounges under a tree, surrounded by lush greenery, as the sun sets over a pink ocean"
    },
    {
      id: 17,
      title: "Watercolour Experimental (1/28)",
      artist: "Jacqueline Casey",
      category: "Mixed Media",
      year: "2024",
      medium: "Watercolour and Ink on Mounting Board",
      dimensions: "13,5cm X 19cm",
      image: "/26.jpg",
      featured: true,
      description: "A woman sits, introspective, amidst the warmth and comfort of her home, surrounded by vibrant, organic textures"
    },
    {
      id: 18,
      title: "Yellow Mama",
      artist: "Jacqueline Casey",
      category: "Painting",
      year: "2022",
      medium: "Acrylic on Canvas",
      dimensions: "42cm x 30cm",
      image: "/18.jpg",
      featured: true,
      description: "An elderly woman sits, serene, surrounded by the comforting familiarity of home and nature"
    }
  ];

  const handleInquiry = (artwork) => {
    navigate('/contact', { 
      state: { 
        subject: `Inquiry about "${artwork.title}"`,
        message: `I am interested in the artwork "${artwork.title}" (${artwork.year}) - ${artwork.medium}, ${artwork.dimensions}.`
      } 
    });
  };

  return (
    <>
      <ParallaxSection
        bgImage="/3.jpg"
        overlayColor="rgba(26, 0, 0, 0.9)"
      >
        <section className="py-20 min-h-screen">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="artistic-heading">Featured Artworks</h2>
              <div className="w-20 h-1 bg-[#ff1a1a] mx-auto my-6 torn-edge rounded-full"></div>
              <p className="text-white/80 max-w-2xl mx-auto mb-8">
                EKSPERIMENT offers a range of services to facilitate your art journey, from purchasing original artwork to showcasing emerging talent.
              </p>
            </div>
            
            {/* Gallery Grid with Parallax Items */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {artworks.map(artwork => (
                <div 
                  key={artwork.id} 
                  className="group"
                  data-aos="fade-up" 
                  data-aos-delay={artwork.id * 100}
                >
                  <div className="relative overflow-hidden rounded-xl">
                    <img 
                      src={artwork.image} 
                      alt={artwork.title}
                      className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {artwork.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-[#ff1a1a] text-white text-xs px-3 py-1 rounded-full">
                          Featured
                        </span>
                      </div>
                    )}
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a0000] to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <h3 className="text-white text-xl font-bold">{artwork.title}</h3>
                      <p className="text-white/80">{artwork.artist}</p>
                      <span className="inline-block mt-2 text-xs bg-white/20 text-white px-2 py-1 rounded-full">
                        {artwork.category}
                      </span>
                      <button 
                        className="mt-4 px-4 py-2 bg-[#ff1a1a] text-white rounded-full text-sm hover:bg-[#cc0000] transition-colors"
                        onClick={() => setSelectedArtwork(artwork)}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Call to Action */}
            <div className="text-center mt-16">
              <p className="text-white/80 mb-6">
                Are you a South African artist interested in showcasing your work?
              </p>
              <Link to="/contact" className="artistic-button">Contact Us</Link>
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* Modal */}
      {selectedArtwork && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedArtwork(null)}
          ></div>
          <div className="relative z-10 bg-white/95 backdrop-blur-md rounded-2xl overflow-hidden max-w-3xl w-full shadow-2xl transform animate-slideUp">
            <button 
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-black/10 backdrop-blur-sm rounded-full text-white hover:bg-black/20 transition-all duration-300 z-20"
              onClick={() => setSelectedArtwork(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="relative h-[300px] md:h-[450px] overflow-hidden">
                <img 
                  src={selectedArtwork.image} 
                  alt={selectedArtwork.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
                {selectedArtwork.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#ff1a1a] text-white text-sm px-3 py-1 rounded-full shadow-lg">
                      Featured
                    </span>
                  </div>
                )}
              </div>
              <div className="p-6 md:p-8 flex flex-col h-full bg-gradient-to-br from-white/80 to-white/50">
                <div className="mb-auto">
                  <span className="inline-block mb-3 text-sm bg-black/5 text-gray-600 px-3 py-1 rounded-full">
                    {selectedArtwork.category}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 font-serif">{selectedArtwork.title}</h3>
                  <p className="text-gray-600 text-base mb-4">by <span className="font-medium text-gray-800">{selectedArtwork.artist}</span></p>
                  <div className="w-12 h-1 bg-[#ff1a1a] mb-4 rounded-full"></div>
                  <p className="text-gray-700 leading-relaxed">{selectedArtwork.description}</p>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <button 
                    onClick={() => handleInquiry(selectedArtwork)}
                    className="w-full bg-[#ff1a1a] hover:bg-[#cc0000] text-white py-3 px-6 rounded-xl font-medium transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg"
                  >
                    Inquire About This Piece
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery; 