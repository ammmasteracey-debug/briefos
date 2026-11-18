import Link from "next/link";
import type { Brief } from "@/data/briefs";

export function BriefCard({
  brief,
  variant = "card",
}: {
  brief: Brief;
  variant?: "card" | "row";
}) {
  return (
    <article className={`brief-card brief-card-${variant}`}>
      <Link
        className="brief-card-link"
        href={`/brief/${brief.slug}`}
      >
        <div className="brief-card-topline">
          <span className="brief-category">{brief.category}</span>
          <span className="brief-number">{brief.publishedAt}</span>
        </div>
        <h2>{brief.title}</h2>
        <p className="brief-subtitle">{brief.subtitle}</p>
        <p className="brief-summary">{brief.summary}</p>
        <div className="brief-card-footer">
          <span>{brief.source}</span>
          <span className="read-brief">
            Read story <span aria-hidden="true">↗</span>
          </span>
        </div>
      </Link>
    </article>
  );
}
