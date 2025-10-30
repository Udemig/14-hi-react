import { useSearchParams } from "react-router-dom";

const Form = () => {
  // useSearchParams kurulum
  // fonksiyonu çağırınca dizi içerisinde 2 eleman döner
  // 1) url'deki arama parametrelerine erişme ve yönetmeye yarayan nesne
  // 2) url'i güncelleyen fonksiyon
  const [searchParams, setSearhParams] = useSearchParams();

  // form gönderilince çalışır
  const handleSubmit = (e) => {
    e.preventDefault();

    // inputta yazılan yazıya eriş
    const text = e.target[0].value;

    // searchParams nesneine text'i ekle
    searchParams.set("arama_terimi", text);

    // searchParams nesnesini url'e aktar
    setSearhParams(searchParams);
  };

  return (
    <div className="card border-0 shadow-md my-4">
      <form onSubmit={handleSubmit} className="card-body row align-items-center">
        <div className="input-group">
          {/* Aratılan kelimenin sayfa yenilenince kaybolmaması için url'deki parametreyi inputa varsayılan değer olarak verdik */}
          <input
            defaultValue={searchParams.get("arama_terimi")}
            type="text"
            className="form-control"
            placeholder="kitap ara..."
          />
          <button type="submit">Ara</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
