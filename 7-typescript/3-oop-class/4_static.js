/*
 ! Static
 * Static anahtar kelimesi, özelliği veya methodu sınıfın örneğini oluşturmadan kullanabilmemizi sağlar
 * Static methodlar class'ın sahip olduğu özellikleri kullanamaz
*/
//! Static Method
var Matematik = /** @class */ (function () {
    function Matematik() {
        this.x = 10;
    }
    Matematik.prototype.topla = function (y) {
        console.log(y + this.x);
    };
    Matematik.carp = function (a, b) {
        console.log(a * b);
    };
    return Matematik;
}());
// static olmayan topla fonksiyonuna erişmek için öncelikle sınıftan örnek aldık
new Matematik().topla(20);
// static olan carp fonksiyonuna sınıftan örnek almadan direkt ismi üzerinden erişebildik
Matematik.carp(4, 5);
// sıklıkla kullandığımız statik olamayan bir method örneği
new Date("2026-01-10").toLocaleDateString();
// statik olan
Date.now();
//! Static Property
// Doğrudan class üzerinden erişilebilen özelliklerdir
var Ogrenci = /** @class */ (function () {
    function Ogrenci(isim) {
        // normal bir özelliğe erişim
        this.isim = isim;
        // static bir özelliğe erişim
        Ogrenci.ogrenciSayisi++;
    }
    Ogrenci.ogrenciSayisi = 0;
    return Ogrenci;
}());
console.log(new Ogrenci("Ahmet"));
console.log(new Ogrenci("Abdullah"));
console.log(new Ogrenci("Büşra"));
console.log(new Ogrenci("Ali"));
console.log(Ogrenci.ogrenciSayisi); // 4
