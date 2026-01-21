/*
 ! Default Params (Varsayılan Parametre)
 * Bazen opsiyonel parametreyi göndermediğimiz zaman değerinin undefined olmasını istemeyebiliriz.
 * Undefined olması yerine varsayılan bir değere sahip olmasını istersek bu yöntemi kullanırız
*/
// Örnek
function selamVer(isim) {
    if (isim === void 0) { isim = "Dünya"; }
    console.log("Merhaba ".concat(isim));
}
selamVer("Furkan"); // Mehrhaba Furkan
selamVer(); // Merhaba Dünya
// Örnek
// TODO: ÖRNEK / CHALLANGE
// Ürünün kdv eklenmiş fiyatını hesaplayan bir fonksiyon yazalım
// Fonksiyon 2 parametre alsın: ürün fiyatı, kdv oranı (opsiyonel)
// Kdv oranı parametresi gönderilmezse varsayılan %18'den hesaplasın
function kdvHesapla(fiyat, kdv) {
    if (kdv === void 0) { kdv = 0.18; }
    return fiyat + fiyat * kdv;
}
console.log(kdvHesapla(200, 0.35));
console.log(kdvHesapla(200));
