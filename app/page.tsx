import Hero from "@/components/Hero";
import FeaturedCollection from "@/components/FeaturedCollection";
import CollectionSection from "@/components/CollectionSection";
import CustomOrderSection from "@/components/CustomOrderSection";
import WhyHandmade from "@/components/WhyHandmade";
import StudioGallery from "@/components/StudioGallery";
import Testimonials from "@/components/Testimonials";
import SocialSection from "@/components/SocialSection";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedCollection />
      <CollectionSection />
      <WhyHandmade />
      <CustomOrderSection />
      <StudioGallery />
      <Testimonials />
      <SocialSection />
    </>
  );
}
