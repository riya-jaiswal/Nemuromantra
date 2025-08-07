import React from 'react';
import './App.css';
import logo from './assets/Numero/PNG/Numero 4@4x.png';
import heroBg from './assets/Hero/1 4x.jpg';
import service1 from './assets/Numero/JPG/Numero 5@4x-100.jpg';
import service2 from './assets/Numero/JPG/Numero 2@4x-100.jpg';
import blog1 from './assets/Numero/JPG/Numero 3@4x-100.jpg';
import blog2 from './assets/Numero/JPG/Numero 4@4x-100.jpg';

function App() {
  return (
    <div className="bg-[#fff4e6] min-h-screen text-gray-800 font-sans">
      {/* Navbar */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <img
              src={logo}
              alt="NumeroMantra Logo"
              className="h-22 w-auto object-contain"
            />
            <h1 className="text-xl sm:text-2xl font-bold text-[#ED9C49]"></h1>
          </div>
          <nav className="hidden md:flex space-x-6 text-[#458A95] font-medium text-sm sm:text-base">
            <a href="#home" className="hover:text-[#ED9C49] transition">Home</a>
            <a href="#about" className="hover:text-[#ED9C49] transition">About</a>
            <a href="#services" className="hover:text-[#ED9C49] transition">Services</a>
            <a href="#blog" className="hover:text-[#ED9C49] transition">Blog</a>
            <a href="#contact" className="hover:text-[#ED9C49] transition">Contact</a>
          </nav>
          <a
            href="tel:6359551151"
            className="ml-auto md:ml-0 bg-[#ED9C49] text-white px-4 py-2 rounded hover:bg-[#d7862f] text-sm"
          >
            Schedule a Call
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="bg-cover bg-center py-50 text-center text-white px-4"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Decode Your Life's Blueprint</h2>
        <p className="text-base sm:text-lg max-w-2xl mx-auto mb-6">
          Empower your journey with expert numerology insights. Align your name, numbers, and energy.
        </p>
        <a
          href="mailto:numeromantra1355@gmail.com"
          className="inline-block bg-[#ED9C49] text-white px-6 py-3 rounded-md hover:bg-[#d7862f] transition"
        >
          Book a Free Consultation
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="px-4 sm:px-8 py-12 bg-white text-center">
        <h3 className="text-2xl sm:text-3xl font-bold text-[#458A95] mb-6">Why Choose NumeroMantra?</h3>
        <p className="text-gray-700 max-w-3xl mx-auto text-base sm:text-lg">
          We guide individuals through the wisdom of numerology. Whether it’s naming a business,
          harmonizing your house, or identifying favorable dates — we align you with your numbers.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="px-4 sm:px-8 py-12">
        <h3 className="text-2xl sm:text-3xl font-bold text-center text-[#ED9C49] mb-10">Our Services</h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[{
            img: service1,
            title: 'Date of Birth Numerology',
            desc: 'Reveal your life path, soul urge, and destiny numbers.'
          }, {
            img: service2,
            title: 'Name Numerology',
            desc: 'Optimize your name vibrations for harmony and success.'
          }, {
            img: service1,
            title: 'Mobile Number Analysis',
            desc: 'Is your phone number aligned with your life purpose?'
          }, {
            img: service2,
            title: 'Gemstone Numerology',
            desc: 'Get the right gemstone based on your numbers.'
          }, {
            img: service1,
            title: 'Vedic Numerology',
            desc: 'Explore the power of traditional Indian numerology.'
          }, {
            img: service2,
            title: 'Vastu Numerology',
            desc: 'Numerological solutions for home & office peace.'
          }].map(service => (
            <div key={service.title} className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition">
              <img src={service.img} alt={service.title} className="w-full h-40 object-cover" />
              <div className="p-5">
                <h4 className="text-lg sm:text-xl font-semibold text-[#ED9C49] mb-2">{service.title}</h4>
                <p className="text-sm text-gray-600">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="px-4 sm:px-8 py-12 bg-white">
        <h3 className="text-2xl sm:text-3xl font-bold text-center text-[#458A95] mb-8">From Our Blog</h3>
        <div className="grid gap-6 sm:grid-cols-2">
          {[{
            img: blog1,
            title: 'How Numerology Impacts Career Choices',
            excerpt: 'Explore how your numbers define your career path and professional success.'
          }, {
            img: blog2,
            title: 'Best Business Names According to Numerology',
            excerpt: 'Align your startup with numerological wisdom for long-term growth.'
          }].map(blog => (
            <div key={blog.title} className="bg-[#fff4e6] rounded-lg overflow-hidden shadow text-left">
              <img src={blog.img} alt={blog.title} className="w-full h-40 object-cover" />
              <div className="p-5">
                <h4 className="text-lg font-semibold text-[#ED9C49] mb-1">{blog.title}</h4>
                <p className="text-sm text-gray-700">{blog.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-4 sm:px-8 py-12 text-center bg-[#fff4e6]">
        <h3 className="text-xl sm:text-2xl font-bold text-[#458A95] mb-4">Contact Us</h3>
        <p className="text-base sm:text-lg mb-2">📞 <a href="tel:6359551151">6359551151</a></p>
        <p className="text-base sm:text-lg">📧 <a href="mailto:numeromantra1355@gmail.com">numeromantra1355@gmail.com</a></p>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-10 text-sm text-gray-600">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <img src={logo} alt="NumeroMantra Logo" className="h-14 mb-3" />
            <p>Empowering lives through the science of numbers.</p>
          </div>
          <div>
            <h4 className="font-semibold text-[#458A95] mb-2">Quick Links</h4>
            <ul className="space-y-1">
              <li><a href="#home" className="hover:text-[#ED9C49]">Home</a></li>
              <li><a href="#about" className="hover:text-[#ED9C49]">About</a></li>
              <li><a href="#services" className="hover:text-[#ED9C49]">Services</a></li>
              <li><a href="#blog" className="hover:text-[#ED9C49]">Blog</a></li>
              <li><a href="#contact" className="hover:text-[#ED9C49]">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[#458A95] mb-2">Contact</h4>
            <p>📞 6359551151</p>
            <p>📧 numeromantra1355@gmail.com</p>
          </div>
          <div className="flex justify-start sm:justify-end items-end">
            <a href="https://wa.me/916359551151" target="_blank" rel="noopener noreferrer">
              <img
                src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
                alt="WhatsApp"
                className="h-10 hover:scale-110 transition"
              />
            </a>
          </div>
        </div>
        <div className="text-center pt-6">© {new Date().getFullYear()} NumeroMantra. All rights reserved.</div>
      </footer>
    </div>
  );
}

export default App;
