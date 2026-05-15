import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vedant Prashant Kaskar | AI, Cloud & DevOps Engineer",
  description:
    "Premium interactive portfolio of Vedant Prashant Kaskar, focused on Cloud, DevOps, AI/ML, and scalable full stack systems.",
  keywords: ["Vedant Kaskar", "Cloud Engineer", "DevOps", "AI/ML", "Full Stack", "MIT WPU"],
  openGraph: {
    title: "Vedant Prashant Kaskar Portfolio",
    description: "Building scalable systems for the future.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}


