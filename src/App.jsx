import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductSection from './components/ProductSection';
import Testimonials from './components/Testimonials';
import NewsSection from './components/NewsSection';
import SubscribeSection from './components/SubscribeSection';
import Footer from './components/Footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';
import OurProducts from './components/OurProducts';

const App = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <ProductSection />
            <OurProducts />
            <Testimonials />
            <NewsSection />
            <SubscribeSection />
            <Footer />
        </div>
    );
};

export default App;
