import Link from "next/link";

/*
 ! Parallel ROutes
 * Slot olarak tanımlanan sayfalar layout'a prop olarak geldi
 * Slot olarak tanımlanan notifications, revenue, users sayfalarını aynı anda ekrana bastık
 * Not: Burda 4 slot yerine 4 normal component oluşturup ekrana basabilirdik ama o zaman page.jsx'in özelliklerinden faydalanamzdık (metadata,loading,error...)
*/

const Layout = ({ children, notifications, revenue, users }) => {
  return (
    <div>
      <h1>Dashboard Layout</h1>

      <div className="box flex justify-center my-10 gap-10 border-blue-500! text-blue-500">
        <Link href="/dashboard">Panel</Link>
        <Link href="/dashboard/settings">Ayarlar</Link>
      </div>

      <div className="my-10">
        <div className="box border-red-500!">{children}</div>

        <div className="flex my-10 gap-10">
          <div className="flex-1">{notifications}</div>
          <div className="flex-1">{revenue}</div>
        </div>

        <div>{users}</div>
      </div>
    </div>
  );
};

export default Layout;
