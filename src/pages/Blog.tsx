
import React, { useState } from 'react';
import { Calendar, User, Search } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Mountains', 'Beach', 'City', 'Food', 'Wildlife', 'Culture'];

  const blogPosts = [
    {
      id: 1,
      title: "Hiking Through the Swiss Alps: A 10-Day Adventure",
      excerpt: "Discover the breathtaking beauty of Switzerland's mountain peaks and pristine lakes on this unforgettable journey through some of Europe's most spectacular landscapes.",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Mountains"
    },
    {
      id: 2,
      title: "Tokyo Street Food: A Culinary Journey",
      excerpt: "From bustling markets to hidden gems, explore the incredible flavors and traditions of Japanese street cuisine that make Tokyo a food lover's paradise.",
      author: "Michael Chen",
      date: "March 12, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Food"
    },
    {
      id: 3,
      title: "Safari Adventures in Tanzania",
      excerpt: "Witness the magnificent wildlife of Africa and experience the thrill of the great migration in the Serengeti National Park.",
      author: "Emma Williams",
      date: "March 10, 2024",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Wildlife"
    },
    {
      id: 4,
      title: "Bali Beaches: Paradise Found",
      excerpt: "Explore the pristine beaches, crystal-clear waters, and vibrant culture of Indonesia's most beloved island destination.",
      author: "David Kumar",
      date: "March 8, 2024",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Beach"
    },
    {
      id: 5,
      title: "New York City: Urban Adventures",
      excerpt: "Discover the hidden gems and iconic landmarks that make the Big Apple one of the world's greatest cities for travelers.",
      author: "Lisa Park",
      date: "March 5, 2024",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "City"
    },
    {
      id: 6,
      title: "Exploring Ancient Temples in Cambodia",
      excerpt: "Journey through the mystical temples of Angkor Wat and discover the rich history and culture of the Khmer Empire.",
      author: "Tom Rodriguez",
      date: "March 3, 2024",
      readTime: "11 min read",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Culture"
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Header */}
      <div className="bg-white py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Travel Stories
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover inspiring adventures, practical tips, and hidden gems from travelers around the world
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white py-8 sticky top-16 z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search stories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            {/* Category filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-orange-500 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-orange-500 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <User size={16} />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>{post.date}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No stories found matching your criteria.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
