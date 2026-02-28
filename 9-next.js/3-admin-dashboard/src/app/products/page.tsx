import List from "@/components/products/list";
import Link from "next/link";
import { FC, Suspense } from "react";
import { BiPlus } from "react-icons/bi";
import Loading from "../loading";

const Page: FC = () => {
  return (
    <div className="page">
      <div className="max-w-7xl mx-auto">
        {/* Başlık */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="title">Ürünler</h1>
            <p className="text-gray-600">Tüm ürünlerinizi yönetin</p>
          </div>

          <Link
            href="/products/create"
            className="flex items-center gap-2 bg-indigo-600 text-white rounded-xl px-4 py-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <BiPlus className="text-2xl" />
            Yeni Ürün Ekle
          </Link>
        </div>

        {/* Ürün Listesi */}
        <Suspense fallback={<Loading styles="my-40" />}>
          <List />
        </Suspense>
      </div>
    </div>
  );
};

export default Page;
