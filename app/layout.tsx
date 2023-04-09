import { Metadata } from "next";
import "./styles/globals.css";

import { Raleway, Nunito } from "next/font/google";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin-ext"],
  display: "swap",
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin-ext"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${raleway.variable} ${nunito.variable}`}>
      <body>{children}</body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Bike Watch",
  description:
    "Dashboard for showing the live status of city bike stations in the Helsinki Metropolitan area. By Otto A. Laitinen.",
  icons: {
    icon: "/favicon.ico",
  },
};
