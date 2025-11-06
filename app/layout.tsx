import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Website Template",
  description: "A comprehensive Next.js template with Firebase, Leaflet, and Resend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-hidden">
        {children}
      </body>
    </html>
  );
}
