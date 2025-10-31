import { useEffect, useRef, useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(55);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  // sayacı başlat
  const startTimer = () => {
    // sayaç-çalışıyor-mu state'ini true yap
    setIsRunning(true);

    // her saniye seconds state'ini 1 arttır
    intervalRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  // sayacı durdur
  const stopTimer = () => {
    // sayaç-çalışıyor-mu state'ini false yap
    setIsRunning(false);

    //interval'ı durdur()
    clearInterval(intervalRef.current);
  };

  // sayacı sıfırla
  const clearTimer = () => {
    stopTimer();
    setSeconds(0);
  };

  // component ekrandan ayrılınca sayacı temizle
  useEffect(() => {
    return () => clearTimer();
  }, []);

  return (
    <div>
      <h3>Örnek - 4: Değer Tutma</h3>
      <p>
        <b>Açıklama:</b> Kronometre
      </p>

      <h2 className="my-3">
        <strong>
          {Math.floor(seconds / 60)}:{(seconds % 60).toString().padStart(2, "0")}
        </strong>
      </h2>

      <div>
        <button disabled={isRunning} onClick={startTimer} className="btn btn-primary">
          Başlat
        </button>
        <button onClick={stopTimer} className="btn btn-danger ms-2">
          Durdur
        </button>
        <button onClick={clearTimer} className="btn btn-warning ms-2">
          Sıfırla
        </button>
      </div>
    </div>
  );
};

export default Timer;
