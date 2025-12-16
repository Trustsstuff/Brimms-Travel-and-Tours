import React from 'react';
import { COMPANY_INFO } from '../constants';
import { MapPin, Phone, Clock, Star, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark border-t border-gray-800 pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand & Address */}
          <div>
            <h3 className="text-2xl font-bold text-brand-blue mb-6">
              {COMPANY_INFO.name}
            </h3>
            <div className="space-y-4 text-gray-400 text-sm">
              <p className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent-orange flex-shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </p>
              <p className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-brand-blue flex-shrink-0" />
                <span>{COMPANY_INFO.areasServed}</span>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-500 flex-shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-brand-blue transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </p>
              <p className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-purple-500 flex-shrink-0" />
                <span>{COMPANY_INFO.hours}</span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Explore</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link to="/packages" className="hover:text-brand-blue transition-colors">Popular Packages</Link></li>
              <li><Link to="/destinations" className="hover:text-brand-blue transition-colors">Top Destinations</Link></li>
              <li><Link to="/blog" className="hover:text-brand-blue transition-colors">Travel Tips & Blog</Link></li>
              <li><Link to="/about" className="hover:text-brand-blue transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-brand-blue transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          {/* Reviews Summary */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Review Summary</h4>
            <div className="flex items-center gap-4 mb-4">
              <div className="text-4xl font-bold text-white">{COMPANY_INFO.rating}</div>
              <div className="flex flex-col">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill={i < Math.floor(COMPANY_INFO.rating) ? "currentColor" : "none"} className={i < Math.floor(COMPANY_INFO.rating) ? "" : "text-gray-600"} />
                  ))}
                </div>
                <span className="text-xs text-gray-400">{COMPANY_INFO.reviewCount} Reviews</span>
              </div>
            </div>
            
            {/* Simple Bar Chart Mockup */}
            <div className="space-y-1 text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <span>5</span> <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden"><div className="h-full bg-yellow-400 w-[80%]"></div></div>
              </div>
              <div className="flex items-center gap-2">
                <span>4</span> <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden"><div className="h-full bg-yellow-400 w-[15%]"></div></div>
              </div>
              <div className="flex items-center gap-2">
                <span>3</span> <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden"><div className="h-full bg-yellow-400 w-[5%]"></div></div>
              </div>
            </div>
          </div>

          {/* Socials & Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Connect</h4>
            <div className="flex gap-4 mb-6">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-brand-blue hover:text-white transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-accent-orange hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-brand-blue hover:text-white transition-all">
                <Twitter size={20} />
              </a>
            </div>
            <p className="text-sm text-gray-400 mb-4">Subscribe for travel deals.</p>
            <div className="flex">
              <input type="email" placeholder="Email" className="w-full bg-gray-900 border border-gray-700 rounded-l-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-brand-blue" />
              <button className="bg-brand-blue text-white px-4 py-2 rounded-r-lg hover:bg-blue-800 transition-colors">Go</button>
            </div>
          </div>

        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved. | <a href="https://positivewebservices.com.ng/" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:text-white transition-colors">Positive Web Services.</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;