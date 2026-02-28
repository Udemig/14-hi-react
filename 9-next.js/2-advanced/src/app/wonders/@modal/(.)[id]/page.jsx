"use client";

// relative import
// import { data } from "../../../../utils/constants";

// absolute import
import { data } from "@/utils/constants";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

const Page = () => {
  // router kurulumunu yap
  const router = useRouter();

  // url'den id parametresini al
  const { id } = useParams();

  // id'si bilinen elemanı diziden al
  const item = data.find((item) => item.id === id);

  // x butonuna tıklandığında
  const handleClose = () => {
    // 1 sayfa geriye yönlendir
    router.back();
    // 1 sayfa ileriye yönlendir
    router.forward();
    // belirli bir sayfaya yönlendir
    router.push("/home");
    // belirli bir sayfaya yönlendir - Geçmişten gizleyerek yönlendirir
    router.replace();
    // sayfayı yeniden renderlar
    router.refresh();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-xs grid place-items-center p-10">
      <div className="bg-white  text-black px-10 pb-10 rounded-md max-w-xl">
        <div className="flex justify-end my-5 text-2xl">
          <button onClick={handleClose}>X</button>
        </div>

        <Image
          src={item.src}
          alt={item.name}
          className="max-h-75 my-5 text-3xl object-cover rounded-md aspect-square"
        />

        <div className="my-5">
          <h3 className="text-lg font-semibold">Fotoğrafçı</h3>
          <span className="text-lg">{item.photographer}</span>
        </div>

        <div className="my-5">
          <h3 className="text-lg font-semibold">Lokasyon</h3>
          <span className="text-lg">{item.location}</span>
        </div>
      </div>
    </div>
  );
};

export default Page;
