import { useState, useCallback } from "react";
import Display from "./display";

const SecondExa = () => {
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");

  /*
   * Component her render olduğunda bu fonksiyon yeniden oluşur (Bellekte farklı bir referansı oluşur).

   * Bu fonksiyonu prop olarak gönderdiğimiz component React.memo() kullanıyor olsa bile her render sırasında farklı referans değerine sahip bir fonksiyon gönderdiğimiz için react.memo() bunları farklı fonksiyonlar sanıp görevini yapamıyordu.
   
   * Yapmamız gereken her render sıarında fonksiyonun yeniden oluşmasını engelle
   */
  const increase = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <h1>React.memo()</h1>

      <Display count={count} increase={increase} />
      <button onClick={increase}>Arttır</button>

      <br />
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <h2>İsminiz: {name}</h2>
    </div>
  );
};

export default SecondExa;
