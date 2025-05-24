
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import FeaturedStories from '../components/FeaturedStories';
import Categories from '../components/Categories';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <FeaturedStories />
      <Categories />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
