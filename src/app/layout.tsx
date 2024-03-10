import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Template } from "@/components/Template";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "A Basic web app.",
  description: "Tapping into an old api",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (<Template>{children}</Template>)
}
