import { render, screen } from "@testing-library/react";
import Cart from "../components/Cart";
import { renderWithProvider } from "../utils";
import userEvent from "@testing-library/user-event";
import { mockCart } from "../utils/constants";

describe("Cart Bileşeni", () => {
  it("isOpen propu false ise gizlidir", () => {
    // isOpen false iken render et
    renderWithProvider(<Cart />, { s: { cart: { isOpen: false, cart: [] } } });

    // cart elementini al
    const cartElement = screen.getByRole("dialog");

    // cart elementi gizli mi kontrol et
    expect(cartElement).toHaveClass("invisible");
  });

  it("isOpen propu true ise görünür", () => {
    // isOpen false iken render et
    renderWithProvider(<Cart />, { s: { cart: { isOpen: true, cart: [] } } });

    // cart elementini al
    const cartElement = screen.getByRole("dialog");

    // cart elementi gizli mi kontrol et
    expect(cartElement).toHaveClass("visible");
  });

  it("X butonuna tıklanınca sepeti kapatır", async () => {
    // userEvent kurulum
    const user = userEvent.setup();

    // componentı render et
    const { store } = renderWithProvider(<Cart />, { s: { cart: { isOpen: true, cart: [] } } });

    // X butonunu al
    const closeBtn = screen.getByRole("button", { name: "close" });

    // X butonuna tıkla
    await user.click(closeBtn);

    // store'daki isOpen değerini kontrol et
    const isOpen = store.getState().cart.isOpen;
    expect(isOpen).toBe(false);
  });

  it("Sepet boşken sepetiniz boş mesajı gösterir", () => {
    // componentı render et
    renderWithProvider(<Cart />, { s: { cart: { isOpen: true, cart: [] } } });

    // ekranda sepetiniz boş mesajını kontrol et
    screen.getByText(/sepetiniz boş/i);
    screen.getByText("Sepetiniz (0)");
  });

  it("Sepette ürün varken ürünleri listeler", () => {
    // componentı render et
    renderWithProvider(<Cart />, { s: { cart: { isOpen: true, cart: mockCart } } });

    // ürün miktarı doğru mu kontrol et
    screen.getByText(`Sepetiniz (${mockCart.length})`);

    // sepetteki her bir ürünün ismi ekranda mı kontrol et
    mockCart.forEach((item) => {
      screen.getByText(item.name);
    });

    // toplam fiyat doğru mu kontrol et
    const totalPrice = mockCart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    // toplam fiyatı ekranda kontrol et
    screen.getByText(`₺${totalPrice.toFixed(2)}`);
  });

  it("Sipariş ver butonuna tıklanınca sepeti temizler ve kapatır", async () => {
    // userEvent kurulum
    const user = userEvent.setup();

    // componentı render et
    const { store } = renderWithProvider(<Cart />, { s: { cart: { isOpen: true, cart: mockCart } } });

    // Sipariş ver butonunu al
    const orderBtn = screen.getByRole("button", { name: /siparişi tamamla/i });

    // Sipariş ver butonuna tıkla
    await user.click(orderBtn);

    // store'daki son state'i al
    const state = store.getState().cart;

    // store'daki isOpen değerinin false olduğunu kontrol et
    expect(state.isOpen).toBe(false);

    // store'daki cart dizisinin boş olduğunu kontrol et
    expect(state.cart).toHaveLength(0);
  });
});
