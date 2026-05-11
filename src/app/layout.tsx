import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://punters.racevault.com"),
  title: {
    default: "OddsOn",
    template: "%s | OddsOn",
  },
  description:
    "OddsOn gives punters a clean, theme-aware racing interface with a consistent brand system across the entire app.",
  applicationName: "OddsOn",
  keywords: ["OddsOn", "RaceVault", "horse racing", "punters"],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f7fb" },
    { media: "(prefers-color-scheme: dark)", color: "#08111f" },
  ],
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
      className={`${inter.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full bg-background text-foreground antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
