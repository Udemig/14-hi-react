/*
 ! Type Aliases
 * Şuana kadar tip ataması yaparken js'deki varolan tiplerin yanısıra birkaç ts'e özel tip kullandık.
 * Gerçek projelrde o an yaptığımız işe özel spesifik tiplere ihityaç duyarız
 * Bunları tanımlamak için type anahtar kelimesini kullanarak kendi tiplerimizi oluşturabiliriz.
  
 * Neden ihtiyaç duyarız
 * * Çünkü belirlediğimiz bir type'ı proje içerisinde defalarca kullanabiliyoruz her seferinde baştan yazmak yerine kendi tipimizi oluşturup ismiyle çağırmak kod kalabalığınız azaltır
*/

// Örnek - 1
// Kendi özel isimlendirdiğimiz string tipini oluşturalım
type metinTipi = string;

// Kendi oluşturduğumuz tipi kullanalım
let kullaniciAdi: metinTipi = "Furkan";

// Örnek - 2
// Uçuş projesinde sıkça kullandığım [enlem, boylam] dizisi vardı...

// type aliases kullanmadan
const x: [number, number] = [34.7683425435, 89.345235768];
const y: [number, number] = [34.7683425435, 89.345235768];
const z: [number, number] = [34.7683425435, 89.345235768];
const a: [number, number] = [34.7683425435, 89.345235768];

// type aliases kullanarak
type Coords = [number, number];

const b: Coords = [34.7683425435, 89.345235768];
const c: Coords = [34.7683425435, 89.345235768];
const e: Coords = [34.7683425435, 89.345235768];

// Örnek - 3
// Aynı nesne tipinin birden fazla kullanmamız gereken bir seneryo

// type aliases olmadan
const user1: { id: number; name: string; age: number } = {
  id: 1,
  name: "Ali",
  age: 23,
};

const user2: { id: number; name: string; age: number } = {
  id: 2,
  name: "Ayşe",
  age: 25,
};

// type aliases
type User = { id: number; name: string; age: number };

let user3: User = { id: 3, name: "Ahmet", age: 20 };
let user4: User = { id: 4, name: "Fatma", age: 23 };

// Örnek-4

// E-Ticaret sitesi için örnek
type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  size: "xs" | "sm" | "m" | "lg" | "xl";
  inStock: boolean;
  stock: number;
};

let product: Product = {
  id: 123,
  name: "Kırmızı Elbise",
  price: 7684,
  category: "Elbise",
  size: "m",
  inStock: true,
  stock: 123,
};

let products: Product[] = [product, product, product, product];
