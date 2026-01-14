/*
 * Typescript, javascript'in tip tanımlanabilir bir üst versiyonu olarak microsoft tarafından geliştirilmiş bir programlama dilidir.

 * Neden Typescript ?
 * * JS'de koddaki hataları runtime'da görürüz
 * * TS'de koddaki hataları kod editöründeyken daha projeyi çalıştırmadan görürüz
  
 * * JS'de tanımladığımız değişkene daha sonra farklı türde değer ataması yapılabilir 
 * * TS'de tanımladığımız değişkene daha sonra farklı türde değer ataması YAPILAMAZ 
  
 * * JS'de çok kısıtlı bir otomatik tamamlama desteği bulunur 
 * * JS'de çok daha geniş kapsamlı bir otomatik tamamlama desteği bulunur 
*/

let userName2: string = "furkan";
userName2 = "ali";
// userName2 = 56; // HATA
// userName2 = true; // HATA

let user = {
  name: "Ali",
  age: 56,
};

console.log(user.surname);
// Hataların erken farkına varma olayı:
// Burada hata olduğunu daha kodu çalıştırmadan bize söylüyor
