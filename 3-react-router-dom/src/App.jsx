import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Products from "./pages/products";
import Header from "./components/header";
import Footer from "./components/footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="page">
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ürünler" element={<Products />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
