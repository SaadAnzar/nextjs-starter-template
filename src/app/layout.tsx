import "./globals.css";

import { Metadata } from "next";

import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: {
    default: "Anzar",
    template: `%s | Anzar`,
  },
  description: "Md Anzar Ahmad is a full stack developer.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "bg-background min-h-screen font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <div className="flex-1">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
