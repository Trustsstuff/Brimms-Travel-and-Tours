import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { DESTINATIONS, PACKAGES } from '../constants';
import { Calendar, Users, Briefcase, CheckCircle, CreditCard, ChevronRight, ChevronLeft } from 'lucide-react';

const Booking: React.FC = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    destination: queryParams.get('dest') || '',
    packageId: queryParams.get('package') || '',
    date: queryParams.get('date') || '',
    days: 7,
    travelers: parseInt(queryParams.get('travelers') || '1'),
    name: '',
    email: '',
    phone: '',
    notes: ''
  });

  const selectedPackage = PACKAGES.find(p => p.id === formData.packageId);
  const basePrice = selectedPackage ? selectedPackage.price : 1000; 
  const totalPrice = basePrice * formData.travelers;

  useEffect(() => {
    // If a package is selected, autofill destination and days
    if (selectedPackage) {
      setFormData(prev => ({
        ...prev,
        destination: selectedPackage.destination,
        days: selectedPackage.durationDays
      }));
    }
  }, [formData.packageId, selectedPackage]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Booking Submitted! We will contact you shortly.');
    setStep(1); // Reset or redirect
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
       <div className="relative h-[40vh] min-h-[300px] w-full flex items-center justify-center text-center bg-cover bg-center bg-no-repeat bg-fixed" style={{backgroundImage: "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop')"}}>
        <div className="absolute inset-0 bg-brand-dark/50"></div>
        <div className="relative z-10 px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-md">Book Your Trip</h1>
          <p className="text-lg text-gray-200">Start your journey today by filling in the details below.</p>
        </div>
      </div>

      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="mb-10 text-center">
          <div className="flex items-center justify-center gap-4 text-sm font-medium">
            <span className={`px-3 py-1 rounded-full ${step >= 1 ? 'bg-brand-blue text-white' : 'bg-gray-200 text-gray-500'}`}>1. Details</span>
            <div className="w-8 h-0.5 bg-gray-300"></div>
            <span className={`px-3 py-1 rounded-full ${step >= 2 ? 'bg-brand-blue text-white' : 'bg-gray-200 text-gray-500'}`}>2. Personal Info</span>
            <div className="w-8 h-0.5 bg-gray-300"></div>
            <span className={`px-3 py-1 rounded-full ${step >= 3 ? 'bg-brand-blue text-white' : 'bg-gray-200 text-gray-500'}`}>3. Confirm</span>
          </div>
        </div>

        <div className="bg-white dark:bg-dark-card rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-800 flex flex-col md:flex-row min-h-[600px]">
          
          {/* Sidebar Summary */}
          <div className="bg-gray-50 dark:bg-gray-900/50 p-8 md:w-1/3 border-r border-gray-100 dark:border-gray-800">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Booking Summary</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="mt-1 p-2 bg-blue-100 dark:bg-blue-900/30 text-brand-blue rounded-lg">
                  <Briefcase size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-semibold">Package / Dest</p>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {selectedPackage ? selectedPackage.title : (formData.destination || 'Not selected')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                 <div className="mt-1 p-2 bg-pink-100 dark:bg-pink-900/30 text-accent-orange rounded-lg">
                  <Calendar size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-semibold">Travel Date</p>
                  <p className="font-medium text-gray-900 dark:text-white">{formData.date || 'Not selected'}</p>
                  <p className="text-xs text-gray-500">Duration: {formData.days} Days</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                 <div className="mt-1 p-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-lg">
                  <Users size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-semibold">Travelers</p>
                  <p className="font-medium text-gray-900 dark:text-white">{formData.travelers} Person(s)</p>
                </div>
              </div>
              
              <div className="pt-6 border-t border-gray-200 dark:border-gray-700 mt-6">
                 <div className="flex justify-between items-center mb-2">
                   <span className="text-gray-500">Price per person</span>
                   <span className="text-gray-900 dark:text-white font-medium">${basePrice}</span>
                 </div>
                 <div className="flex justify-between items-center text-xl font-bold text-brand-blue mt-4">
                   <span>Total</span>
                   <span>${totalPrice}</span>
                 </div>
              </div>
            </div>
          </div>

          {/* Main Form Area */}
          <div className="p-8 md:w-2/3 relative">
            <form onSubmit={handleSubmit} className="h-full flex flex-col justify-between">
              
              {/* Step 1: Trip Details */}
              {step === 1 && (
                <div className="space-y-6 animate-fade-in">
                   <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Trip Details</h2>
                   
                   <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Destination</label>
                      <select 
                        name="destination" 
                        value={formData.destination} 
                        onChange={handleChange}
                        disabled={!!selectedPackage}
                        className="w-full p-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-brand-blue outline-none text-gray-900 dark:text-white"
                      >
                        <option value="">Select a Destination</option>
                        {DESTINATIONS.map(d => <option key={d.id} value={d.name}>{d.name}</option>)}
                      </select>
                   </div>

                   <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Check-in Date</label>
                          <input 
                            type="date" 
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="w-full p-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-brand-blue outline-none text-gray-900 dark:text-white"
                            required
                          />
                      </div>
                       <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Number of Days</label>
                          <input 
                            type="number" 
                            name="days"
                            min="1"
                            value={formData.days}
                            onChange={handleChange}
                            disabled={!!selectedPackage}
                            className="w-full p-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-brand-blue outline-none text-gray-900 dark:text-white"
                            required
                          />
                      </div>
                   </div>

                   <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Travelers</label>
                      <input 
                        type="number" 
                        name="travelers"
                        min="1"
                        value={formData.travelers}
                        onChange={handleChange}
                        className="w-full p-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-brand-blue outline-none text-gray-900 dark:text-white"
                        required
                      />
                   </div>
                </div>
              )}

              {/* Step 2: Personal Info */}
              {step === 2 && (
                 <div className="space-y-6 animate-fade-in">
                   <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Contact Information</h2>
                   <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full p-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-brand-blue outline-none text-gray-900 dark:text-white" placeholder="John Doe" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full p-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-brand-blue outline-none text-gray-900 dark:text-white" placeholder="john@example.com" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Phone Number</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full p-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-brand-blue outline-none text-gray-900 dark:text-white" placeholder="+234..." />
                   </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Special Requests</label>
                      <textarea name="notes" value={formData.notes} onChange={handleChange} className="w-full p-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-brand-blue outline-none text-gray-900 dark:text-white h-24" placeholder="Dietary requirements, accessibility needs, etc."></textarea>
                   </div>
                </div>
              )}

              {/* Step 3: Confirm */}
               {step === 3 && (
                 <div className="space-y-6 animate-fade-in text-center">
                   <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto text-green-600 dark:text-green-400 mb-6">
                      <CheckCircle size={40} />
                   </div>
                   <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Ready to Submit?</h2>
                   <p className="text-gray-600 dark:text-gray-400">
                      Please review your booking details on the left. Upon submission, our agents will contact you within 24 hours to finalize payment and itinerary.
                   </p>
                   <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-700 text-sm text-yellow-800 dark:text-yellow-200 text-left flex items-start gap-3">
                      <CreditCard className="mt-1 flex-shrink-0" size={16} />
                      <p>No payment is required today. Payment instructions will be sent to <strong>{formData.email}</strong> after confirmation.</p>
                   </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center mt-10 pt-6 border-t border-gray-100 dark:border-gray-800">
                  {step > 1 ? (
                      <button type="button" onClick={prevStep} className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-medium">
                          <ChevronLeft size={20} /> Back
                      </button>
                  ) : <div></div>}

                  {step < 3 ? (
                      <button type="button" onClick={nextStep} className="bg-brand-blue text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-800 transition-colors flex items-center gap-2 shadow-lg">
                          Next Step <ChevronRight size={20} />
                      </button>
                  ) : (
                      <button type="submit" className="bg-green-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-700 hover:shadow-lg transition-all flex items-center gap-2 shadow-md">
                          Confirm Booking
                      </button>
                  )}
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;