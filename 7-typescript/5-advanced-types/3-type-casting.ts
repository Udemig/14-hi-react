/*
 ! Type Casting - Tür Dönüşümü
 * Bir değişkenin tanımlanmasının ardından kullanılacağı yere özel bir tipte algılanması için type casting kullanılır
 * "as" operatörü ile kullanıldığı kod satırına özel değişkenin tipini belirleyebiliyoruz
*/

// Örnek - 1

type Product = {
  name: string;
  price: string | number;
};

let product: Product = {
  name: "Laptop",
  price: 56000,
};

/*
 * Normal price string veya number tipinde olduğundan number'lara özel toFixed() methodunu kullanamayız
 * product değişkeninde fiyatın sayı olduğunu bildiğimizden dolayı toFixed() kullanamamızın önünde normalde bir engel yok ama typescript hatası alıyorduk
 * Bu hatanın önüne geçmek için toFixed() methodunu çağrırmadan hemen önce as operatörü ile price değişkenin tipini aşağıdaki satıra özel numbera çevirdik
 */
(product.price as number).toFixed(1);

// Örnek - 2
let kisi: unknown = {
  name: "John",
  age: 30,
  address: "123 main st.",
};

// kişi nesnenesinin tipi unknown olduğu için name özelliğine erişemiyoruz
// kisi.name // !HATA;

// nesne için bir tip oluşturuz
interface IPerson {
  name: string;
  age: number;
  address: string;
}

// kişi nesnesinin özelliklerine erişirken hata vermemesi için tür döşümü yapıcam
(kisi as IPerson).address;
