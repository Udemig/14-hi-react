/*
 ! Enum (Numaralandırma)
 * Belirli değerler kümesi
 * Benzer kategorideki değerleri bir arada tutmak için kullanılır
*/
// Örnek - 1
// Trafik ışığının aşamalarının verisini tut
// 1) klasik js yöntemi
var color = {
    kirmizi: 0,
    sari: 1,
    yesil: 2,
};
// bu renklerden birini değişkene atayalım
var renk1 = color.kirmizi;
// 2) typescript enum yöntemi
var Color;
(function (Color) {
    Color[Color["kirmizi"] = 0] = "kirmizi";
    Color[Color["sari"] = 1] = "sari";
    Color[Color["yesil"] = 2] = "yesil";
})(Color || (Color = {}));
// bu renklerden birini değişkene atayalım
// enumları bir tip olarak kullanabiliyoruz
// değişkenin tipini enum yaparsak değer olarak sadece enum'ın içindeki değerleri atayabiliriz
var renk2 = Color.yesil;
// Örnek-2
var Gun;
(function (Gun) {
    Gun[Gun["pazartesi"] = 1] = "pazartesi";
    Gun[Gun["sali"] = 2] = "sali";
    Gun[Gun["carsamba"] = 3] = "carsamba";
    Gun[Gun["persembe"] = 4] = "persembe";
    Gun[Gun["cuma"] = 5] = "cuma";
    Gun[Gun["cumartesi"] = 6] = "cumartesi";
    Gun[Gun["pazar"] = 7] = "pazar";
})(Gun || (Gun = {}));
var gun1 = Gun.cumartesi;
var gun2 = Gun[3];
console.log(gun1);
console.log(gun2);
