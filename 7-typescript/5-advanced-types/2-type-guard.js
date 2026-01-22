// Bu type guard tekniğine geçmeden önce typeOf ve instanceOf gibi javascript opertörlerini hatırlayalım
// typeof: bir değişkenin primitif tipini kontrol etmek için kullanılır
console.log(typeof "hello"); // string
console.log(typeof 435345); // number
console.log(typeof { id: 123 }); // object
console.log(typeof false); // boolean
var tur1 = { turİsmi: "Doğa Yürüyüşü", zorluk: "zor" };
console.log(typeof tur1); // object
/*
 ! Type Guard
 * Type guards'ın amacı belirli türdeki değerleri kontrol etmek ve bu türe özgü işlemler gerçekleştirebilmek için kullanılır.
*/
// 1) typeOf ile typeGuard tekniği uygulayalım
function log(input) {
    if (typeof input === "string") {
        input.toUpperCase();
    }
    else {
        input.toFixed(2);
    }
}
log("Selamlar");
log(68);
// Örnek
// Girdi olarak hem string ("123") hemde number (123) formatında sayı kabul eden bir fonksiyon yazalım
// Eğerki girdi sayı ise direkt return etsin eğer girdi string ise sayıyı çevirip return etsin
// Eğerki string sayıya çevrilemiyorsa 0 return etsin
var formatNumber = function (input) {
    if (typeof input === "number") {
        // input sayı ise direkt return et
        return input;
    }
    else {
        // input string ise sayıya çevir
        var value = parseInt(input);
        // sayı değilse 0 döndür
        return isNaN(value) ? 0 : value;
    }
};
console.log(formatNumber(789)); // 789
console.log(formatNumber("932")); // 932
console.log(formatNumber("furkan")); // 0
// instanceOf nedir?
var Kaplumbaga = /** @class */ (function () {
    function Kaplumbaga() {
    }
    return Kaplumbaga;
}());
var Tavsan = /** @class */ (function () {
    function Tavsan() {
    }
    return Tavsan;
}());
var tospik = new Kaplumbaga();
console.log("Tospik nesnesi, Tavsan sınıfından alınan bir örnek mi?", tospik instanceof Tavsan);
console.log("Tospik nesnesi, Kaplumbaga sınıfından alınan bir örnek mi?", tospik instanceof Kaplumbaga);
// instanceOf ile typeGuard tekniği uygulayalım
var Kedi = /** @class */ (function () {
    function Kedi() {
        this.isim = "Tekir";
    }
    Kedi.prototype.miyavla = function () {
        console.log("🐈🐈🐈 miyav miyav");
    };
    return Kedi;
}());
var Kopek = /** @class */ (function () {
    function Kopek() {
        this.isim = "Karabaş";
    }
    Kopek.prototype.havla = function () {
        console.log("🐶🐶🐶 hav hav");
    };
    return Kopek;
}());
// Aşağıdaki fonksiyon parametre olarak aldığı hayvana göre hayvanın sesini çıkaran fonksiyonu çalıştırmalı
function sesCikar(hayvan) {
    if (hayvan instanceof Kedi) {
        // hayvan parametresi Kedi sınıfından alınan bir örnek ise miyavla()
        hayvan.miyavla();
    }
    else {
        // hayvan parametresi Kopek sınıfından alınan bir örnek ise havla()
        hayvan.havla();
    }
}
sesCikar(new Kedi());
sesCikar(new Kopek());
// Gerçek Proje Örneği
var NetworkError = /** @class */ (function () {
    function NetworkError() {
        this.name = "Bağlantı Hatası";
        this.message = "Ağ bağlantısı kesildi";
    }
    return NetworkError;
}());
var ValidationError = /** @class */ (function () {
    function ValidationError() {
        this.name = "Doğrulama Hatası";
        this.message = "Şifre yeterince güçlü değil";
    }
    return ValidationError;
}());
function handleError(error) {
    if (error instanceof NetworkError) {
        console.log("🛜 Ağ Hatası: ", error.message);
    }
    else if (error instanceof ValidationError) {
        console.log("⚠️ Doğrulama Hatası: ", error.message);
    }
    else {
        console.log("❌ Genel Hata: ", error.message);
    }
}
handleError(new NetworkError());
handleError(new ValidationError());
handleError(new Error("Sunucu çöktü"));
