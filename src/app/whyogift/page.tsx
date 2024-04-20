import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Why OGIFT",
  description: "This is for About us page",
  // other metadata
};

const Card = ({ title, description }) => {
  return (
    <div className="bg-white dark:bg-dark rounded-lg p-6 shadow-md mb-4 border-4 border-purple-900">
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <p className="text-sm">{description}</p>
    </div>
  );
};

const whyogift = () => {
  return (
    <>
     
      <section className="container mx-auto">
        <div className="mt-12">
          {/* Full screen image */}
          <img src="/images/blog/aboutimg.jpg" alt="Full Screen Image" className="w-full max-h-screen object-cover shadow-xl" />
        </div>

        <div className="mt-8">
          <strong className="text-black dark:text-white mx-auto">
            <h1>Why Choose Onati Global Institute of Fashion Technology?{" "}</h1>
          </strong>
          <div className="grid gap-2">
            <Card title="Comprehensive Curriculum:" description="Our curriculum is carefully crafted to cover all aspects of fashion design, merchandising, marketing, and management, providing students with a well-rounded education that prepares them for diverse career opportunities." />
            <Card title="Experienced Faculty:" description="Our faculty members are industry professionals with extensive experience and expertise in their respective fields. They bring real-world insights and practical knowledge to the classroom, enriching the learning experience for our students." />
            <Card title="State-of-the-Art Facilities:" description="Facilities: From cutting-edge design studios to fully-equipped sewing labs, our institute offers top-notch facilities that provide students with the resources they need to bring their creative visions to life." />
            <Card title="Industry Connections:" description="We have built strong partnerships with leading fashion companies, brands, and organizations, offering students valuable networking opportunities, internships, and hands-on experience in the industry." />
            <Card title="Global Perspective:" description="With a focus on global trends and perspectives, we prepare students to thrive in an increasingly interconnected world. Our programs incorporate international experiences and collaborations, exposing students to diverse cultures and markets." />
          </div>
        </div>
      </section>
    </>
  );
};

export default whyogift;
