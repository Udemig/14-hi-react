/*
 ! Erişim Belirteçleri
 * Class elamanları ile veri tutucağımız zaman bu bilgilerin class'ın dışarısından erişilebilir olup olmama durumunu belirlememizi sağlar

 * Erişim belirtiçleri:
 - public: Her yerden erişilebilir  
 - protected: Sadece sınıfın kendisi ve alt sınıfları özelliğe erişebilir
 - private: Sadece sınıfın kendisi özelliğe erişebilir
*/

// Ev sınıfı
class Ev {
  public adres: string = "İstanbul";
  protected fiyat: number = 5400000;
  private sahip: string = "Ahmet Yılmaz";

  tanim() {
    console.log(`Bilgiler: ${this.adres}, ${this.fiyat}, ${this.sahip}`);
  }
}

// Ev sınıfından miras alan Villa sınıfı
class Villa extends Ev {
  tanim() {
    console.log(`Bilgiler: ${this.adres} ${this.fiyat}`);
  }
}

// Ev sınıfından bir örnek oluşturduk
const ev = new Ev();
console.log(ev.adres);

/*
 * Belirteç           Tanımlandığı Sınıf              Alt Sınıflar            Dışarıdan Erişim
 * public                   Evet                          Evet                     Evet
 * protected                Evet                          Evet                     Hayır
 * private                  Evet                          Hayır                    Hayır
 */

class BankaHesabi {
  public hesapNumarasi: string;
  protected bakiye: number;
  private pin: number;

  constructor(h: string, b: number, p: number) {
    this.hesapNumarasi = h;
    this.bakiye = b;
    this.pin = p;
  }

  // public method
  public paraYatir(miktar: number): void {
    this.bakiye += miktar;
  }

  // protected method
  protected bakiyeSorgula(): number {
    return this.bakiye;
  }
}

const hesap = new BankaHesabi("1122334346", 5000, 1212);
console.log(hesap.hesapNumarasi);
hesap.paraYatir(1500);
console.log(hesap);
