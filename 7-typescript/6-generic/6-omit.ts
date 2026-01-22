/*
 ! Omit
 * Bir type'da istemediğimiz değer/değerler olduğunda bütün tipi baştan yazmak yerine istemediğimiz değer / değerleri tipten kaldırmak için kullanılır
*/

type Urun = {
  id: number;
  isim: string;
  fiyat: number;
  stok: number;
};

// API'dan ürünleri alan fonksiyon
const urunleriGetir = (): Urun[] => {
  return [{ id: 1, isim: "Iphone", fiyat: 23000, stok: 18 }];
};

// API'a yeni ürün ekleyen fonksiyon - v1
const urunOlustur1 = (yeniUrun: { isim: string; fiyat: number; stok: number }) => {};

// API'a yeni ürün ekleyen fonksiyon - v2
const urunOlustur2 = (yeniUrun: Omit<Urun, "id">) => {};

urunOlustur1({ isim: "Iphone", fiyat: 23000, stok: 18 });
urunOlustur2({ isim: "Iphone", fiyat: 23000, stok: 18 });
