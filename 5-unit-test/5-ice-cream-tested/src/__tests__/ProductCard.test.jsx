import { renderWithProvider } from "../utils";
import ProductCard from "../components/ProductCard";
import { mockProducts } from "../utils/constants";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const product = mockProducts[0];

it("Component aldığı propsları doğru şekilde render ediyor", () => {
  renderWithProvider(<ProductCard product={product} />);

  // ürünün ismi, açıklaması ve fiyatı doğru şekilde ekranda mı kontrol et
  screen.getByText(product.name);
  screen.getByText(product.description);
  screen.getByText(`₺${product.price.toFixed(1)}`);

  // Div elementin backgroundImage stili doğru mu kontrol et
  const productImage = screen.getByTestId("product-image");
  expect(productImage).toHaveStyle({ backgroundImage: `url('${product.imageUrl}')` });
});

it("Varsayılan olarak külah seçili geliyor", () => {
  renderWithProvider(<ProductCard product={product} />);

  const coneInput = screen.getByLabelText("Külah");
  const cupInput = screen.getByLabelText("Kase");

  expect(coneInput).toBeChecked();
  expect(cupInput).not.toBeChecked();
});

it("Çeşit tipi değiştirilebilir", async () => {
  // userEvent kurulumu yap
  const user = userEvent.setup();

  // 1) bileşeni render et
  renderWithProvider(<ProductCard product={product} />);

  // 2) kase inputunu test ortamına çağır
  const cupInput = screen.getByLabelText("Kase");

  // 3) külah inputunu test ortamına çağır
  const coneInput = screen.getByLabelText("Külah");

  // 4) kase inputuna tıkla
  await user.click(cupInput);

  // 5) kase inputunun seçili olduğunu doğrula
  expect(cupInput).toBeChecked();
  expect(coneInput).not.toBeChecked();

  // 6) külah inputuna tıkla
  await user.click(coneInput);

  // 7) külah inputunun seçili olduğunu doğrula
  expect(coneInput).toBeChecked();
  expect(cupInput).not.toBeChecked();
});

it("Sepete ekle butonuna tıklandığında ürün sepete ekleniyor", async () => {
  // userEvent kurulumu yap
  const user = userEvent.setup();

  // componentı renderla
  const { store } = renderWithProvider(<ProductCard product={product} />);

  // ekle butonunu al
  const addButton = screen.getByRole("button", { name: /ekle/i });

  // sepete ekle butonuna tıkla
  await user.click(addButton);

  // store'un son durumunu al
  let cartItems = store.getState().cart.cart;

  // sepet dizisinde ürünün olup olmadığını kontrol et
  expect(cartItems).toHaveLength(1);

  // diziye eklenen ürünün doğru şekilde kaydedildiğini kontrol et
  expect(cartItems[0]).toEqual({
    ...product,
    orderType: "cone",
    quantity: 1,
  });

  // bir adet daha sepete ekle
  await user.click(addButton);

  // store'un son durumunu al
  cartItems = store.getState().cart.cart;

  // sepet dizisinde uzunluğun aynı olduğunu kontrol et
  expect(cartItems).toHaveLength(1);

  // ürünün miktarı 2 olmuş olmalı kontrol et
  expect(cartItems[0]).toEqual({
    ...product,
    orderType: "cone",
    quantity: 2,
  });
});

it("Kase seçiliyken sepete ekle butonuna tıklandığında ürün sepete ekleniyor", async () => {
  // userEvent kurulumu yap
  const user = userEvent.setup();

  // componentı renderla
  const { store } = renderWithProvider(<ProductCard product={product} />);

  // kase inputunu al
  const cupInput = screen.getByLabelText("Kase");

  // kase inputuna tıkla
  await user.click(cupInput);

  // sepete ekle butonunu al
  const addButton = screen.getByRole("button", { name: /ekle/i });

  // sepete ekle butonuna tıkla
  await user.click(addButton);

  // store'un son durumunu al
  let cartItems = store.getState().cart.cart;

  // sepet dizisinde ürünün olup olmadığını kontrol et
  expect(cartItems).toHaveLength(1);

  // diziye eklenen ürünün doğru şekilde kaydedildiğini kontrol et
  expect(cartItems[0]).toEqual({
    ...product,
    orderType: "cup",
    quantity: 1,
  });
});
