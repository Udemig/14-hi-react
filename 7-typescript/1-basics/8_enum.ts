/*
 ! Enum (Numaralandırma)
 * Belirli değerler kümesi
 * Benzer kategorideki değerleri bir arada tutmak için kullanılır
*/

// Örnek - 1
// Trafik ışığının aşamalarının verisini tut

// 1) klasik js yöntemi
const color = {
  kirmizi: 0,
  sari: 1,
  yesil: 2,
};

// bu renklerden birini değişkene atayalım
const renk1: number = color.kirmizi;

// 2) typescript enum yöntemi
enum Color {
  kirmizi,
  sari,
  yesil,
}

// bu renklerden birini değişkene atayalım
// enumları bir tip olarak kullanabiliyoruz
// değişkenin tipini enum yaparsak değer olarak sadece enum'ın içindeki değerleri atayabiliriz
const renk2: Color = Color.yesil;

// TODO: Örnekleri Yap
