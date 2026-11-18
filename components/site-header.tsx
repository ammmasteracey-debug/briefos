import Link from "next/link";
import { categories, categorySlug } from "@/data/briefs";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link aria-label="Kurogami BriefOS home" className="wordmark" href="/">
        <span className="wordmark-mark" aria-hidden="true">
          黒
        </span>
        <span className="wordmark-name">
          KUROGAMI
          <small>THE BRIEFOS JOURNAL</small>
        </span>
      </Link>
      <nav aria-label="Main navigation" className="header-nav">
        <Link href="/">HOME</Link>
        {categories.map((category) => (
          <Link
            href={`/section/${categorySlug(category)}`}
            key={category}
          >
            {category.toUpperCase()}
          </Link>
        ))}
        <Link href="/archive">ARCHIVE</Link>
      </nav>
    </header>
  );
}
