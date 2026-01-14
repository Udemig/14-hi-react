/*
 ! Optional Param
 * Normal şartlarda fonksiyonu çağırabilmemiz için parametrelerin tamamına değer göndermemiz gerekir
 * Bazı dırımlarda bazı parametrelerin zorunlu olmasını istemeyebiliriz.
  
 * Tanım: (a:string, b?:string) => bu kullanımda a zorunlu b ise opsiyonel olur
 !!!! Opsiyonel bir parametrenin ardından zorunlu bir parametre gelemez 
*/

function exaFunction(par1: number, par2?: string, par3?: boolean) {
  console.log("1.parametre", par1);
  console.log("2.parametre", par2);
  console.log("3.parametre", par3);
}

exaFunction(123, "selam", true);
exaFunction(123, "selam");
exaFunction(123);
exaFunction(123, undefined, true);

// Örnek
const karsilama = (isim: string, zaman?: string): string => {
  if (zaman) {
    return `${zaman} ${isim}`;
  }

  return `Merhaba, ${isim}`;
};

console.log(karsilama("Ahmet", "İyi akşamlar"));
console.log(karsilama("Ahmet"));

// Opsiyonel değerleri nesne tipi tanımındada kullanabiliyoruz
type User = {
  name: string;
  age: number;
  childrenCount?: number;
};

let user1: User = {
  name: "Ahmet",
  age: 34,
  childrenCount: 2,
};

let user2: User = {
  name: "Mehmet",
  age: 20,
};
