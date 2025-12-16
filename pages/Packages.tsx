import React from 'react';
import { PACKAGES } from '../constants';
import { Clock, Star, MapPin, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Packages: React.FC = () => {
  return (
    <div className="animate-fade-in">
       {/* Hero Section */}
       <div className="relative h-[40vh] min-h-[300px] w-full flex items-center justify-center text-center bg-cover bg-center bg-no-repeat bg-fixed" style={{backgroundImage: "url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop')"}}>
        <div className="absolute inset-0 bg-brand-dark/50"></div>
        <div className="relative z-10 px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-md">Our Travel Packages</h1>
          <p className="text-lg text-gray-200">All-inclusive experiences designed for memories that last a lifetime.</p>
        </div>
      </div>

      <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {PACKAGES.map(pkg => (
            <div key={pkg.id} className="flex flex-col md:flex-row bg-white dark:bg-dark-card rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-800 hover:border-brand-blue/30 transition-all duration-300">
              <div className="md:w-2/5 relative">
                <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 bg-brand-blue text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Best Seller
                </div>
              </div>
              <div className="p-6 md:w-3/5 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{pkg.title}</h2>
                    <div className="flex items-center gap-1 bg-yellow-400/10 px-2 py-1 rounded-lg">
                      <Star size={16} className="text-yellow-400 fill-yellow-400" />
                      <span className="text-sm font-bold text-yellow-500">{pkg.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin size={16} className="text-accent-orange" />
                      {pkg.destination}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={16} className="text-brand-blue" />
                      {pkg.durationDays} Days
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {pkg.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {pkg.amenities.slice(0, 3).map((amenity, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-medium text-gray-500 dark:text-gray-400">
                        <div className="w-4 h-4 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center">
                          <Check size={10} strokeWidth={3} />
                        </div>
                        {amenity}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div>
                    <span className="text-xs text-gray-400 block">Total Price</span>
                    <span className="text-2xl font-bold text-brand-blue">${pkg.price}</span>
                  </div>
                  <Link to={`/booking?package=${pkg.id}`} className="bg-brand-dark dark:bg-white text-white dark:text-brand-dark px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:bg-brand-blue dark:hover:bg-gray-200 transition-all">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages;