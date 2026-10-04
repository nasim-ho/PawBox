import { useState } from 'react'
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Category from './components/Category/Category';
import WhyPawBox from './components/WhyPawBox/Why';
import Products from './components/Products/Products';
import Reviews from './components/Reviews/Reviews';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Category />
      <WhyPawBox />
      <Products />
      <Reviews />
      <CTA />
      <Footer />

      <ScrollToTop />
    </>
  );
}

export default App;
