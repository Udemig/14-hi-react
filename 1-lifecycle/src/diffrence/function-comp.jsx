import { useState, useEffect } from "react";

const FunctionComponent = (props) => {
  const [count, setCount] = useState(0);

  /*
   * useEffect 2 parametre alır
   * Bu parametreleri nasıl gönderdiğimiz useEffectin hangi yaşam döngüsü anını izleyeceğini belirler
   
   * 1. param: çalışıcak fonksiyon
   * 2. param: bağımlılık dizisi (dependecy array)
   */

  // Bileşenin ekrana gelme anını izler (componentDidMount)
  useEffect(() => {
    console.log("Component ekrana geldi");
  }, []);

  // Bileşenin güncellenme anını izle (componentDidUpdate)
  useEffect(() => {
    console.log("count state'i güncellendi", count);
  }, [count]);

  // Bileşenin ekrandan ayrılma anını izle (componentWillUnmount)
  useEffect(() => {
    // return satırı içerisindeki fonksiyon component ayrılınca çalışır
    return () => {
      console.log("component ekrandan gitti");
    };
  }, []);

  // Her anını izle
  useEffect(() => {
    console.log("her render olduğunda çalışır");
  });

  return (
    <div>
      <h1>{props.title}</h1>

      <button onClick={() => setCount(count - 1)}>-</button>
      <b>{count}</b>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};
export default FunctionComponent;
