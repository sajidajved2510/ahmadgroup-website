import HomeAbout from "@/sections/home-about";
import HomeBenefits from "@/sections/home-benefits";
import HomeBlog from "@/sections/home-blog";
import HomeCertification from "@/sections/home-certification";
import HomeChooseUs from "@/sections/home-chooseUs";
import HomeContact from "@/sections/home-contact";
import HomeFooterBanner from "@/sections/home-footer-banner";
import HomeHero from "@/sections/home-hero";
import HomeProjects from "@/sections/home-projects";
import HomeServices from "@/sections/home-services";
import HomeTestimonials from "@/sections/home-testimonials";
import HomeVideoBanner from "@/sections/home-video-banner";
import HomeWorkflow from "@/sections/home-workflow";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeServices />
      <HomeBenefits />
      <HomeAbout />
      <HomeProjects />
      <HomeWorkflow />
      <HomeChooseUs />
      <HomeVideoBanner />
      <HomeContact />
      <HomeTestimonials />
      <HomeBlog />
      <HomeCertification />
      <HomeFooterBanner />
    </>
  );
}
