import { FC } from "react";
import LineGraph from "../graphics/line-graph";
import { GraphData } from "@/types";
import { getOrders } from "@/utils/service";

const SalesChart: FC = async () => {
  // api'dan satış verilerini al
  const orders = await getOrders();

  // grafik verisini hazırla
  const data: GraphData = {
    labels: orders.map((i) => i.order_date),
    datasets: [
      {
        label: "Satış Toplamı",
        data: orders.map((i) => i.total_price),
        borderColor: "rgb(0,150,255)",
        backgroundColor: "rgba(0,150,255, 0.5)",
        fill: true,
        tension: 0.4,
        borderDash: [10, 10],
      },
    ],
  };

  return (
    <div className="bg-white rounded-lg p-5 shadow-md size-full lg:pb-16">
      <h2 className="subtitle">Satış Grafiği</h2>

      <div className="size-full pt-5">
        <LineGraph data={data} />
      </div>
    </div>
  );
};

export default SalesChart;
