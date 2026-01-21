/*
 ! Intersection Types | Kesişim Türler
 * Typescript'de kesişim türler, iki veya daha fazla türlü birleştirerek yeni bir tür oluşturmanıza olanak tanır.
 */

type AType = { key1: string };
type BType = { key2: number };

// Intersection: Her iki nesne tipinin özelliklerini birleştirileim
type ABType = AType & BType;

let foo: ABType = { key1: "Merhaba", key2: 78 };

// Union Types: Belirtilen türlerden en az birinin bütün özellikleri tanımlanmalı
type AorBType = AType | BType;

let boo1: AorBType = { key1: "Merhaba" }; // Geçerli
let boo2: AorBType = { key2: 78 }; // Geçerli
let boo3: AorBType = { key1: "Merhaba", key2: 78 }; // Geçerli

// Örnek
type Kisi = {
  id: string;
  isim: string;
};

type Iletisim = {
  eposta: string;
  telefon: string;
};

type Calisan = {
  departman: string;
  maas: number;
};

type Kullanici = {
  bakiye: number;
  aktif: boolean;
};

type Eleman = Kisi & Iletisim & Calisan;
type Musteri = Kisi & Iletisim & Kullanici;

const eleman: Eleman = {
  id: "1",
  isim: "Veli",
  eposta: "veli@firma.com",
  telefon: "555-123-45-56",
  departman: "Satış",
  maas: 50000,
};

const musteri: Musteri = {
  id: "2",
  isim: "Işıl",
  eposta: "isil@musteri.com",
  telefon: "555-654-32-10",
  bakiye: 15000,
  aktif: true,
};

/*
 ! Challange
 * Intersection type kullanarak birden fazla türü birleştirin
 * Ortaya Çıkan yeni türü nesne tipi tanımında kullanın
*/

type Ogrenci = {
  ad: string;
  numara: number;
};

type Ogretmen = {
  ad: string;
  brans: string;
};

type Okul = {
  okulAdi: string;
  il: string;
};

type Iletisim1 = {
  telefon: string;
};

type OgrenciBilgisi = Ogrenci & Okul & Iletisim;
type OgretmenBilgisi = Ogretmen & Okul & Iletisim;

const ogrenci: OgrenciBilgisi = {
  ad: "Zeynep",
  numara: 123,
  okulAdi: "Atatürk Anadolu Lisesi",
  il: "İstanbul",
  telefon: "05000000000",
  eposta: "zeynep@ogrenci.com",
};

const ogretmen: OgretmenBilgisi = {
  ad: "Büşra",
  brans: "Matematik",
  okulAdi: "Atatürk Anadolu Lisesi",
  il: "İstanbul",
  telefon: "05111111111",
  eposta: "busra@ogretmen.com",
};
