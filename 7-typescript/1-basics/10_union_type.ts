/*
 * Union Type (Birleşmiş Tipler)
 * Bir dğeişkenin alabileceği birden fazla farklı türde veri varsa kullanılır.
 */

// * Örnek-1
// * Örn: Bir şehir değişkeni var ama şehir ismi(string) mi yoksa şehir plakası(number) mı belli değil
// * Bu tarz durumlarda hem string hem number değeri alabileceğini söylemeliyiz

let city: string | number;

city = "İzmir";
city = 35;

// * Örnek-1
// * Kullanıcının telefon bilgilerini bir değişkene atıcaz ama telefon iphone'mu android'mi bilmiyoruz

type IOS = {
  iosVersion: number;
  airdropStatus: boolean;
  model: string;
};

type Android = {
  androidVersion: string;
  googlePlayVersion: number;
  model: string;
};

let phone: IOS | Android;

phone = {
  iosVersion: 26.0,
  airdropStatus: true,
  model: "17 Pro Max",
};

// Union Type'ı nesneler ile kullandığımızda
type AType = { key1: string; key2: string };
type BType = { key3: number; key4: number };

// bir değişkenin tipini union type ile tanımlayalım
let example: AType | BType;

// değer atarken hata vermemsi için ya a tipnin bütün özelliklerini tanımlamalıyız
example = { key1: "x", key2: "y" };

// ya b tipinin bütün özelliklerini tanımlamalıyız
example = { key3: 1, key4: 2 };

// yada her iki tipin bütün özelliklerini tanımlarız
example = { key1: "x", key2: "y", key3: 1, key4: 2 };
