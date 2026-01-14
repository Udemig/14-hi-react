/*
 ! Function Type
 * Typescript'de fonksiyon tipini tanımlamaktan kastımız fonksiyonun aldığı parametrenin ve döndürdüğü değerin tipini tanımlamaktır
*/
// normal function
function topla(a, b) {
    return a + b;
}
var x = topla(67, "merhaba");
// arrow function
var topla2 = function (a, b) {
    return a + b;
};
// örnek - 1
// sayının pozitif olup olmaığını kontrol eden fonksiyon
// 10 => true   |  -4  => false
var isPositive = function (sayi) {
    return sayi > 0 ? true : false;
};
console.log(isPositive(10));
console.log(isPositive(-4));
// örnek - 2
var ortalama = function (dizi) {
    var toplam = dizi.reduce(function (toplam, sayi) { return toplam + sayi; }, 0);
    return toplam / dizi.length;
};
console.log(ortalama([21, 435, 65, 123, 65, 7, 34, 67]));
