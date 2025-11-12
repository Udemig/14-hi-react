import { useState, useMemo } from "react";

const FirsExa = () => {
  // bu state her değiştiğinde component yeniden render olur
  const [count, setCount] = useState(1);

  /*
   * Bir react bileşeni her render olduğunda içerisindeki fonksiyon / yapılan hesaplamalar tekrar çalışır.
   * Eğerki bu hesapla kapsamlıysa her render sırasında tekrar tekrar yappılması aşırı bellek / işlemci kullanımlmından dolayı performans sorunlarına yol açar
   * useMemo() hesaplamayı yapar ardından hesaplama sonunu cache'de saklar.
   * Componenet her render olduğunda hesaplamayı baştan yapmak yerine önceki hesaplmanın cache'de tuttuğu cevabı getirir.
    
   * useMemo olmadan            useMemo ile
   * 10m'luk diziyi dön > 5sn   10m'luk diziyi dön > 5sn  
   * 10m'luk diziyi dön > 5sn   10m'luk diziyi dön > 0.1sn
   * 10m'luk diziyi dön > 5sn   10m'luk diziyi dön > 0.1sn
   */

  const formatted = useMemo(() => {
    // örn: bu 10m elemanları bir dizi api'dan gelsin
    const array = new Array(10).fill("Udemig");

    // dizi istediğimiz formatta gelmediği için güncelleyelim
    return array.map((item) => item + " Akademi");
  }, []);

  return (
    <div>
      <h1>useMemo()</h1>

      <h2>{formatted[0]}</h2>

      <button onClick={() => setCount(count - 1)}>-</button>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default FirsExa;
