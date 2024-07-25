'use client';
import React from 'react';
import HeroSection from './components/HeroSection';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import BeliefsSection from './components/BeliefsSection';
import CenteredImage from './components/CenteredImage';
import ProductGallery from './components/ProductGallery.js';
const Page = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProductList />
      <BeliefsSection />
      <CenteredImage />
      <ProductGallery />
      <Footer />
    </div>
  );
};

export default Page;
