import React from 'react';
import { COMPANY_INFO } from '../constants';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="animate-fade-in">
       {/* Hero Section */}
       <div className="relative h-[40vh] min-h-[300px] w-full flex items-center justify-center text-center bg-cover bg-center bg-no-repeat bg-fixed" style={{backgroundImage: "url('https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=2071&auto=format&fit=crop')"}}>
        <div className="absolute inset-0 bg-brand-dark/60"></div>
        <div className="relative z-10 px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-md">Get in Touch</h1>
          <p className="text-lg text-gray-200">Have questions? We're here to help you plan your next trip.</p>
        </div>
      </div>

      <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
              <div className="bg-white dark:bg-dark-card p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
                  <div className="space-y-6">
                      <div className="flex items-start gap-4">
                          <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full text-brand-blue">
                              <MapPin size={24} />
                          </div>
                          <div>
                              <h4 className="font-bold text-gray-900 dark:text-white">Our Office</h4>
                              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{COMPANY_INFO.address}</p>
                              <p className="text-gray-500 text-xs mt-1">{COMPANY_INFO.areasServed}</p>
                          </div>
                      </div>

                       <div className="flex items-start gap-4">
                          <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full text-green-600">
                              <Phone size={24} />
                          </div>
                          <div>
                              <h4 className="font-bold text-gray-900 dark:text-white">Phone</h4>
                              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{COMPANY_INFO.phone}</p>
                              <p className="text-gray-500 text-xs mt-1">Mon-Sat: 8am - 6pm</p>
                          </div>
                      </div>

                       <div className="flex items-start gap-4">
                          <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full text-purple-600">
                              <Mail size={24} />
                          </div>
                          <div>
                              <h4 className="font-bold text-gray-900 dark:text-white">Email</h4>
                              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">info@brimmstravels.com</p>
                              <p className="text-gray-600 dark:text-gray-400 text-sm">support@brimmstravels.com</p>
                          </div>
                      </div>
                  </div>
              </div>
              
              <div className="h-64 rounded-2xl overflow-hidden shadow-lg">
                  <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.8166707323537!2d7.4262!3d9.0765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDQnMzUuNCJOIDfCsDI1JzM0LjMiRQ!5e0!3m2!1sen!2sng!4v1634567890123!5m2!1sen!2sng" 
                      width="100%" 
                      height="100%" 
                      style={{border:0}} 
                      allowFullScreen={true} 
                      loading="lazy"
                      title="Map"
                      className="filter grayscale hover:grayscale-0 transition-all duration-500"
                  ></iframe>
              </div>
          </div>

          {/* Form */}
          <div className="bg-white dark:bg-dark-card p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send us a Message</h3>
              <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">First Name</label>
                          <input type="text" className="w-full p-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-brand-blue outline-none text-gray-900 dark:text-white" />
                      </div>
                      <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Last Name</label>
                          <input type="text" className="w-full p-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-brand-blue outline-none text-gray-900 dark:text-white" />
                      </div>
                  </div>
                  <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                      <input type="email" className="w-full p-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-brand-blue outline-none text-gray-900 dark:text-white" />
                  </div>
                  <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label>
                       <select className="w-full p-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-brand-blue outline-none text-gray-900 dark:text-white">
                           <option>General Inquiry</option>
                           <option>Booking Issue</option>
                           <option>Partnership</option>
                       </select>
                  </div>
                  <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                      <textarea className="w-full p-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-brand-blue outline-none text-gray-900 dark:text-white h-32"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-brand-blue text-white font-bold py-3 rounded-lg hover:bg-blue-800 transition-colors shadow-lg">
                      Send Message
                  </button>
              </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;