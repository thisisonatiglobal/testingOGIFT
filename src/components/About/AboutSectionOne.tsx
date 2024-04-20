"use client"
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import { useEffect, useRef, useState } from "react";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const List = ({ text }) => (
  <p className="mb-5 flex items-center text-lg font-medium text-body-color">
    <span className="mr-4 flex h-[30px] w-[40px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
      {checkIcon}
    </span>
    {text}
  </p>
);

const AboutSectionOne = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const handleReadMoreClick = () => {
    setShowMore(!showMore);
  };
  useEffect(() => {
    const handleScroll = () => {
      const image = imageRef.current;
      if (image) {
        const distanceFromTop = image.getBoundingClientRect().top;
        setIsVisible(distanceFromTop <= window.innerHeight / 2);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28 bg-[#ffffff] dark:bg-dark">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2 ">
              <SectionTitle
                title="6-Month Diploma Course in Fashion Designing"
                paragraph="Welcome to Onati Global Institute of Fashion Technology, where your dreams of a career in
                fashion come to life! Our 6-month Diploma Course in Fashion Designing with Industry-
                Ready Internships is your gateway to the dynamic and exciting world of fashion."
                mb="44px"
              />

              <div className="mb-12 max-w-[570px] lg:mb-0" data-wow-delay=".15s">
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Designing Fundamentals" />
                    <List text="Creative Exploration" />
                    <List text="Industry-Relevant Skills" />
                  </div>
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Digital Design Tools" />
                    <List text="Portfolio Development" />
                    <List text="Internships offers" />
                  </div>
                </div>
              </div>
            </div>
    
            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-[25/24] max-w-[600px] lg:mr-0">
                <Image
                  ref={imageRef}
                  src="/images/features/poster.gif.gif" // Adjust the path to your image
                  alt="about-image"
                  layout="fill"
                  className={`mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none opacity-${isVisible ? '100' : '0'} transform ${isVisible ? 'translate-x-0' : 'translate-x-full'} transition-opacity duration-500 ease-in-out transition-transform ${isVisible ? 'duration-500' : 'duration-50'} ease-in-out`}
                />
              </div>
            </div>
            <div className="mx-auto">
            <div className="container bg-transparent shadow-xxl  py-8 px-4 max-w-3xl ">
        {showMore && (
          <>
            <p>
            Our diploma course is meticulously crafted to provide you with a comprehensive understanding of fashion design while offering practical experience through industry-ready internships. In just six months, you will gain the skills, knowledge, and hands-on experience needed to kickstart your career in the fashion industry.

            </p>
            <p>
              <strong>What You'll Learn:</strong>
            </p>
            <p><strong>Fashion Design Fundamentals:</strong>Fashion Design Fundamentals: Learn the basics of fashion design, including color theory, garment construction, and pattern making, through engaging lectures and practical workshops.
</p>
<p>
  <strong>Creative Exploration:</strong> Discover your unique design style and creative voice as you explore various design techniques, trends, and concepts under the guidance of experienced faculty.
</p>
<p>
  <strong>Industry-Relevant Skills:</strong> Develop practical skills in Pattern making, draping, sewing, and textile manipulation, Fashion Production skills, honing your craftsmanship and attention to detail.
</p>
<p>
  <strong>Digital Design Tools:</strong> Introduction to the latest software used in the fashion industry for digital designing & Graphic designs.
</p>
<p>
  <strong>Portfolio Development:</strong> Build a professional portfolio showcasing your design projects, internships, and achievements, ready to impress potential employers.
</p>
<p>
  <strong>Industry-Ready Internships:</strong> One of the highlights of our diploma course is the opportunity to gain real-world experience through industry-ready internships. We have established partnerships with leading fashion companies, brands, and designers, providing you with the opportunity to intern at prestigious organizations and work on live projects.
</p>
<p>
  During your internship, you will have the chance to apply your skills and knowledge in a professional setting, gain insights into industry practices, and build valuable connections with industry professionals. Whether you aspire to work in fashion design, merchandising, styling, or marketing, our internships will give you a competitive edge in the job market.
</p>
<p>
  <strong>Admissions:</strong> Admission to our 6-month Diploma Course in Fashion Designing is open to individuals with a passion for fashion and a desire to succeed in the industry. No prior experience is required—just a willingness to learn, explore, and create.
</p>
<p>
  <strong>Experience the Onati Advantage:</strong> Join us at Onati Global Institute of Fashion Technology and embark on a transformative journey towards a successful career in fashion. Our diploma course offers the perfect blend of theoretical knowledge, practical skills, and industry experience to prepare you for success in the fashion industry.
</p>
<p>
  Are you ready to take the first step towards your fashion career? Enroll in our 6-month Diploma Course in Fashion Designing with Industry-Ready Internships and unlock your potential today!
</p>

          </>
        )}
       <button
  className={`golden-button ${showMore ? 'hidden' : ''}`}
  onClick={handleReadMoreClick}
>
  <span className="golden-text">{showMore ? 'Read Less' : 'Read More'}</span>
</button>

      </div>
      </div>
          </div>
        
        </div>
     
      </div>
      
    </section>
  );
};

export default AboutSectionOne;
