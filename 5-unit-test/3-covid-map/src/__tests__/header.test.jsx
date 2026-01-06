import { render, screen } from "@testing-library/react";
import Header from "../pages/detail/header";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { thunk } from "redux-thunk";
import mockDetailData from "../utils/constants";

// sahte store oluşturma fonksiyonunu kur
const createMockStore = configureStore([thunk]);

it("store yüklenme durumundayken ekrana loader gelir", () => {
  // bu teste özel loading durumunda sahte bir store oluştur
  const mockStore = createMockStore({ isLoading: true, error: null, data: null });

  // component içerisinde react-router-dom ve react-redux özelliklerini kullandığımız için test ortamında component'ı renderlarken hata vermemesi için providerlarla sarmaladık
  render(
    <Provider store={mockStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );

  // ekrana loader geliyor mu?
  screen.getByTestId("loader");
});

it("store'a veri geldiğinde ekrana ülke ismi ve bayrağı gelir", () => {
  // bu teste özel detay verilerine sahip sahte store oluştur
  const mockStore = createMockStore({ isLoading: false, data: mockDetailData });

  // component'ı renderla
  render(
    <Provider store={mockStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );

  // loader'ın ekranda olmadığını kontrol et
  const loader = screen.queryByTestId("loader");
  expect(loader).toBeNull();

  // ülke ismi ekranda mı

  // ülke bayrağı ekranda mı

  // ülke bayrağının kaynağı doğru mu (src)
});
