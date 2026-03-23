import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import ShnkrDevBadge from './ShnkrDevBadge';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="font-serif text-2xl font-bold text-secondary mb-4">Sanctuary Dental</h3>
            <p className="text-gray-500 text-sm mb-6 max-w-xs">
              Providing top-tier dental care in a tranquil, relaxing sanctuary designed just for your wellness.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-secondary mb-4 uppercase text-xs tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-500 hover:text-primary text-sm transition-colors">About Us</Link></li>
              <li><Link to="/" className="text-gray-500 hover:text-primary text-sm transition-colors">Specializations</Link></li>
              <li><Link to="/" className="text-gray-500 hover:text-primary text-sm transition-colors">Patient Stories</Link></li>
              <li><Link to="/" className="text-gray-500 hover:text-primary text-sm transition-colors">Insurance & Financing</Link></li>
              <li><Link to="/" className="text-gray-500 hover:text-primary text-sm transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-secondary mb-4 uppercase text-xs tracking-wider">Support</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-500 hover:text-primary text-sm transition-colors">Contact Us</Link></li>
              <li><Link to="/" className="text-gray-500 hover:text-primary text-sm transition-colors">Privacy Policy</Link></li>
              <li><Link to="/" className="text-gray-500 hover:text-primary text-sm transition-colors">Terms of Service</Link></li>
              <li><Link to="/" className="text-gray-500 hover:text-primary text-sm transition-colors">Sitemap</Link></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-secondary mb-4 uppercase text-xs tracking-wider">Newsletter</h4>
            <p className="text-gray-500 text-sm mb-4">Subscribe for updates on dental wellness tips.</p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:border-primary text-sm"
              />
              <button 
                type="submit" 
                className="px-4 py-2 bg-secondary text-white rounded-r hover:bg-secondary-light transition-colors text-sm font-medium"
              >
                →
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-6">
          <p className="text-sm text-gray-500 text-center md:text-left opacity-70">
            © {new Date().getFullYear()} Sanctuary Dental. All rights reserved.
          </p>
          <ShnkrDevBadge />
        </div>
      </div>
    </footer>
  );
}
