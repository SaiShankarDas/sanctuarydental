import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import WhatsAppIcon from '../common/WhatsAppIcon';

const navLinks = [
  { name: 'Dentist Near Me', href: '#hero' },
  { name: 'Results', href: '#results' },
  { name: 'Specialists', href: '#specialists' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Location', href: '#location' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80; // height of navbar
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/1234567890?text=Hi,%20I%20want%20to%20book%20a%20dental%20appointment', '_blank');
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="font-serif text-2xl font-bold text-secondary">Sanctuary Dental</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium text-secondary-light hover:text-primary transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={handleWhatsApp}
              className="text-secondary-light hover:text-primary font-medium text-sm flex items-center gap-1 transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4" /> WhatsApp Us
            </button>
            <button 
              onClick={() => scrollToSection('#booking')}
              className="bg-secondary text-white px-5 py-2.5 rounded hover:bg-secondary-light transition-colors font-medium text-sm shadow-md hover:shadow-lg active:scale-95 transform duration-200"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-secondary hover:text-primary"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full top-full left-0 border-t border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left px-3 py-3 text-base font-medium text-secondary-light hover:text-primary hover:bg-gray-50 rounded-md"
              >
                {link.name}
              </button>
            ))}
            <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-3 px-3">
              <button 
                onClick={handleWhatsApp}
                className="flex items-center justify-center gap-2 w-full py-3 text-secondary-light border border-gray-200 rounded font-medium active:bg-gray-50"
              >
                <WhatsAppIcon className="w-[18px] h-[18px]" /> WhatsApp Us
              </button>
              <button 
                onClick={() => scrollToSection('#booking')}
                className="w-full bg-secondary text-white py-3 rounded font-medium hover:bg-secondary-light active:scale-[0.98] transform transition-all"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
