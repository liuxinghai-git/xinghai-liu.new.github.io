const fs = require('fs');
const path = require('path');

console.log('🇺🇸 Switching language to English...');

const files = {
  // 1. GLOBAL LAYOUT (Navigation & Footer)
  'src/layouts/Layout.astro': `
---
interface Props {
	title: string;
	description?: string;
}

const { title, description = "Los Angeles Travel Guide & World Cup 2026 - Hotels, Attractions, Safety Tips" } = Astro.props;
---

<!doctype html>
<html lang="en" class="scroll-smooth">
	<head>
		<meta charset="UTF-8" />
		<meta name="description" content={description} />
		<meta name="viewport" content="width=device-width" />
		<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
		<meta name="generator" content={Astro.generator} />
		<title>{title} | LA Guide 2026</title>
        <!-- Google AdSense Placeholder -->
        <!-- <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossorigin="anonymous"></script> -->
	</head>
	<body class="bg-slate-50 text-slate-800 flex flex-col min-h-screen">
        <nav class="bg-white shadow-md sticky top-0 z-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16">
                    <div class="flex items-center">
                        <a href="/" class="text-2xl font-bold text-blue-600 tracking-tight">🌴 LA Guide <span class="text-orange-500">2026</span></a>
                    </div>
                    <!-- Desktop Menu -->
                    <div class="hidden md:flex items-center space-x-6">
                        <a href="/" class="hover:text-blue-500 font-medium text-slate-600">Home</a>
                        
                        <!-- Dropdown: Rankings -->
                        <div class="relative group py-4">
                            <button class="hover:text-blue-500 font-medium text-slate-600 flex items-center">
                                🔥 Top Rankings <span class="ml-1 text-xs">▼</span>
                            </button>
                            <div class="absolute left-0 mt-0 w-56 bg-white rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100 top-full">
                                <a href="/hotel-ranking" class="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">🏨 Best Value Hotels</a>
                                <a href="/attraction-ranking" class="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">🎡 Top Attractions</a>
                            </div>
                        </div>

                        <a href="/worldcup" class="text-orange-600 font-bold hover:text-orange-500 bg-orange-50 px-3 py-1 rounded-full">⚽ World Cup 2026</a>
                        <a href="/tips" class="hover:text-blue-500 font-medium text-slate-600">💡 Travel Tips</a>
                        <a href="/safety" class="hover:text-blue-500 font-medium text-slate-600">Safety</a>
                    </div>
                </div>
            </div>
        </nav>

		<main class="flex-grow">
		    <slot />
        </main>

        <footer class="bg-slate-900 text-slate-300 mt-auto pt-12 pb-8">
            <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div>
                    <h3 class="text-white text-lg font-bold mb-4">About Us</h3>
                    <p class="text-sm text-slate-400">The ultimate guide for Los Angeles tourism and the 2026 World Cup. Providing the most practical local information, hotel comparisons, and safety advice.</p>
                </div>
                <div>
                    <h3 class="text-white text-lg font-bold mb-4">Quick Links</h3>
                    <ul class="space-y-2 text-sm">
                        <li><a href="/worldcup" class="hover:text-orange-400 transition">SoFi Stadium Guide</a></li>
                        <li><a href="/hotels" class="hover:text-blue-400 transition">Hotel Deals</a></li>
                        <li><a href="/safety" class="hover:text-red-400 transition">Emergency Contacts</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-white text-lg font-bold mb-4">Contact</h3>
                    <p class="text-sm text-slate-400 mb-2">For advertising & partnerships:</p>
                    <a href="mailto:contact@example.com" class="text-blue-400 hover:underline">contact@example.com</a>
                </div>
            </div>
            <div class="max-w-7xl mx-auto px-4 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
                <p>Disclosure: This site contains affiliate links. We may earn a commission if you make a purchase through our links, at no extra cost to you.</p>
                <p class="mt-2">&copy; 2024-2026 LA Travel Guide. All rights reserved.</p>
            </div>
        </footer>
	</body>
</html>
  `,

  // 2. HOME PAGE
  'src/pages/index.astro': `
---
import Layout from '../layouts/Layout.astro';
---

<Layout title="Home - LA Tourism & World Cup Guide">
    <!-- Hero Banner -->
    <div class="relative bg-gradient-to-r from-blue-900 to-indigo-900 h-[500px] flex items-center justify-center overflow-hidden">
        <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1580655653885-65763b2597d0?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
        <div class="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <span class="inline-block py-1 px-3 rounded-full bg-orange-500/20 border border-orange-400 text-orange-300 text-sm font-semibold mb-4 backdrop-blur-sm">🏆 Preparing for World Cup 2026</span>
            <h1 class="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-xl leading-tight">
                Explore the City of Angels <br/><span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">Your Ultimate LA Guide</span>
            </h1>
            <p class="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">From the best hotels near SoFi Stadium to Universal Studios tickets, get the best local advice here.</p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/worldcup" class="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg transition shadow-lg flex items-center justify-center gap-2">
                    <span>⚽</span> World Cup Guide
                </a>
                <a href="/hotels" class="px-8 py-4 bg-white hover:bg-gray-50 text-blue-900 font-bold rounded-lg transition shadow-lg flex items-center justify-center gap-2">
                    <span>🏨</span> Book Hotels
                </a>
            </div>
        </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 py-16">
        <!-- Ad Slot -->
        <div class="w-full h-32 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center mb-12 text-gray-400">
            Google AdSense Banner
        </div>

        <h2 class="text-3xl font-bold text-center mb-12 text-slate-800">Popular Categories</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Hotels -->
            <div class="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden border border-gray-100">
                <div class="h-48 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80" class="w-full h-full object-cover group-hover:scale-110 transition duration-500">
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-bold mb-2 group-hover:text-blue-600 transition">Where to Stay</h3>
                    <p class="text-gray-600 mb-4 text-sm line-clamp-2">From luxury in Beverly Hills to budget-friendly motels. Find the perfect place to crash.</p>
                    <a href="/hotels" class="text-blue-600 font-semibold hover:underline flex items-center">See Recommendations <span class="ml-1">→</span></a>
                </div>
            </div>

            <!-- Attractions -->
            <div class="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden border border-gray-100">
                <div class="h-48 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?auto=format&fit=crop&w=800&q=80" class="w-full h-full object-cover group-hover:scale-110 transition duration-500">
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-bold mb-2 group-hover:text-blue-600 transition">Attractions & Tickets</h3>
                    <p class="text-gray-600 mb-4 text-sm line-clamp-2">Disney, Universal Studios, Griffith Observatory. Book online to save time and money.</p>
                    <a href="/attraction-ranking" class="text-blue-600 font-semibold hover:underline flex items-center">Get Tickets <span class="ml-1">→</span></a>
                </div>
            </div>

            <!-- Safety -->
            <div class="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden border border-gray-100">
                <div class="h-48 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=800&q=80" class="w-full h-full object-cover group-hover:scale-110 transition duration-500">
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-bold mb-2 group-hover:text-blue-600 transition">Safety Guide</h3>
                    <p class="text-gray-600 mb-4 text-sm line-clamp-2">Is LA safe? Which areas to avoid? Car rental tips? Read our essential survival guide.</p>
                    <a href="/safety" class="text-blue-600 font-semibold hover:underline flex items-center">Read Guide <span class="ml-1">→</span></a>
                </div>
            </div>
        </div>
    </div>
</Layout>
  `,

  // 3. WORLD CUP PAGE
  'src/pages/worldcup.astro': `
---
import Layout from '../layouts/Layout.astro';
---

<Layout title="World Cup 2026 LA Guide">
    <div class="bg-slate-900 text-white py-12 md:py-20">
        <div class="max-w-4xl mx-auto px-4 text-center">
            <h1 class="text-4xl md:text-5xl font-bold mb-6">World Cup 2026 · Los Angeles</h1>
            <p class="text-xl text-slate-300">The Ultimate Guide to SoFi Stadium, Accommodation & Transport</p>
        </div>
    </div>

    <div class="max-w-6xl mx-auto px-4 py-12">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <!-- Left Content -->
            <div class="lg:col-span-8 space-y-12">
                <section>
                    <div class="flex items-center gap-2 mb-4">
                        <span class="text-2xl">🏟️</span>
                        <h2 class="text-2xl font-bold text-slate-800">The Venue: SoFi Stadium</h2>
                    </div>
                    <img src="https://images.unsplash.com/photo-1626244421444-436f9cc9c426?auto=format&fit=crop&w=1000&q=80" class="w-full h-64 object-cover rounded-xl shadow-md mb-6" alt="SoFi Stadium">
                    <div class="prose prose-slate max-w-none text-gray-600">
                        <p>Located in Inglewood, SoFi Stadium is one of the most expensive and advanced stadiums in the world. It will host multiple group stage matches and key knockout games during the 2026 World Cup.</p>
                        <h3 class="text-lg font-bold text-slate-800 mt-4">Transport Tips</h3>
                        <ul class="list-disc pl-5 space-y-2 mt-2">
                            <li><strong>Driving:</strong> Parking is extremely expensive and limited. You must book in advance.</li>
                            <li><strong>Rideshare (Uber/Lyft):</strong> There are designated zones, but wait times can exceed 1 hour after matches.</li>
                            <li><strong>Shuttle Bus:</strong> Recommended. Take the free shuttle from the Hawthorne/Lennox Metro station.</li>
                        </ul>
                    </div>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-4">
                        <span class="text-2xl">🛏️</span>
                        <h2 class="text-2xl font-bold text-slate-800">Where to Stay?</h2>
                    </div>
                    
                    <div class="grid gap-6">
                        <!-- Hotel Area 1 -->
                        <div class="bg-white border border-gray-200 rounded-lg p-6 hover:border-orange-300 transition shadow-sm">
                            <div class="flex justify-between items-start">
                                <div>
                                    <h3 class="font-bold text-lg text-blue-900">LAX Airport Area (Recommended)</h3>
                                    <p class="text-sm text-gray-500 mt-1">Best Value & Convenience</p>
                                </div>
                                <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Top Choice</span>
                            </div>
                            <p class="text-gray-600 text-sm mt-3">Only 15 mins drive to the stadium. Lots of hotel options with airport shuttles. The practical choice for fans.</p>
                            <a href="#" class="inline-block mt-4 text-orange-600 font-bold text-sm hover:underline">Check Hotel Prices Here &rarr;</a>
                        </div>

                         <!-- Hotel Area 2 -->
                        <div class="bg-white border border-gray-200 rounded-lg p-6 hover:border-orange-300 transition shadow-sm">
                            <div class="flex justify-between items-start">
                                <div>
                                    <h3 class="font-bold text-lg text-blue-900">Santa Monica / Beach Cities</h3>
                                    <p class="text-sm text-gray-500 mt-1">Vacation Vibes</p>
                                </div>
                                <span class="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">Experience</span>
                            </div>
                            <p class="text-gray-600 text-sm mt-3">Further from the stadium (40+ mins), but great if you want to combine football with a beach holiday. Prices are higher.</p>
                            <a href="#" class="inline-block mt-4 text-orange-600 font-bold text-sm hover:underline">Check Hotel Prices Here &rarr;</a>
                        </div>
                    </div>
                </section>
            </div>

            <!-- Right Sidebar -->
            <div class="lg:col-span-4 space-y-8">
                <!-- Ad Slot -->
                <div class="bg-gray-100 h-[250px] flex items-center justify-center text-gray-400 rounded-lg border">
                    Square Ad (300x250)
                </div>

                <div class="bg-orange-50 p-6 rounded-xl border border-orange-100">
                    <h3 class="font-bold text-lg mb-3 text-orange-800">⚠️ Important Safety Note</h3>
                    <p class="text-sm text-slate-700 leading-relaxed">
                        The area around SoFi Stadium (Inglewood) can be unsafe at night. After the match:
                    </p>
                    <ul class="list-disc list-inside text-sm text-slate-700 mt-3 space-y-1">
                        <li>Do not walk alone away from main roads.</li>
                        <li>Stay in groups.</li>
                        <li>Keep valuables hidden.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</Layout>
  `,

  // 4. HOTELS PAGE
  'src/pages/hotels.astro': `
---
import Layout from '../layouts/Layout.astro';

// Placeholder Data - Replace with real affiliate links
const hotels = [
    {
        name: "Sheraton Gateway Los Angeles",
        area: "LAX Airport",
        price: "$180+",
        rating: "4.5",
        features: ["Free Shuttle", "Outdoor Pool", "Soundproof"],
        image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=600&q=80",
        link: "#affiliate-booking"
    },
    {
        name: "The Hollywood Roosevelt",
        area: "Hollywood",
        price: "$280+",
        rating: "4.7",
        features: ["Historic", "Walk of Fame", "Trendy Pool"],
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80",
        link: "#affiliate-expedia"
    },
    {
        name: "Freehand Los Angeles",
        area: "Downtown LA",
        price: "$120+",
        rating: "4.3",
        features: ["Rooftop Bar", "Stylish", "Near Metro"],
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80",
        link: "#affiliate-booking"
    }
];
---

<Layout title="LA Hotels Guide - Best Areas to Stay">
    <div class="max-w-7xl mx-auto px-4 py-12">
        <h1 class="text-3xl font-bold mb-4">Los Angeles Accommodation Guide</h1>
        <p class="text-gray-600 mb-8 max-w-3xl">LA is huge. Picking the wrong area means spending your holiday in traffic. We've selected top-rated hotels below for safety and convenience.</p>
        
        <!-- Filters (Visual only) -->
        <div class="flex gap-4 mb-8 overflow-x-auto pb-2">
            <button class="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium whitespace-nowrap">All Recommendations</button>
            <button class="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full text-sm font-medium whitespace-nowrap">Near Stadium</button>
            <button class="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full text-sm font-medium whitespace-nowrap">Hollywood</button>
            <button class="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full text-sm font-medium whitespace-nowrap">Santa Monica</button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotels.map(hotel => (
                <div class="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition duration-300 flex flex-col">
                    <div class="relative h-48">
                        <img src={hotel.image} class="w-full h-full object-cover" alt={hotel.name}>
                        <div class="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded text-xs font-bold flex items-center">
                            ⭐ {hotel.rating}
                        </div>
                    </div>
                    <div class="p-6 flex-1 flex flex-col">
                        <div class="mb-2">
                            <span class="text-xs font-bold text-blue-600 uppercase tracking-wide">{hotel.area}</span>
                        </div>
                        <h3 class="text-xl font-bold mb-2 text-slate-800">{hotel.name}</h3>
                        <div class="flex flex-wrap gap-2 mb-4">
                            {hotel.features.map(f => (
                                <span class="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">{f}</span>
                            ))}
                        </div>
                        <div class="mt-auto flex items-center justify-between">
                            <span class="text-lg font-bold text-slate-800">{hotel.price}<span class="text-xs font-normal text-gray-500">/night</span></span>
                            <a href={hotel.link} target="_blank" rel="nofollow sponsored" class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium text-sm transition">
                                Check Rates
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        <div class="mt-12 p-8 bg-blue-50 rounded-xl text-center">
            <h3 class="text-xl font-bold text-blue-900 mb-2">Did not find what you like?</h3>
            <p class="text-blue-700 mb-4">Search thousands of hotels with real-time pricing.</p>
            <a href="#" class="inline-block px-8 py-3 bg-white border border-blue-200 text-blue-600 font-bold rounded-full hover:bg-blue-50 transition">
                Search More Hotels
            </a>
        </div>
    </div>
</Layout>
  `,

  // 5. HOTEL RANKING PAGE
  'src/pages/hotel-ranking.astro': `
---
import Layout from '../layouts/Layout.astro';

const rankedHotels = [
    {
        rank: 1,
        name: "CitizenM Los Angeles Downtown",
        tag: "Best Value",
        score: "9.2",
        price: "From $140",
        desc: "Modern, smart, and affordable. Located in the heart of DTLA. Rooms are compact but high-tech. The lobby is amazing for working and socializing.",
        pros: ["Super Clean", "Tech-enabled", "Great Bed"],
        link: "#affiliate-citizenm",
        image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80"
    },
    {
        rank: 2,
        name: "H Hotel Los Angeles, Curio Collection",
        tag: "World Cup Choice",
        score: "8.9",
        price: "From $190",
        desc: "Very close to LAX and SoFi Stadium. Features a rooftop deck for plane spotting. The best strategic location to avoid traffic for matches.",
        pros: ["Airport Shuttle", "Rooftop Pool", "Soundproof"],
        link: "#affiliate-h-hotel",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
    },
    {
        rank: 3,
        name: "Hi View Inn & Suites",
        tag: "Budget Gem",
        score: "8.5",
        price: "From $90",
        desc: "Hard to find anything clean under $100 in LA, but this place delivers. Located near Manhattan Beach. Good for travelers with cars.",
        pros: ["Free Parking", "Daily Cleaning", "Near Beach"],
        link: "#affiliate-hiview",
        image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=800&q=80"
    },
    {
        rank: 4,
        name: "The Godfrey Hotel Hollywood",
        tag: "Hollywood Style",
        score: "8.7",
        price: "From $170",
        desc: "Want to stay near the Walk of Fame without the grime? Pick this. Features one of the largest rooftop pools in LA.",
        pros: ["Great Location", "Stylish Design", "Rooftop Events"],
        link: "#affiliate-godfrey",
        image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=80"
    }
];
---

<Layout title="Top 10 Best Value Hotels in LA">
    <div class="bg-blue-600 py-12">
        <div class="max-w-4xl mx-auto px-4 text-center text-white">
            <h1 class="text-3xl md:text-4xl font-bold mb-4">🏆 LA Hotel Rankings</h1>
            <p class="text-blue-100 text-lg">Based on real guest reviews, price, and location convenience for 2024-2025.</p>
        </div>
    </div>

    <div class="max-w-5xl mx-auto px-4 py-12">
        <div class="space-y-8">
            {rankedHotels.map((hotel, index) => (
                <div class="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 flex flex-col md:flex-row hover:shadow-2xl transition duration-300 relative">
                    <!-- Rank Badge -->
                    <div class={\`absolute top-0 left-0 px-4 py-2 rounded-br-xl font-bold text-white z-10 \${index === 0 ? 'bg-yellow-500' : index === 1 ? 'bg-gray-400' : index === 2 ? 'bg-orange-600' : 'bg-blue-500'}\`}>
                        No. {hotel.rank}
                    </div>

                    <!-- Image -->
                    <div class="md:w-1/3 h-64 md:h-auto relative">
                        <img src={hotel.image} alt={hotel.name} class="w-full h-full object-cover" />
                    </div>

                    <!-- Content -->
                    <div class="p-6 md:w-2/3 flex flex-col justify-between">
                        <div>
                            <div class="flex justify-between items-start mb-2">
                                <div>
                                    <span class="inline-block px-2 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded mb-2">{hotel.tag}</span>
                                    <h2 class="text-2xl font-bold text-gray-800">{hotel.name}</h2>
                                </div>
                                <div class="bg-blue-600 text-white px-3 py-1 rounded-lg text-center">
                                    <div class="text-xl font-bold">{hotel.score}</div>
                                    <div class="text-xs">Score</div>
                                </div>
                            </div>
                            
                            <p class="text-gray-600 mb-4">{hotel.desc}</p>
                            
                            <div class="flex flex-wrap gap-2 mb-4">
                                {hotel.pros.map(pro => (
                                    <span class="flex items-center text-sm text-green-700 bg-green-50 px-2 py-1 rounded">
                                        <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                        {pro}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div class="flex items-center justify-between pt-4 border-t border-gray-100 mt-2">
                            <div>
                                <span class="text-gray-400 text-sm">Avg Price</span>
                                <div class="text-2xl font-bold text-orange-600">{hotel.price}<span class="text-sm font-normal text-gray-500">/night</span></div>
                            </div>
                            <a href={hotel.link} target="_blank" class="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-bold rounded-lg shadow-sm transition transform hover:-translate-y-1">
                                Check Deal ➜
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        
        <!-- Ad -->
        <div class="mt-12 bg-gray-100 p-8 rounded-lg text-center text-gray-400 border border-dashed border-gray-300">
            Google AdSense Slot
        </div>
    </div>
</Layout>
  `,

  // 6. ATTRACTION RANKING PAGE
  'src/pages/attraction-ranking.astro': `
---
import Layout from '../layouts/Layout.astro';

const attractions = [
    {
        rank: 1,
        name: "Universal Studios Hollywood",
        type: "Theme Park",
        time: "1 Full Day",
        desc: "A real working movie studio and theme park. Must-dos: Mario Kart, Harry Potter, and the famous Studio Tour. Buy Express tickets to skip lines.",
        img: "https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?auto=format&fit=crop&w=800&q=80",
        link: "#affiliate-universal"
    },
    {
        rank: 2,
        name: "Griffith Observatory",
        type: "Landmark / Views",
        time: "2-3 Hours",
        desc: "La La Land filming location. Offers the best panoramic views of LA and the Hollywood Sign. Entry is free (Planetarium shows cost extra).",
        img: "https://images.unsplash.com/photo-1540209489504-2041280eb4c2?auto=format&fit=crop&w=800&q=80",
        link: "#"
    },
    {
        rank: 3,
        name: "Santa Monica Pier",
        type: "Beach",
        time: "3-4 Hours",
        desc: "The end of Route 66. Features the iconic Ferris wheel, street performers, and classic California beach vibes. Great for sunsets.",
        img: "https://images.unsplash.com/photo-1533759413974-9e15f3b745ac?auto=format&fit=crop&w=800&q=80",
        link: "#"
    },
    {
        rank: 4,
        name: "The Getty Center",
        type: "Museum / Art",
        time: "Half Day",
        desc: "A masterpiece of architecture. Houses Van Gogh's 'Irises'. Admission is free (reservation required), just pay for parking.",
        img: "https://images.unsplash.com/photo-1554513627-2b7e555436ee?auto=format&fit=crop&w=800&q=80",
        link: "#"
    },
    {
        rank: 5,
        name: "Disneyland Park",
        type: "Theme Park",
        time: "1-2 Days",
        desc: "The Happiest Place on Earth. If you are a Star Wars fan, you must visit Galaxy's Edge—it is incredibly immersive.",
        img: "https://images.unsplash.com/photo-1517625732168-91c855325c15?auto=format&fit=crop&w=800&q=80",
        link: "#affiliate-disney"
    }
];
---

<Layout title="Top 10 Attractions in Los Angeles">
    <div class="bg-indigo-900 py-16 text-center text-white relative overflow-hidden">
        <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=1500&q=80')] bg-cover opacity-20"></div>
        <div class="relative z-10">
            <h1 class="text-4xl font-extrabold mb-4">🎢 Top LA Attractions</h1>
            <p class="text-xl text-indigo-200">First time in LA? You can't go wrong with this list.</p>
        </div>
    </div>

    <div class="max-w-6xl mx-auto px-4 py-12">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attractions.map((item, index) => (
                <div class="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
                    <!-- Image -->
                    <div class="relative h-56 overflow-hidden">
                        <img src={item.img} alt={item.name} class="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                        <!-- Rank Number -->
                        <div class="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur rounded-full flex items-center justify-center font-black text-2xl text-indigo-600 shadow-md">
                            {item.rank}
                        </div>
                    </div>

                    <!-- Content -->
                    <div class="p-6">
                        <div class="flex justify-between items-start mb-2">
                            <span class="text-xs font-bold text-indigo-500 bg-indigo-50 px-2 py-1 rounded uppercase">{item.type}</span>
                            <span class="text-xs text-gray-500 flex items-center">🕒 {item.time}</span>
                        </div>
                        <h3 class="text-xl font-bold text-gray-800 mb-3 leading-tight min-h-[3.5rem]">{item.name}</h3>
                        <p class="text-gray-600 text-sm mb-6 line-clamp-3">{item.desc}</p>
                        
                        <a href={item.link} class="block w-full text-center py-3 rounded-lg font-bold transition duration-200 bg-gray-100 hover:bg-indigo-600 text-gray-700 hover:text-white group-hover:bg-indigo-600 group-hover:text-white">
                            {item.link !== '#' ? '🎟️ Book Tickets' : 'View Details'}
                        </a>
                    </div>
                </div>
            ))}
        </div>
    </div>
</Layout>
  `,

  // 7. TRAVEL TIPS PAGE
  'src/pages/tips.astro': `
---
import Layout from '../layouts/Layout.astro';

const tips = [
    {
        title: "💵 Tipping Culture",
        icon: "💰",
        content: "Tipping is mandatory in the US. For restaurants, 15%-20% of the pre-tax bill is standard. Valet parking: $2-$5. Bellhops: $1-$2 per bag."
    },
    {
        title: "🚗 Transport & Driving",
        icon: "🚘",
        content: "LA is a driving city. Public transport isn't as convenient as NY or London. Renting a car is highly recommended. Use Uber/Lyft if staying central."
    },
    {
        title: "🔌 Power & Voltage",
        icon: "⚡",
        content: "Voltage is 110V. Plugs are Type A (two flat pins). If you are from Europe/UK/Asia (220V), check your chargers or bring an adapter/converter."
    },
    {
        title: "👮 Safety Essentials",
        icon: "🚨",
        content: "Avoid Skid Row in DTLA. Never leave ANYTHING visible in your car (bags, coins, cables) to prevent break-ins ('smash and grab')."
    },
    {
        title: "☀️ Weather & Clothing",
        icon: "🕶️",
        content: "Days are hot, nights are cool. Even in summer, bring a light jacket for evenings. The sun is strong—wear sunscreen and sunglasses."
    },
    {
        title: "💳 Payments",
        icon: "💳",
        content: "Cards (Visa/Mastercard) are accepted everywhere. Apple Pay is common. Keep some small cash ($1, $5 bills) for tips or taco trucks."
    }
];
---

<Layout title="LA Travel Tips - Essential Guide">
    <div class="max-w-4xl mx-auto px-4 py-12">
        <h1 class="text-3xl font-bold mb-8 text-center text-slate-800">💡 Essential Travel Tips</h1>
        <p class="text-center text-gray-600 mb-12">Read this before you go. Save time, money, and avoid common tourist mistakes.</p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tips.map(tip => (
                <div class="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:border-blue-300 transition duration-300">
                    <div class="flex items-center mb-4">
                        <span class="text-3xl mr-3 bg-blue-50 w-12 h-12 flex items-center justify-center rounded-full">{tip.icon}</span>
                        <h2 class="text-xl font-bold text-gray-800">{tip.title}</h2>
                    </div>
                    <p class="text-gray-600 leading-relaxed text-sm">
                        {tip.content}
                    </p>
                </div>
            ))}
        </div>

        <!-- Emergency Section -->
        <div class="mt-12 bg-red-50 rounded-xl p-8 border border-red-100">
            <h2 class="text-2xl font-bold text-red-800 mb-4 text-center">🆘 Emergency Numbers</h2>
            <div class="grid grid-cols-1 md:grid-cols-1 gap-4 text-center">
                <div class="bg-white p-4 rounded shadow-sm">
                    <div class="font-bold text-gray-500">Police / Fire / Ambulance</div>
                    <div class="text-4xl font-black text-red-600">911</div>
                </div>
                <div class="text-sm text-gray-500 mt-2">
                    For non-emergency police assistance in LA, call: 1-877-275-5273
                </div>
            </div>
        </div>
    </div>
</Layout>
  `,

  // 8. SAFETY PAGE
  'src/pages/safety.astro': `
---
import Layout from '../layouts/Layout.astro';
---

<Layout title="Safety Guide - How to Stay Safe in LA">
    <div class="max-w-4xl mx-auto px-4 py-12">
        <h1 class="text-3xl font-bold mb-8 text-red-600">Los Angeles Safety Guide</h1>
        
        <div class="prose prose-lg prose-slate max-w-none">
            <p class="lead">LA is generally safe for tourists, but like any major metropolis, it has distinct "no-go" zones. Knowing where NOT to go is the most important rule.</p>

            <div class="bg-red-50 border-l-4 border-red-500 p-6 my-8">
                <h3 class="text-red-800 font-bold mt-0">🚫 Area to Avoid: Skid Row</h3>
                <p class="mb-0">
                    You must flag <strong>Skid Row</strong> on your map. This area in Downtown LA (DTLA) has a large homeless encampment population.
                    <br>
                    <strong>Boundaries:</strong> Roughly between E 3rd St to E 7th St, and San Pedro St to Central Ave. Do not walk here, even during the day.
                </p>
            </div>

            <h3>🚗 Car & Parking Safety</h3>
            <ul>
                <li><strong>Smash and Grab:</strong> This is a common crime targeting tourists and rental cars.</li>
                <li><strong>Golden Rule:</strong> Leave NOTHING in your car. No bags, no charging cables, no sunglasses, no coins. If a thief sees anything, they might break the window.</li>
                <li><strong>Parking:</strong> Use well-lit, managed parking lots or hotel valet.</li>
            </ul>

            <h3>🌃 Nighttime Advice</h3>
            <p>Hollywood Blvd is busy during the day but can get sketchy late at night. DTLA empties out after business hours. Avoid walking long distances at night; use Uber/Lyft to go door-to-door.</p>

            <h3>🚑 Emergency Contacts</h3>
            <ul>
                <li><strong>Emergency (Life-threatening):</strong> 911</li>
                <li><strong>Non-Emergency Police:</strong> 1-877-ASK-LAPD (1-877-275-5273)</li>
            </ul>
        </div>
    </div>
</Layout>
  `
};

// Write files
for (const [filePath, content] of Object.entries(files)) {
  const fullPath = path.join(__dirname, filePath);
  // Ensure directory exists
  const dirname = path.dirname(fullPath);
  if (!fs.existsSync(dirname)) {
    fs.mkdirSync(dirname, { recursive: true });
  }
  
  fs.writeFileSync(fullPath, content.trim());
  console.log(`✅ Updated: ${filePath}`);
}

console.log('\n🎉 Translation complete! Run "npm run dev" to see the changes.');