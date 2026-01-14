/*
 ! Unknown
 * Bir değişkenin tipini gerçekten bilmediğimiz durumlarda kullanırız.
 * Ama unknown tipine sahip bir değişkenin tip kontrolünü yapmadan kullanamayuz
 * Değer ataması konusunda "any"'de olduğu gibi her türlü değer atanabiliriz
 * Any farklı noktası değeri kullanırken kontrol etmeden kullanamıyor oluşumuz
*/
// any
var value1;
value1 = 123;
value1 = "dsafdskf";
value1 = true;
// console.log(value1.toUpperCase());
// unknown
var value2;
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
function parseData(data) {
    if (typeof data === "string") {
        console.log("Metnin uzunluğu: ", data.length);
    }
    else {
        console.log("String değil: ", data);
    }
}
parseData("selamlar");
parseData(true);
