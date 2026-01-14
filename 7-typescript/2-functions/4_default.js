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
selamVer("Furkan");
selamVer();
