// 1) mocklamak istediğimiz değişken import edilir
import { totalApi } from "../utils/api";
import { mockStatisticsData } from "../utils/constants";
import { render, screen, waitFor } from "@testing-library/react";
import Statistics from "../pages/home/statistics";

// 2) api isteğini atan get fonksiyonun yerine sahte bir test fonksiyonu koyalım
jest.mock("../utils/api", () => ({
  totalApi: { get: jest.fn() },
}));

/*
  ! Mock
  * Yazdığımız testler kesinlikle api istekleri gibi dış etkenlerden tamamen bağımsız olmalı, yani api'dan gelicek olacak cevap testin sonucunu etkilememeli

  * Yani "api'dan yanıt geliyor mu?" testi değil, "api dan bu yanıt gelince arayüz güncelleniyor mu?" testi yazıcaz.

  * API isteğini atan fonksiyonu "mock'layıp" bu sayede api'ın döndüreceği cevabı testler içersinde belirleyebiliyor olucaz.
*/

test("bileşen render olduğunda api isteği atılır ekrana loader gelir", () => {
  // mock'ladığımız fonksiyon çağrıldığı zaman hangi değeri return edicek belirle
  totalApi.get.mockReturnValue(new Promise(() => {}));

  // bileşeni renderla
  render(<Statistics />);

  // api isteğini atan fonksiyon çalıştı mı?
  expect(totalApi.get).toHaveBeenCalledWith("/reports/total");

  // ekrana loader componentı geldi mi?
  // eğer bir element ekranda var mı kontrolü yapmak istiyorsak o elementi getBy yönetmlerinden biri ile çağırmak yeterlidir. Zaten elementi alabilirsek ekranda vardır ve ekstra bir expecte gerek yoktur.
  screen.getByTestId("loader");
});

test("api'dan hata gelirse ekrana hata mesajı gelir mi", async () => {
  // mock fonksiyonu çağrıldığı zaman hata döndürsün
  totalApi.get.mockRejectedValue(new Error("Bağlantı zaman aşımına uğradı"));

  // bileşeni renderla
  render(<Statistics />);

  // belirli bir sürenin ardından ekrana hata mesajı geliyor mu kontrol et
  // waitFor: fonksiyonda verilen olay gerçekleşene kadar bir süre bekle
  // ekranda hata mesajı var mı
  await waitFor(() => screen.getByText("Üzgünüz bir hata oluştu"));
});

test("api'dan veri gelirse ekrana istatistikler gelir", async () => {
  // mock fonksiyonu çağrıldığı zaman istatistik verisi döndürsün
  totalApi.get.mockResolvedValue({ data: mockStatisticsData });

  // bileşen, renderla
  render(<Statistics />);

  // api isteğinin atılmasını bekle
  await waitFor(() => expect(totalApi.get).toHaveBeenCalled());

  // ekrana veriler geldi mi?
  screen.getByText("Toplam Vaka");
  screen.getByText("Toplam Vefat");
  screen.getByText("Aktif Vaka");
});
