import { fireEvent, render, screen } from "@testing-library/react";
import Accordion from "../components/Accordion";

it("accordion component'ı düzgün çalışır", () => {
  // 1) test edilecek component render edlir
  render(<Accordion />);

  // 2) gerekli elementleri al (button,p)
  const button = screen.getByRole("button");
  const paragraph = screen.getByRole("paragraph");

  // 3) butonda göster yazıyor mu kontrol et
  expect(button).toHaveTextContent("Göster");

  // 4) paragraf elementinde "hide" class'ı var mı control et
  expect(paragraph).toHaveClass("hide");

  // 5) butona tıkla
  fireEvent.click(button);

  // 6) butonda gizle yazıyor mu kontrol et
  expect(button).toHaveTextContent("Gizle");

  // 7) paragraf elementine "show" class'ı var mı kontrol et
  expect(paragraph).toHaveClass("show");

  // 8) butona tıkla
  fireEvent.click(button);

  // 9) butonda göster yazıyor mu kontrol et
  expect(button).toHaveTextContent("Göster");

  // 10) paragraf elementinde "hide" class'ı var mı control et
  expect(paragraph).toHaveClass("hide");
});
