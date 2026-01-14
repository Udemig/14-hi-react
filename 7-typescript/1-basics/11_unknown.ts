/* 
 ! Unknown
 * Bir değişkenin tipini gerçekten bilmediğimiz durumlarda kullanırız.
 * Ama unknown tipine sahip bir değişkenin tip kontrolünü yapmadan kullanamayuz
 * Değer ataması konusunda "any"'de olduğu gibi her türlü değer atanabiliriz
 * Any farklı noktası değeri kullanırken kontrol etmeden kullanamıyor oluşumuz
*/

// any
let value1: any;
value1 = 123;
value1 = "dsafdskf";
value1 = true;

// console.log(value1.toUpperCase());

// unknown
let value2: unknown;
value2 = 123;
value2 = "asfadsf";
value2 = false;

// console.log(value2.toUpperCase());

/*
 * Neden kullanılır?
 1) API'dan gelen veri tipi belli değil
 2) Kullanının inputu belirsiz
 3) catch kod bloğu hatayı yakaladı ama hatanın ne olduğu bellli değil 
*/

function parseData(data: unknown) {
  if (typeof data === "string") {
    console.log("Metnin uzunluğu: ", data.length);
  } else {
    console.log("String değil: ", data);
  }
}

parseData("selamlar");
parseData(true);
