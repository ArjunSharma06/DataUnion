import type { Metadata } from "next";
import { Ubuntu, Anton, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SupabaseProvider from "@/components/providers/supabase-provider";
import { Analytics } from "@vercel/analytics/next";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "DataUnion - Own Your Data",
  description: "Transparent, consent-driven data economy for the future",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ubuntu.variable} ${anton.variable} ${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <SupabaseProvider>
          {children}
        </SupabaseProvider>
        <Analytics />
      </body>
    </html>
  );
}
