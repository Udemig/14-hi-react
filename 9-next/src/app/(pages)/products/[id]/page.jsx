import Link from "next/link";

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
