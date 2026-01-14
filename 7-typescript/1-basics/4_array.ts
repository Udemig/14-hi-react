/*
 ! Array Type
 * Typescript'te dizilerin tipini tanımlarken sadece bu değişken bir dizi olucak deneme yerinne bu değişken string elemanlara sahip bir dizi olucak deriz.

 * Yani dizinin içeriği ne olucak? dizinin elemenlarının tipi ne olucak gibi belirtmemiz gerekiyor.
 
 * Tanım:
 * tip[]
 * string[]  number[]   object[]    boolean[]
*/

// Örnek - 1
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7];

// Örnek - 2
let names: string[] = ["Ahmet", "Furkan", "Fatma"];

// Soru: Dizide farklı tipte elemanlar olursa nasıl tip tanımı yapılır?
// Cevap: Evet, birden fazla farklı tipte değere sahip dizilerde tip Uninion Type yöntemiyle tanımlanabilir
const mixed: (string | number)[] = [1, 2, "a", "b", 4];
