import React from 'react';
import { DESTINATIONS } from '../constants';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

const Destinations: React.FC = () => {
  return (
    <div className="animate-fade-in">
       {/* Hero Section */}
       <div className="relative h-[40vh] min-h-[300px] w-full flex items-center justify-center text-center bg-cover bg-center bg-no-repeat bg-fixed" style={{backgroundImage: "url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2070&auto=format&fit=crop')"}}>
        <div className="absolute inset-0 bg-brand-dark/50"></div>
        <div className="relative z-10 px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-md">Explore Destinations</h1>
          <p className="text-lg text-gray-200">From busy cities to quiet beaches, find your perfect spot.</p>
        </div>
      </div>

      <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DESTINATIONS.map(dest => (
            <Link to={`/booking?dest=${dest.name}`} key={dest.id} className="group relative rounded-3xl overflow-hidden aspect-video shadow-lg cursor-pointer">
              <img src={dest.image} alt={dest.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center gap-2 text-accent-orange mb-1">
                    <MapPin size={16} />
                    <span className="text-sm font-bold uppercase tracking-wider">{dest.country}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-2">{dest.name}</h2>
                  <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 mb-4 line-clamp-2">
                    {dest.description}
                  </p>
                  <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    <span className="text-xs text-gray-400">{dest.packageCount} Packages available</span>
                    <span className="bg-white/20 backdrop-blur text-white px-4 py-1 rounded-full text-sm font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                      Explore
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;