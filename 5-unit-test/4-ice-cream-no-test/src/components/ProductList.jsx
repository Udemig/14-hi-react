import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slices/productSlice";
import ProductCard from "./ProductCard";
import FilterBar from "./FilterBar";

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, isLoading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Loading State
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-primary/20 border-t-primary"></div>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="text-center py-20">
        <div className="bg-red-50 text-red-500 p-4 rounded-xl inline-block shadow-sm border border-red-100 dark:bg-red-900/10 dark:text-red-400 dark:border-red-900/20">
          <p className="font-semibold">Hata: {error}</p>
          <button
            onClick={() => dispatch(fetchProducts())}
            className="mt-2 text-sm underline hover:text-red-700 dark:hover:text-red-300"
          >
            Tekrar Dene
          </button>
        </div>
      </div>
    );
  }

  return (
    <section
      className="bg-background-light py-20 dark:bg-background-dark relative"
      id="menu"
    >
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: "radial-gradient(#ee2b5b 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      ></div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 border-b border-slate-200 pb-8 dark:border-white/10 lg:flex-row lg:items-end">
          <div>
            <h3 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Aromalarımız
            </h3>
            <p className="mt-3 text-lg text-slate-500 dark:text-slate-400">
              Külah tipinizi ve soslarınızı seçin. Günlük taze hazırlanır.
            </p>
          </div>
          <FilterBar />
        </div>

        {products.length === 0 ? (
          <p className="text-center text-gray-500 py-10 dark:text-slate-400">
            Aroma bulunamadı.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductList;
