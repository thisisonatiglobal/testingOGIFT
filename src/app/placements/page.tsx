import CardComponent from "@/components/Common/Card";
import NewsLatterBox from "@/components/Contact/NewsLatterBox";
import { Metadata } from "next";
import Image from "next/image";
import { cardComponentData, cardData } from "./placementsData";

export const metadata: Metadata = {
  title: "Placement",
  description: "This is for placement page",
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

const BlogSidebarPage = () => {
  return (
    <>
      <section className="overflow-hidden pb-[120px] pt-[180px] bg-white dark:bg-dark relative">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-8/12">
              <div className="relative">
                <div className="absolute inset-0 z-0 opacity-10 bg-cover bg-center" style={{ backgroundImage: "url('/images/features/fashions.jpg')" }}></div>
                <h1 className="relative z-10 mb-8 mx-25  text-3xl font-bold leading-tight shadow-2xl text-[#4a044e] dark:text-white sm:text-4xl sm:leading-tight">
                  Placement Support at OGIFT
                </h1>
                <div>
                  <p className="mb-10 text-black font-medium leading-relaxed bg-white text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    At Onati Global Institute of Fashion Technology, we are committed to not only providing top-notch education but also ensuring that our students have the support they need to kickstart their careers in the fashion industry. Our comprehensive placement support services are designed to connect students with exciting job opportunities and internships, paving the way for a successful and fulfilling career journey.
                  </p>
                  <strong className="text-black dark:text-white mx-auto">
                    <h1>What Sets Us Apart:{" "}</h1>
                  </strong>
                  <div className="grid gap-2">
                    {cardData?.length > 0 && cardData?.map((data, index) => (
                      <Card key={index} {...data} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-4/12 ">
              <NewsLatterBox />
              <Image
                src="/images/placement/Poster.jpg"
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </div>
            <div className="flex ">
  {cardComponentData?.map((data, index) => (
    <CardComponent key={index} {...data} />
  ))}
</div>

          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSidebarPage;
