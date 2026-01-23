// Dizi tipi tanımlamanın 2 farklı yolu vardır:

const ogrenciler1: string[] = ["Ali", "Ayşe", "Murat", "Burak"];

const ogrenciler2: Array<string> = ["Ali", "Ayşe", "Murat", "Burak"];

// Union type ile karışık dizi kullanımı:
const karisik1: (string | number)[] = ["a", 1, 2, 3, "b"];

const karisik2: Array<string | number> = ["a", 1, 2, 3, "b"];
