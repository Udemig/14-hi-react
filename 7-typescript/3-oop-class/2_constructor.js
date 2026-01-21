/*
 ! Constructor (Yapıcı)
 * Constructor methodu oluşturulan nesnenin değerlerini dışarıdan almaya yarar
 * Contructor sayesinde bir class'tan oluşturulan bütün nesneler birbirinin kopyası olmaz.
 * Constructor new anahtar kelimesi ile class'ı çağırdığımızda çalışan ilk koddur.
 * Constructor ile class'a gelen parametrelere erişebiliriz.
*/
var İnsan = /** @class */ (function () {
    // constructor
    function İnsan(yeniİsim, yeniSoyad, yeniYas) {
        this.isim = yeniİsim;
        this.soyad = yeniSoyad;
        this.yas = yeniYas;
    }
    // method
    İnsan.prototype.konus = function () {
        console.log("Merhaba ben ".concat(this.isim, " ").concat(this.soyad, " ve ").concat(this.yas, " ya\u015F\u0131nday\u0131m"));
    };
    return İnsan;
}());
var insan1 = new İnsan("Ali", "Kaya", 27);
var insan2 = new İnsan("Ayşe", "Yıldız", 23);
console.log(insan1);
console.log(insan2);
insan1.konus();
