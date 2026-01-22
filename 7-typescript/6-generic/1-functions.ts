/*
 ! Generic
 * Bir fonksiyonun'un, type'ın, class'ın, interface'in içerisindeki hazı tipleri dinamik olarak aldığı parametreye göre değişmesini sağlayan yöntemdir.
 * Generic özelliğini kullanarak fonksiyonu veya tipi kullanıcağımız zaman parametre olarak tip gönderebiliyoruz.
 * Bu, generic kullandığımız yapının yeniden kullanılabilirliğini arttırır
*/

/*
 ? Yazmak istediğim fonksiyon
 * 1) Parametre olarak number dizisi gelirse rastgele bir sayı döndürmeli
 * 2) Parametre olarak string dizisi gelirse rastgele bir string döndürmeli
*/

// Union type kullanmaya çalıştırığımızda return tipini şartlı yazamadığımız için tip tanımlamasında başarısız oluruz
const getRandomElement = (array: number[] | string[]): number | string => {
  return "Furkan";
};

getRandomElement(["a", "b", "c"]);
getRandomElement([1, 2, 3]);

// Doğr tip tanımı için aynı fonksiyonu 2 kere tekrar yazmamaız gerekir
const getRandomString = (array: string[]): string => {
  const i = Math.round(Math.random() * array.length);
  return array[i];
};

const getRandomNumber = (array: number[]): number => {
  const i = Math.round(Math.random() * array.length);
  return array[i];
};

// Generic yardımıyla fonksiyonu tekrar yazalım
// Dinamik olmasını istediğimiz tipleri generic paarametresi olarak alalım
const getRandom = <TypeParam>(array: TypeParam[]): TypeParam => {
  const i = Math.round(Math.random() * array.length);
  return array[i];
};

console.log(getRandom<string>(["a", "b", "c"]));
console.log(getRandom<number>([1, 2, 3, 4]));

// React projesinde nerelerde kullanılır
// useState<number>(number)
// useRef<ElementTipi>()
// axios.get<UserType>("/users")
