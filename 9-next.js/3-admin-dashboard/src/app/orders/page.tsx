import OrderTable from "@/components/table/order-table";
import { Suspense } from "react";
import Loading from "../loading";

const Page = () => {
  return (
    <div className="page">
      <h1 className="title">Siparişler</h1>

      <Suspense fallback={<Loading styles="my-40" />}>
        <OrderTable />
      </Suspense>
    </div>
  );
};

export default Page;
