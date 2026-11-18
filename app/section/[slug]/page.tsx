import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BriefCard } from "@/components/brief-card";
import { SiteHeader } from "@/components/site-header";
import {
  categories,
  categorySlug,
  getBriefsForCategory,
  getCategoryFromSlug,
} from "@/data/briefs";

export function generateStaticParams() {
  return categories.map((category) => ({ slug: categorySlug(category) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryFromSlug(slug);
  return category
    ? {
        title: `${category} | Sections`,
        description: `Stories and analysis from the ${category} section of BriefOS.`,
      }
    : { title: "Section not found" };
}

export default async function SectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategoryFromSlug(slug);
  if (!category) notFound();

  const sectionBriefs = getBriefsForCategory(category);

  return (
    <main className="page-shell">
      <SiteHeader />
      <section className="listing-page" aria-labelledby="section-title">
        <p className="eyebrow">
          <Link href="/">BriefOS</Link> &nbsp;/&nbsp; Sections
        </p>
        <div className="listing-heading">
          <div>
            <p className="eyebrow">The journal</p>
            <h1 id="section-title">{category}</h1>
          </div>
          <p>
            Reporting, signals, and analysis filed under {category.toLowerCase()}.
          </p>
        </div>
        <p className="listing-count">
          {String(sectionBriefs.length).padStart(2, "0")}{" "}
          {sectionBriefs.length === 1 ? "STORY" : "STORIES"}
        </p>
        <div className="story-grid">
          {sectionBriefs.map((brief) => (
            <BriefCard brief={brief} key={brief.slug} />
          ))}
        </div>
        <p className="listing-return">
          <Link className="text-link" href="/archive">
            Browse the complete archive <span aria-hidden="true">→</span>
          </Link>
        </p>
      </section>
      <footer className="site-footer">
        <Link href="/">KUROGAMI &nbsp;·&nbsp; BRIEFOS</Link>
        <Link href="/archive">THE ARCHIVE</Link>
        <span>PUBLIC INTELLIGENCE / 2026</span>
      </footer>
    </main>
  );
}
