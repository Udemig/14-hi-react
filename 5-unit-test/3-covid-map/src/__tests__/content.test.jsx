import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { thunk } from "redux-thunk";
import Content from "../pages/detail/content";
import { render, screen } from "@testing-library/react";
import { mockDetailData } from "../utils/constants";

// shate store oluşturmaya yarayan fonksiyonun kurulumu
const createMockStore = configureStore([thunk]);

test("store yüklenme durumundayken ekrana loader gelir", () => {
  // test seneryosuna uygun sahte bir store oluştur
  const mockStore = createMockStore({ isLoading: true, error: null, data: null });

  // component'ı renderla
  render(
    <Provider store={mockStore}>
      <Content />
    </Provider>
  );

  // ekrana loader geldi mi
  screen.getByTestId("loader");
});

test("store hata durumundayken ekrana hata mesajı gelir", () => {
  // test seneryosuna uygun sahte bir store oluştur
  const mockStore = createMockStore({ isLoading: false, error: "Ülke bulunamadı", data: null });

  // component'ı renderla
  render(
    <Provider store={mockStore}>
      <Content />
    </Provider>
  );

  // hata mesajı ekrana geldi mi kontrol et
  screen.getByText("Ülke bulunamadı");
});

test("store'a veri geldiğinde her bir değer ekrana basılır", () => {
  // bu test seneryosuna uygun sahte bir store oluştur
  const mockStore = createMockStore({ isLoading: false, error: null, data: mockDetailData });

  // component'ı renderla
  render(
    <Provider store={mockStore}>
      <Content />
    </Provider>
  );

  // data nesnesini diziye çevir
  const arr = Object.entries(mockDetailData).filter(([key]) => key !== "flag");

  // dizideki her bir key value değeri ekrana basılıyor mu
  arr.forEach((item) => {
    //ekrana item'ın key değeri basılıyormu
    screen.getByText(item[0]);

    //ekrana item'ın value değeri basılıyormu
    screen.getByText(item[1]);
  });
});
