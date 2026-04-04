import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="pt-[100px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
