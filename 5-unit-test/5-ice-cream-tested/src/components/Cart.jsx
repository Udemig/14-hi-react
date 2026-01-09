import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, toggleCart } from "../redux/slices/cartSlice";
import CartItem from "./CartItem";
import { toast } from "react-toastify";

const Cart = () => {
  const { cart, isOpen } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const drawerRef = useRef(null);

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleClose = () => {
    dispatch(toggleCart());
  };

  const handleOrder = () => {
    if (cart.length === 0) return;
    dispatch(clearCart());
    dispatch(toggleCart());
    toast.success("Sipariş alındı! Afiyet olsun.", {
      icon: "🍦",
      autoClose: 3000,
    });
  };

  return (
    <div
      aria-modal="true"
      className={`fixed inset-0 z-50 flex justify-end transition-opacity duration-300 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
      }`}
      role="dialog"
    >
      <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity" onClick={handleClose}></div>
      <div
        ref={drawerRef}
        className={`relative flex w-full max-w-sm flex-col bg-white shadow-2xl dark:bg-[#1a1a1a] transform transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5 dark:border-white/10">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">Sepetiniz ({cart.length})</h2>
          <button
            onClick={handleClose}
            className="rounded-full p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600 dark:text-slate-500 dark:hover:bg-white/10 dark:hover:text-white"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-6 py-6 font-display">
          <div className="flex flex-col gap-8">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center text-center py-12">
                <span className="material-symbols-outlined text-6xl text-slate-300 dark:text-slate-700 mb-4">
                  shopping_cart_off
                </span>
                <p className="text-slate-500 dark:text-slate-400">Sepetiniz boş. Tadına bakmaya başlayın!</p>
              </div>
            ) : (
              cart.map((item) => <CartItem key={`${item.id}-${item.orderType}`} item={item} />)
            )}
          </div>
        </div>
        {cart.length > 0 && (
          <div className="border-t border-slate-100 bg-white p-6 shadow-[0_-4px_20px_-1px_rgba(0,0,0,0.05)] dark:border-white/10 dark:bg-[#1a1a1a]">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Ara Toplam</span>
              <span className="text-xl font-extrabold text-slate-900 dark:text-white">₺{totalPrice.toFixed(2)}</span>
            </div>
            <button
              onClick={handleOrder}
              className="group w-full flex items-center justify-center gap-2 rounded-xl bg-primary py-4 text-base font-bold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-dark hover:shadow-primary/40 active:scale-[0.98]"
            >
              Siparişi Tamamla
              <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
