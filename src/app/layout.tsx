import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ variable: "--font-space-grotesk", subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({ variable: "--font-jetbrains-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flycomm | See What Others Can't — AI-Powered Wireless Intelligence",
  description:
    "AI-powered digital twin for wireless intelligence. Real-world coverage analysis, spectrum awareness, anomaly detection, and churn prevention for MNOs, defense, and critical infrastructure.",
  keywords: [
    "wireless intelligence", "cellular network", "coverage analysis", "digital twin",
    "spectrum awareness", "anomaly detection", "AI", "SaaS", "telecom", "5G",
    "defense", "smart cities", "critical infrastructure", "churn prevention",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-bg text-text antialiased" suppressHydrationWarning>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
