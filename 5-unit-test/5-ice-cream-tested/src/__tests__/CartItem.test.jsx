import { screen } from "@testing-library/react";
import CartItem from "../components/CartItem";
import { renderWithProvider } from "../utils";
import { mockCart } from "../utils/constants";
import userEvent from "@testing-library/user-event";

// test için kullanılacak ürün verisini belirle
const product = mockCart[0];

describe("Cart Item Bileşeni", () => {
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

  it("Sil butonuna tıklanınca ürün sepetten kaldırılır", async () => {
    // userevent kurulum
    const user = userEvent.setup();

    // component'ı renderla
    const { store } = renderWithProvider(<CartItem item={product} />, {
      s: { cart: { isOpen: true, cart: [product] } },
    });

    // sil butonunu al
    const button = screen.getByRole("button", { name: "Ürünü sil" });

    // butona tıkla
    await user.click(button);

    // ürün sepetten kaldırıldı mı
    const cartItems = store.getState().cart.cart;
    expect(cartItems).toHaveLength(0);
  });

  it("Arttır butonuna tıklanınca ürünün adedi artar", async () => {
    // userevent kurulum
    const user = userEvent.setup();

    // component'ı renderla
    const { store } = renderWithProvider(<CartItem item={product} />, {
      s: { cart: { isOpen: true, cart: [product] } },
    });

    // + butonunu al
    const incButton = screen.getByRole("button", { name: "+" });

    // + butonuna tıkla
    await user.click(incButton);

    // store'un son değerini al
    const cart = store.getState().cart.cart;

    // ürünün miktarı 2'den 3'e çıktı mı kontrol et
    expect(cart[0].quantity).toBe(3);
  });

  it("Azalt butonuna tıklanınca ürünün adedi azalır", async () => {
    // userevent kurulum
    const user = userEvent.setup();

    // component'ı renderla
    const { store } = renderWithProvider(<CartItem item={product} />, {
      s: { cart: { isOpen: true, cart: [product] } },
    });

    // - butonuna al
    const decButton = screen.getByRole("button", { name: "-" });

    // - butonuna tıkla
    await user.click(decButton);

    // store'un son değerini al
    const cart = store.getState().cart.cart;

    // ürünün miktarı 2'den 1'e düştü mü kontrol et
    expect(cart[0].quantity).toBe(1);
  });
});
