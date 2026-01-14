/*
 ! Any Type
 * Bir değişkene any type atadığımız zaman typescript tip kontrolünü kapatır.
 * Any type atanamış değişkene her türlü tipte değer atayabiliriz.
 * Otomatik tamamlama desteği, editör hata deteği, tip kısıtlaması tamamen devre dışı kalır.
 * Any type'ını kullanmak genelde kötü bir fikirdir.
 * Any type'ını ancak acileyeti olan durumlarda "geçici" olarak kullanılır.
*/

let foo: any;
foo = 123;
foo = "selam";
foo = true;
foo = {};
foo = [];
foo = () => {};
