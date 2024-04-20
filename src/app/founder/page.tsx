import ShareButtons from "@/components/Common/shareButtom";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Founder " ,
  description: "This is our founder ",
  // other metadata
};

const founder = {
  name: 'John Doe',
  image: '/images/blog/author-02.jpg',
  message: '"We empower individuals with the tools and expertise to thrive in the global fashion landscape. We foster creativity, encourage experimentation, and instill a deep understanding of design principles and industry practices. Through our innovative programs and dedicated faculty, we cultivate the next generation of fashion leaders who will shape the future of the industry."',
  facebook: 'facebook-url',
  instagram: 'instagram-url',
  twitter: 'twitter-url'
};

const AboutFounder = () => {
  return (
    <section className="pb-16 pt-20 relative " >
      <div className="navbar flex justify-center md:justify-center p-4">
      <ShareButtons/>
      </div>
      <div className="relative">
                <div className="absolute inset-0 z-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: "url('/images/blog/missionbg.jpg')" }}></div>
      <div className="container mx-auto grid md:grid-cols-2 gap-2 items-center justify-center p-2 relative z-10">
        <div className="flex-1 p-2">
          <img src={founder.image} alt={founder.name} className="border-4 border-purple-900 rounded-lg mb-4 mx-auto width={400} height={400}" />
        </div>
        <div className="flex-3">
          <h2 className="text-3xl font-bold mb-4">Founders Mission</h2>
          <p className="text-lg p-5 border-4 border-purple-900">{founder.message}</p>
        </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFounder;
