import { render, screen } from "@testing-library/react";
import Item from "../pages/home/item";

// Normal şartlarda bir bileşeni kullanırken hangi proplarI gönderiyorsak normalde gönderdiğimiz değerlere benzer proplar gönderiririz
test("Gönderilen proplarda doğru şekilde kullanılır", () => {
  // test edilecek bileşeni renderla
  render(<Item color="text-red-500" label="Toplam Test" value="890M" />);

  // gerekli elementleri çağır
  const icon = screen.getByRole("svg");
  const span = screen.getByText("Toplam Test"); // yazıyı kontrol ettik
  const h2 = screen.getByRole("heading");

  // color propu ile gönderdiğimiz değer icon'ın class'ında var mı kontrol et
  expect(icon).toHaveClass("text-red-500");

  // value propu ile gönderdiğimiz değer h2 içerisinde yazılı mı kontrol et
  expect(h2).toHaveTextContent("890M");
});
