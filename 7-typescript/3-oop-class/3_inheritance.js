/*
 ! Inheritance (Kalıtım / Miras)
 * Bir OOP kavramıdır. Bir sınıfın farklı bir sınıfın özelliklerini ve methodlarını miras almasını sağlar
 * Bu işlem kodun tekrar kullanılabilirliğini arttırır ve kod organizasyonunu güçlendirir.
 * Miras her zaman "ana sınıf"'tan türetilmiş olan "alt sınıf"'lar arasında gerçekleşir
 * Alt sınıf (derived class), bir üst sınıftan (parent class) özelliklerini ve methodlarını alır
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
// Parent Class
var GeometrikSekil = /** @class */ (function () {
    function GeometrikSekil(isim, renk) {
        this.isim = isim;
        this.renk = renk;
    }
    GeometrikSekil.prototype.tanıt = function () {
        console.log("".concat(this.isim, " isimli ve ").concat(this.renk, " renginde \u015Fekildir"));
    };
    return GeometrikSekil;
}());
// Derived Class (Alt Sınıf) - Constructor Yok
var Kare = /** @class */ (function (_super) {
    __extends(Kare, _super);
    function Kare() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kenarSayisi = 4;
        _this.kenarUzunlugu = 340;
        return _this;
    }
    return Kare;
}(GeometrikSekil));
var kare = new Kare("Kare", "mavi");
console.log(kare);
kare.tanıt();
// Derived Class (Alt Sınıf) - Constructor Var
var Daire = /** @class */ (function (_super) {
    __extends(Daire, _super);
    function Daire(yariCap) {
        // super: parent class'ın constructor'ına değer göndermeye yarar
        var _this = _super.call(this, "Daire", "pembe") || this;
        _this.yariCap = yariCap;
        return _this;
    }
    return Daire;
}(GeometrikSekil));
var daire = new Daire(25);
console.log(daire);
daire.tanıt();
// Örnek
// Parent Class
var Arac = /** @class */ (function () {
    function Arac(marka, model) {
        this.marka = marka;
        this.model = model;
    }
    Arac.prototype.calistir = function () {
        console.log("Araca giriş yapılıyor");
    };
    return Arac;
}());
// Derived Class
var Otomobil = /** @class */ (function (_super) {
    __extends(Otomobil, _super);
    function Otomobil(marka, model, beygir, yakitTipi) {
        var _this = _super.call(this, marka, model) || this; // arac sınıfının istediği parametreleri gönder
        _this.beygir = beygir;
        _this.yakitTipi = yakitTipi;
        return _this;
    }
    // yeni method ekle
    Otomobil.prototype.gazaBas = function () {
        console.log("Gaza basılıyor..");
    };
    return Otomobil;
}(Arac));
var bmw = new Otomobil("BMW", "x4", 250, "benzin");
console.log(bmw);
bmw.calistir();
bmw.gazaBas();
// Bir class aynı anda birden fazla class'ı miras alamaz
// Ama miras alma olayı birden fazla kez gerçekleşebilir
var İnsan = /** @class */ (function () {
    function İnsan() {
        this.gozRengi = "";
    }
    return İnsan;
}());
var Anne = /** @class */ (function (_super) {
    __extends(Anne, _super);
    function Anne() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.gozRengi = "Mavi";
        return _this;
    }
    return Anne;
}(İnsan));
var Baba = /** @class */ (function (_super) {
    __extends(Baba, _super);
    function Baba() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.gozRengi = "Kahverengi";
        return _this;
    }
    return Baba;
}(İnsan));
// Hem anne hem baba class'ından aynı andan miras alınamaz. Sınıflar bunu desteklemiyor
var Cocuk = /** @class */ (function (_super) {
    __extends(Cocuk, _super);
    function Cocuk() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Cocuk;
}(Baba));
console.log(new Cocuk());
