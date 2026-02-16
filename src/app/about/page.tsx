import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About Us | Grownex — Branding & Marketing Consultancy",
  description:
    "Learn about Grownex — our mission, vision, capabilities, and the team behind purposeful, enduring brands.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="pt-[100px]">
        <AboutSection />
      </div>
      <Footer />
    </>
  );
}
