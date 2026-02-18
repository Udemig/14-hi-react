import Link from "next/link";

const Page2 = () => {
  return (
    <div>
      <h1>Sayfa 2</h1>

      <Link href="/page1">Sayfa1'e Dön</Link>
    </div>
  );
};

export default Page2;
