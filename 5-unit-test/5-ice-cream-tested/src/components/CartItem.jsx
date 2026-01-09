import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../redux/slices/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart({ id: item.id, orderType: item.orderType }));
  };

  const increment = () => {
    dispatch(
      updateQuantity({
        id: item.id,
        orderType: item.orderType,
        quantity: item.quantity + 1,
      })
    );
  };

  const decrement = () => {
    dispatch(
      updateQuantity({
        id: item.id,
        orderType: item.orderType,
        quantity: item.quantity - 1,
      })
    );
  };

  return (
    <div className="flex gap-4">
      <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-gray-100 ring-1 ring-slate-100 dark:ring-white/5">
        <div
          data-testid="cart-item-image"
          className="h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url('${item.image || item.imageUrl}')` }}
        ></div>
      </div>
      <div className="flex flex-1 flex-col justify-between py-0.5">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">{item.name}</h3>
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400 capitalize">
              {item.orderType === "cone" ? "Külah" : "Kase"} • Standart
            </p>
          </div>
          <button
            aria-label="Ürünü sil"
            onClick={handleRemove}
            className="text-slate-400 transition-colors hover:text-red-500 p-1 -mr-2"
          >
            <span className="material-symbols-outlined text-[1.25rem]">delete</span>
          </button>
        </div>
        <div className="flex items-center justify-between mt-1">
          <p className="text-sm font-bold text-primary">₺{(item.price * item.quantity).toFixed(2)}</p>
          <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-1 py-1 shadow-sm dark:border-white/10 dark:bg-white/5">
            <button
              onClick={decrement}
              className="flex h-8 w-6 items-center justify-center rounded text-xl text-slate-400 hover:text-primary dark:text-slate-400 dark:hover:text-white "
            >
              -
            </button>
            <span className="w-3 text-center  font-bold text-slate-900 dark:text-white">{item.quantity}</span>
            <button
              onClick={increment}
              className="flex h-8 w-6 items-center justify-center rounded text-xl text-slate-400 hover:text-primary dark:text-slate-400 dark:hover:text-white"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
