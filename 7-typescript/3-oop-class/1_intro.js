/*
 ! OOP (Object Orianted Programming)
 * Nesneye Yönelimli programalama, yazılım geliştirme sürecinde kullanılan bir tekniktir.
 * Bu yaklaşım gerçek jayattakı kavramları koda uyarlar
 * Kod tekrarını azaltır
 * Daha düzenli, modüler bir yapı kurmak için tercih edilir
 * Java, C#, C++, Python, Ruby, Swift, Kotlin, PHP, TypeScript, JavaScript, Dart
 
 * OOP'nin temel kavramları
 * Sınıf (Class)
 * Nesne (Object)
 * Kalıtım (Inheritance)
 * Interface (Arayüz)
 * Çok Bicimcilik (Polymorphisim)
 * Kapsülleme (Encapsulation)
 * Soyutlama (Abstraction)
  
 * Sınıf: Nensnelerin üretilmesi için kullanılan şablonlardır
 * Nesne: Sınıftan alınan bir örnektir
 * Interface: Bir sınıf veya nesne tipii tanımlamak için kullanılır.
 * Inheritance: Bir sınıfın özellik ve methodlarını farklı bir sınıfa aktarmak
 * Polymorphisim: Aynı isimdeki fonksiyonların farklı görev yapması
 * Encapsulation: Verilein dışarıdan doğrudan erişimini engellemek veya kontrollü erişim sağlamak
 * Abstraction: Gereksiz detaylı gizleyip önemli bilgileri ve davranışları öne çıkarma
*/
/*
 ! Class (Sınıf)
 * Sınıflar nesnelerin şablonudur.
 * Bir sınıf, belirli türdeki nesneler için özellik ve fonksiyon tanımlar.
 * Örneğin "Araba" sınıfı bir arabanın sahip olacağı özellikleri (renk,marka,model) ve davranışlarını (hızlanma,frenleme,vites değiştirme) tanımlar.
*/
var AkilliTelefon = /** @class */ (function () {
    function AkilliTelefon() {
        // properties (özellikler)
        this.marka = "Apple";
        this.model = "iPhone 15";
        this.ekranTuru = "OLED";
        this.batarya = 100;
    }
    // methods
    AkilliTelefon.prototype.ekranAc = function () {
        console.log("Ekran açıldı");
    };
    AkilliTelefon.prototype.aramaYap = function (numara) {
        console.log(numara + " aranıyor...");
    };
    return AkilliTelefon;
}());
/*
 ! Class Kullanımı
 * Class'ı tanımlamak tek başına bir anlam ifade etmez
 * Fonksiyonlarda olduğu gibi fonksiyonları tanımladıktan sonra çalıştırırız ve görevini yapar.
 * Class'larda da durum aynıdır class'ı new ile çağırırız ve bize yeni bir nesne oluşturur
 * Classs'ın oluşturduğu bu nesneye "instance" (örnek) denir
*/
var telefon1 = new AkilliTelefon();
var telefon2 = new AkilliTelefon();
var telefon3 = new AkilliTelefon();
telefon2.marka = "Nokia";
telefon2.model = "3310";
telefon2.batarya = 90;
telefon2.ekranTuru = "pixel";
console.log(telefon1);
console.log(telefon2);
console.log(telefon3);
telefon1.ekranAc();
telefon1.aramaYap("05435387384");
