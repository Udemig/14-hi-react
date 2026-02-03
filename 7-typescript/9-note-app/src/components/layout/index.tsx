import type { FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

const Layout: FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 container py-6 px-4 sm:px-6 animate-slide-up">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
