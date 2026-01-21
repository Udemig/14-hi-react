/*
 ! Interface
 * Bir nesnenin tipi tanımlamaya yarar.
 * Nesnenin hangi tipte özellik ve methodlara sahip olucağını ifade eder.
  
 * Type Aliases | Abstract Class | Interface 

 ? Innterface vs Abstract Class
 * Abstact class'lar aynı anda max bir class'ı miras alabilir
 * Interface'ler ise birden fazla interface'i miras alabilir
  
 ? Interface vs Type Aliases
 * **Nesne tipi tanımlama açısından** aralarında hiçbir fark yoktur.
 * Type aliases yönteminde sadece nesne değil array / tuple / fonksiyon tipleri de tanımlanabilir
 * Interface'ler ise saadece nesne tipi tanımlamak için kullanılır.
*/

// type
type UserType = {
  name: string;
  age: number;
  married: boolean;
};

// interface
interface IUser {
  name: string;
  age: number;
  married: boolean;
}

const kisi: IUser = {
  name: "Mehmet",
  age: 34,
  married: true,
};

// Type Aliases ile nense dışarındaki verilerinde tipini tanımlayabilirsiniz
type NesneTipi = { id: number };

type DiziTipi = string[];

type FonksiyonTipi = (a: string, b: number) => void;

type LiteralTipi = "a" | "b" | "c";

// Interface ile sadace nesne tipi tanımalnabilir
interface INesne {
  id: number;
}

// Sonuç olarak;
// Intrface'ler sadece nesne tipi tanımlamak için varolduklarından dolayı bizde projelerimizde nesne tipi tanımlarken interface kullanacağız. Ama nesne dışıdaki bütün tiplerde type aliases kullanacağız.
