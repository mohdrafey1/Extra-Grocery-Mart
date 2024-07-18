import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductSection from './components/ProductSection';
import Testimonials from './components/Testimonials';
import NewsSection from './components/NewsSection';
import SubscribeSection from './components/SubscribeSection';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';
import ErrorBoundary from './components/ErrorBoundary';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';
import OurProducts from './components/OurProducts';

const App = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleProductClick = (product) => {
        setSelectedProduct(product);
        setModalOpen(true);
    };

    const handleModalClose = () => {
        setModalOpen(false);
        setSelectedProduct(null);
    };

    return (
        <ErrorBoundary>
            <div>
                <Header />
                <HeroSection />
                <ProductSection />
                <OurProducts />
                <Testimonials />
                <NewsSection />
                <SubscribeSection />
                <Footer />
                <ProductModal
                    open={modalOpen}
                    handleClose={handleModalClose}
                    product={selectedProduct}
                />
            </div>
        </ErrorBoundary>
    );
};

export default App;
