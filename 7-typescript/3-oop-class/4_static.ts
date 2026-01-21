/*
 ! Static
 * Static anahtar kelimesi, özelliği veya methodu sınıfın örneğini oluşturmadan kullanabilmemizi sağlar
 * Static methodlar class'ın sahip olduğu özellikleri kullanamaz 
*/

//! Static Method
class Matematik {
  x: number = 10;

  topla(y: number) {
    console.log(y + this.x);
  }

  static carp(a: number, b: number) {
    console.log(a * b);
  }
}

// static olmayan topla fonksiyonuna erişmek için öncelikle sınıftan örnek aldık
new Matematik().topla(20);

// static olan carp fonksiyonuna sınıftan örnek almadan direkt ismi üzerinden erişebildik
Matematik.carp(4, 5);

// sıklıkla kullandığımız statik olamayan bir method örneği
new Date("2026-01-10").toLocaleDateString();

// statik olan
Date.now();

//! Static Property
// Doğrudan class üzerinden erişilebilen özelliklerdir
class Ogrenci {
  isim: string;
  static ogrenciSayisi: number = 0;

  constructor(isim: string) {
    // normal bir özelliğe erişim
    this.isim = isim;

    // static bir özelliğe erişim
    Ogrenci.ogrenciSayisi++;
  }
}

console.log(new Ogrenci("Ahmet"));
console.log(new Ogrenci("Abdullah"));
console.log(new Ogrenci("Büşra"));
console.log(new Ogrenci("Ali"));

console.log(Ogrenci.ogrenciSayisi); // 4
