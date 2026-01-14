/*
 * Typescript'de bir fonksiyonun tipini doğrudan fonksiyonu yazarken tanımlamak yerine type aliases ile ayrı bir tip oluşturabiliriz.
 */

// 1. Yöntem: fonksiyonu yazarken tip tanımlama
let funct1 = (par1: string, par2: number): string => {
  return par1 + par2;
};

let funct2 = (par1: string, par2: number): string => {
  return par1 + par2;
};

let funct3 = (par1: string, par2: number): string => {
  return par1 + par2;
};

// 2. Yöntem: Type aliases ile fonksiyonun tipini ayrıca tanımlama
type FuncType = (par1: string, par2: number) => string;

let func4: FuncType = (par1, par2) => {
  return par1 + par2;
};

func4("izmir", 59);

/*
 ! Challange
 * Yukarıdaki 2.yöntemde olduğu gibi bir fonksiyon tipi tanımlayın

 * * Parametre olarak kişinin bulunduğu şehrin ismini ve havanın derecesini alsın
 * * Eğer hava derecesi 30 dereceden büyükse "Hava Sıcak" return ersin
 * * Eğer hava derecesi 20 dereceden küçükse "Hava Soğuk" return etsin
 * * Eğer hava derecesi 20-30 arasındaysa "Hava Normal" return etsin
  
 * * Bonus: return edilen metinlere şehir ismi eklenebilir: "Ankara'da hava soğuk"
 * * Hem fonksiyonun tipini hemde fonksiyonu tanımlayın 
 * * Fonksiyonu 1 kez çağırın
  
 * Kopya: derece > 30 ? "x" : derece < 20 ? "y" : "z" 
*/

type FuncTypee = (par1: string, par2: number) => string;

const hava: FuncTypee = (par1, par2) => {
  if (par2 > 30) {
    return `${par1} de hava sıcak`;
  } else if (par2 < 20) {
    return `${par1} de hava soguk`;
  } else {
    return `${par1} de hava normal`;
  }
};
console.log(hava("izmir", 35));
