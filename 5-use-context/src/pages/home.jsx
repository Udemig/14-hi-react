import { useContext } from "react";
import { ProductContext } from "../context/productContext";
import Card from "../components/card";

const Home = () => {
  // useContext yapısına parametre olarak abone olmak istediğimiz context yapısını veririz
  const { isLoading, error, products } = useContext(ProductContext);

  return (
    <div className="container p-4">
      <h2 className="my-4">Güncel Ürünler</h2>

      <div className="cards-wrapper">
        {isLoading ? (
          <p>Yükleniyor...</p>
        ) : error ? (
          <p>Hata!: {error}</p>
        ) : (
          products.map((product) => <Card key={product.id} product={product} />)
        )}
      </div>
    </div>
  );
};

export default Home;
