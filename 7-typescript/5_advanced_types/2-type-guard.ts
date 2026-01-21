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
