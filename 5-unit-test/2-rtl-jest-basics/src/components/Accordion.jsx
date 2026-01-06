import { useState } from "react";

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion">
      <div>
        <h3>Unit Test Nedir ?</h3>

        <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? "Gizle" : "Göster"}</button>
      </div>

      <p role="paragraph" className={isOpen ? "show" : "hide"}>
        Unit Test, yazılım geliştirme sürecindeki en temel test türlerinden biridir ve birim test olarak da
        adlandırılır. Bu test türü, yazılımın en küçük işlevsel birimlerini (fonksiyonlar, metodlar, sınıflar vb.) izole
        ederek, her bir birimin beklenen davranışı sergileyip sergilemediğini doğrulamak için kullanılır.
      </p>
    </div>
  );
};

export default Accordion;
