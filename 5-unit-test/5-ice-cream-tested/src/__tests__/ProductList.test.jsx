import { queryByTestId, screen, waitFor } from "@testing-library/react";
import ProductList from "../components/ProductList";
import { renderWithProvider } from "../utils";
import { mockProducts } from "../utils/constants";

describe("ProductList Bileşeni", () => {
  it("Store yüklenme durumundayken yükleniyor mesajını gösterir", () => {
    renderWithProvider(<ProductList />, { s: { products: { isLoading: true } } });

    // ekranda loading mesajının olduğunu doğrula
    screen.getByTestId("loading");
  });

  it("Store hata durumundayken hata mesajını gösterir", async () => {
    renderWithProvider(<ProductList />, { s: { products: { isLoading: false, error: "Hata mesajı" } } });

    // ekranda loading mesajının olmadığını doğrula
    const loading = screen.queryByTestId("loading");
    expect(loading).toBeNull();

    // ekranda hata mesajının olduğunu doğrula
    screen.getByText("Hata: Hata mesajı");
  });

  it("Store'a veri gelmediğinde ürün yok mesajı gösterir", () => {
    renderWithProvider(<ProductList />, { s: { products: { isLoading: false, error: null, products: [] } } });

    // ekranda ürün yok mesajının olduğunu doğrula
    screen.getByText("Aroma bulunamadı.");
  });

  it("Store'a veri geldiğinde ürün kartları gösterilir", () => {
    renderWithProvider(<ProductList />, { s: { products: { isLoading: false, error: null, products: mockProducts } } });

    // ekranda ürün kartlarının olduğunu doğrula
    mockProducts.forEach((product) => {
      screen.getByText(product.name);
    });
  });
});
