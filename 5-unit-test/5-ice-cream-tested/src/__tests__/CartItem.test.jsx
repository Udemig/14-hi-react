import { screen } from "@testing-library/react";
import CartItem from "../components/CartItem";
import { renderWithProvider } from "../utils";
import { mockCart } from "../utils/constants";

// test için kullanılacak ürün verisini belirle
const product = mockCart[0];

describe("Cart Bileşeni", () => {
  it("Gelen prop verisini doğru şekilde gösterir", () => {
    // componentı render et
    renderWithProvider(<CartItem item={product} />);

    // isim doğru şekilde gösteriliyor mu kontrol et
    screen.getByText(product.name);

    // sipariş tipi doğru şekilde gösteriliyor mu kontrol et
    screen.getByText(/külah/i);

    // ürün adedi doğru şekilde gösteriliyor mu kontrol et
    screen.getByText(product.quantity);

    // ürün fotoğrafının ekrana basıldığı divi al
    const imageDiv = screen.getByTestId("cart-item-image");

    // divin style değeri doğru mu kontrol et
    expect(imageDiv).toHaveStyle({ backgroundImage: `url('${product.imageUrl}')` });
  });

  it("Sil butonuna tıklanınca ürün sepetten kaldırılır", async () => {});

  it("Arttır butonuna tıklanınca ürünün adedi artar", async () => {});

  it("Azalt butonuna tıklanınca ürünün adedi azalır", async () => {});
});
