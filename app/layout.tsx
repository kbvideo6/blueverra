import type { Metadata } from "next";
import { Manrope, Newsreader } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blueverra | Protecting the Ocean's Future",
  description: "An educational initiative dedicated to raising awareness about our environment and technological footprint.",
  icons: {
    icon: "/logos/Geothermal-removebg-preview.png",
    apple: "/logos/Geothermal-removebg-preview.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${manrope.variable} ${newsreader.variable} h-full antialiased scroll-smooth`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col font-sans bg-[#f7f9fb] text-[#0d1b2a] bg-[radial-gradient(circle_at_top_left,rgba(95,168,211,0.18)_0%,transparent_30%),radial-gradient(circle_at_90%_15%,rgba(59,105,52,0.12)_0%,transparent_24%),linear-gradient(180deg,#ffffff_0%,#f7f9fb_100%)]">
        <Header />
        <main className="flex-1 relative overflow-clip">
            {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
