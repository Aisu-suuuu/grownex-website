import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhatWeDo from "@/components/WhatWeDo";
import ViewOurWork from "@/components/ViewOurWork";
import ViewOurDMWork from "@/components/ViewOurDMWork";
import OurServices from "@/components/OurServices";
import CreativeWorks from "@/components/CreativeWorks";
import Showcase from "@/components/Showcase";
import ClientExpect from "@/components/ClientExpect";
import FAQ from "@/components/FAQ";
import GetInTouch from "@/components/GetInTouch";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WhatWeDo />
      <ViewOurWork />
      <ViewOurDMWork />
      <CreativeWorks />
      <OurServices />
      <Showcase />
      <ClientExpect />
      <FAQ />
      <div className="sticky top-0 z-0">
        <GetInTouch />
      </div>
      <div className="relative z-10">
        <Footer />
      </div>
    </>
  );
}
