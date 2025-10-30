import Header from "./header";
import Footer from "./footer";
import { Outlet } from "react-router-dom";

const Wrapper = () => {
  return (
    <div className="page">
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Wrapper;
