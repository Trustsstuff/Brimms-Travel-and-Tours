import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Globe, ShieldCheck, CreditCard, Calendar } from 'lucide-react';
import { PACKAGES, DESTINATIONS, TESTIMONIALS, BLOG_POSTS } from '../constants';
import { QuickBookingForm } from '../components/BookingSection';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col gap-20 pb-20">
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-[85vh] text-center z-10 bg-[url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat bg-fixed">
        <div className="absolute inset-0 bg-brand-dark/60"></div>
        <div className="relative max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          <span className="inline-block py-1.5 px-4 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 text-sm font-semibold tracking-wide mb-4">
             Explore the World with Brimms
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight drop-shadow-md">
            Your Next Adventure <br/><span className="text-accent-orange">Starts Here</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
            Discover breathtaking destinations, curated packages, and seamless booking experiences. We make your dream vacation a reality.
          </p>
          
          <div className="w-full max-w-5xl mx-auto mt-12">
            <QuickBookingForm />
          </div>
        </div>
      </section>

      {/* Popular Packages Preview */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex justify-between items-end mb-12">
          <div>
             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">Popular Packages</h2>
             <p className="text-gray-600 dark:text-gray-400">Handpicked luxury and adventure for you.</p>
          </div>
          <Link to="/packages" className="hidden md:flex items-center gap-2 text-brand-blue font-semibold hover:gap-3 transition-all">
            View all packages <ArrowRight size={20} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PACKAGES.slice(0, 3).map(pkg => (
            <div key={pkg.id} className="group bg-white dark:bg-dark-card rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/80 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700">
                  {pkg.durationDays} Days
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                   <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-brand-blue transition-colors">{pkg.title}</h3>
                   <div className="flex items-center gap-1 text-yellow-400 text-sm font-bold">
                     <Star size={14} fill="currentColor" /> {pkg.rating}
                   </div>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 line-clamp-2">{pkg.description}</p>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-400 uppercase">Starting from</span>
                    <span className="text-2xl font-bold text-brand-blue">${pkg.price}</span>
                  </div>
                  <Link to={`/booking?package=${pkg.id}`} className="px-5 py-2.5 bg-brand-dark dark:bg-white text-white dark:text-brand-dark text-sm font-semibold rounded-lg hover:bg-brand-blue dark:hover:bg-gray-200 transition-colors shadow-md">
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
            <Link to="/packages" className="inline-flex items-center gap-2 text-brand-blue font-semibold">
                View all packages <ArrowRight size={20} />
            </Link>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="bg-gray-50 dark:bg-dark-card/30 py-20">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">Latest Travel Tips</h2>
                <p className="text-gray-600 dark:text-gray-400">Expert advice and inspiration for your next journey.</p>
              </div>
              <Link to="/blog" className="hidden md:flex items-center gap-2 text-brand-blue font-semibold hover:gap-3 transition-all">
                Read the blog <ArrowRight size={20} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {BLOG_POSTS.slice(0, 3).map(post => (
                <Link to={`/blog/${post.id}`} key={post.id} className="group bg-white dark:bg-dark-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-4 left-4 bg-accent-orange text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-gray-400 text-xs mb-3">
                      <Calendar size={14} /> {post.date}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-brand-blue transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                    <span className="text-brand-blue font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read More <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
             <div className="mt-8 text-center md:hidden">
                <Link to="/blog" className="inline-flex items-center gap-2 text-brand-blue font-semibold">
                    Read the blog <ArrowRight size={20} />
                </Link>
            </div>
        </div>
      </section>

      {/* Destinations Preview */}
      <section className="py-20">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Top Destinations</h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Explore our most requested locations around the globe.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
                {DESTINATIONS.slice(0, 4).map(dest => (
                    <Link to="/destinations" key={dest.id} className="relative group overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer shadow-lg">
                        <img src={dest.image} alt={dest.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity"></div>
                        <div className="absolute bottom-0 left-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform">
                            <h3 className="text-2xl font-bold text-white mb-1">{dest.name}</h3>
                            <p className="text-gray-300 text-sm">{dest.country}</p>
                            <span className="inline-block mt-2 text-accent-orange text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">Explore &rarr;</span>
                        </div>
                    </Link>
                ))}
            </div>
             <div className="text-center mt-12">
                 <Link to="/destinations" className="inline-block border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white px-8 py-3 rounded-full font-bold hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all">
                     View All Destinations
                 </Link>
             </div>
        </div>
      </section>

      {/* Stats & Features (About Snippet) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full bg-blue-50 dark:bg-dark-card/20 rounded-3xl py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative px-6 md:px-12">
                  <div className="absolute inset-0 bg-brand-blue rounded-3xl transform rotate-3 blur-sm opacity-20"></div>
                  <img src="https://picsum.photos/id/1015/600/600" alt="Traveler" className="relative rounded-3xl shadow-xl z-10 w-full" />
                  <div className="absolute -bottom-10 -right-0 md:-right-6 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl z-20 hidden lg:block border border-gray-100 dark:border-gray-700">
                      <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                              <ShieldCheck size={24} />
                          </div>
                          <div>
                              <p className="font-bold text-gray-900 dark:text-white text-lg">100% Safe</p>
                              <p className="text-gray-500 text-sm">Trusted by 1000+ travelers</p>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="order-1 md:order-2 space-y-6 px-6 md:px-12">
                  <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                      We Make Your Travel <br/><span className="text-brand-blue">Comfortable</span> & Safe
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 text-lg">
                      Brimms Travels And Tours is dedicated to providing the best travel experience. Located in Abuja, we serve travelers worldwide with passion and precision.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                      <div className="flex items-start gap-3">
                          <Globe className="w-8 h-8 text-accent-orange flex-shrink-0" />
                          <div>
                              <h4 className="font-bold text-gray-900 dark:text-white">Worldwide Coverage</h4>
                              <p className="text-sm text-gray-500">Destinations across all continents.</p>
                          </div>
                      </div>
                       <div className="flex items-start gap-3">
                          <CreditCard className="w-8 h-8 text-brand-blue flex-shrink-0" />
                          <div>
                              <h4 className="font-bold text-gray-900 dark:text-white">Affordable Pricing</h4>
                              <p className="text-sm text-gray-500">Best price guaranteed for packages.</p>
                          </div>
                      </div>
                  </div>
                  
                  <div className="pt-6">
                      <Link to="/about" className="text-white bg-brand-blue px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors shadow-lg">
                          Learn More About Us
                      </Link>
                  </div>
              </div>
          </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white dark:bg-dark-bg py-20 relative overflow-hidden">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10">
            <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-16">What Travelers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {TESTIMONIALS.map(t => (
                    <div key={t.id} className="bg-gray-50 dark:bg-dark-card p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 relative hover:shadow-xl transition-shadow">
                        <div className="absolute -top-6 left-8">
                            <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full border-4 border-white dark:border-dark-card shadow-md" />
                        </div>
                        <div className="mt-6">
                            <div className="flex text-yellow-400 mb-3">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={14} fill={i < t.rating ? "currentColor" : "none"} className={i < t.rating ? "" : "text-gray-300"} />
                                ))}
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 italic mb-4">"{t.comment}"</p>
                            <div>
                                <h4 className="font-bold text-gray-900 dark:text-white">{t.name}</h4>
                                <span className="text-xs text-brand-blue font-medium">{t.role}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
          <div className="bg-gradient-to-r from-brand-dark to-blue-900 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">
               <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
               <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">Ready for your next adventure?</h2>
               <p className="text-blue-100 mb-8 max-w-2xl mx-auto relative z-10">
                   Book your trip today and get exclusive discounts on your first package.
               </p>
               <Link to="/booking" className="relative z-10 inline-block bg-accent-orange text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-accent-hover hover:scale-105 transition-all shadow-xl">
                   Start Booking Now
               </Link>
          </div>
      </section>
    </div>
  );
};

export default Home;