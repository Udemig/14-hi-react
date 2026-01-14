/*
 ! Function Type
 * Typescript'de fonksiyon tipini tanımlamaktan kastımız fonksiyonun aldığı parametrenin ve döndürdüğü değerin tipini tanımlamaktır
*/

// normal function
function topla(a: number, b: string): string {
  return a + b;
}

const x = topla(67, "merhaba");

// arrow function
const topla2 = (a: number, b: string): string => {
  return a + b;
};

// örnek - 1
// sayının pozitif olup olmaığını kontrol eden fonksiyon
// 10 => true   |  -4  => false
const isPositive = (sayi: number): boolean => {
  return sayi > 0 ? true : false;
};

console.log(isPositive(10));
console.log(isPositive(-4));

// örnek - 2
const ortalama = (dizi: number[]): number => {
  const toplam = dizi.reduce((toplam, sayi) => toplam + sayi, 0);

  return toplam / dizi.length;
};

console.log(ortalama([21, 435, 65, 123, 65, 7, 34, 67])); // 102.125
