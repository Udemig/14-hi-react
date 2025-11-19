import { useContext } from "react";
import { BasketContext } from "../context/basketContext";
import BasketItem from "../components/basket-item";
import BasketInfo from "../components/basket-info";
import { Link } from "react-router-dom";

const Basket = () => {
  // BasketContext'e abone olup sepet verisine eriş
  const { basket, clearBasket } = useContext(BasketContext);

  return (
    <div className="container ps-4">
      <div className="d-flex justify-content-between align-items-center my-4">
        <h1 className="my-4 fs-1">Sepetiniz</h1>

        {basket.length > 0 && <button onClick={clearBasket}>Temizle</button>}
      </div>

      <div className="d-flex flex-column gap-5">
        {basket.length === 0 ? (
          <p className="text-center my-5 lead">
            <span>Sepetiniz boş</span>
            <Link to="/" className="d-block my-4">
              Ürünler'e Git
            </Link>
          </p>
        ) : (
          basket.map((product) => <BasketItem key={product.id} product={product} />)
        )}
      </div>

      <BasketInfo />
    </div>
  );
};

export default Basket;
