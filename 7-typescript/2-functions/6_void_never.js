/*
 ! Void
 * Sadece fonksiyon return tiplerinde kullanılabilir
 * Bu fonksiyon herhangi bir değer return etmeyecek anlamına gelir
 * Retunt tipi void ise return fonksiyonu durdurmak amacıyla kullanılabilir ama değer döndüremez
*/
var func1 = function () {
    return "selam";
};
var func2 = function () {
    return 345;
};
var func3 = function () {
    console.log("selam");
    return; // fonksiyonu durdurma amaçlı returnler kullanılabilir
};
// void örnek
var deleteProduct = function (id) {
    fetch("www.api.com/:id", { method: "DELETE" });
};
/*
 ! Never Type
 * Sadece fonksiyon return tiplerinde kullanılabilir
 * Fonksiyon hata fırlatıyorsa return tipi olarak never kullanılır
 * Gonksiyon hiçbir zaman görevini tamamlamayacak durumunu ifade eder
*/
var log = function (message) {
    if (!message) {
        throw new Error("Fonksiyone mesaj sağlanmadı");
    }
    else {
        console.log("Mesaj alındı");
    }
};
log("selam");
log();
// Örnek - 2
function setMode(mode) {
    if (mode === "açık")
        return "Açık mod";
    if (mode === "koyu")
        return "Koyu mod";
    return wrongMode(mode);
}
function wrongMode(x) {
    throw new Error("Geçersiz mod: " + x);
}
setMode("açık");
setMode("koyu");
setMode("kırmızı");
