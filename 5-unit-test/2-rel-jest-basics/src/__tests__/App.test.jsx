/*
 ! Dosyalama
 * Testlerimizi .test.js / test.jsx dosyları içerisine yazarız.
 * Proejedeki testleri genelde tek bir klasör içinde tutarız (__tests__)
*/

/*
 ! Unit Test
 * Yazdığımız *dinamik olan* bütün bileşenlerin testlerini yazarız
 * Unit test yazmamız sauesinde kod değişikliği yapıldığında yaptığımız değişiklikleri githuba göndermden önce projede hata olup olmadığını kontrol etmemizi sağlar.
 * Projelerde her işlevi el ile kontrol etmek çok fazla zaman alacağından ve bir şeylerin gözden kaçma ihtimali yüksek olduğundan test yazmak önemlidir.
 * Bu yüzden unit test ile bileşenlerin doğru çalışıp çalışmadığını kontrol eden testler yazarız
*/

import { render, screen } from "@testing-library/react";
import App from "../App";

/*
 ! Test Nasıl Yazılır
 * test yazarken *test* veya *it" methodlarını kullanırız.
 * test fonksiyonu 2 parametre ister
 * 1) string: testin adı
 * 2) function: testin yapıldığı yer
*/

test("ekranda merhaba dünya yazar", () => {
  // test edilecek component render edilir (sanal ortam - virtual)
  render(<App />);

  // renderlanan component içerisindeki test edilecek elementi çağıralım
  // eğer component tarayıca renderlanıyor olsaydı document.querySelector() kullanırdık ama sanal ortamda render olduğu için document yerine screen ve query selector yerine farklı methodlar kullanırız
  const h1 = screen.getByText("Merhaba Dünya");

  // çağrılan elementten beklentimi söyleriz
  // beklentimiz: ekranda içinde Merhaba Dünya yazan bir element vardır
  expect(h1).toBeInTheDocument();
});
