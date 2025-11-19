import { createContext, useContext, useEffect, useState } from "react";

// Context
const ThemeContext = createContext();

// Sağlayıcı - HOC
export const ThemeProvider = ({ children }) => {
  // tema state'i
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // localstorage'a kaydedilmiş bir tema varsa onu kullan
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }

    // tarayıcının tema tercihine erişmemizi sağlar
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // temayı değiştiricek fonksiyon
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  // tema değişince arayüzü güncelle
  useEffect(() => {
    const root = window.document.documentElement;

    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>{children}</ThemeContext.Provider>;
};

// Context yapısına abone olmamızı sağlayan Custom Hook
export const useTheme = () => {
  const value = useContext(ThemeContext);
  return value;
};
