"use client"

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../Common/SectionTitle';
import SingleFeature from './SingleFeature';
import featuresData from './featuresData';

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const offsetTop = document.getElementById('features').offsetTop;
      setIsVisible(scrollTop > offsetTop - window.innerHeight / 2);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
       <section id="features" className="py-8 md:py-20 lg:py-28 px-4 md:px-20 lg:px-28 relative bg-white dark:bg-black">
        <div className="absolute inset-0 z-0 opacity-50 bg-cover bg-center" style={{ backgroundImage: "url('/images/features/features1.jpg')" }}></div>
        <div className="relative z-10">
          <SingleFeature  />
        </div>
      </section>
    </>
  );
};

export default Features;
