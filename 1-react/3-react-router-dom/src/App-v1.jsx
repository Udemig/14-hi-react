import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Products from "./pages/products";
import Detail from "./pages/detail";
import NotFound from "./pages/not-found";
import Novel from "./pages/novel";
import Story from "./pages/story";
import Layout from "./components/layout";
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

            {/* Dynamic Route */}
            <Route path="/ürün/:id" element={<Detail />} />

            {/* Nested Route */}
            <Route path="/kategori" element={<Layout />}>
              <Route path="roman" element={<Novel />} />
              <Route path="hikaye" element={<Story />} />
            </Route>

            {/* Not Found Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
