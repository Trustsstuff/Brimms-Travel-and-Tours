import React, { useState } from 'react';
import { Calendar, Users, MapPin } from 'lucide-react';
import { DESTINATIONS } from '../constants';
import { useNavigate } from 'react-router-dom';

// Simple form for Home Page Hero
export const QuickBookingForm: React.FC = () => {
  const navigate = useNavigate();
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [travelers, setTravelers] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/booking?dest=${destination}&date=${date}&travelers=${travelers}`);
  };

  return (
    <div className="bg-white dark:bg-dark-card p-6 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 relative overflow-hidden group">
      <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Destination</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 text-brand-blue w-5 h-5" />
              <select 
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                required
              >
                <option value="">Where to?</option>
                {DESTINATIONS.map(d => (
                  <option key={d.id} value={d.name}>{d.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Date</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 text-accent-orange w-5 h-5" />
              <input 
                type="date" 
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-transparent outline-none transition-all text-gray-700 dark:text-gray-200"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Travelers</label>
            <div className="relative">
              <Users className="absolute left-3 top-3 text-purple-500 w-5 h-5" />
              <input 
                type="number" 
                min="1"
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-gray-700 dark:text-gray-200"
                value={travelers}
                onChange={(e) => setTravelers(parseInt(e.target.value))}
                required
              />
            </div>
          </div>

          <div className="flex items-end">
            <button type="submit" className="w-full bg-accent-orange hover:bg-accent-hover text-white font-bold py-2.5 rounded-lg shadow-md transform hover:-translate-y-0.5 transition-all duration-300">
              Check Availability
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};