
import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Never Miss an Adventure
        </h2>
        <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
          Get weekly travel inspiration, insider tips, and exclusive stories delivered straight to your inbox.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            required
          />
          <button
            type="submit"
            className="bg-white text-orange-500 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300"
          >
            Subscribe
          </button>
        </form>
        
        <p className="text-orange-100 text-sm mt-4">
          Join 25,000+ travelers. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
