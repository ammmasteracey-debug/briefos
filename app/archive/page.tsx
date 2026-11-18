import type { Metadata } from "next";
import Link from "next/link";
import { BriefCard } from "@/components/brief-card";
import { SiteHeader } from "@/components/site-header";
import { briefs } from "@/data/briefs";

export const metadata: Metadata = {
  title: "The Archive",
  description: "Browse every BriefOS story by issue and publication date.",
};

function formatIssue(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

export default function ArchivePage() {
  const issues = briefs.reduce<Map<string, typeof briefs>>((grouped, brief) => {
    const issue = brief.publishedAt.slice(0, 7);
    grouped.set(issue, [...(grouped.get(issue) ?? []), brief]);
    return grouped;
  }, new Map());
  const sortedIssues = [...issues.entries()].sort(([first], [second]) =>
    second.localeCompare(first),
  );

  return (
    <main className="page-shell">
      <SiteHeader />
      <section className="listing-page" aria-labelledby="archive-page-title">
        <p className="eyebrow">
          <Link href="/">BriefOS</Link> &nbsp;/&nbsp; Library
        </p>
        <div className="listing-heading">
          <div>
            <p className="eyebrow">Every story, in its place</p>
            <h1 id="archive-page-title">The archive</h1>
          </div>
          <p>
            A growing record of the ideas, tools, and human processes changing
            how work gets done.
          </p>
        </div>
        {sortedIssues.map(([issue, issueBriefs]) => (
          <section className="archive-issue" key={issue}>
            <div className="issue-heading">
              <h2>{formatIssue(`${issue}-01`)}</h2>
              <span>
                {String(issueBriefs.length).padStart(2, "0")} STORIES
              </span>
            </div>
            <div className="archive-list">
              {issueBriefs.map((brief) => (
                <BriefCard brief={brief} key={brief.slug} variant="row" />
              ))}
            </div>
          </section>
        ))}
      </section>
      <footer className="site-footer">
        <Link href="/">KUROGAMI &nbsp;·&nbsp; BRIEFOS</Link>
        <Link href="/">BACK TO THE JOURNAL ↑</Link>
        <span>PUBLIC INTELLIGENCE / 2026</span>
      </footer>
    </main>
  );
}
