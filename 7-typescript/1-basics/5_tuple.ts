/*
 ! Tuple Type
 * Tuple, dizinin bir alt tipidir.
 * Uzunluğu ve elemanlarının sırası sabit olan dizilerin tipinin tanımlanması için kullanılır.
 * Genelde az sayıda eleman içeren dizilerde kullanabiliriz
*/

// Örnek-1: Elemanlarının sırası sabit bir dizinin tipini tanımlayalım
// yanlış yol (union type)
const ders1: (string | number)[] = ["Matematik", 3, 4, 435, 345, 34, 53, 4534];

// doğru yol (tuple type)
const ders2: [string, number] = ["Matematik", 3];

// Örnek-2: Bir css gradient verisi api'dan dizi içerisinde geliyor.
// [doğrultu,renk1,renk2]
const gradient: [number, string, string] = [180, "#000000", "#ffffff"];

// Örnek-3: Bir api'dan dizi içerisinde rgb/rgba verisi geliyor.
// [red,green,blue,alpha(opsiyonel)]
// Bu seneryoda dizideki son değer opsiyonel yani isteğe bağlıdır
let color: [number | string, number, number, number?];

color = [123, 56, 34];
color = [123, 56, 34, 0.5];

// Örnek-4: Birden fazla opsiyonel değer içeren tipi tanımlayalım
// Kural: Bir opsiyonel değerin ardından zorunlu değer ge-le-mez
let date: [number, number?, number?];

date = [28, 12, 1980];
date = [28, 12];
date = [28];
date = [28, , 1980];
