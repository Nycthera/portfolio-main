import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nycthera — Developer Portfolio",
  description:
    "A retro RPG-inspired portfolio of projects, experiments, and milestones by Nycthera.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
