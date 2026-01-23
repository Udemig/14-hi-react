// Normal bir nesnenin tipini tanımlayalım
type Yetki = {
  rol: string;
  yazmaYetkisi: boolean;
  kullaniciBanladi: number;
};

const admin: Yetki = {
  rol: "admin",
  yazmaYetkisi: true,
  kullaniciBanladi: 230,
};

// Ama nesnenin hangi keylere sahip olduğunu bilmiyorsak tip tanımında Record kullanırız:
const puanTablosu: Record<string, number> = {
  ahmet: 96,
  ali: 37,
  ayse: 98,
  murat: 23,
  fatma: 46,
  veli: 83,
};

// Örnek - 2
// Aşağıdaki nesnenin tipini tanımlayalım
const codes = {
  200: "Başarılı",
  423: "Yetersiz Yetki",
  404: "Bulunamadı",
  500: "Sunucu Hatası",
};

// a) interface kullanrak yukardaki nesnenin tipini tanımlayalım
interface ICode {
  200: string;
  423: string;
  404: string;
  500: string;
}

// b)  record kullanrak yukardaki nesnenin tipini tanımlayalım
type CodeType = Record<number, string>;
