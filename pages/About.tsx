import React from 'react';
import { COMPANY_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <div className="animate-fade-in">
       {/* Hero Section */}
       <div className="relative h-[40vh] min-h-[300px] w-full flex items-center justify-center text-center bg-cover bg-center bg-no-repeat bg-fixed" style={{backgroundImage: "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop')"}}>
        <div className="absolute inset-0 bg-brand-dark/60"></div>
        <div className="relative z-10 px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-md">About Brimms Travels</h1>
          <p className="text-lg text-gray-200">Connecting you to the world, one journey at a time.</p>
        </div>
      </div>

      <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-gray-900 dark:text-white">
        <div className="prose dark:prose-invert lg:prose-xl mx-auto">
          <p className="lead text-xl text-gray-600 dark:text-gray-300 mb-8 text-center">
             We make travel simple, affordable, and memorable.
          </p>
          
          <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" alt="Team Meeting" className="w-full rounded-2xl shadow-xl mb-10" />

          <h3 className="text-2xl font-bold mb-4">Our Story</h3>
          <p className="mb-6">
            Established in the heart of Abuja, {COMPANY_INFO.name} has grown from a small ticketing office to a premier international travel management company. We believe travel is more than just moving from point A to B; it's about the experience, the culture, and the memories created along the way.
          </p>

          <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
          <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
              <li><strong>Expertise:</strong> Our team consists of seasoned travelers and certified agents.</li>
              <li><strong>Support:</strong> 24/7 customer support during your trip.</li>
              <li><strong>Value:</strong> Exclusive deals with hotels and airlines to give you the best price.</li>
              <li><strong>Personalization:</strong> Tailor-made itineraries to suit your specific desires.</li>
          </ul>

          <h3 className="text-2xl font-bold mb-4">Visit Us</h3>
          <p className="mb-2">
              We love meeting our clients! Stop by our office at:
          </p>
          <address className="not-italic bg-gray-100 dark:bg-gray-800 p-6 rounded-lg border-l-4 border-brand-blue">
              {COMPANY_INFO.address}<br/>
              <strong>Hours:</strong> {COMPANY_INFO.hours}
          </address>
        </div>
      </div>
    </div>
  );
};

export default About;