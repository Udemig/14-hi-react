import { useState } from "react";

const ColorButton = () => {
  const [isRed, setIsRed] = useState(true);

  return (
    <button
      className="btn"
      style={{ background: isRed ? "red" : "aqua" }} //
      onClick={() => setIsRed(!isRed)}
    >
      {isRed ? "Maviye Çevir" : "Kırmızıya Çevir"}
    </button>
  );
};

export default ColorButton;
