import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhatWeDo from "@/components/WhatWeDo";
import ViewOurWork from "@/components/ViewOurWork";
import OurProcess from "@/components/OurProcess";
import OurServices from "@/components/OurServices";
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
      <OurProcess />
      <OurServices />
      <Showcase />
      <ClientExpect />
      <FAQ />
      <GetInTouch />
      <Footer />
    </>
  );
}
