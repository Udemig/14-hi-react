import Link from "next/link";

const NotFound = () => {
  return (
    <div className="py-60 flex flex-col gap-10 items-center">
      <h1 className="text-4xl text-yellow-500">404</h1>
      <h2 className="text-3xl">Sayfa Bulunamadı</h2>
      <Link href="/">Anasayfa'ya Dön</Link>
    </div>
  );
};

export default NotFound;
