import type { FC } from "react";
import Header from "./header";
import Footer from "./footer";
import { Outlet } from "react-router-dom";

const Layout: FC = () => {
  return (
    <div className="flex flex-col min-h-screen spacing">
      <Header />

      {/* Child route'un ekrana geliceği konumu belirledik */}
      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
