/*
 ! Challange
 * Herkes içerisinde en az 1 tane
 * string
 * number
 * boolean
 * array / object / tuple
 * string literal / union type
 * any
 * tiplerine sahip bir neszne tipi tanımlayın ve oluşturduğunuz tipi bir değişken üzeirinde kullanın
 
 * tip herhangi bir nesne hakkında olabilir: araba, ürün, bilgisayar, film, kitap...
*/

type User = {
  name: string;
  age: number;
};

const kullanici: User = {
  name: "ALi",
  age: 34,
};

// Cevap:
type Computer = {
  marka: string;
  ram: number;
  ssd: boolean;
  type: "laptop" | "Desktop";
  ekBilgi: any;
  ekUrun: {
    klavye: boolean;
    mouse: boolean;
    monitor: boolean;
  };
};

const urun: Computer = {
  marka: "ACER",
  ram: 16,
  ssd: true,
  type: "Desktop",
  ekBilgi: "Bu üründe bazı ekipmanlar ek olarak mevcuttur",
  ekUrun: {
    klavye: true,
    mouse: true,
    monitor: false,
  },
};
