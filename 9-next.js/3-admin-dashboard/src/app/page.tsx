import Card from "@/components/home/card";
import CategoryChart from "@/components/home/category-chart";
import SalesChart from "@/components/home/sales-chart";
import { cards } from "@/utils/constants";

const Home = () => {
  return (
    <div className="page">
      <h1 className="title">Admin Paneli</h1>

      <section className="grid lg:grid-cols-2 gap-5 my-10">
        {cards.map((item, key) => (
          <Card key={key} item={item} />
        ))}
      </section>

      <section className="grid lg:grid-cols-14 gap-5 my-10">
        <div className="lg:col-span-9 size-full overflow-hidden">
          <SalesChart />
        </div>
        <div className="lg:col-span-5 size-full overflow-hidden">
          <CategoryChart />
        </div>
      </section>
    </div>
  );
};

export default Home;
