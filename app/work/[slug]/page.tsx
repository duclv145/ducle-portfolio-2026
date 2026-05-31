import { notFound } from "next/navigation";
import TopBar from "@/components/TopBar";
import WorkDetail from "@/components/WorkDetail";
import ContactFooter from "@/components/ContactFooter";
import { projects, getProject, projectSlug } from "@/lib/data";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: projectSlug(p.name) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  return { title: project ? `${project.name} — Duc Le` : "Work — Duc Le" };
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const idx = projects.findIndex((p) => projectSlug(p.name) === slug);
  const nextP = projects[(idx + 1) % projects.length];
  const next = { name: nextP.name, slug: projectSlug(nextP.name) };

  return (
    <main className="relative min-h-screen bg-[#050505]">
      <TopBar backHref="/portfolio" backLabel="Back" />
      <WorkDetail project={project} next={next} />
      <ContactFooter />
    </main>
  );
}
