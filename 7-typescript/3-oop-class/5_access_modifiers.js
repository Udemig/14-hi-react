/*
 ! Erişim Belirteçleri
 * Class elamanları ile veri tutucağımız zaman bu bilgilerin class'ın dışarısından erişilebilir olup olmama durumunu belirlememizi sağlar

 * Erişim belirtiçleri:
 - public: Her yerden erişilebilir
 - protected: Sadece sınıfın kendisi ve alt sınıfları özelliğe erişebilir
 - private: Sadece sınıfın kendisi özelliğe erişebilir
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Ev sınıfı
var Ev = /** @class */ (function () {
    function Ev() {
        this.adres = "İstanbul";
        this.fiyat = 5400000;
        this.sahip = "Ahmet Yılmaz";
    }
    Ev.prototype.tanim = function () {
        console.log("Bilgiler: ".concat(this.adres, ", ").concat(this.fiyat, ", ").concat(this.sahip));
    };
    return Ev;
}());
// Ev sınıfından miras alan Villa sınıfı
var Villa = /** @class */ (function (_super) {
    __extends(Villa, _super);
    function Villa() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Villa.prototype.tanim = function () {
        console.log("Bilgiler: ".concat(this.adres, " ").concat(this.fiyat));
    };
    return Villa;
}(Ev));
// Ev sınıfından bir örnek oluşturduk
var ev = new Ev();
console.log(ev.adres);
/*
 * Belirteç           Tanımlandığı Sınıf              Alt Sınıflar            Dışarıdan Erişim
 * public                   Evet                          Evet                     Evet
 * protected                Evet                          Evet                     Hayır
 * private                  Evet                          Hayır                    Hayır
 */
var BankaHesabi = /** @class */ (function () {
    function BankaHesabi(h, b, p) {
        this.hesapNumarasi = h;
        this.bakiye = b;
        this.pin = p;
    }
    // public method
    BankaHesabi.prototype.paraYatir = function (miktar) {
        this.bakiye += miktar;
    };
    // protected method
    BankaHesabi.prototype.bakiyeSorgula = function () {
        return this.bakiye;
    };
    return BankaHesabi;
}());
var hesap = new BankaHesabi("1122334346", 5000, 1212);
console.log(hesap.hesapNumarasi);
hesap.paraYatir(1500);
console.log(hesap);
