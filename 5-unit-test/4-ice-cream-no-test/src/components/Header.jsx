import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../redux/slices/cartSlice";

const Header = () => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-100 bg-white/90 backdrop-blur-xl dark:bg-background-dark/90 dark:border-white/5 shadow-sm transition-all duration-300">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="flex size-10 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/30 transition-transform group-hover:scale-105 group-hover:rotate-3">
            <span className="material-symbols-outlined text-[24px]">
              icecream
            </span>
          </div>
          <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Drop Cream
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => dispatch(toggleCart())}
            className="group relative flex h-11 items-center justify-center gap-2.5 rounded-full bg-slate-50 border border-slate-200 px-5 text-sm font-bold text-slate-700 transition-all hover:bg-white hover:border-primary/30 hover:shadow-md hover:text-primary active:scale-95 dark:bg-white/5 dark:border-white/10 dark:text-white dark:hover:bg-white/10 dark:hover:border-white/20"
          >
            <span className="material-symbols-outlined text-[20px] transition-transform group-hover:-translate-y-0.5 group-hover:rotate-6">
              shopping_cart
            </span>
            <span>Sepet</span>
            {totalItems > 0 && (
              <span className="absolute -right-1.5 -top-1.5 flex size-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white shadow-sm ring-2 ring-white dark:ring-background-dark animate-pulse">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
