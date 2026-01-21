/*
 ! Readonly
 * readonly anahatar kelimesi, class'ın veya nesnenin özelliklerinin sadece okunabilir olmasını sağlar
 * Readonly ile tanımladığımız özelliklere değer ataması sadedece aşağıdaki durumlarda yapılabilir:
 * - sınıflarda sadce constructor içerisinde değer atanabilir
 * - nesnelerde sadece nesne oluşturulurken değer atanabilir
*/

// ? Nensneler Kullanım

// bir nesne tipi tanımladık
type Insan = {
  isim: string;
  soyad: string;
  readonly tcNo: string;
};

// nense oluşturuken yukarıdaki tipi kullanalım
const kisi: Insan = {
  isim: "Ahmet",
  soyad: "Yılmaz",
  tcNo: "12345678901",
};

kisi.isim = "Mehmet"; // sorun yok
kisi.soyad = "Kara"; // sorun yok
// kisi.tcNo = "98765432101"; // Hata: readonly özelliğe sonradan değer ataması yapılamaz

// ? Sınıflardaki Kullanım
class Kitap {
  public isim: string;
  protected sayfa: number;
  private readonly yazar: string;

  constructor(i: string, s: number, y: string) {
    this.isim = i;
    this.sayfa = s;
    this.yazar = y;
  }
}

const kitap = new Kitap("Suç ve Ceza", 450, "Dostoyevski");
console.log(kitap);
kitap.isim = "Suç ve Ceza - Güncellenmiş"; // sorun yok
// kitap.yazar = "Başka Biri"; //! Hata: readonly özelliğe sonradan değer ataması yapılamaz

/*
 ! Challange
 * Bir class tanımayın ve bu class'tan bir örnek oluşturun
 * Bu class en az 4 özelliğe sahip olsun
 * Bu özelliklerden en az biri readonly olsun
 * Erişim belirteçlerini kullanın (public, protected, private)
  
 * Yasaklılar: Kişi, İnsan, Ürün 
*/

class Araba {
  public renk: string;
  protected model: string;
  private readonly uretimYili: string;
  constructor(r: string, m: string, y: string) {
    this.renk = r;
    this.model = m;
    this.uretimYili = y;
  }
}
const araba = new Araba("kırmızı", "Seat-Leon", "2016");
console.log(araba.renk);
