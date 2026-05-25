import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects, getProject } from "@/lib/projects";
import Nav from "@/components/Nav";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — ${project.client}`,
    description: project.description,
  };
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const prev = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const next =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <>
      <Nav />
      <main className="bg-canvas min-h-screen">
        {/* Hero band */}
        <div className="border-b border-[var(--hairline-soft)] pt-32 pb-16 px-5 lg:px-8">
          <div className="mx-auto max-w-[1200px]">
            <Link
              href="/#work"
              className="group inline-flex items-center gap-2 font-medium mb-10 px-5 py-2.5 rounded-full transition-all"
              style={{ background: "#2B2BFF", color: "#fff", fontSize: 15 }}
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" /> Back to work
            </Link>

            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p
                  className="caption text-ink-muted uppercase"
                  style={{ letterSpacing: "0.18em" }}
                >
                  {project.number} — {project.tags.join(" · ")}
                </p>
                <h1 className="display-xxl text-ink mt-4">{project.title}</h1>
              </div>
              <div className="lg:text-right shrink-0">
                <p className="caption text-ink-muted uppercase" style={{ letterSpacing: "0.18em" }}>Client</p>
                <p className="body-lg text-ink mt-1">{project.client}</p>
                <p className="caption text-ink-muted uppercase mt-4" style={{ letterSpacing: "0.18em" }}>Year</p>
                <p className="body-lg text-ink mt-1">{project.year}</p>
                <p className="caption text-ink-muted uppercase mt-4" style={{ letterSpacing: "0.18em" }}>Role</p>
                <p className="body-lg text-ink mt-1">{project.role}</p>
              </div>
            </div>

            {/* Description */}
            <div className="mt-12 grid gap-8 lg:grid-cols-[2fr_1fr]">
              <p className="subhead text-ink-muted leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 lg:justify-end lg:content-start">
                {project.tags.map((t) => (
                  <span key={t} className="btn-translucent">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Images — full-width, stacked flush */}
        <div className="mx-auto max-w-[1200px] px-5 lg:px-8 py-10 flex flex-col">
          {project.images.map((src, i) => (
            <div
              key={src}
              className="relative w-full overflow-hidden bg-[var(--surface-1)]"
            >
              <Image
                src={src}
                alt={`${project.title} — ${i + 1}`}
                width={1200}
                height={900}
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="w-full h-auto block"
                priority={i === 0}
              />
            </div>
          ))}
        </div>

        {/* Prev / Next */}
        <div className="border-t border-[var(--hairline-soft)] mx-5 lg:mx-8 mt-10">
          <div className="mx-auto max-w-[1200px] grid grid-cols-2 divide-x divide-[var(--hairline-soft)]">
            {prev ? (
              <Link
                href={`/work/${prev.slug}`}
                className="group flex flex-col gap-3 py-10 px-4 hover:bg-[var(--surface-1)] transition-colors"
              >
                <span className="caption text-ink-muted uppercase flex items-center gap-2" style={{ letterSpacing: "0.18em" }}>
                  <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
                  Previous
                </span>
                <span className="display-md text-ink" style={{ letterSpacing: "-0.04em" }}>{prev.title}</span>
                <span className="caption text-ink-muted">{prev.client}</span>
              </Link>
            ) : <div />}

            {next ? (
              <Link
                href={`/work/${next.slug}`}
                className="group flex flex-col gap-3 py-10 px-4 text-right hover:bg-[var(--surface-1)] transition-colors"
              >
                <span className="caption text-ink-muted uppercase flex items-center justify-end gap-2" style={{ letterSpacing: "0.18em" }}>
                  Next
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="display-md text-ink" style={{ letterSpacing: "-0.04em" }}>{next.title}</span>
                <span className="caption text-ink-muted">{next.client}</span>
              </Link>
            ) : <div />}
          </div>
        </div>

        {/* CTA strip */}
        <div className="border-t border-[var(--hairline-soft)] px-5 lg:px-8 py-10 text-center">
          <Link
            href="/#work"
            className="group inline-flex items-center gap-3 focus-ring"
          >
            <ArrowLeft className="h-4 w-4 text-ink group-hover:text-[#2B2BFF] transition-colors group-hover:-translate-x-1 transition-transform" />
            <span
              className="display-md text-ink group-hover:text-[#2B2BFF] transition-colors"
              style={{ letterSpacing: "-0.04em" }}
            >
              Back to work
            </span>
          </Link>
        </div>
      </main>
    </>
  );
}
