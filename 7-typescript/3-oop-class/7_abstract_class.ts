/*
 ! Abstract Class (Soyut Sınıf)
 * Abstract class'lar sınıflar için birebir şablon görevi görür
 * Soyut sınıflar sayesinde oluşturucağımız sınıfların ortak özellik ve methodlarını tanımlarız.
 * Soyut sınıfların doğrudan örnekleri oluşturulamaz
 * Bundan dolayı soyut sınıflar normal sınıflar için tip tanımı görevi görür
*/

abstract class Foto {
  // Normal sınıflar gibi constructor tanımı yapabiliriz
  constructor(kameraModu: string, filtre: string) {}

  // Normal sınıflarda olduğu gibi bir method tanımlayalım
  fotoCek(): void {
    console.log("Fotoğraf çekiliyor...");
  }

  // Soyut Method'larda sadece parametre ve return tipi tanımlarız ama fonksiyonun görevini tanımlamayız. Miras alan sınıflar kendi ihtiyacına göre fonksiyonun görevini tanımlayabilir
  abstract fotoPaylas(kim: string): void;
}

// Soyut sınıfı miras alan bir alt sınıf tanımlayalım
class Instagram extends Foto {
  fotoPaylas(kim: string): void {
    console.log(`Foto instada ${kim} ile paylaşıldı.`);
  }
}

// Soyut sınıfı miras alan bir alt sınıf tanımlayalım
class Twitter extends Foto {
  fotoPaylas(kim: string): void {
    console.log(`Foto twitterda ${kim} ile paylaşıldı.`);
  }
}

new Instagram("Geniş Açı", "Siyah Beyaz").fotoPaylas("Ahmet");

new Twitter("Portre", "Canlı").fotoPaylas("Mehmet");
