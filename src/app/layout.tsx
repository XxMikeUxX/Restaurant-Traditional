import type { Metadata } from "next";
import "./globals.css";
import { ClientBody } from "./clientBody";

export const metadata: Metadata = {
  title: "Mexican'o Lyon",
  description: "Restaurant Mexican'o Lyon. Nous proposons une cuisine d'instinct mexicaine, qui est basée sur le respect, et la saisonnalité des produits. Cuisine gastronomique mexicaine au coeur de Lyon.",
  keywords: "restaurant mexicain, Lyon, tacos, gastronomie mexicaine, fine dining, Mexican'o",
  openGraph: {
    title: "Restaurant Mexican'o Lyon",
    description: "Cuisine gastronomique mexicaine au coeur de Lyon",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
