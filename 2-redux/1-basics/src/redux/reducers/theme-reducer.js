/*
 ! Reducer Fonksiyonu
 * State'i tutan ve yöneten fonksiyon
 * Tutucağı state'in ilk değerini initialState olarak tanımlarız
 
 * Parametre olarak bunları alır:
 * 1) state'in güncel değeri
 * 2) dispatch edile actionu
  
 * Reducer fonksiyonundan return edilen değer, state'in hali olur.
 * Fonksiyon içerisinde gelen aksiyona göre state'in nasıl değişeceğine karar veririz
*/

const initialState = {
  theme: "dark",
  systemTheme: "light",
  fontSize: "21px",
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "X":
      return state;
    case "Y":
      return state;
    case "Z":
      return state;
    default:
      return state;
  }
};

export default themeReducer;
