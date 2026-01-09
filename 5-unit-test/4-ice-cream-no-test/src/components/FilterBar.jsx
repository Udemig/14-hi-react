import { useState } from "react";

const FilterBar = () => {
  const [activeFilter, setActiveFilter] = useState("Tüm Aromalar");
  const filters = ["Tüm Aromalar", "Vegan", "En Çok Satanlar", "Mevsimlik"];

  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setActiveFilter(filter)}
          className={`rounded-full px-6 py-2.5 text-sm font-bold transition-all hover:-translate-y-0.5 ${
            activeFilter === filter
              ? "bg-slate-900 text-white shadow-lg shadow-slate-900/20 dark:bg-white dark:text-slate-900"
              : "bg-white text-slate-600 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50 hover:text-slate-900 hover:ring-slate-300 dark:bg-white/5 dark:text-slate-400 dark:ring-white/10 dark:hover:bg-white/10 dark:hover:text-white"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
