/*
 ! Abstract Class (Soyut Sınıf)
 * Abstract class'lar sınıflar için birebir şablon görevi görür
 * Soyut sınıflar sayesinde oluşturucağımız sınıfların ortak özellik ve methodlarını tanımlarız.
 * Soyut sınıfların doğrudan örnekleri oluşturulamaz
 * Bundan dolayı soyut sınıflar normal sınıflar için tip tanımı görevi görür
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
var Foto = /** @class */ (function () {
    // Normal sınıflar gibi constructor tanımı yapabiliriz
    function Foto(kameraModu, filtre) {
    }
    // Normal sınıflarda olduğu gibi bir method tanımlayalım
    Foto.prototype.fotoCek = function () {
        console.log("Fotoğraf çekiliyor...");
    };
    return Foto;
}());
// Soyut sınıfı miras alan bir alt sınıf tanımlayalım
var Instagram = /** @class */ (function (_super) {
    __extends(Instagram, _super);
    function Instagram() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Instagram.prototype.fotoPaylas = function (kim) {
        console.log("Foto instada ".concat(kim, " ile payla\u015F\u0131ld\u0131."));
    };
    return Instagram;
}(Foto));
// Soyut sınıfı miras alan bir alt sınıf tanımlayalım
var Twitter = /** @class */ (function (_super) {
    __extends(Twitter, _super);
    function Twitter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Twitter.prototype.fotoPaylas = function (kim) {
        console.log("Foto twitterda ".concat(kim, " ile payla\u015F\u0131ld\u0131."));
    };
    return Twitter;
}(Foto));
new Instagram("Geniş Açı", "Siyah Beyaz").fotoPaylas("Ahmet");
new Twitter("Portre", "Canlı").fotoPaylas("Mehmet");
