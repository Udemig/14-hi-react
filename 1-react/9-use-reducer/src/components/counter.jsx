import { useReducer } from "react";
import CounterReducer from "../reducers/counter-reducer";

const Counter = () => {
  /*
   * useReducer hook'U parametre olarak iki değer alır
   * 1) reducer fonksiyon
   * * state'in nasıl değişiceğine karar veren fonksiyon
   * 2) initial state
   * * state'in başlangıç değeri
   
   * useReducer'ı çağırdığımızda bir dizi içerisinde iki değer döner
   * 1) state'in güncel değeri
   * 2) action'ı reducer'a aktarmaya yarayan fonksiyon 
   */
  const [state, dispatch] = useReducer(CounterReducer, 0);

  return (
    <div>
      <h1>{state}</h1>

      <div>
        <button onClick={() => dispatch({ type: "ARTTIR" })}>Arttır</button>
        <button onClick={() => dispatch({ type: "AZALT" })}>Azalt</button>
        <button onClick={() => dispatch({ type: "SIFIRLA" })}>Sıfırla</button>
      </div>
    </div>
  );
};

export default Counter;
