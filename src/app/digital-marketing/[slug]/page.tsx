import { notFound } from "next/navigation";
import { dmCaseStudies } from "@/lib/data";
import DMCaseStudyPage from "@/components/DMCaseStudyPage";

export function generateStaticParams() {
  return dmCaseStudies.map((cs) => ({
    slug: cs.slug,
  }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return params.then(({ slug }) => {
    const caseStudy = dmCaseStudies.find((cs) => cs.slug === slug);
    if (!caseStudy) return { title: "Case Study Not Found" };
    return {
      title: `${caseStudy.title} | Grownex`,
      description: caseStudy.description,
    };
  });
}

export default async function DMCaseStudyRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = dmCaseStudies.find((cs) => cs.slug === slug);

  if (!caseStudy) {
    notFound();
  }

  return <DMCaseStudyPage caseStudy={caseStudy} />;
}
