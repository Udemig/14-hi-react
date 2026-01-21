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
// Soyut Sınıf
var MuzikCalar = /** @class */ (function () {
    function MuzikCalar(apiUrl) {
        this.apiUrl = apiUrl;
    }
    MuzikCalar.prototype.muzikleriGetir = function () {
        console.log(this.apiUrl + " adresinden müzikler alınıyor...");
    };
    return MuzikCalar;
}());
// Soyut sınıfı miras alan sınıf
var Spotify = /** @class */ (function (_super) {
    __extends(Spotify, _super);
    function Spotify() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Spotify.prototype.muzikCal = function (isim) {
        console.log("".concat(isim, " Spotify'da \u00E7al\u0131yor..."));
    };
    return Spotify;
}(MuzikCalar));
// Soyut sınıfı miras alan sınıf
var AppleMusic = /** @class */ (function (_super) {
    __extends(AppleMusic, _super);
    function AppleMusic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppleMusic.prototype.muzikCal = function (isim) {
        console.log("".concat(isim, " Apple Music'te \u00E7al\u0131yor..."));
    };
    return AppleMusic;
}(MuzikCalar));
var spotify = new Spotify("https://api.spotify.com");
var appleMusic = new AppleMusic("https://api.apple.com");
spotify.muzikleriGetir();
appleMusic.muzikleriGetir();
spotify.muzikCal("Shape of You");
appleMusic.muzikCal("Yüz yüze");
