"use client";
import CTA from "@/components/landing/CTA";
import Hero from "@/components/landing/Hero";
import IdealCanidate from "@/components/landing/IdealCanidate";
import VolunteerStories from "@/components/VolunteerStories";



const images = [
  {
    id: 1,
    title: 'Motivation',
    description:`
    EM in Israel is a young specialty with tremendous growth potential and clinical, educational and academic support needs that preceded October 7th. After October 7th, over 350,000 reservists were called up to serve and protect Israel, including a significant number of EM providers, leaving several emergency departments across the country further understaffed. 
    `,
    imageUrl: "/images/home/img1.jpg",
  },
  {
    id: 2,
    title: 'Join the Movement',
    description:
      'Switch to renewable energy and reduce your carbon footprint. Solar energy is clean, sustainable, and the perfect choice for environmentally conscious individuals. Let’s build a greener future together.',
    imageUrl: "/images/home/img2.jpg",  },
  {
    id: 3,
    title: 'Increase Your Property Value',
    description:
      'Solar panels not only save energy but also enhance your property’s market value. Invest in a long-term energy solution that adds tangible value to your home or business.',
    imageUrl: "/images/home/img3.jpg",  },
];

export type ThreeImageArrayType = typeof images[number];

const Page = () => {
  return (
    <div className="mb-10">
      
      <div className="">
        <Hero/>
      </div>


      <div>
        <IdealCanidate/>
      </div>


{/* <TrustedBy/> */}


      <div>
       <VolunteerStories />
      </div>





      <div id="help">
        <CTA/>
      </div>


    </div>
  );
};

export default Page;


