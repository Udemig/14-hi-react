/*
 ! Void
 * Sadece fonksiyon return tiplerinde kullanılabilir
 * Bu fonksiyon herhangi bir değer return etmeyecek anlamına gelir
 * Retunt tipi void ise return fonksiyonu durdurmak amacıyla kullanılabilir ama değer döndüremez
*/

const func1 = (): string => {
  return "selam";
};

const func2 = (): number => {
  return 345;
};

const func3 = (): void => {
  console.log("selam");

  return; // fonksiyonu durdurma amaçlı returnler kullanılabilir
};

// void örnek
const deleteProduct = (id: number): void => {
  fetch("www.api.com/:id", { method: "DELETE" });
};

/*
 ! Never Type
 * Sadece fonksiyon return tiplerinde kullanılabilir
 * Fonksiyon hata fırlatıyorsa return tipi olarak never kullanılır
 * Gonksiyon hiçbir zaman görevini tamamlamayacak durumunu ifade eder
*/

const log = (message?: string): void | never => {
  if (!message) {
    throw new Error("Fonksiyone mesaj sağlanmadı");
  } else {
    console.log("Mesaj alındı");
  }
};

log("selam");
log();

// Örnek - 2
function setMode(mode: "açık" | "koyu"): string {
  if (mode === "açık") return "Açık mod";
  if (mode === "koyu") return "Koyu mod";

  return wrongMode(mode);
}

// x paramtresine never tipi vermemizin sebebi bu fonksiyona gelen değer imkansız bir değer olmalı (yukarıdaki fonksiyonu çalıştırmayan değer)
// retturn tipine never vermemizin sebebi fonksiyonun hata fırlatması
function wrongMode(x: never): never {
  throw new Error("Geçersiz mod: " + x);
}

setMode("açık");
setMode("koyu");
