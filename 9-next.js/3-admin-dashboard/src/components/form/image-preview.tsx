"use client";
import { FC, useEffect, useState } from "react";
import Field from "./field";
import Image from "next/image";

const ImagePreview: FC = () => {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    // resim url'inin giridliği input'un değerini al
    const imageInput = document.getElementById("image_url") as HTMLInputElement;

    // inputa girdi olunca çalışır
    const handleInput = () => {
      const url = imageInput.value.trim();
      setImageUrl(url);
      setIsLoading(true);

      if (url) {
        // ekrana basılmayacak bir resim oluştur
        const testImg = new globalThis.Image();

        // remin yüklenme durumu izle
        testImg.onload = () => {
          setIsValid(true);
          setIsLoading(false);
        };

        // resmin hata durumunu izle
        testImg.onerror = () => {
          setIsValid(false);
          setIsLoading(false);
        };

        // test resminini kaynağını ayarla
        testImg.src = url;
      } else {
        setIsLoading(false);
        setIsValid(false);
      }
    };

    // sayfa ilk yüklendiğindeki değeri al
    handleInput();

    // inputa olay izleyicisi ekle
    if (imageInput) {
      imageInput.addEventListener("input", handleInput);
    }

    // sayfadan ayrılınca olay izleyecisini durdur
    return () => imageInput.removeEventListener("input", handleInput);
  }, []);

  return (
    <Field label="Resim Önizleme" htmlFor="">
      <div className="relative h-48 w-full bg-gray-100 rounded-md overflow-hidden">
        {isLoading ? (
          <div className="grid place-items-center size-full text-gray-400">Resim Yükleniyor..</div>
        ) : isValid && imageUrl ? (
          <Image src={imageUrl} alt="Önizleme" fill unoptimized className="object-contain" />
        ) : (
          <span className="grid place-items-center size-full text-gray-400">
            {!imageUrl ? "Resim Yok" : "Geçersiz URL"}
          </span>
        )}
      </div>
    </Field>
  );
};

export default ImagePreview;
