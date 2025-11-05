import { createContext, useState } from "react";

//! context yapısının temeline oluşturma
export const BasketContext = createContext();

//! context yapısının sağlayıcı component'ı oluşturma
export const BasketProvider = ({ children }) => {
  // sepet state'i
  const [basket, setBasket] = useState([]);

  // sepete ürün ekle
  const addToBasket = (newProduct) => {
    // fonksiyona parametre olarak gelen ürün sepete daha önce eklenmiş mi?
    const found = basket.find((i) => i.id === newProduct.id);

    if (found) {
      // eğer ürün sepette varsa: miktarını arttır
      // a) bulunan ürünün miktarını 1 arttır
      const updated = { ...found, amount: found.amount + 1 };

      // b) sepet dizisindeki eski ürün yerine güncellenmiş ürünü ekle
      const updatedBasket = basket.map((item) => (item.id === updated.id ? updated : item));

      // c) sepet state'ini güncelle
      setBasket(updatedBasket);
    } else {
      // eğer ürün sepette yoksa: ürünü sepete ekle
      setBasket([...basket, { ...newProduct, amount: 1 }]);
    }
  };

  // sepetten ürün çıkar
  const removeFromBasket = (productId) => {
    // sepetteki ürünü bul
    const found = basket.find((i) => i.id === productId);

    if (found.amount > 1) {
      // miktarı 1'den fazlaysa: miktarını azalt
      const updated = { ...found, amount: found.amount - 1 };
      const newBasket = basket.map((i) => (i.id === updated.id ? updated : i));
      setBasket(newBasket);
    } else {
      // miktarı 1 ise: sepetten kaldır
      const filtred = basket.filter((i) => i.id !== productId);
      setBasket(filtred);
    }
  };

  // sepeti temizle
  const clearBasket = () => {
    setBasket([]);
  };

  return (
    <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket, clearBasket }}>
      {children}
    </BasketContext.Provider>
  );
};
