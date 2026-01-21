/*
 ! Interface Extends
 * Interface'ler extends ile type'larda olduğu gibi farklı bir/birkaç interface'i miras alabilir
 * Mira alma extends anahtar kelimesi ile yapılır
 * Class'larda farklı olarak istersek birden fazla elemani miras alabiliyoruz
*/

// yeni bir interface oluşturulam ve ev esyasi interface'ini miras alalım
interface IMobilya extends IEvEsyasi {
  renk: string;
  boyut: string;
}

// yukarıdaki interface'i bir nesne tanımında kullanalım
const massa: IMobilya = {
  isim: "Bilgisayar Masası",
  fiyat: 2450,
  marka: "IKEA",
  renk: "Ceviz",
  boyut: "120x60",
};

// Bir interface oluşturulım
interface IEvEsyasi {
  isim: string;
  fiyat: number;
  marka: string;
}

// Farklı bir interface oluşturalım
interface IElekronik {
  garantiSuresi: number;
  sarjDurumu: boolean;
  bataryaOmru: number;
}

// Birden fazla interface miras alalım
interface IBilgisayar extends IEvEsyasi, IElekronik {
  islemci: string;
  ram: number;
}

// Yukarıdaki interface'i bir nesne tanımında kullanalım
const laptop: IBilgisayar = {
  isim: "Monster Abra A5",
  fiyat: 39000,
  marka: "Monster",
  garantiSuresi: 24,
  sarjDurumu: true,
  bataryaOmru: 8,
  islemci: "Intel Core i7",
  ram: 16,
};

/*
 ! Challange
 * İlk olarak 2 farklı interface oluşturun
 * Ardından 3. bir interface oluşturun ve ilk 2 interface'i miras almasını sağlayın
 * Son olarak miras alan interface'i bir nesne tanımında kullanın
  
 * Yasaklı: Kisi, Bilgisayar, Araba 
*/
