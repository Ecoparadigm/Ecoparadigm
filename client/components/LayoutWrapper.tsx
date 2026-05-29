"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  if (isAdmin) {
    return <main className="min-h-screen bg-gray-50">{children}</main>;
  }

  return (
    <>
      <Header />
      <main className="pt-20 md:pt-24">{children}</main>
      <Footer />
    </>
  );
}
