import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { stockGroups } from "@/data/stocks";

export const metadata: Metadata = {
  title: "Kurogami BriefOS Stock List",
  description:
    "A research watchlist connecting public companies to the lanes covered in the first five BriefOS articles.",
};

const appearances = stockGroups.flatMap((group) => group.stocks).reduce(
  (counts, stock) => counts.set(stock.ticker, (counts.get(stock.ticker) ?? 0) + 1),
  new Map<string, number>(),
);

export default function StocksPage() {
  return (
    <main className="page-shell">
      <SiteHeader />
      <section className="listing-page stock-list-page" aria-labelledby="stock-list-title">
        <p className="eyebrow">
          <Link href="/">BriefOS</Link> &nbsp;/&nbsp; Research watchlist
        </p>
        <div className="listing-heading">
          <div>
            <p className="eyebrow">Following the lanes in our first five briefs</p>
            <h1 id="stock-list-title">The stock list</h1>
          </div>
          <p>
            Fifteen public companies connected to the technologies and
            industries covered in BriefOS. Three names per brief.
          </p>
        </div>

        <aside className="stock-disclosure">
          <p>
            These are companies positioned in the lanes the briefs describe,
            not recommendations. Do your own research.
          </p>
          <p>
            This list does not include live prices, valuation analysis, or
            position sizing. A company appearing in more than one brief
            reflects an overlap between themes, not an additional position.
          </p>
        </aside>

        {stockGroups.map((group) => (
          <section
            aria-labelledby={`stock-brief-${group.briefNumber}`}
            className="stock-brief-group"
            key={group.briefNumber}
          >
            <div className="stock-group-heading">
              <p className="eyebrow">Brief {group.briefNumber}</p>
              <h2 id={`stock-brief-${group.briefNumber}`}>
                <Link href={`/brief/${group.briefSlug}`}>
                  {group.briefTitle}
                  <span aria-hidden="true"> ↗</span>
                </Link>
              </h2>
            </div>
            <div className="stock-grid">
              {group.stocks.map((stock) => {
                const otherAppearances = (appearances.get(stock.ticker) ?? 1) - 1;
                return (
                  <article className="stock-card" key={`${group.briefNumber}-${stock.ticker}`}>
                    <div className="stock-card-heading">
                      <div>
                        <h3>{stock.company}</h3>
                        <p className="stock-ticker">{stock.ticker}</p>
                      </div>
                      {otherAppearances > 0 && (
                        <span className="stock-repeat">
                          Also in {otherAppearances}{" "}
                          {otherAppearances === 1 ? "brief" : "briefs"}
                        </span>
                      )}
                    </div>
                    <p className="stock-focus">{stock.focus}</p>
                    <p className="stock-rationale">{stock.rationale}</p>
                  </article>
                );
              })}
            </div>
          </section>
        ))}

        <aside className="stock-research-note">
          <p className="eyebrow">A note on the list</p>
          <p>
            The list is organized by BriefOS coverage, not by expected return.
            Each company’s connection to a theme can change as the underlying
            technology, business, and briefs evolve.
          </p>
        </aside>
      </section>
      <footer className="site-footer">
        <Link href="/">KUROGAMI &nbsp;·&nbsp; BRIEFOS</Link>
        <Link href="/archive">THE ARCHIVE</Link>
        <span>PUBLIC INTELLIGENCE / 2026</span>
      </footer>
    </main>
  );
}
