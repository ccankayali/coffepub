"use client"; // Add this line at the top

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import Services from '@/components/Services/Services';
import Banner from '@/components/Banner/Banner';
import Footer from '@/components/Footer/Footer';

function Page() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Banner />
      <Footer />
    </>
  );
}

export default Page;
