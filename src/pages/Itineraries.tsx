
import React from 'react';
import { Calendar, MapPin, Clock, User } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Itineraries = () => {
  const itineraries = [
    {
      id: 1,
      title: "10 Days in Japan: Tokyo to Kyoto",
      description: "A perfect blend of modern city life and traditional culture, exploring Japan's most iconic destinations.",
      author: "Yuki Tanaka",
      duration: "10 days",
      destinations: ["Tokyo", "Mount Fuji", "Kyoto", "Osaka"],
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "From $2,500",
      rating: 4.9,
      saves: 234
    },
    {
      id: 2,
      title: "Swiss Alps Adventure: 7-Day Hiking Circuit",
      description: "Experience the stunning beauty of the Swiss Alps with this carefully planned hiking itinerary through mountain villages.",
      author: "Marco Schneider",
      duration: "7 days",
      destinations: ["Zermatt", "Interlaken", "Grindelwald", "Lucerne"],
      image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "From $1,800",
      rating: 4.8,
      saves: 189
    },
    {
      id: 3,
      title: "Bali Cultural Discovery: 14 Days",
      description: "Immerse yourself in Balinese culture, visit ancient temples, and relax on pristine beaches.",
      author: "Kadek Sari",
      duration: "14 days",
      destinations: ["Ubud", "Seminyak", "Canggu", "Nusa Penida"],
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "From $1,200",
      rating: 4.7,
      saves: 156
    },
    {
      id: 4,
      title: "African Safari: Kenya & Tanzania",
      description: "Witness the Great Migration and explore the diverse wildlife of East Africa's most famous national parks.",
      author: "James Mwangi",
      duration: "12 days",
      destinations: ["Maasai Mara", "Serengeti", "Ngorongoro", "Amboseli"],
      image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "From $3,500",
      rating: 4.9,
      saves: 298
    },
    {
      id: 5,
      title: "Iceland Ring Road: Complete Circuit",
      description: "Drive the famous Ring Road and discover Iceland's incredible landscapes, from glaciers to geysers.",
      author: "Sigrid Olsen",
      duration: "10 days",
      destinations: ["Reykjavik", "Golden Circle", "Jokulsarlon", "Akureyri"],
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "From $2,200",
      rating: 4.8,
      saves: 167
    },
    {
      id: 6,
      title: "Patagonia Trekking Adventure",
      description: "Trek through the dramatic landscapes of Patagonia, crossing between Chile and Argentina.",
      author: "Carlos Rodriguez",
      duration: "15 days",
      destinations: ["Torres del Paine", "El Calafate", "El Chalten", "Ushuaia"],
      image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "From $2,800",
      rating: 4.9,
      saves: 143
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Header */}
      <div className="bg-white py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Travel Itineraries
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Carefully crafted travel plans from experienced travelers to help you make the most of your adventures
          </p>
        </div>
      </div>

      {/* Featured Itinerary */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Plan Your Perfect Trip
              </h2>
              <p className="text-xl text-orange-100 mb-8">
                Browse detailed itineraries created by experienced travelers. Each plan includes day-by-day activities, 
                accommodation suggestions, transportation tips, and budget estimates.
              </p>
              <button className="bg-white text-orange-500 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300">
                Create Your Itinerary
              </button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Travel Planning"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Itineraries Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {itineraries.map((itinerary) => (
            <div
              key={itinerary.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={itinerary.image}
                  alt={itinerary.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {itinerary.duration}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    ⭐ {itinerary.rating}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors">
                  {itinerary.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {itinerary.description}
                </p>
                
                <div className="flex items-center mb-4">
                  <MapPin size={16} className="text-gray-400 mr-2" />
                  <span className="text-sm text-gray-600">
                    {itinerary.destinations.join(" → ")}
                  </span>
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-2">
                    <User size={16} />
                    <span>{itinerary.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>{itinerary.saves} saves</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-orange-500">
                    {itinerary.price}
                  </span>
                  <button className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-orange-600 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Itineraries;
