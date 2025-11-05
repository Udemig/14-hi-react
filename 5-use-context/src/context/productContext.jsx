import { createContext, useEffect, useState } from "react";
import axios from "axios";

/*
 * Context API | useContext
 * Uygulamada birden çok bileşenin ihtiyacı olan verileri bileşenlerden tamamen bağımsız merkezlerde yönetmeye yarar.
  
 * Context yapısı içerisinde verilerin state'Lerini ve verileri değiştirmeye yarayan fonksiyonları tutarız.
  
 * Context, tuttuğumuz state'leri bileşenlere doğrudan aktarım yapabilen state yönetim aracıdır.
 */

//! Context yapısının temelini oluşturma
export const ProductContext = createContext();

//! Context sağlayıcı component'ını oluşturma (HOC)
export const ProductProvider = ({ children }) => {
  // context yapısında tutulacak state'leer
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // api'dan ürün verilerini al
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setProducts(res.data.products))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  // value propuyla tanımlanan state'ler provider ile kapsanan bütün componentlar tarafından erişlebilir olur
  return (
    <ProductContext.Provider
      value={{ products, isLoading, error }} //
    >
      {children}
    </ProductContext.Provider>
  );
};
