// Bu type guard tekniğine geçmeden önce typeOf ve instanceOf gibi javascript opertörlerini hatırlayalım
// typof: bir değişkenin primitif tipini kontrol etmek için kullanılır
console.log(typeof "hello"); // string
console.log(typeof 435345); // number
console.log(typeof { id: 123 }); // object
console.log(typeof false); // boolean
var tur1 = { turİsmi: "Doğa Yürüyüşü", zorluk: "zor" };
console.log(typeof tur1); // Tur
