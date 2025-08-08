import React, { memo, useEffect, useState } from 'react';
import './App.css';
import logo from './assets/Numero/PNG/Numero 4@4x.png';
import heroBg from './assets/Hero/1 4x.jpg';
import service1 from './assets/Hero/1 4x.jpg';
import service2 from './assets/Hero/1 4x.jpg';
import blog1 from './assets/Numero/JPG/Numero 3@4x-100.jpg';
import blog2 from './assets/Numero/JPG/Numero 4@4x-100.jpg';

function App() {
  const [isVisible, setIsVisible] = useState({});
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: "Priya Sharma",
      text: "NumeroMantra helped me choose the perfect business name. My startup has grown 300% in just 6 months!",
      rating: 5,
      location: "Mumbai"
    },
    {
      name: "Rajesh Kumar",
      text: "After analyzing my date of birth, I discovered my true life path. Everything makes sense now!",
      rating: 5,
      location: "Delhi"
    },
    {
      name: "Anita Patel",
      text: "The mobile number analysis was spot on. Changed my number and immediately felt positive energy!",
      rating: 5,
      location: "Bangalore"
    }
  ];

  const numerologyFacts = [
    { number: "1", meaning: "Leadership & Independence", color: "text-red-500" },
    { number: "2", meaning: "Cooperation & Balance", color: "text-orange-500" },
    { number: "3", meaning: "Creativity & Expression", color: "text-yellow-500" },
    { number: "4", meaning: "Stability & Hard Work", color: "text-green-500" },
    { number: "5", meaning: "Freedom & Adventure", color: "text-blue-500" },
    { number: "6", meaning: "Love & Responsibility", color: "text-indigo-500" },
    { number: "7", meaning: "Spirituality & Wisdom", color: "text-purple-500" },
    { number: "8", meaning: "Material Success & Power", color: "text-pink-500" },
    { number: "9", meaning: "Universal Love & Service", color: "text-teal-500" }
  ];

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="bg-gradient-to-b from-[#fff4e6] to-[#f0e6ff] min-h-screen text-gray-800 font-sans overflow-x-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="mystical-bg">
          <div className="floating-number">1</div>
          <div className="floating-number">7</div>
          <div className="floating-number">9</div>
          <div className="floating-symbol">∞</div>
          <div className="floating-symbol">◊</div>
          <div className="floating-symbol">✦</div>
        </div>
      </div>

      <header className="bg-white/95 backdrop-blur-md shadow-xl fixed top-0 left-0 right-0 z-50 border-b border-purple-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 md:py-0 ">
          <div className="flex justify-between items-center  sm:py-4">
            <div className="flex items-center space-x-2 sm:space-x-3 animate-fadeInLeft">
              <div className="relative">
                <img
                  src={logo}
                  alt="NumeroMantra Logo"
                  className="h-12 sm:h-16 w-auto object-contain hover:scale-105 transition-transform duration-300 drop-shadow-lg"
                />
                <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-lg animate-pulse"></div>
              </div>
              <div className="hidden xs:block">
                <h1 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-[#ED9C49] to-[#8B5CF6] bg-clip-text text-transparent">
                  NumeroMantra
                </h1>
                <p className="text-xs text-purple-600 hidden sm:block">Decode Your Destiny</p>
              </div>
            </div>

            <nav className="hidden lg:flex space-x-6 xl:space-x-8 text-[#458A95] font-semibold">
              {[
                { name: 'Home' },
                { name: 'About' },
                { name: 'Services' },
                { name: 'Blog' },
                { name: 'Contact' }
              ].map((item, index) => (
                <a
                  key={item.name}
                  href={`#${item.name.toLowerCase()}`}
                  className="hover:text-[#ED9C49] transition-all duration-300 hover:scale-110 transform relative group py-2 text-sm xl:text-base"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span>{item.name}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-[#ED9C49] to-[#8B5CF6] group-hover:w-full transition-all duration-300 rounded-full"></span>
                </a>
              ))}
            </nav>

            <div className="flex items-center space-x-3 ">
              <a
                href="tel:6359551151"
                className="hidden sm:flex gradient-button text-white px-3 sm:px-6 py-2 sm:py-3 rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-shimmer text-sm sm:text-base font-semibold"
              >
                <button className=" flex items-center space-x-1 sm:space-x-2">
                  <span>Contact Us</span>
                </button>
              </a>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 focus:outline-none"
              >
                <span className={`block w-6 h-0.5 bg-[#458A95] transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-[#458A95] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-[#458A95] transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </button>
            </div>
          </div>

          <div className={`lg:hidden pb-2 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-86 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
            <nav className="py-4 border-t border-purple-200">
              {[
                { name: 'Home' },
                { name: 'About' },
                { name: 'Services' },
                { name: 'Blog' },
                { name: 'Contact' }
              ].map((item, index) => (
                <a
                  key={item.name}
                  href={`#${item.name.toLowerCase()}`}
                  onClick={handleMobileMenuClick}
                  className="block py-3 px-4 text-[#458A95] hover:text-[#ED9C49] hover:bg-purple-50 transition-all duration-300 font-semibold border-b border-purple-100"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.name}
                </a>
              ))}

              <div className="px-4 pt-4">
                <a
                  href="tel:6359551151"
                  onClick={handleMobileMenuClick}
                  className="block w-full gradient-button text-white py-3 rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-shimmer text-center font-semibold"
                >
                  Contact Us
                </a>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <div className="pt-20 sm:pt-24">
        <section
          id="home"
          className="relative bg-cover bg-center py-24 sm:py-32 md:py-40 lg:py-48 text-center text-white px-4 overflow-hidden"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/70 to-black/60"></div>

          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="mystical-particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 10}s`,
                  animationDuration: `${8 + Math.random() * 12}s`
                }}
              >
                {['◦', '◊', '∞', '◈', '✦'][Math.floor(Math.random() * 5)]}
              </div>
            ))}
          </div>

          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="animate-fadeInUp">
              <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
                <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent animate-gradient-text">
                  Unlock Your
                </span>
                <br />
                <span className="bg-gradient-to-r from-[#ED9C49] to-[#FFD700] bg-clip-text text-transparent">
                  Cosmic Blueprint
                </span>
              </h2>

              <p className="text-base xs:text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto mb-8 sm:mb-12 opacity-95 leading-relaxed px-2" style={{ animationDelay: '0.3s' }}>
                Discover the hidden power of your numbers • Transform your destiny through ancient numerology wisdom •
                Align with universal energy for unprecedented success
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12 px-2">
                <a
                  href="mailto:numeromantra1355@gmail.com"
                  className="group gradient-button text-white px-6 sm:px-10 py-3 sm:py-5 rounded-full hover:shadow-2xl transform hover:scale-110 transition-all duration-500 font-bold text-base sm:text-lg w-full sm:w-auto text-center"
                >
                  <span className="flex items-center justify-center space-x-2 sm:space-x-3">
                    <span>Free Numerology Reading</span>
                  </span>
                </a>
                <a
                  href="tel:6359551151"
                  className="group bg-white/20 backdrop-blur-md text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-white/30 transition-all duration-300 font-semibold border border-white/30 w-full sm:w-auto text-center"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <span>Instant Consultation</span>
                  </span>
                </a>
              </div>

              <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-sm opacity-80 px-2">
                <span className="flex items-center space-x-2">
                  <span>★</span>
                  <span>5.0 Rating</span>
                </span>
                <span className="flex items-center space-x-2">
                  <span>•</span>
                  <span>10,000+ Readings</span>
                </span>
                <span className="flex items-center space-x-2">
                  <span>•</span>
                  <span>Certified Expert</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12 sm:mb-16 bg-gradient-to-r from-[#458A95] to-[#ED9C49] bg-clip-text text-transparent px-2">
              The Power of Sacred Numbers
            </h3>

            <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-3 sm:gap-4">
              {numerologyFacts.map((fact, index) => (
                <div
                  key={index}
                  className="number-card group cursor-pointer p-3 sm:p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl hover:shadow-lg transition-all duration-300 text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${fact.color} mb-2 group-hover:scale-125 transition-transform`}>
                    {fact.number}
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 leading-tight">{fact.meaning}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="about"
          className="px-4 sm:px-8 py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-purple-50 to-pink-50 relative"
          data-animate
        >
          <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible.about ? 'animate-fadeInUp' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-12 sm:mb-16">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#458A95] mb-6 sm:mb-8 px-2">
                <span className="relative inline-block">
                  Why NumeroMantra is Your Destiny Partner
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#458A95]/10 to-[#ED9C49]/10 blur-xl -z-10 rounded-2xl"></div>
                </span>
              </h3>

              <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12 px-2">
                For over 5 years, we've been the trusted bridge between ancient numerological wisdom and modern life solutions.
                Our expert analysis has transformed thousands of lives through the mystical power of numbers.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
              {[
                { number: '10,000+', label: 'Life Readings', color: 'from-purple-500 to-pink-500' },
                { number: '98%', label: 'Accuracy Rate', color: 'from-green-500 to-teal-500' },
                { number: '5+', label: 'Years Mastery', color: 'from-yellow-500 to-orange-500' },
                { number: '24/7', label: 'Divine Support', color: 'from-blue-500 to-indigo-500' }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="stat-card group bg-white rounded-xl p-4 sm:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="text-2xl sm:text-3xl font-bold text-[#ED9C49] mb-2 counter-animate">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-semibold text-sm sm:text-base">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  title: "Ancient Wisdom",
                  desc: "5000+ year old Vedic numerology principles combined with modern insights",
                  color: "from-orange-400 to-red-400"
                },
                {
                  title: "Personalized Solutions",
                  desc: "Every reading is unique to your cosmic blueprint and life journey",
                  color: "from-green-400 to-blue-400"
                },
                {
                  title: "Proven Results",
                  desc: "Thousands of success stories from career growth to relationship harmony",
                  color: "from-purple-400 to-pink-400"
                }
              ].map((feature, index) => (
                <div key={index} className="feature-card group bg-white rounded-xl p-6 sm:p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center text-xl sm:text-2xl mb-4 mx-auto group-hover:scale-110 transition-transform font-bold text-white`}>
                    {index + 1}
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-[#ED9C49] mb-3">{feature.title}</h4>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES: fixed alignment */}
        <section id="services" className="px-4 sm:px-8 py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-purple-50 relative" data-animate>
          <div className={`transition-all duration-1000 ${isVisible.services ? 'animate-fadeInUp' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-16 sm:mb-20">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#ED9C49] mb-4 sm:mb-6 px-2">
                Sacred Numerology Services
              </h3>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
                Unlock the mysteries of your numbers through our comprehensive range of mystical services
              </p>
            </div>

            <div className="grid gap-6 sm:gap-8 lg:gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
              {[
                {
                  img: service1,
                  title: 'Birth Date Numerology',
                  desc: 'Discover your Life Path, Destiny, and Soul Urge numbers. Understand your true purpose.',
                  price: '₹13,999',
                  features: [
                    'Life Path Analysis',
                    'Personality Traits',
                    'Future Predictions',
                    'Soul Urge Insights'
                  ]
                },
                {
                  img: service2,
                  title: 'Name Numerology & Correction',
                  desc: 'Optimize your name vibrations for success, harmony, and positive energy flow.',
                  price: '₹14,999',
                  features: [
                    'Name Analysis',
                    'Spelling Corrections',
                    'Lucky Signatures',
                    'Vibrational Alignment'
                  ]
                },
                {
                  img: service1,
                  title: 'Mobile Number Analysis & Correction/Suggestions',
                  desc: 'Ensure your phone number aligns with your cosmic energy and life goals.',
                  price: '₹14,999',
                  features: [
                    'Number Compatibility',
                    'Energy Assessment',
                    'Lucky Alternatives',
                    'Correction Suggestions'
                  ]
                },
                {
                  img: service2,
                  title: 'Business Numerology',
                  desc: 'Choose powerful business names, launch dates, and success strategies.',
                  price: '₹14,999',
                  features: [
                    'Company Name Analysis',
                    'Launch Date Selection',
                    'Success Mantras',
                    'Financial Growth Insight'
                  ]
                },
                {
                  img: service1,
                  title: 'Relationship Compatibility',
                  desc: 'Analyze number compatibility between partners for lasting relationships.',
                  price: '₹5,999',
                  features: [
                    'Partner Matching',
                    'Relationship Advice',
                    'Harmony Solutions',
                    'Emotional Compatibility'
                  ]
                },
                {
                  img: service2,
                  title: 'Gemstone & Yantra',
                  desc: 'Get personalized gemstone and yantra recommendations for amplified energy.',
                  price: '₹14,999',
                  features: [
                    'Gemstone Selection',
                    'Yantra Guidance',
                    'Wearing Instructions',
                    'Energizing Rituals'
                  ]
                }
              ].map((service, index) => (
                <div
                  key={service.title}
                  className="service-card-enhanced group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-48 sm:h-52 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 gradient-button text-white px-3 py-1 rounded-full font-bold text-sm">
                      {service.price}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Body with flex-grow and bottom-pinned button */}
                  <div className="p-4 sm:p-6 flex flex-col flex-1">
                    <h4 className="text-lg sm:text-xl font-bold text-[#ED9C49] mb-3 group-hover:text-[#458A95] transition-colors">
                      {service.title}
                    </h4>

                    {/* Stabilize text & list heights for alignment */}
                    <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base min-h-[56px] sm:min-h-[48px]">
                      {service.desc}
                    </p>

                    <ul className="space-y-2 mb-6 text-sm sm:text-base text-gray-600 min-h-[112px] sm:min-h-[104px]">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <span className="text-green-500">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Spacer to push button to bottom if needed */}
                    <div className="mt-auto" />

                    <a
                      href="tel:6359551151"
                      className="w-full inline-block text-center gradient-button cursor-pointer text-white py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-semibold"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
            <h3 className="text-3xl sm:text-4xl font-bold mb-12 sm:mb-16 px-2">Life-Changing Experiences</h3>

            <div className="testimonial-card bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto border border-white/20">
              <p className="text-lg sm:text-xl italic mb-6 leading-relaxed px-2">
                "{testimonials[currentTestimonial].text}"
              </p>
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl sm:text-2xl">★</span>
                ))}
              </div>
              <h4 className="font-bold text-lg">{testimonials[currentTestimonial].name}</h4>
              <p className="text-purple-200">{testimonials[currentTestimonial].location}</p>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentTestimonial ? 'bg-white scale-125' : 'bg-white/50'}`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="blog" className="px-4 sm:px-8 py-16 sm:py-20 lg:py-24 bg-white" data-animate>
          <div className={`transition-all duration-1000 ${isVisible.blog ? 'animate-fadeInUp' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-16 sm:mb-20">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#458A95] mb-4 sm:mb-6 px-2">
                Ancient Wisdom • Modern Insights
              </h3>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
                Dive deep into the mystical world of numbers and discover how they shape your destiny
              </p>
            </div>

            <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 max-w-6xl mx-auto">
              {[{
                img: blog1,
                title: 'How Your Birth Numbers Reveal Your True Career Path',
                excerpt: 'Discover the hidden connection between your birth date and professional success. Learn which careers align with your numerological blueprint.',
                readTime: '8 min read',
                category: 'Career',
                author: 'Master Numerologist',
                date: 'Jan 15, 2024',
                tags: ['Career', 'Life Path', 'Success']
              }, {
                img: blog2,
                title: 'The Secret Power of Business Names in Numerology',
                excerpt: 'Unlock the formula for choosing business names that attract wealth and success. Real case studies of companies that changed their fate.',
                readTime: '12 min read',
                category: 'Business',
                author: 'Business Expert',
                date: 'Jan 10, 2024',
                tags: ['Business', 'Wealth', 'Success']
              }].map((blog, index) => (
                <div
                  key={blog.title}
                  className="blog-card-enhanced group cursor-pointer bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={blog.img}
                      alt={blog.title}
                      className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 gradient-button text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-sm font-bold">
                      {blog.category}
                    </div>
                    <div className="absolute bottom-4 right-4 bg-black/80 text-white px-3 py-1 rounded-full text-sm">
                      {blog.readTime}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <div className="p-6 sm:p-8">
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <span>{blog.author}</span>
                      <span className="mx-2">•</span>
                      <span>{blog.date}</span>
                    </div>

                    <h4 className="text-xl sm:text-2xl font-bold text-[#ED9C49] mb-4 group-hover:text-[#458A95] transition-colors leading-tight">
                      {blog.title}
                    </h4>

                    <p className="text-gray-700 leading-relaxed mb-6 text-base sm:text-lg">{blog.excerpt}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {blog.tags.map((tag, idx) => (
                        <span key={idx} className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-gray-400">
                        <span className="flex items-center space-x-1">
                          <span>👁</span>
                          <span>2.5k</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <span>💬</span>
                          <span>24</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-4 sm:px-8 py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900 text-white relative overflow-hidden" data-animate>
          <div className="absolute inset-0 bg-black/30"></div>

          <div className="absolute inset-0">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full opacity-30 animate-twinkle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              ></div>
            ))}
          </div>

          <div className={`relative z-10 max-w-6xl mx-auto text-center transition-all duration-1000 ${isVisible.contact ? 'animate-fadeInUp' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 px-2">
              Ready to Transform Your Destiny?
            </h3>

            <p className="text-lg sm:text-xl lg:text-2xl mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed opacity-95 px-2">
              Your numbers are calling! Connect with our master numerologist today and unlock the cosmic secrets that will revolutionize your life journey.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
              {[
                {
                  title: "Instant Reading",
                  desc: "Call now for immediate numerology consultation",
                  action: "tel:6359551151",
                  value: "+91 6359551151",
                  color: "from-green-400 to-blue-500"
                },
                {
                  title: "Detailed Analysis",
                  desc: "Email us for comprehensive numerology report",
                  action: "mailto:numeromantra1355@gmail.com",
                  value: "Email Us",
                  color: "from-purple-400 to-pink-500"
                },
                {
                  title: "WhatsApp Chat",
                  desc: "Quick questions and instant guidance",
                  action: "https://wa.me/916359551151",
                  value: "Chat Now",
                  color: "from-green-500 to-teal-500"
                },
                {
                  title: "Book Session",
                  desc: "Schedule your personal numerology session",
                  action: "tel:6359551151",
                  value: "Book Now",
                  color: "from-yellow-400 to-red-500"
                }
              ].map((contact, index) => (
                <a
                  key={index}
                  href={contact.action}
                  target={contact.action.startsWith('http') ? '_blank' : ''}
                  rel={contact.action.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="contact-card-enhanced group bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 text-center hover:bg-white/20 transition-all duration-300 border border-white/20"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r ${contact.color} flex items-center justify-center text-2xl sm:text-3xl mb-4 mx-auto group-hover:scale-125 transition-transform duration-300 font-bold text-white`}>
                    {index + 1}
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold mb-2">{contact.title}</h4>
                  <p className="text-purple-200 mb-3 text-sm">{contact.desc}</p>
                  <div className="font-semibold text-yellow-300 group-hover:text-white transition-colors text-sm sm:text-base">
                    {contact.value}
                  </div>
                </a>
              ))}
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto border border-white/20">
              <h4 className="text-xl sm:text-2xl font-bold mb-4 text-yellow-300">Limited Time Offer</h4>
              <p className="text-base sm:text-lg mb-6 px-2">Get your first numerology reading absolutely FREE! Discover your Life Path number and unlock your destiny.</p>
              <a
                href="mailto:numeromantra1355@gmail.com?subject=Free Numerology Reading"
                className="gradient-button text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300 font-bold inline-block text-sm sm:text-base"
              >
                Claim Your Free Reading
              </a>
            </div>
          </div>
        </section>

        <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-16 sm:py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-8 gap-4 h-full">
              {[...Array(64)].map((_, i) => (
                <div key={i} className="flex items-center justify-center text-2xl opacity-20">
                  {(i % 9) + 1}
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            <div className="animate-fadeInLeft">
              <div className="flex items-center space-x-3 mb-6">
                <img src={logo} alt="NumeroMantra Logo" className="h-12 sm:h-16 hover:scale-105 transition-transform" />
                <div>
                  <h4 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#ED9C49] to-[#FFD700] bg-clip-text text-transparent">
                    NumeroMantra
                  </h4>
                  <p className="text-purple-300 text-sm">Your Destiny Decoder</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 text-sm sm:text-base">
                Empowering souls through the sacred science of numbers and ancient cosmic wisdom. Transform your life with personalized numerology insights.
              </p>
              <div className="flex space-x-4">
                {['∞', '★', '◊',].map((icon, idx) => (
                  <div key={idx} className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                    {icon}
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              <h4 className="font-bold text-[#ED9C49] mb-6 text-lg flex items-center space-x-2">
                <span>Quick Navigation</span>
              </h4>
              <ul className="space-y-3">
                {['Home', 'About', 'Services', 'Blog', 'Contact'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-300 hover:text-[#ED9C49]  transition-all  hover:translate-x-2 transform inline-flex items-center space-x-2 group text-sm sm:text-base"
                    >
                      <span className="group-hover:text-yellow-400 transition-colors">→</span>
                      <span>{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <h4 className="font-bold text-[#ED9C49] mb-6 text-lg flex items-center space-x-2">
                <span>Our Services</span>
              </h4>
              <ul className="space-y-3 text-sm">
                {[
                  'Birth Date Analysis',
                  'Name Numerology',
                  'Business Consultation',
                  'Relationship Compatibility',
                  'Mobile Number Reading',
                  'Gemstone Guidance'
                ].map((service) => (
                  <li key={service} className="text-gray-300 hover:text-purple-300 transition-colors">
                    • {service}
                  </li>
                ))}
              </ul>
            </div>

            <div className="animate-fadeInRight">
              <h4 className="font-bold text-[#ED9C49] mb-6 text-lg flex items-center space-x-2">
                <span>Connect With Us</span>
              </h4>
              <div className="space-y-3 mb-6">
                <a href='tel:6359551151' className="inline-flex group  items-center cursor-pointer space-x-3 text-gray-300 text-sm sm:text-base">
                  <span className="text-green-400">Phone:</span>
                  <span className='group-hover:underline '>+91 6359551151</span>
                </a>
                <a href='mailto:numeromantra1355@gmail.com' className="inline-flex group items-start space-x-3 text-gray-300 text-sm">
                  <span className="text-blue-400">Email:</span>
                  <span className="break-all group-hover:underline">numeromantra1355@gmail.com</span>
                </a>
                <div className="flex items-center space-x-3 text-gray-300 text-sm sm:text-base">
                  <span className="text-purple-400">Hours:</span>
                  <span>24/7 Available</span>
                </div>
              </div>

              <a
                href="https://wa.me/916359551151"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-float-footer group flex items-center space-x-3 w-fit  bg-green-600 hover:bg-green-500 px-4 py-1.5 rounded-full transition-all duration-300"
              >
                <img
                  src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
                  alt="WhatsApp"
                  className="h-8 w-8 sm:h-12 sm:w-12 group-hover:scale-110 transition-transform"
                />
                <span className="text-white font-semibold text-sm sm:text-base">Chat Now</span>
              </a>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 sm:mt-16 pt-6 sm:pt-8 text-center relative">
            <div className="max-w-4xl mx-auto px-4">
              <p className="text-gray-400 mb-4 text-sm sm:text-base">
                © {new Date().getFullYear()} NumeroMantra. All rights reserved.
                <span className="text-purple-300"> Made with care for your spiritual awakening</span>
              </p>
              <p className="text-xs sm:text-sm text-gray-500">
                Disclaimer: Numerology is for guidance and entertainment. Results may vary based on individual beliefs and actions.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default memo(App);
