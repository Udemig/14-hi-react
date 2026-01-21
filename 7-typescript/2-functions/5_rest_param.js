/*
 ! Rest Params
 * Parametre listesinin belirsiz veya sınırsız olduğu durumlarda kullanılır.

 * Özellikleri
 * Bir parametreyi rest param yapmak için "..." operatörünü kullanırız.
 * Bir rest parameterenin ardından normal bir parametre gelemez
 * Sebebi rest parametrenin kaç değer alıcağının belli olmaması
 * Rest parametrenin aldığı değerleri en son dizi haline getirirlir
*/
// Örnek
var yoklama = function (ogretmen) {
    var ogrenciler = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        ogrenciler[_i - 1] = arguments[_i];
    }
    console.log(ogrenciler);
    console.log(ogretmen + " yoklama alıyor");
    console.log("--------------------------");
    ogrenciler.forEach(function (ogrenci) { return console.log(ogrenci + " burdaaaaa"); });
};
yoklama("Ayşe Öğretmen", "Ali", "Ahmet", "Faruk", "Burak");
