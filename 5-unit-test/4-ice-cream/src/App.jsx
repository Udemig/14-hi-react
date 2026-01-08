import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ProductList />
      </main>
      <Footer />
      <Cart />
    </div>
  );
};

export default App;
