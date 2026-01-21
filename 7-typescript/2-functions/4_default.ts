/*
 ! Default Params (Varsayılan Parametre)
 * Bazen opsiyonel parametreyi göndermediğimiz zaman değerinin undefined olmasını istemeyebiliriz.
 * Undefined olması yerine varsayılan bir değere sahip olmasını istersek bu yöntemi kullanırız
*/

// Örnek
function selamVer(isim: string = "Dünya") {
  console.log(`Merhaba ${isim}`);
}

selamVer("Furkan"); // Mehrhaba Furkan
selamVer(); // Merhaba Dünya

// Örnek
// Ürünün kdv eklenmiş fiyatını hesaplayan bir fonksiyon yazalım
// Fonksiyon 2 parametre alsın: ürün fiyatı, kdv oranı (opsiyonel)
// Kdv oranı parametresi gönderilmezse varsayılan %18'den hesaplasın

function kdvHesapla(fiyat: number, kdv: number = 0.18): number {
  return fiyat + fiyat * kdv;
}

console.log(kdvHesapla(200, 0.35)); // 270
console.log(kdvHesapla(200)); // 236
