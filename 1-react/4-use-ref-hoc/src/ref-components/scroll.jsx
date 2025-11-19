import { useRef } from "react";

const Scroll = () => {
  // useRef kurulum
  const topRef = useRef(null);

  // başa dön butonuna tıklanınca çalışır
  const handleScroll = () => {
    // scrollIntoView topRef referansında tutulan eleman ekrana gelene kadar kaydırır
    topRef.current.scrollIntoView();
  };

  return (
    <div>
      <h3>Örnek - 2: DOM Elementlerine Erişim</h3>
      <p>
        <b>Açıklama:</b> sayfanın aşağısısna kaydırmış olan kullnıcıyı yukarı geri göndermek için useRefle yönlendirmek
        istediğimiz elementin referansını alırız
      </p>

      <h3 ref={topRef} className="my-5">
        ⬆️ Sayfanın Başı
      </h3>

      <div className="d-grid gap-5">
        {new Array(10).fill(1).map((item, key) => (
          <div key={key} className="card card-body text-black">
            Kart
          </div>
        ))}
      </div>

      <h3 className="my-5">⬇️ Sayfanın Sonu </h3>

      <div onClick={handleScroll} className="d-flex justify-content-center">
        <button className="btn btn-primary my-5">⬆️ Başa Dön</button>
      </div>
    </div>
  );
};

export default Scroll;
