"use client";

import Footer from "@/components/UI/Footer";
import NavBar from "@/components/UI/Header";
import ScrollToTopButton from "@/components/UI/ScrollToTopButton";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="antialiased">
      <SessionProvider>
        <NavBar />
        {children}
        <ScrollToTopButton />
        <Footer />
      </SessionProvider>
    </div>
  );
}