// Bu type guard tekniğine geçmeden önce typeOf ve instanceOf gibi javascript opertörlerini hatırlayalım

// typeof: bir değişkenin primitif tipini kontrol etmek için kullanılır
console.log(typeof "hello"); // string
console.log(typeof 435345); // number
console.log(typeof { id: 123 }); // object
console.log(typeof false); // boolean

// not: typeof kendi oluşturduğumuz tipleri kontrol etmek için kullanılmaz
type Tur = { turİsmi: string; zorluk: "kolay" | "zor" };
const tur1: Tur = { turİsmi: "Doğa Yürüyüşü", zorluk: "zor" };

console.log(typeof tur1); // object

/*
 ! Type Guard
 * Type guards'ın amacı belirli türdeki değerleri kontrol etmek ve bu türe özgü işlemler gerçekleştirebilmek için kullanılır.
*/

// 1) typeOf ile typeGuard tekniği uygulayalım
function log(input: string | number) {
  if (typeof input === "string") {
    input.toUpperCase();
  } else {
    input.toFixed(2);
  }
}

log("Selamlar");
log(68);

// Örnek
// Girdi olarak hem string ("123") hemde number (123) formatında sayı kabul eden bir fonksiyon yazalım
// Eğerki girdi sayı ise direkt return etsin eğer girdi string ise sayıyı çevirip return etsin
// Eğerki string sayıya çevrilemiyorsa 0 return etsin

const formatNumber = (input: string | number) => {
  if (typeof input === "number") {
    // input sayı ise direkt return et
    return input;
  } else {
    // input string ise sayıya çevir
    const value = parseInt(input);

    // sayı değilse 0 döndür
    return isNaN(value) ? 0 : value;
  }
};

console.log(formatNumber(789)); // 789
console.log(formatNumber("932")); // 932
console.log(formatNumber("furkan")); // 0

// instanceOf nedir?
class Kaplumbaga {}
class Tavsan {}

const tospik = new Kaplumbaga();

console.log("Tospik nesnesi, Tavsan sınıfından alınan bir örnek mi?", tospik instanceof Tavsan);
console.log("Tospik nesnesi, Kaplumbaga sınıfından alınan bir örnek mi?", tospik instanceof Kaplumbaga);

// instanceOf ile typeGuard tekniği uygulayalım
class Kedi {
  isim: string = "Tekir";

  miyavla(): void {
    console.log("🐈🐈🐈 miyav miyav");
  }
}

class Kopek {
  isim: string = "Karabaş";

  havla(): void {
    console.log("🐶🐶🐶 hav hav");
  }
}

// Aşağıdaki fonksiyon parametre olarak aldığı hayvana göre hayvanın sesini çıkaran fonksiyonu çalıştırmalı
function sesCikar(hayvan: Kedi | Kopek) {
  if (hayvan instanceof Kedi) {
    // hayvan parametresi Kedi sınıfından alınan bir örnek ise miyavla()
    hayvan.miyavla();
  } else {
    // hayvan parametresi Kopek sınıfından alınan bir örnek ise havla()
    hayvan.havla();
  }
}

sesCikar(new Kedi());
sesCikar(new Kopek());

// Gerçek Proje Örneği
class NetworkError {
  name: string = "Bağlantı Hatası";
  message: string = "Ağ bağlantısı kesildi";
}

class ValidationError {
  name: string = "Doğrulama Hatası";
  message: string = "Şifre yeterince güçlü değil";
}

function handleError(error: NetworkError | ValidationError | Error) {
  if (error instanceof NetworkError) {
    console.log("🛜 Ağ Hatası: ", error.message);
  } else if (error instanceof ValidationError) {
    console.log("⚠️ Doğrulama Hatası: ", error.message);
  } else {
    console.log("❌ Genel Hata: ", error.message);
  }
}

handleError(new NetworkError());
handleError(new ValidationError());
handleError(new Error("Sunucu çöktü"));
