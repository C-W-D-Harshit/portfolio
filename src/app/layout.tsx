import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import LayoutProvider from "@/components/LayoutProvider";

export const metadata: Metadata = {
  title: "Portfolio - Harshit Sharma",
  description:
    "Web developer or engineer who works with both the front and back ends of a website or application. Provide an end-toend service, and can be involved in projects that involve databases and building userfacing websites.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "relative h-[100dvh] font-sans antialiased bg-background p-4 lg:p-7 text-white"
        )}
      >
        <LayoutProvider>{children}</LayoutProvider>
      </body>
    </html>
  );
}
