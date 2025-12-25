import { render, screen } from "@testing-library/react";
import Counter from "../components/Counter";

it("Sayaç doğru şekilde çalışır", () => {
  // 1) test edeilecek bileşen render edilir
  render(<Counter />);

  // 2) gerekli elementleri al (button,p)
  const incBtn = screen.getByRole("button", { name: "Arttır" });
  const decBtn = screen.getByRole("button", { name: "Azalt" });
  const countP = screen.getByText("0");

  // 3) sayacın değeri 0 mı kontrol et

  // 4) azalt butonu inaktif mi kontrol et

  // 5) arttır butonuna tıkla

  // 6) sayacın değeri 1 mi kontrol et

  // 7) azalt butonu aktif mi kontrol et

  // 8) arttır butonuna tıkla

  // 9) sayacın değeri 2 mi kontrol et

  // 10) azalt butonuna tıkla

  // 11) sayacın değeri 1 mi kontrol et

  // 12) azalt butonuna tıkla

  // 13) sayacın değeri 0 mı kontrol et

  // 14) azalt butonu inaktif mi kontrol et
});
