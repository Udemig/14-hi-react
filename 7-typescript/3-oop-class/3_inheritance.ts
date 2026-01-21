/*
 ! Inheritance (Kalıtım / Miras)
 * Bir OOP kavramıdır. Bir sınıfın farklı bir sınıfın özelliklerini ve methodlarını miras almasını sağlar
 * Bu işlem kodun tekrar kullanılabilirliğini arttırır ve kod organizasyonunu güçlendirir.
 * Miras her zaman "ana sınıf"'tan türetilmiş olan "alt sınıf"'lar arasında gerçekleşir
 * Alt sınıf (derived class), bir üst sınıftan (parent class) özelliklerini ve methodlarını alır 
*/

// Parent Class
class GeometrikSekil {
  isim: string;
  renk: string;

  constructor(isim: string, renk: string) {
    this.isim = isim;
    this.renk = renk;
  }

  tanıt() {
    console.log(`${this.isim} isimli ve ${this.renk} renginde şekildir`);
  }
}

// Derived Class (Alt Sınıf) - Constructor Yok
class Kare extends GeometrikSekil {
  kenarSayisi: number = 4;
  kenarUzunlugu: number = 340;
}

const kare = new Kare("Kare", "mavi");
console.log(kare);
kare.tanıt();

// Derived Class (Alt Sınıf) - Constructor Var
class Daire extends GeometrikSekil {
  yariCap: number;

  constructor(yariCap: number) {
    // super: parent class'ın constructor'ına değer göndermeye yarar
    super("Daire", "pembe");
    this.yariCap = yariCap;
  }
}
const daire = new Daire(25);
console.log(daire);
daire.tanıt();

// Örnek
// Parent Class
class Arac {
  marka: string;
  model: string;

  constructor(marka: string, model: string) {
    this.marka = marka;
    this.model = model;
  }

  calistir() {
    console.log("Araca giriş yapılıyor");
  }
}

// Derived Class
class Otomobil extends Arac {
  beygir: number;
  yakitTipi: string;

  constructor(marka: string, model: string, beygir: number, yakitTipi: string) {
    super(marka, model); // arac sınıfının istediği parametreleri gönder
    this.beygir = beygir;
    this.yakitTipi = yakitTipi;
  }

  // yeni method ekle
  gazaBas(): void {
    console.log("Gaza basılıyor..");
  }
}

const bmw = new Otomobil("BMW", "x4", 250, "benzin");
console.log(bmw);
bmw.calistir();
bmw.gazaBas();

// Bir class aynı anda birden fazla class'ı miras alamaz
// Ama miras alma olayı birden fazla kez gerçekleşebilir

class İnsan {
  gozRengi: string = "";
}

class Anne extends İnsan {
  gozRengi: string = "Mavi";
}

class Baba extends İnsan {
  gozRengi: string = "Kahverengi";
}

// Hem anne hem baba class'ından aynı andan miras alınamaz. Sınıflar bunu desteklemiyor
class Cocuk extends Baba {}

console.log(new Cocuk());
