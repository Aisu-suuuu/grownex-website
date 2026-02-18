import { Metadata } from "next";
import { notFound } from "next/navigation";
import { insights } from "@/lib/insights";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InsightArticle from "@/components/InsightArticle";

export async function generateStaticParams() {
  return insights.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = insights.find((p) => p.slug === slug);
  if (!post) return { title: "Not Found | Grownex" };
  return {
    title: `${post.title} | Grownex Insights`,
    description: post.excerpt,
  };
}

export default async function InsightPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = insights.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <Navbar />
      <div className="pt-[100px]">
        <InsightArticle post={post} />
      </div>
      <Footer />
    </>
  );
}
