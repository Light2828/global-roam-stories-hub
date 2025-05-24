
import React from 'react';
import { Calendar, User } from 'lucide-react';

const FeaturedStories = () => {
  const featuredStories = [
    {
      id: 1,
      title: "Hiking Through the Swiss Alps: A 10-Day Adventure",
      excerpt: "Discover the breathtaking beauty of Switzerland's mountain peaks and pristine lakes on this unforgettable journey.",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "Mountains"
    },
    {
      id: 2,
      title: "Tokyo Street Food: A Culinary Journey",
      excerpt: "From bustling markets to hidden gems, explore the incredible flavors and traditions of Japanese street cuisine.",
      author: "Michael Chen",
      date: "March 12, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "Food & Culture"
    },
    {
      id: 3,
      title: "Safari Adventures in Tanzania",
      excerpt: "Witness the magnificent wildlife of Africa and experience the thrill of the great migration in the Serengeti.",
      author: "Emma Williams",
      date: "March 10, 2024",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "Wildlife"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Dive into the most captivating travel tales from our community of adventurers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredStories.map((story) => (
            <article
              key={story.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {story.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-orange-500 transition-colors">
                  {story.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {story.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <User size={16} />
                    <span>{story.author}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>{story.date}</span>
                    </div>
                    <span>{story.readTime}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
            View All Stories
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedStories;
