// Generic Extends
// Tipi generic olarak tanımladığımızda her türlü tipte değer atanmasına izin vermiş oluruz
// Bazı seneryolarda generic kullansakta bu kadar esnekliğe izin vermek istemeyebiliyoruz
// Extends kullanarak generic olan tipin alabileceği değerleri kısıtlayabiliyoruz
type Container<T extends string | number> = {
  foo: T;
  bar: T;
};

const x: Container<string> = {
  foo: "asd",
  bar: "feg",
};

const y: Container<number> = {
  foo: 123,
  bar: 456,
};

// const z: Container<boolean> = {
//   foo: true,
//   bar: false,
// };

// Örnek
// Uygulmanın ismi | Api URL gibi çzelliklerini saklayan bir sınıf tanımlayalım
// Tabi bu özelliklerin değerleri birbirinden farklı olucağı için generic kullanalım

class AppConfig<T extends string | number | boolean> {
  constructor(
    private key: string,
    private value: T,
  ) {}

  getValue(): T {
    return this.value;
  }

  updateValue(newValue: T) {
    this.value = newValue;
  }
}

const app_name = new AppConfig<string>("APP_NAME", "Didiyos");
new AppConfig<number>("VERSION", 23.2);
new AppConfig<boolean>("IS_IOS_APP", true);

app_name.updateValue("Twitter");
console.log(app_name.getValue());

//! Challange
/*
 * En az 1 generic tip alan bir type / interface / fonksiyon / class yazınız
 * Tanımladığınız yapıyı en az bir kez kullanız
 * Bonus: extends kullanımı
 */

interface IEv<K extends number | string, T, S> {
  ilanNo: K;
  sehir: T;
  odaSayisi: S;
  kat: S;
}

const ev1: IEv<string, string, number> = {
  ilanNo: "ABC-1",
  sehir: "İstanbul",
  odaSayisi: 3,
  kat: 5,
};

const ev2: IEv<number, string, number> = {
  ilanNo: 1234,
  sehir: "İstanbul",
  odaSayisi: 3,
  kat: 5,
};
