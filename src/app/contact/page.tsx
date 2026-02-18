import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactPageContent from "@/components/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact Us | Grownex",
  description:
    "Get in touch with Grownex — let's discuss how we can help your brand grow with strategy-led branding and marketing.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div className="pt-[100px]">
        <ContactPageContent />
      </div>
      <Footer />
    </>
  );
}
