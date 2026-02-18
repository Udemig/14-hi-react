import Link from "next/link";

const Header = () => {
  return (
    <header className="p-5 border-b items-center flex justify-between gap-5">
      <h1 className="font-bold text-2xl">NEXT</h1>

      <nav className="flex items-center gap-4 ">
        <Link href="/" className="text-lg">
          Anasayfa
        </Link>
        <Link href="/products" className="text-lg">
          Ürünler
        </Link>
        <Link href="/profile" className="text-lg">
          Profil
        </Link>
        <Link href="/login" className="text-lg">
          Giriş Yap
        </Link>
      </nav>
    </header>
  );
};

export default Header;
