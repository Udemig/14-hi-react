// Interface ile person nesnenin tipini tanımlayalım
interface Adres {
  ulke: string;
  sehir: string;
  sokak: string;
}

interface Egitim {
  okulAdi: string;
  mezuniyetYili: number;
  derece: string;
}

interface Is {
  sirkatAdi: string;
  pozisyon: string;
  baslangicYili: number;
  bitisYili?: number;
}

interface Kisi {
  id: string;
  isim: string;
  soyisim: string;
  yas: number;

  adres: Adres;
  egitim: Egitim;
  is: Is[];
}

// API'dan gelen verinin tipini tanımlayalım
const kisi: Kisi = {
  id: "12345",
  isim: "Ali",
  soyisim: "Solak",
  yas: 30,
  adres: {
    ulke: "Türkiye",
    sehir: "İstanbul",
    sokak: "Atatürk Caddesi No:10",
  },
  egitim: {
    okulAdi: "Boğaziçi Üniversitesi",
    mezuniyetYili: 2016,
    derece: "Lisans",
  },
  is: [
    {
      sirkatAdi: "Tech Solutions",
      pozisyon: "Yazılım Mühendisi",
      baslangicYili: 2016,
      bitisYili: 2019,
    },
  ],
};

const adresGuncelle = (yeniAdres: Adres) => {
  kisi.adres = yeniAdres;
};
