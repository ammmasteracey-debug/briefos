import Link from "next/link";
import Image from "next/image";
import { BriefCard } from "@/components/brief-card";
import { LandingLoader } from "@/components/landing-loader";
import { SiteHeader } from "@/components/site-header";
import { briefs, categories, categorySlug, sources } from "@/data/briefs";

type SearchParams = Promise<{
  source?: string;
  category?: string;
}>;

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

export default async function Home({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const filters = await searchParams;
  const selectedSource = sources.includes(filters.source ?? "")
    ? filters.source
    : "";
  const selectedCategory = categories.includes(filters.category ?? "")
    ? filters.category
    : "";
  const filteredBriefs = briefs.filter(
    (brief) =>
      (!selectedSource || brief.source === selectedSource) &&
      (!selectedCategory || brief.category === selectedCategory),
  );
  const featuredBrief =
    briefs.find((brief) => brief.number === "05") ?? briefs[0];
  const latestBriefs = briefs
    .filter((brief) => brief.slug !== featuredBrief.slug)
    .slice(0, 3);
  const hasFilters = Boolean(selectedSource || selectedCategory);

  return (
    <main className="page-shell">
      <LandingLoader />
      <SiteHeader />
      <div className="publication-line">
        <span>Curated intelligence for operators</span>
        <span>Vol. 01 &nbsp;·&nbsp; {formatDate(briefs[0].publishedAt)}</span>
      </div>

      <section className="masthead" aria-labelledby="publication-title">
        <p className="masthead-kicker">The Kurogami journal</p>
        <h1 id="publication-title">BriefOS</h1>
        <p>Process intelligence, made legible.</p>
      </section>

      <section className="lead-story" aria-labelledby="lead-title">
        <div className="lead-copy">
          <p className="eyebrow">
            The lead &nbsp;·&nbsp; {featuredBrief.category}
          </p>
          <h2 id="lead-title">{featuredBrief.title}</h2>
          <p className="lead-subtitle">{featuredBrief.subtitle}</p>
          <p className="lead-summary">{featuredBrief.summary}</p>
          <div className="story-byline">
            <span>{featuredBrief.source}</span>
            <span>{formatDate(featuredBrief.publishedAt)}</span>
          </div>
          <Link className="text-link" href={`/brief/${featuredBrief.slug}`}>
            Read the story <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="lead-art">
          <Image
            alt={featuredBrief.imageAlt}
            fill
            sizes="(max-width: 820px) 100vw, 50vw"
            src={featuredBrief.image}
          />
        </div>
      </section>

      <section className="latest-section" aria-labelledby="latest-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">From the editors</p>
            <h2 id="latest-title">The latest</h2>
          </div>
          <Link className="text-link" href="/archive">
            All stories <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="story-grid">
          {latestBriefs.map((brief) => (
            <BriefCard brief={brief} key={brief.slug} />
          ))}
        </div>
      </section>

      <section className="section-index" aria-labelledby="sections-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Explore by subject</p>
            <h2 id="sections-title">Sections</h2>
          </div>
        </div>
        <div className="section-grid">
          {categories.map((category, index) => {
            const count = briefs.filter(
              (brief) => brief.category === category,
            ).length;
            return (
              <Link
                className="section-index-link"
                href={`/section/${categorySlug(category)}`}
                key={category}
              >
                <span className="section-index-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{category}</span>
                <span className="section-index-count">
                  {String(count).padStart(2, "0")}
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="archive-preview" aria-labelledby="archive-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Browse the collection</p>
            <h2 id="archive-title">
              {hasFilters ? "Filtered stories" : "In this issue"}
            </h2>
          </div>
          {!hasFilters && (
            <Link className="text-link" href="/archive">
              Visit the archive <span aria-hidden="true">↗</span>
            </Link>
          )}
        </div>
        <form action="/" className="filter-bar">
          <label>
            <span className="filter-label">Source</span>
            <select defaultValue={selectedSource} name="source">
              <option value="">All sources</option>
              {sources.map((source) => (
                <option key={source} value={source}>
                  {source}
                </option>
              ))}
            </select>
          </label>
          <label>
            <span className="filter-label">Section</span>
            <select defaultValue={selectedCategory} name="category">
              <option value="">All sections</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </label>
          <button className="filter-submit" type="submit">
            Apply filters
          </button>
          {hasFilters && (
            <Link className="text-link" href="/">
              Clear
            </Link>
          )}
        </form>
        {filteredBriefs.length > 0 ? (
          <div className="archive-list">
            {filteredBriefs.map((brief) => (
              <BriefCard brief={brief} key={brief.slug} variant="row" />
            ))}
          </div>
        ) : (
          <p className="empty-state">No stories match these filters.</p>
        )}
      </section>

      <section className="editorial-note" id="about">
        <p className="eyebrow">Our point of view</p>
        <h2>
          Systematic capture of elite human process is the highest leverage.
        </h2>
        <p>
          BriefOS is an independent, curated record of the signals reshaping how
          operators work. Published by Kurogami.
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
