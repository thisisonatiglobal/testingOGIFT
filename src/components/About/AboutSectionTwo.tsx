"use client"
import { useState, useEffect } from "react";
import SectionTitle from "../Common/SectionTitle";

const AboutSectionTwo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const handleReadMoreClick = () => {
    setShowMore(!showMore);
  };

  useEffect(() => {
    const handleScroll = () => {
      const aboutImage = document.getElementById("about-image");
      if (aboutImage) {
        const distanceFromTop = aboutImage.getBoundingClientRect().top;
        setIsVisible(distanceFromTop <= window.innerHeight / 2);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-16 md:py-20 lg:py-28 bg-[#ffffff] dark:bg-dark">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              id="about-image"
              className={`relative mx-auto mb-12 aspect-[25/24] max-w-[600px] text-center lg:m-0 transition-transform duration-500 ease-in-out transform ${
                isVisible ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <img
                src="/images/features/poster.gif.gif"
                alt="about image"
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <img
                src="/images/features/poster.gif.gif"
                alt="about image"
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              {/* <div className={`mb-9 transition-transform duration-500 ease-in-out transform ${
                isVisible ? "translate-x-0" : "translate-x-full"
              }`}> */}
                <SectionTitle
                  title="3-Month Vocation Certificate Course"
                  paragraph="Welcome to Onati Global Institute of Fashion Technology, Our 3-month certificate course is designed to provide a comprehensive foundation in garment construction, sewing techniques, and fashion production, preparing students for exciting career opportunities in the fashion industry."
                  mb="44px"
                />
              </div>
              <div className={`mb-9 transition-transform duration-500 ease-in-out transform ${
                isVisible ? "translate-x-0" : "translate-x-full"
              }`}>
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  What You'll Learn:
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Introduction to Industrial Sewing Machine
                </p>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Pattern Making
                </p>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Garment Construction
                </p>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Fashion Production Processes
                </p>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Industry Safety and Standards
                </p>
              </div>
            </div>
            <div className="mx-auto">
            <div className="container bg-transparent shadow-xxl  py-8 px-4 max-w-3xl ">
        {showMore && (
          <>
            <p>
            Our vocational apparel tailoring and fashion production course are tailored to meet the needs of individuals seeking hands-on training and practical experience in garment making. Whether you're a beginner looking to start a career in fashion or a fashion enthusiast eager to enhance your skills, this course is perfect for you.


            </p>
            <p>
              <strong>What You'll Learn:</strong>
            </p>
            <p><strong>Introduction to Industrial Sewing Machine:</strong>Part of The Sewing Machine, knowledge od various attachment sand footers to help in proper tailoring, introduction to basic repairs of the machine.
</p>
<p>
  <strong>Basic Sewing Techniques:</strong> Learn essential sewing techniques, including stitching, hemming, seam finishing, and garment assembly, using both hand and machine sewing methods.

</p>
<p>
  <strong>Pattern Making:</strong> Intermediate level of the art of pattern making, including drafting basic patterns, adjusting for fit, and creating custom patterns for different garment styles.

</p>
<p>
  <strong>Garment Construction:</strong> Gain practical experience in constructing garments from start to finish, including cutting fabric, assembling components, and finishing details.
</p>
<p>
  <strong>Fashion Production Processes:</strong>Understand the key stages of fashion production, including Fabric types, materials, production planning, quality control, and manufacturing techniques.

</p>
<p>
  <strong>Industry Safety and Standards: </strong> Learn about industry safety practices, equipment operation, and compliance with quality standards and regulations in garment production.

</p>
<p>
  During your internship, you will have the chance to apply your skills and knowledge in a professional setting, gain insights into industry practices, and build valuable connections with industry professionals. Whether you aspire to work in fashion design, merchandising, styling, or marketing, our internships will give you a competitive edge in the job market.
</p>
<p>
  <strong>Admissions:</strong>Admission to our 3-month certificate course in vocational apparel tailoring and fashion production is open to individuals of all backgrounds and skill levels. No prior experience is required—just a passion for fashion and a desire to learn.

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
        {/* </div> */}
      </div>
    </section>
  );
};

export default AboutSectionTwo;
