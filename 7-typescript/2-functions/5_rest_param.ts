/*
 ! Rest Params
 * Parametre listesinin belirsiz veya sınırsız olduğu durumlarda kullanılır.

 * Özellikleri
 * Bir parametreyi rest param yapmak için "..." operatörünü kullanırız.
 * Bir rest parameterenin ardından normal bir parametre gelemez
 * Sebebi rest parametrenin kaç değer alıcağının belli olmaması
 * Rest parametrenin aldığı değerleri en son dizi haline getirirlir
*/

// Örnek
const yoklama = (ogretmen: string, ...ogrenciler: string[]) => {
  console.log(ogretmen + " yoklama alıyor");
  console.log("--------------------------");
  ogrenciler.forEach((ogrenci) => console.log(ogrenci + " burdaaaaa"));
};

yoklama("Ayşe Öğretmen", "Ali", "Ahmet", "Faruk", "Burak");

/*
 ! Challange
 * İstenildiği kadar sayıyı parametre olarak alan bir fonksiyon yazınız
 * Parametre olarak aldığınız ilk 2 sayıyı çarpın ve console'a yazın
 * ilk 2 sayı dışında geriye kalan bütün sayıları toplayıp console'a yazın
  
 * hesapla(2,3,4,5,6,7) 
 * log("Çarpım:", 6) 
 * log("Toplam:", 22) 
*/
