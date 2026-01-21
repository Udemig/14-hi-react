/*
 ! Constructor (Yapıcı)
 * Constructor methodu oluşturulan nesnenin değerlerini dışarıdan almaya yarar
 * Contructor sayesinde bir class'tan oluşturulan bütün nesneler birbirinin kopyası olmaz.
 * Constructor new anahtar kelimesi ile class'ı çağırdığımızda çalışan ilk koddur.
 * Constructor ile class'a gelen parametrelere erişebiliriz.
*/

class İnsan {
  // özellikleri
  isim: string;
  soyad: string;
  yas: number;
  // constructor
  constructor(yeniİsim: string, yeniSoyad: string, yeniYas: number) {
    this.isim = yeniİsim;
    this.soyad = yeniSoyad;
    this.yas = yeniYas;
  }
  // method
  konus() {
    console.log(`Merhaba ben ${this.isim} ${this.soyad} ve ${this.yas} yaşındayım`);
  }
}

const insan1 = new İnsan("Ali", "Kaya", 27);
console.log(insan1);
insan1.konus();

/*
 ! Challange
 * Bir tekonolojik / ev aleti için class oluşturun
 * Bu class'tan oluşturduğunuz nesneler değerlerini constructor'dan alsın
 * Bu class en az 4 özellik ve 1 methoda sahip olsun
 * Class'tan bir örnek oluşturun
*/

class pc {
  model: string;
  ram: number;
  ssd: number;
  ekran: string;

  constructor(yModel: string, yRam: number, ySsd: number, yEkran: string) {
    this.model = yModel;
    this.ram = yRam;
    this.ssd = ySsd;
    this.ekran = yEkran;
  }

  laptop() {
    console.log(`${this.model} marka ${this.ram} ram ${this.ssd} ssd ${this.ekran} ekran kartlı modeli alacagım`);
  }
}
const lp = new pc("Acer", 16, 512, "4060ti");
console.log(lp);
lp.laptop();
