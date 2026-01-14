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

// Örnek-2
enum Gun {
  pazartesi = 1,
  sali,
  carsamba,
  persembe,
  cuma,
  cumartesi,
  pazar,
}

let gun1 = Gun.cumartesi;
let gun2 = Gun[3];

console.log(gun1);
console.log(gun2);

// Örnek - 3
// Bir kargo takip sitesi yazıyoruz ve kullanıcılara sıklıkla kargo durumunu bildirmek gerekiyor
// Bu durmda kargo aşamalarını js'te bir nesneneye atar ve ordan çağırırdık, ts'de ise enum kullanarak daha kullanışlı bir şekilde tanımlayabiliriz
enum Status {
  pending = "Beklemede",
  on_the_way = "Yola çıktı",
  delivered = "Teslim edilidi",
  canceled = "İptal edildi",
}

// değişken tipini tanımlarken enumı kullandık
// bu değişken enum'un içindeki değerler dışarısında hiçbir değer alamayacak
let ahmedin_kargo_durumu: Status;

ahmedin_kargo_durumu = Status.delivered;
