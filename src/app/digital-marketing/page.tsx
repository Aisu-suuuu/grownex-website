import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DigitalMarketingContent from "@/components/DigitalMarketingContent";

export const metadata: Metadata = {
  title: "Digital Marketing | Grownex",
  description:
    "Performance-driven digital marketing strategies — SEO, PPC, social media, content marketing, and full-funnel growth systems.",
};

export default function DigitalMarketingPage() {
  return (
    <>
      <Navbar />
      <div className="pt-[100px]">
        <DigitalMarketingContent />
      </div>
      <Footer />
    </>
  );
}
