import { TravelPackage, Testimonial, Destination, BlogPost } from './types';

export const COMPANY_INFO = {
  name: "Brimms Travels And Tours",
  address: "Suite D04 Datunchi Plaza Plot 1 Ashiek Jarma Street, Off Mike Akihige Road, Jabi, 900211",
  areasServed: "Abuja Municipal Area Council and nearby areas",
  hours: "Open · Closes 6 pm",
  phone: "0703 576 6199",
  rating: 4.7,
  reviewCount: 10
};

export const PACKAGES: TravelPackage[] = [
  {
    id: 'p1',
    title: "Dubai Luxury Escape",
    destination: "Dubai, UAE",
    price: 1200,
    durationDays: 5,
    image: "https://images.unsplash.com/photo-1512453979798-5ea904ac6605?q=80&w=2070&auto=format&fit=crop",
    rating: 4.9,
    reviews: 120,
    description: "Experience the glitz and glamour of Dubai with our premium luxury package.",
    amenities: ["5-Star Hotel", "Desert Safari", "Burj Khalifa Tour", "Airport Transfer"],
    itinerary: [
      { day: 1, title: "Arrival", description: "Private transfer to Atlantis The Palm." },
      { day: 2, title: "City Tour", description: "Visit Dubai Mall and Burj Khalifa." },
      { day: 3, title: "Desert Safari", description: "Evening dune bashing and BBQ dinner." },
      { day: 4, title: "Leisure", description: "Free time for shopping or beach." },
      { day: 5, title: "Departure", description: "Transfer to airport." }
    ]
  },
  {
    id: 'p2',
    title: "Paris Romantic Getaway",
    destination: "Paris, France",
    price: 1800,
    durationDays: 7,
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop",
    rating: 4.8,
    reviews: 95,
    description: "The perfect romantic trip for couples in the city of love.",
    amenities: ["Eiffel Tower Dinner", "Seine Cruise", "Museum Pass", "Breakfast Included"],
    itinerary: [
      { day: 1, title: "Bienvenue", description: "Arrival and check-in near Champs-Élysées." },
      { day: 2, title: "Icons", description: "Eiffel Tower and Louvre Museum." },
      { day: 3, title: "Versailles", description: "Day trip to the Palace of Versailles." },
      { day: 4, title: "Montmartre", description: "Walking tour of the artistic district." },
      { day: 5, title: "Leisure", description: "Explore local cafes." },
      { day: 6, title: "Cruise", description: "Sunset cruise on the Seine." },
      { day: 7, title: "Au Revoir", description: "Departure." }
    ]
  },
  {
    id: 'p3',
    title: "Maldives Island Bliss",
    destination: "Malé, Maldives",
    price: 2500,
    durationDays: 6,
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2065&auto=format&fit=crop",
    rating: 5.0,
    reviews: 45,
    description: "Relax in an overwater bungalow with crystal clear waters.",
    amenities: ["All Inclusive", "Snorkeling Gear", "Spa Treatment", "Seaplane Transfer"],
    itinerary: [
      { day: 1, title: "Arrival", description: "Seaplane transfer to the resort." },
      { day: 2, title: "Water Sports", description: "Snorkeling and kayaking." },
      { day: 3, title: "Relaxation", description: "Full day spa and wellness." },
      { day: 4, title: "Island Hopping", description: "Visit local islands." },
      { day: 5, title: "Sunset Fishing", description: "Traditional Maldivian fishing." },
      { day: 6, title: "Departure", description: "Return to Malé airport." }
    ]
  },
    {
    id: 'p4',
    title: "Safari Adventure",
    destination: "Nairobi, Kenya",
    price: 1500,
    durationDays: 5,
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2068&auto=format&fit=crop",
    rating: 4.7,
    reviews: 60,
    description: "Witness the big five in their natural habitat.",
    amenities: ["Game Drives", "Luxury Tents", "All Meals", "Guide"],
    itinerary: [
      { day: 1, title: "Arrival", description: "Transfer to Masai Mara." },
      { day: 2, title: "Game Drive", description: "Full day game drive." },
      { day: 3, title: "Culture", description: "Visit a Masai village." },
      { day: 4, title: "Nature Walk", description: "Guided walking safari." },
      { day: 5, title: "Departure", description: "Return to Nairobi." }
    ]
  }
];

export const DESTINATIONS: Destination[] = [
  { id: 'd1', name: 'Dubai', country: 'UAE', image: 'https://images.unsplash.com/photo-1546412414-e1885259563a?q=80&w=1974&auto=format&fit=crop', packageCount: 12, description: "Modern architecture and nightlife." },
  { id: 'd2', name: 'Paris', country: 'France', image: 'https://images.unsplash.com/photo-1499856871940-a09627c6dcf6?q=80&w=2020&auto=format&fit=crop', packageCount: 8, description: "Art, fashion, and culture." },
  { id: 'd3', name: 'Bali', country: 'Indonesia', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2038&auto=format&fit=crop', packageCount: 15, description: "Beaches, coral reefs and temples." },
  { id: 'd4', name: 'London', country: 'UK', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop', packageCount: 10, description: "History and modern culture clash." },
  { id: 'd5', name: 'Tokyo', country: 'Japan', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1994&auto=format&fit=crop', packageCount: 7, description: "Neon lights and ancient traditions." },
  { id: 'd6', name: 'Santorini', country: 'Greece', image: 'https://images.unsplash.com/photo-1613395877344-13d4c79e4284?q=80&w=2070&auto=format&fit=crop', packageCount: 5, description: "White buildings and blue domes." },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: "Amina Yusuf",
    role: "Frequent Traveler",
    comment: "Brimms Travels planned my honeymoon perfectly. The attention to detail was immaculate!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 't2',
    name: "John Doe",
    role: "Business Traveler",
    comment: "Reliable and fast. They handled my visa and flight bookings without any stress.",
    rating: 4,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 't3',
    name: "Sarah Mike",
    role: "Adventure Seeker",
    comment: "The Kenya safari package was a dream come true. Highly recommend Brimms!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: "Packing Essentials for International Travel",
    excerpt: "Don't let a heavy suitcase weigh you down. Here is the ultimate guide to packing smart and traveling light for your next international adventure.",
    author: "Brimms Editorial Team",
    date: "May 15, 2025",
    category: "Travel Tips",
    image: "https://images.unsplash.com/photo-1565514020176-db79238b6d87?q=80&w=2070&auto=format&fit=crop",
    content: `
      <p class="mb-4">Traveling internationally is an exhilarating experience, but the stress of packing can sometimes dampen the excitement. Whether you are a first-time flyer or a seasoned globetrotter, the art of packing is a skill that can always be refined. Overpacking is a common mistake that leads to heavy bags, extra fees, and exhaustion. Conversely, underpacking can leave you scrambling to find essentials in a foreign country. This guide covers the absolute essentials you need to pack for a smooth international trip.</p>
      
      <h3 class="text-2xl font-bold mb-3 mt-6 text-gray-900 dark:text-white">1. The Right Luggage Strategy</h3>
      <p class="mb-4">Before you even put an item in your bag, you need to choose the right bag. For international travel, a durable, lightweight suitcase with 360-degree wheels is a game-changer. If you plan on moving around a lot, considering a travel backpack might be more practical. Always check your airline's baggage allowance to avoid hefty fees at the check-in counter. A good rule of thumb is to bring a carry-on with your essentials (medications, change of clothes, documents) just in case your checked luggage gets lost.</p>

      <h3 class="text-2xl font-bold mb-3 mt-6 text-gray-900 dark:text-white">2. Essential Documents</h3>
      <p class="mb-4">Your passport is your most valuable possession abroad. Ensure it is valid for at least six months beyond your return date. Make physical copies of your passport, visa, travel insurance policy, and itinerary. Keep one set in your luggage and another with a trusted contact back home. Additionally, having digital copies stored securely on your phone or cloud storage is a lifesaver if you lose the physical ones.</p>

      <h3 class="text-2xl font-bold mb-3 mt-6 text-gray-900 dark:text-white">3. Clothing: The Capsule Wardrobe</h3>
      <p class="mb-4">Stick to a neutral color palette so you can mix and match tops and bottoms. Layers are your best friend, especially if you are traveling between different climates or enduring freezing airplane cabins. Pack breathable fabrics like cotton or moisture-wicking synthetics. Don't forget comfortable walking shoes—you will likely be doing more walking than usual. A scarf is a versatile accessory that can serve as a blanket, a fashion statement, or a modest covering for visiting religious sites.</p>

      <h3 class="text-2xl font-bold mb-3 mt-6 text-gray-900 dark:text-white">4. Toiletries and Medications</h3>
      <p class="mb-4">Remember the 3-1-1 rule for carry-ons: liquids must be in containers of 3.4 ounces (100ml) or less, and all must fit in a single quart-sized bag. Invest in solid toiletries like shampoo bars or solid cologne to save space and avoid spills. Always pack a small first-aid kit with painkillers, band-aids, and any prescription medications you need. It is often easier to bring them from home than to navigate foreign pharmacies.</p>

      <h3 class="text-2xl font-bold mb-3 mt-6 text-gray-900 dark:text-white">5. Tech and Entertainment</h3>
      <p class="mb-4">A universal travel adapter is non-negotiable. Different countries use different plug shapes and voltages, and you don't want to fry your expensive electronics. A portable power bank is also essential for keeping your phone charged during long days of exploring. Noise-canceling headphones can make long flights much more bearable. Finally, download maps, translation apps, and entertainment (movies, books) onto your device before you leave, as Wi-Fi isn't always reliable.</p>

      <p class="mb-4 mt-6">By focusing on these essentials, you can travel lighter and freer. The less you have to carry, the more energy you can devote to the amazing experiences awaiting you. Happy travels!</p>
    `
  },
  {
    id: 'b2',
    title: "Top 5 Budget Destinations for 2025",
    excerpt: "Dreaming of travel but worried about the cost? Discover these five stunning destinations where your money goes further without compromising on the experience.",
    author: "Sarah Mike",
    date: "June 02, 2025",
    category: "Destinations",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop",
    content: `
      <p class="mb-4">There is a common misconception that international travel requires a small fortune. While luxury trips are wonderful, some of the world's most vibrant, culturally rich, and naturally beautiful destinations are surprisingly affordable. If you are looking to stretch your budget in 2025 without sacrificing adventure, these five destinations should be at the top of your list.</p>

      <h3 class="text-2xl font-bold mb-3 mt-6 text-gray-900 dark:text-white">1. Vietnam</h3>
      <p class="mb-4">Vietnam remains one of the best-value destinations in Southeast Asia. You can find delicious street food (like Pho or Banh Mi) for under $2, and a comfortable private room in a guesthouse often costs less than $20 a night. From the chaotic charm of Hanoi to the lantern-lit streets of Hoi An and the stunning limestone karsts of Ha Long Bay, Vietnam offers incredible diversity at a fraction of the cost of Western destinations.</p>

      <h3 class="text-2xl font-bold mb-3 mt-6 text-gray-900 dark:text-white">2. Portugal</h3>
      <p class="mb-4">While Western Europe can be pricey, Portugal stands out as an affordable gem. Lisbon and Porto offer rich history, stunning tile work, and incredible wine for much less than Paris or London. You can enjoy a coffee and a pastel de nata for a couple of euros, and train travel between cities is reasonably priced. The Algarve coast offers some of the most beautiful beaches in Europe without the hefty price tag of the French Riviera.</p>

      <h3 class="text-2xl font-bold mb-3 mt-6 text-gray-900 dark:text-white">3. Colombia</h3>
      <p class="mb-4">Colombia has shed its past reputation to become a top tourist destination, and it remains very affordable. Medellin, the "City of Eternal Spring," offers great weather, a modern metro system, and vibrant culture. You can explore the coffee region, hike in Tyrona National Park, or wander the colorful streets of Cartagena. Domestic flights are cheap, and the exchange rate is generally favorable for international visitors.</p>

      <h3 class="text-2xl font-bold mb-3 mt-6 text-gray-900 dark:text-white">4. Turkey</h3>
      <p class="mb-4">Turkey bridges the gap between Europe and Asia, offering a unique blend of cultures. The current exchange rate makes it an incredibly affordable destination for travelers. You can visit world-class historical sites like the Hagia Sophia and Ephesus, take a hot air balloon ride over Cappadocia, and feast on kebabs and baklava without breaking the bank. Public transport is extensive and cheap, making it easy to explore.</p>

      <h3 class="text-2xl font-bold mb-3 mt-6 text-gray-900 dark:text-white">5. Albania</h3>
      <p class="mb-4">Often referred to as "The Maldives of Europe" for its crystal-clear waters, Albania is a hidden treasure. It offers stunning beaches along the Albanian Riviera that rival Greece but at a fraction of the cost. The food is fresh and Mediterranean, the people are incredibly hospitable, and the mountain ranges offer spectacular hiking opportunities. It is one of the last true budget frontiers in Europe.</p>

      <p class="mb-4 mt-6">Travel doesn't have to wait until you win the lottery. With a little research and an adventurous spirit, you can explore these amazing countries and create unforgettable memories on a budget.</p>
    `
  },
  {
    id: 'b3',
    title: "Navigating Airport Security Like a Pro",
    excerpt: "Airport security lines can be the most stressful part of travel. Learn the tips and tricks to breeze through screening and get to your gate stress-free.",
    author: "John Doe",
    date: "June 20, 2025",
    category: "Travel Guides",
    image: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=2070&auto=format&fit=crop",
    content: `
      <p class="mb-4">For many travelers, the security checkpoint is the most dreaded part of the airport experience. Long lines, confusing rules, and the pressure to unpack and repack quickly can cause anxiety. However, with the right preparation and mindset, you can navigate airport security efficiently and stress-free. Here is how to handle the checkpoint like a seasoned pro.</p>

      <h3 class="text-2xl font-bold mb-3 mt-6 text-gray-900 dark:text-white">1. Dress for Success</h3>
      <p class="mb-4">Your outfit choice can significantly speed up your screening process. Wear slip-on shoes if possible, so you don't have to fumble with laces. Avoid belts with metal buckles, excessive jewelry, or clothing with lots of metal buttons or zippers. If you wear a jacket or bulky hoodie, be prepared to take it off. Socks are a must—you don't want to walk barefoot on the airport floor!</p>

      <h3 class="text-2xl font-bold mb-3 mt-6 text-gray-900 dark:text-white">2. Pack Your Carry-On Strategically</h3>
      <p class="mb-4">The key to speed is accessibility. Pack your liquids bag (remember the 3-1-1 rule!) in an outer pocket or at the very top of your bag so you can grab it instantly. The same goes for large electronics like laptops and tablets. If you have to dig to the bottom of your backpack to find your computer, you are holding up the line. Keep your cords organized so they don't look like a suspicious jumble on the X-ray.</p>

      <h3 class="text-2xl font-bold mb-3 mt-6 text-gray-900 dark:text-white">3. Have Your Documents Ready</h3>
      <p class="mb-4">Before you even get to the conveyor belt, you will need to show your boarding pass and ID to the agent. Don't be the person fishing through their bag when it is their turn. Have them in your hand or a readily accessible pocket. Once you pass the document check, put them away securely immediately so you don't leave them in a bin.</p>

      <h3 class="text-2xl font-bold mb-3 mt-6 text-gray-900 dark:text-white">4. Bin Etiquette</h3>
      <p class="mb-4">When you reach the rollers, be efficient. Grab two or three bins if you need them. Put your jacket and shoes in one, your electronics in another, and your bag in the last one. Don't stack items on top of your laptop; it needs a clear view. Push your bins onto the belt as soon as you are done loading them to keep things moving.</p>

      <h3 class="text-2xl font-bold mb-3 mt-6 text-gray-900 dark:text-white">5. Recompose Yourself Away from the Line</h3>
      <p class="mb-4">Once your items come out of the scanner, grab your bins and move to the designated "recomposure area" (usually a set of benches or tables past the checkpoint). Do not stand at the end of the conveyor belt putting your shoes and belt back on while people's bags pile up behind you. Move away, take a breath, and reorganize yourself at your own pace.</p>

      <p class="mb-4 mt-6">Security is there for everyone's safety, and a little patience goes a long way. By preparing ahead of time, you make the process smoother for yourself and everyone around you.</p>
    `
  },
  {
    id: 'b4',
    title: "Solo Travel 101: Empowering Your First Journey Alone",
    excerpt: "Traveling alone can be daunting, but it is also one of the most rewarding experiences. Here is a comprehensive guide to staying safe, making friends, and embracing the freedom of solo travel.",
    author: "Brimms Editorial Team",
    date: "July 12, 2025",
    category: "Travel Guides",
    image: "https://images.unsplash.com/photo-1520106212299-d99c443e4568?q=80&w=2074&auto=format&fit=crop",
    content: `
      <p class="mb-4">The idea of traveling alone evokes a mix of emotions: excitement for the freedom it promises, and anxiety about the unknown. Yet, solo travel is one of the fastest-growing trends in the tourism industry. It offers a unique opportunity for self-discovery, allowing you to move at your own pace and indulge your specific interests without compromise. If you are considering your first solo trip but feeling hesitant, this guide will help you navigate the challenges and embrace the joys of exploring the world on your own terms.</p>

      <h3 class="text-2xl font-bold mb-3 mt-6 text-gray-900 dark:text-white">1. Choosing the Right Destination</h3>
      <p class="mb-4">For your first solo adventure, selecting the right destination is crucial for building confidence. Look for countries with a well-established tourism infrastructure, reliable public transportation, and a reputation for safety. Places like Japan, Iceland, New Zealand, and Portugal are consistently ranked as top destinations for solo travelers due to their low crime rates and friendly locals. Language can also be a factor; visiting a country where you speak the language (or where English is widely spoken) can significantly reduce stress.</p>

      <h3 class="text-2xl font-bold mb-3 mt-6 text-gray-900 dark:text-white">2. Safety First: Trusting Your Instincts</h3>
      <p class="mb-4">Safety is the number one concern for solo travelers, and rightfully so. The golden rule is to trust your intuition; if a situation or a person feels "off," remove yourself immediately without worrying about being polite. Always share your itinerary with a trusted friend or family member back home and check in regularly. Avoid arriving in a new city late at night, and research common scams in your destination beforehand. When exploring, walk with purpose and confidence—looking like you know where you are going (even if you don't) makes you less of a target.</p>

      <h3 class="text-2xl font-bold mb-3 mt-6 text-gray-900 dark:text-white">3. The Art of Meeting People</h3>
      <p class="mb-4">Traveling alone doesn't mean being lonely. In fact, you are often more approachable when you are by yourself. Hostels are fantastic hubs for meeting fellow travelers, even if you book a private room. Many offer communal dinners or walking tours. If hostels aren't your style, consider joining day tours, cooking classes, or using apps like Meetup to find local events. A simple smile and a "hello" can spark conversations in cafes or museums that lead to lifelong friendships.</p>

      <h3 class="text-2xl font-bold mb-3 mt-6 text-gray-900 dark:text-white">4. Dining Solo with Confidence</h3>
      <p class="mb-4">For many, the prospect of eating alone in a restaurant is intimidating. However, it can be a delightful experience. Bring a book or a journal if you feel self-conscious, or sit at the bar where you can chat with the bartender or other patrons. Lunch is often a more casual and less crowded time to try popular restaurants. Remember, most people are too focused on their own meals and conversations to notice that you are dining solo. Treat it as a date with yourself—order the dessert and enjoy the ambiance.</p>

      <h3 class="text-2xl font-bold mb-3 mt-6 text-gray-900 dark:text-white">5. Embracing the Freedom</h3>
      <p class="mb-4">The greatest gift of solo travel is absolute freedom. You can wake up whenever you want, change your plans on a whim, and spend hours in a museum without worrying about boring a companion. This autonomy builds resilience and self-reliance. You will learn to solve problems, navigate foreign systems, and make decisions entirely on your own. These skills translate back into your daily life, leaving you more confident and capable than before.</p>

      <p class="mb-4 mt-6">Solo travel is a journey outward into the world and inward into yourself. It pushes you out of your comfort zone and rewards you with a sense of empowerment that is hard to find elsewhere. So pack your bags, take a deep breath, and step out onto the road less traveled—you might just find it leads exactly where you needed to go.</p>
    `
  },
  {
    id: 'b5',
    title: "Sustainable Tourism: How to Travel Responsibly in 2025",
    excerpt: "As we explore the world, we must also protect it. Discover practical ways to reduce your environmental footprint and support local communities while traveling.",
    author: "Brimms Editorial Team",
    date: "July 25, 2025",
    category: "Sustainable Travel",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop",
    content: `
      <p class="mb-4">Tourism allows us to witness the beauty of our planet, but it also places a significant strain on the environment and local communities. From carbon emissions to over-tourism and plastic pollution, the impact of travel is undeniable. However, this doesn't mean we should stop exploring. Instead, we must evolve into responsible travelers who leave a positive impact on the destinations we visit. Sustainable tourism is not just a buzzword; it is a necessary shift in mindset and behavior. Here is how you can travel more responsibly in 2025 and beyond.</p>

      <h3 class="text-2xl font-bold mb-3 mt-6 text-gray-900 dark:text-white">1. Mindful Transportation Choices</h3>
      <p class="mb-4">Getting to your destination often accounts for the largest part of your travel carbon footprint. Whenever possible, choose trains or buses over short-haul flights, as they emit significantly less CO2. In Europe and parts of Asia, high-speed rail networks offer a scenic and efficient alternative to flying. Once you arrive, explore the city by walking, renting a bike, or using public transportation rather than relying on taxis or rental cars. If you must fly, look for airlines with robust carbon offset programs and try to book direct flights, as takeoffs and landings burn the most fuel.</p>

      <h3 class="text-2xl font-bold mb-3 mt-6 text-gray-900 dark:text-white">2. Supporting the Local Economy</h3>
      <p class="mb-4">Tourism leakage—where money spent by tourists leaves the destination (often to international corporations)—is a major issue. To ensure your spending benefits the local community, prioritize locally owned hotels, guesthouses, and restaurants over international chains. Buy souvenirs from local artisans rather than mass-produced trinkets at the airport. Hire local guides who can offer authentic insights and whose income directly supports their families. By keeping your money local, you help preserve the cultural heritage and economic vitality of the place you are visiting.</p>

      <h3 class="text-2xl font-bold mb-3 mt-6 text-gray-900 dark:text-white">3. Reducing Plastic Waste</h3>
      <p class="mb-4">Plastic pollution is a global crisis, and tourists are often significant contributors. Pack a reusable water bottle and a water purification system (like a filter bottle or UV pen) to avoid buying endless plastic bottles, especially in countries where tap water isn't potable. Bring a reusable shopping bag for markets and a set of reusable cutlery for street food. Refuse single-use straws and plastic bags whenever offered. Small individual actions, when multiplied by millions of travelers, can make a massive difference in reducing landfill waste and ocean pollution.</p>

      <h3 class="text-2xl font-bold mb-3 mt-6 text-gray-900 dark:text-white">4. Ethical Wildlife Interactions</h3>
      <p class="mb-4">Animal tourism is fraught with ethical issues. Avoid attractions that allow you to touch, ride, or take selfies with wild animals, such as elephant riding camps or tiger temples. These animals are often subjected to cruel training methods and poor living conditions. Instead, seek out genuine sanctuaries and national parks where you can observe wildlife in their natural habitat from a respectful distance. Do your research beforehand to ensure any "sanctuary" you visit is a legitimate conservation organization that prioritizes animal welfare over profit.</p>

      <h3 class="text-2xl font-bold mb-3 mt-6 text-gray-900 dark:text-white">5. Respecting Local Culture and Customs</h3>
      <p class="mb-4">Sustainability also encompasses cultural respect. Take the time to learn about the local customs, dress codes, and etiquette before you arrive. Dress modestly when visiting religious sites, ask for permission before taking photos of people, and learn a few basic phrases in the local language. Be patient and open-minded when things operate differently than back home. Remember that you are a guest in someone else's home, and your behavior shapes their perception of tourists.</p>

      <p class="mb-4 mt-6">Sustainable travel requires conscious effort and occasional inconvenience, but the rewards are immense. It leads to deeper connections with the places and people you visit and ensures that these beautiful destinations remain vibrant for future generations to enjoy. Let's travel with purpose and leave footprints of kindness, not waste.</p>
    `
  },
  {
    id: 'b6',
    title: "Hidden Gems of Southeast Asia: Beyond the Tourist Trail",
    excerpt: "Southeast Asia is a traveler's paradise, but popular spots can get overcrowded. Escape the masses and discover these five breathtaking hidden gems.",
    author: "Sarah Mike",
    date: "August 05, 2025",
    category: "Destinations",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2039&auto=format&fit=crop",
    content: `
      <p class="mb-4">Southeast Asia attracts millions of visitors annually, drawn by its stunning landscapes, rich history, and affordable costs. However, icons like Bali, Phuket, and Angkor Wat can suffer from over-tourism, diminishing the serenity many travelers seek. Fortunately, the region is vast and filled with lesser-known treasures that offer the same beauty and culture without the crushing crowds. If you are looking to get off the beaten path, here are five hidden gems in Southeast Asia that deserve a spot on your itinerary.</p>

      <h3 class="text-2xl font-bold mb-3 mt-6 text-gray-900 dark:text-white">1. Luang Prabang, Laos</h3>
      <p class="mb-4">While gaining popularity, Luang Prabang still retains a sleepy, spiritual atmosphere compared to its neighbors. Nestled at the confluence of the Mekong and Nam Khan rivers, this UNESCO World Heritage city is a blend of traditional Lao wooden houses and French colonial architecture. Wake up at dawn to witness the silent alms-giving ceremony, where hundreds of monks walk through the streets. Visit the stunning Kuang Si Falls, with their turquoise pools cascading through the jungle. The night market here is one of the calmest and most authentic in Asia.</p>

      <h3 class="text-2xl font-bold mb-3 mt-6 text-gray-900 dark:text-white">2. Nusa Penida, Indonesia</h3>
      <p class="mb-4">Just a short boat ride from the bustling Bali, Nusa Penida feels like a world away. It is rugged, wild, and dramatically beautiful. The island is famous for Kelingking Beach, where the cliff formation resembles a T-Rex head, offering one of the most spectacular coastal views in the world. The roads can be bumpy and the infrastructure is less developed than Bali, but that is part of the charm. Snorkel with giant manta rays at Manta Point and enjoy the raw, untouched nature of this island paradise.</p>

      <h3 class="text-2xl font-bold mb-3 mt-6 text-gray-900 dark:text-white">3. Ella, Sri Lanka</h3>
      <p class="mb-4">High in the misty tea country of Sri Lanka lies the small town of Ella. Famous for the Nine Arch Bridge, a stunning colonial-era viaduct surrounded by lush jungle, Ella is a hiker's dream. You can trek up Little Adam's Peak for panoramic views or challenge yourself with a hike to Ella Rock. The journey to get here—taking the famous blue train from Kandy—is considered one of the most beautiful train rides in the world. The town itself has a laid-back vibe with plenty of cafes serving fresh local tea and curry.</p>

      <h3 class="text-2xl font-bold mb-3 mt-6 text-gray-900 dark:text-white">4. Phong Nha-Ke Bang National Park, Vietnam</h3>
      <p class="mb-4">For adventure lovers, Phong Nha is the ultimate destination. This region in central Vietnam is home to some of the world's largest and most spectacular caves, including Son Doong, the largest cave on the planet. While an expedition to Son Doong is expensive and exclusive, there are plenty of other accessible caves like Paradise Cave and Phong Nha Cave that are equally breathtaking. You can explore underground rivers by boat, trek through the jungle, and stay in charming homestays along the riverbank, surrounded by towering limestone karsts.</p>

      <h3 class="text-2xl font-bold mb-3 mt-6 text-gray-900 dark:text-white">5. Koh Rong Sanloem, Cambodia</h3>
      <p class="mb-4">Forget the party vibes of neighboring Koh Rong; the smaller island of Koh Rong Sanloem is pure relaxation. With no cars and limited electricity in some parts, it is the place to disconnect. Saracen Bay offers calm, shallow turquoise waters and white sands perfect for swimming. For a more secluded experience, hike through the jungle to Lazy Beach or Sunset Beach. At night, you can often see bio-luminescent plankton glowing in the water, creating a magical swimming experience under the stars.</p>

      <p class="mb-4 mt-6">These destinations prove that adventure still exists for those willing to look a little deeper. By visiting these lesser-known spots, you not only escape the crowds but also spread the economic benefits of tourism to new communities. Pack your sense of wonder and get ready to discover the secret side of Southeast Asia.</p>
    `
  }
];