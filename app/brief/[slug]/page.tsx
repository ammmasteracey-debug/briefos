import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BriefCard } from "@/components/brief-card";
import { SiteHeader } from "@/components/site-header";
import { briefs, categorySlug, getBrief } from "@/data/briefs";

export function generateStaticParams() {
  return briefs.map((brief) => ({ slug: brief.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const brief = getBrief(slug);
  return brief
    ? { title: brief.title, description: brief.summary }
    : { title: "Brief not found" };
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

export default async function BriefDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const brief = getBrief(slug);

  if (!brief) notFound();

  const relatedBriefs = briefs
    .filter((story) => story.slug !== brief.slug)
    .sort(
      (first, second) =>
        Number(second.category === brief.category) -
        Number(first.category === brief.category),
    )
    .slice(0, 2);

  return (
    <main className="page-shell">
      <SiteHeader />
      <article className="brief-detail">
        <header className="detail-header">
          <p className="eyebrow detail-breadcrumb">
            <Link href="/">BriefOS</Link>
            <span aria-hidden="true">/</span>
            <Link href={`/section/${categorySlug(brief.category)}`}>
              {brief.category}
            </Link>
          </p>
          <p className="detail-kicker">Dispatch No. {brief.number}</p>
          <h1>{brief.title}</h1>
          <p className="detail-subtitle">{brief.subtitle}</p>
          <p className="detail-summary">{brief.summary}</p>
          <div className="article-byline">
            <span>Source: {brief.source}</span>
            <time dateTime={brief.publishedAt}>
              {formatDate(brief.publishedAt)}
            </time>
          </div>
        </header>

        <div className="detail-body">
          {brief.blocks.map((block, index) => {
            if (block.type === "paragraph") {
              return <p key={index}>{block.text}</p>;
            }
            if (block.type === "list") {
              return (
                <ul key={index}>
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              );
            }
            if (block.type === "section-list") {
              return (
                <section className="body-section" key={index}>
                  <h2>{block.heading}</h2>
                  <ul>
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
              );
            }
            return (
              <section className="body-section" key={index}>
                <h2>{block.heading}</h2>
                <p>{block.text}</p>
              </section>
            );
          })}
        </div>

        <aside className="related-surfaces" aria-label="Related coverage">
          <p className="eyebrow">Filed under</p>
          <ul>
            {brief.relatedSurfaces.map((surface) => (
              <li key={surface}>{surface}</li>
            ))}
          </ul>
        </aside>
      </article>
      <section className="related-stories" aria-labelledby="related-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Continue reading</p>
            <h2 id="related-title">More from the journal</h2>
          </div>
          <Link className="text-link" href="/archive">
            All stories <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="story-grid">
          {relatedBriefs.map((story) => (
            <BriefCard brief={story} key={story.slug} />
          ))}
        </div>
      </section>
      <footer className="site-footer">
        <Link href="/">KUROGAMI &nbsp;·&nbsp; BRIEFOS</Link>
        <Link href="/archive">THE ARCHIVE</Link>
        <span>PUBLIC INTELLIGENCE / 2026</span>
      </footer>
    </main>
  );
}
