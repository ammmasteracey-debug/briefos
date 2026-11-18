import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page-shell not-found">
      <p className="eyebrow">404 / NOT FOUND</p>
      <h1>Brief unavailable.</h1>
      <Link href="/">Return to BriefOS</Link>
    </main>
  );
}
