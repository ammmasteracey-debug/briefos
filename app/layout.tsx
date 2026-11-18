import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "BriefOS Journal — Kurogami",
    template: "%s — BriefOS",
  },
  description:
    "An independent journal of process intelligence and the signals reshaping how operators work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
