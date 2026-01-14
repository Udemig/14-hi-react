/*
 ! Default Params (Varsayılan Parametre)
 * Bazen opsiyonel parametreyi göndermediğimiz zaman değerinin undefined olmasını istemeyebiliriz.
 * Undefined olması yerine varsayılan bir değere sahip olmasını istersek bu yöntemi kullanırız
*/

// Örnek
function selamVer(isim: string = "Dünya") {
  console.log(`Merhaba ${isim}`);
}

selamVer("Furkan");
selamVer();

// TODO: ÖRNEK / CHALLANGE
