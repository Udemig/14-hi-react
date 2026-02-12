import Header from "@/components/header";
import "./globals.css";
import Footer from "@/components/footer";

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
