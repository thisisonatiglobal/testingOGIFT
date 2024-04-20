import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";

import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Slideshow from "@/components/Slideshow";

import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";
import dynamic from 'next/dynamic';
export const metadata: Metadata = {
  title: "OnatiGlobal",
  description: "This is Home",
  // other metadata
};


export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Slideshow />
      {/* <Brands /> */}
      <AboutSectionOne />
      <AboutSectionTwo />
     
      <Video />
      <Testimonials />
  
      <Contact />
    </>
  );
}
