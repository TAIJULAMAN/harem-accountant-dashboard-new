import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import DashboardLayout from "@/components/layout/DashboardLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Accountant Dashboard",
  description:
    "A premium, responsive dashboard for accountants to manage salon payroll, pending taxes, budgeting, and compliance analytics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <title>Accountant Dashboard</title>
      </head>
      <body className="min-h-full bg-bg-main text-slate-800">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:p-4 focus:bg-white focus:absolute focus:z-50"
        >
          Skip to main content
        </a>
        <main id="main-content" className="h-full">
          <DashboardLayout>{children}</DashboardLayout>
        </main>
      </body>
    </html>
  );
}
