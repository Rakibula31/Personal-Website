import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rakibul Alam - Computer Engineering",
  description: "Computer Engineering student at Georgia Tech with focus in system architecture and distributed systems",
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
