import Link from "next/link";

// static tanım
// export const metadata = {
//   title: "Ürün Detay",
// };

// dinamik tanım
export const generateMetadata = async ({ params }) => {
  const { id } = await params;

  // api'dan ürün verilerini alabilirsiniz..

  return {
    title: `${id}. Ürün Detayı`,
  };
};

const DetailPage = async ({ params, searchParams }) => {
  const { id } = await params;

  return (
    <div className="page">
      <div className="text-center flex flex-col gap-10">
        <Link href={"."}>Geri</Link>
        <h1>{id} id'li Ürün</h1>
        <h1>Detay Sayfası</h1>
      </div>
    </div>
  );
};

export default DetailPage;
