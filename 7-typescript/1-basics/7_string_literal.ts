/*
 ! String Literal Type
 * Bir metin tipini string olarak tanımlamak yerine eğerki alabilceği değer sayısı çok fazla değilse doğrudan bu değerleri yazarak tip değil değer kısıtlaması yaparız.
 
 * Örn: Bir kullanıcı nesnesinin tipni tanımlamak istiyoruz kullanıcının rolüne string yazmak yerine string olarak alabileceği 3-4 farklı değeri ifade edersek daha katı bir kısıtlama yapmış oluruz
*/

// Örnek-1:
let user: {
  id: number;
  isim: string;
  tip: "admin" | "kullanıcı" | "ziyaretçi";
  cinsiyet: "erkek" | "kadın";
};

user = {
  id: 134213,
  isim: "Ali",
  tip: "admin",
  cinsiyet: "erkek",
};

// Örnek-2
let araba: {
  marka: string;
  model: string;
  yil: number;
  vites: "otomatik" | "manuel";
  yakit: "benzin" | "dizel" | "elektrik" | "lpg";
  owner: any;
};

araba = {
  marka: "bmw",
  model: "m4",
  yil: 2020,
  vites: "otomatik",
  yakit: "benzin",
  owner: undefined,
};
