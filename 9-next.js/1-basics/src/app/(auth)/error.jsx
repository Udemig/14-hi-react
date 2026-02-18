"use client";

// Error component'ı 2 prop alır
// 1) hata detaylarını içeren error nesnesi
// 2) component'ı yeniden renderlayan fonksiyon
const Error = ({ error, reset }) => {
  return (
    <div className="text-center space-y-5">
      <h1 className="text-xl">Üzgünüz bir hata oluştu</h1>

      <p className="text-red-500 text-lg">{error.message}</p>

      <button onClick={reset} className="text-lg border p-2 rounded-md">
        Tekrar Dene
      </button>
    </div>
  );
};

export default Error;
