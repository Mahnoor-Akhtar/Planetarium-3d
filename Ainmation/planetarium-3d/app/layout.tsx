import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "3D Virtual Planetarium",
  description: "Explore the universe in 3D - Interactive solar system explorer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-full h-screen bg-black overflow-hidden">
        {children}
      </body>
    </html>
  );
}
