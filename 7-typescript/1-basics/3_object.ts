/*
 ! Object
 * Normal şartlarda TS'de bir object type'ı mevcut ama object type'ı ucu açık olan bir tip olduğu için kullanmayı tercih etmiyoruz.
*/

// nesne tipi tanımlamanın yanlış yolu
let data: object;
data = {};
data = [];
data = () => {};
data = new Date();

// nesne tipi tanımlamanın doğru yolu
// doğru yol: nesnedeki alanların tipini ayrı ayrı tanımlamaktır
let ogrenci: {
  id: number;
  ad: string;
  soyad: string;
  mezunMu: boolean;
};

// belirlediğimiz tipe göre değer ataması yapalım
ogrenci = {
  id: 123,
  ad: "Ahmet",
  soyad: "Yılmaz",
  mezunMu: true,
};

/* 
  Aşağıdaki kurallara göre bir TypeScript nesne tipi tanımlayıp, ona uygun bir değer oluşturun:
  Konu: Object type’ını doğru kullanım (alanların tek tek tiplenmesi)
  ! Görev: 
  * urun isminde bir değişken oluşturun.
  * değişken içerisinde id, ad, fiyat, stoktaMi değerleri olsun
  * tipini tanımladıktan sonra bu tipe uygun bir değer atayın
*/

// Cevap
let urun: {
  id: number;
  ad: string;
  fiyat: number;
  stoktaMi: boolean;
};

urun = {
  id: 45,
  ad: "bilgisayar",
  fiyat: 30000,
  stoktaMi: true,
};
