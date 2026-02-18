import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InsightsPageContent from "@/components/InsightsPageContent";

export const metadata: Metadata = {
  title: "Insights | Grownex",
  description:
    "Thoughts on branding, digital marketing, and building businesses that last — from the Grownex team.",
};

export default function InsightsPage() {
  return (
    <>
      <Navbar />
      <div className="pt-[100px]">
        <InsightsPageContent />
      </div>
      <Footer />
    </>
  );
}
