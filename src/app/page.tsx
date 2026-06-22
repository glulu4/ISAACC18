"use client";
import CTA from "@/components/landing/CTA";
import Hero from "@/components/landing/Hero";
import IdealCanidate from "@/components/landing/IdealCanidate";
import PhotoGallery from "@/components/landing/PhotoGallery";
import VolunteerStories from "@/components/VolunteerStories";



export type ThreeImageArrayType = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
};

const Page = () => {
  return (
    <div className="mb-10">
      
      <div >
        <Hero/>
      </div>


      <div className="container">
        <IdealCanidate/>
      </div>

      <div>
        <PhotoGallery />
      </div>


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


