import Header from "@/components/header";
import "./globals.css";
import Footer from "@/components/footer";

// Bu metadata bütün sayfalarıa etki eder
export const metadata = {
  title: { default: "Amazon", template: "Amazon | %s" },
  description: "Amazon en popüler alışveriş sitesi",
  robots: "index,follow",
  keywords: ["amazon", "alışveriş", "elektronik"],
  author: "Furkan Evin",
  openGraph: {
    title: "Amazon",
    description: "açıklama",
    images: ["www.resim.com"],
  },
};

// Layout'lar birer HOC'dır
// Root layout içerisinde bütün sayfalara etki edicek ortak element / stillendirme tanımı yapabiliriz
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased flex flex-col min-h-screen`}>
        <Header />

        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
