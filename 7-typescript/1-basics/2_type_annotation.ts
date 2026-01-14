/*
 ! Type Annotation
 * JS'te değişkenin türünü belirleme gibi bir özellik söz konusu değildir.
 * Fakat typescript'te tanımladığımız değişkenlerin tiplerini belirleyebiliyoruz.
 * Bu sayede değer ataması yaparken belirlenen tip kısıtlamasının dışarısına çıkamıyoruz
 * Bu kısıtlama kodda oluşabilecek hataların daha erken tespit edilmesini sağlar
 */

let foo: number = 20;
foo = 30;

/*
 * Javascript'te bulunan veri tipleri:
 * number
 * string
 * boolean
 * undefined
 * null
 * function >
 * array >
 * object >
 * symbol
 * bigInt
 */

let value1: string = "Udemig";
let value2: number = 45;
let value3: boolean = true;
let value4: null = null;
let value5: undefined;
let value6: undefined = undefined;
let value7: object = {};
let value8: object = [];
let value9: object = () => {};
let value10: symbol = Symbol("123");
let value11: bigint = 10n;

/*
 ! Type Inferance
 * Eğer bir değişkenin tipini belirlemezsek typescript kendisi değişkenin değerine göre otomatik belirler
 * Bu özelliği mümkünse hiç kullanmazsak daha iyi (Bazen olması gereken tipe nazaran yanlış tip belirleyebiliyor)
*/

let value12 = "ahmet";
