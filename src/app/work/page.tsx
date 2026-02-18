import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WorkPageContent from "@/components/WorkPageContent";

export const metadata: Metadata = {
  title: "Our Work | Grownex",
  description:
    "Explore our portfolio of branding, identity, and marketing projects — strategy-led work that drives real market impact.",
};

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <div className="pt-[100px]">
        <WorkPageContent />
      </div>
      <Footer />
    </>
  );
}
