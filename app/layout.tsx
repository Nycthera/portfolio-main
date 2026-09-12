import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nycthera / digital maker",
  description: "The portfolio and project index of Nycthera.",
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
