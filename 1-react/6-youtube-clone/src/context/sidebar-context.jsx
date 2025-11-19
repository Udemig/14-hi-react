import { createContext, useContext, useState } from "react";

// Context sağlayıcısının kurulumu
export const SidebarContext = createContext();

// Sağlayıcı componentını tanımla (hoc)
export const SidebarProvider = ({ children }) => {
  // navbar kapalı mı state'i
  const [isCollapsed, setIsCollapsed] = useState(true);

  // navbarı aç/kapa fonksiyonu
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  // componentlara sağlanacak verileri tanımla
  return (
    <SidebarContext.Provider
      value={{ isCollapsed, toggleSidebar }} //
    >
      {children}
    </SidebarContext.Provider>
  );
};

// custom hook: kendi hookumuzu yazma
export const useSidebar = () => {
  const context = useContext(SidebarContext);
  return context;
};
