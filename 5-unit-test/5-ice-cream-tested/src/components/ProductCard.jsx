import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import { toast } from "react-toastify";

const ProductCard = ({ product }) => {
  const [orderType, setOrderType] = useState("cone");
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, orderType }));
    toast.success(`${product.name} (${orderType === "cone" ? "Külah" : "Kase"}) Sepete eklendi!`, {
      position: "bottom-right",
      autoClose: 2000,
    });
  };

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-hover dark:bg-card-dark dark:shadow-none dark:ring-1 dark:ring-white/10">
      <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-100">
        <div
          data-testid="product-image"
          className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{
            backgroundImage: `url('${product.image || product.imageUrl}')`,
          }}
        ></div>
        <div className="absolute right-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-slate-900 shadow-sm backdrop-blur-md dark:bg-black/80 dark:text-white">
          ₺{product.price}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-5">
          <div className="flex justify-between items-start mb-1">
            <h4 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
              {product.name}
            </h4>
          </div>
          <p className="text-sm font-medium text-slate-500 line-clamp-2 dark:text-slate-400 leading-relaxed">
            {product.description}
          </p>
        </div>
        <div className="mt-auto flex flex-col gap-4">
          <div className="relative flex w-full rounded-xl bg-slate-50 p-1.5 ring-1 ring-slate-100 dark:bg-white/5 dark:ring-white/5">
            <label className="relative z-10 flex flex-1 cursor-pointer items-center justify-center gap-1.5 rounded-lg py-2 text-sm font-bold transition-all">
              <input
                className="peer sr-only"
                name={`flavor-${product.id}`}
                type="radio"
                value="cone"
                checked={orderType === "cone"}
                onChange={() => setOrderType("cone")}
              />
              <span className="text-slate-500 transition-colors peer-checked:text-primary dark:text-slate-400 dark:peer-checked:text-white z-10">
                Külah
              </span>
              <div className="absolute inset-0 hidden rounded-lg bg-white shadow-sm ring-1 ring-slate-200 peer-checked:block dark:bg-primary dark:ring-0 transition-all"></div>
            </label>
            <label className="relative z-10 flex flex-1 cursor-pointer items-center justify-center gap-1.5 rounded-lg py-2 text-sm font-bold transition-all">
              <input
                className="peer sr-only"
                name={`flavor-${product.id}`}
                type="radio"
                value="cup"
                checked={orderType === "cup"}
                onChange={() => setOrderType("cup")}
              />
              <span className="text-slate-500 transition-colors peer-checked:text-primary dark:text-slate-400 dark:peer-checked:text-white z-10">
                Kase
              </span>
              <div className="absolute inset-0 hidden rounded-lg bg-white shadow-sm ring-1 ring-slate-200 peer-checked:block dark:bg-primary dark:ring-0 transition-all"></div>
            </label>
          </div>
          <button
            onClick={handleAddToCart}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 py-3.5 text-sm font-bold text-white transition-all hover:bg-primary hover:shadow-lg hover:shadow-primary/25 active:scale-[0.98] dark:bg-white dark:text-slate-900 dark:hover:bg-primary dark:hover:text-white"
          >
            <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
            Sepete Ekle
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
