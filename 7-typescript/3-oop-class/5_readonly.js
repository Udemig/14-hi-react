/*
 ! Readonly
 * readonly anahatar kelimesi, class'ın veya nesnenin özelliklerinin sadece okunabilir olmasını sağlar
 * Readonly ile tanımladığımız özelliklere değer ataması sadedece aşağıdaki durumlarda yapılabilir:
 * - sınıflarda sadce constructor içerisinde değer atanabilir
 * - nesnelerde sadece nesne oluşturulurken değer atanabilir
*/
// nense oluşturuken yukarıdaki tipi kullanalım
var kisi = {
    isim: "Ahmet",
    soyad: "Yılmaz",
    tcNo: "12345678901",
};
kisi.isim = "Mehmet"; // sorun yok
kisi.soyad = "Kara"; // sorun yok
// kisi.tcNo = "98765432101"; // Hata: readonly özelliğe sonradan değer ataması yapılamaz
// ? Sınıflardaki Kullanım
var Kitap = /** @class */ (function () {
    function Kitap(i, s, y) {
        this.isim = i;
        this.sayfa = s;
        this.yazar = y;
    }
    return Kitap;
}());
var kitap = new Kitap("Suç ve Ceza", 450, "Dostoyevski");
console.log(kitap);
