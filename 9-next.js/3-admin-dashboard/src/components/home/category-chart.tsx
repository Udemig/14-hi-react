import { FC } from "react";
import DonutGraph from "../graphics/donut-graph";
import { GraphData } from "@/types";
import { getProducts } from "@/utils/service";

const CategoryChart: FC = async () => {
  // api'dan ürün verilerini al
  const products = await getProducts();

  // kategori başına ürünü sayısını tutan nesne
  const countObj: Record<string, number> = {};

  // kategori başına ürün sayısını hesapla
  products.forEach((product) => {
    countObj[product.category] = (countObj[product.category] || 0) + 1;
  });

  // grafik verisini hazırla
  const data: GraphData = {
    labels: Object.keys(countObj),
    datasets: [
      {
        label: "# of Votes",
        data: Object.values(countObj),
        backgroundColor: [
          "#6366f1", // İndigo
          "#8b5cf6", // Mor
          "#ec4899", // Pembe
          "#14b8a6", // Teal
          "#f59e0b", // Amber
          "#06b6d4", // Cyan
        ],
        borderColor: "white",
        borderWidth: 3,
        hoverOffset: 8,
      },
    ],
  };

  return (
    <div className="bg-white rounded-lg p-5 shadow-md size-full lg:pb-16">
      <h2 className="subtitle">Kategori Grafiği</h2>

      <div className="size-full pt-5">
        <DonutGraph data={data} />
      </div>
    </div>
  );
};

export default CategoryChart;
