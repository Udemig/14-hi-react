import Image from "next/image";
import { FC } from "react";
import { BiSolidBellRing } from "react-icons/bi";
import { GoSearch } from "react-icons/go";
import avatar from "@/assets/images/avatar.webp";

const Header: FC = () => {
  return (
    <header className="border-b border-zinc-300 bg-white flex justify-between px-5 py-2 md:px-8">
      <form className="flex items-center gap-2 text-gray-500">
        <button className="text-zinc-700">
          <GoSearch />
        </button>

        <input type="text" className="p-1 outline-none" placeholder="Ara" />
      </form>

      <div className="flex gap-5 items-center">
        <BiSolidBellRing className="text-xl cursor-pointer text-zinc-700 size-4" />

        <div className="flex gap-3">
          <Image src={avatar} width={50} height={50} alt="avatar" className="rounded-full size-12" />

          <div>
            <p className="font-semibold text-black line-clamp-1">Furkan Evin</p>
            <p className="text-sm text-zinc-500">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
