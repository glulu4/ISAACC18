import ImageGallery from "@/components/about/ImageGallery";
import CTA from "@/components/landing/CTA";
import OurValues from "@/components/landing/OurValues";
import Row from "@/components/ui/Row";


const Page = async () => {
  return (
    <div className="pt-28 container mx-auto px-5">

      <Row
        title="About Us"
        description="We are a dedicated team committed to making a difference in the world. Our mission is to empower individuals and communities through innovative solutions and compassionate support."
        imageSrc="/images/about.jpg"
        imageAlt="About Us"
      />

      <div>
        <OurValues />
      </div>

      <div>
        <h2 className="font-semibold leading-none text-5xl text-center font-serif text-blue-950 sm:text-7xl pb-20">
          Meet Our Team
        </h2>
        <ImageGallery />
      </div>

      <div id="help">
        <CTA />
      </div>
    </div>
  );
};

export default Page;
