import { type ChangeEvent, type FC } from "react";
import { SORT_OPTIONS } from "../../constants";
import { useGetPlaces } from "../../services/hooks";
import { useSearchParams } from "react-router-dom";

const Filter: FC = () => {
  // searchParams kurulum
  const [searchParams, setSearchParams] = useSearchParams();

  // api'dan verileri al
  const { data } = useGetPlaces();

  // konaklama alanının şehirlerinden oluşan dizi (benzersiz)
  const locations = [...new Set(data?.map((i) => i.location))];

  // input/select alanından seçilen değeri url'e parametre olarak ekle
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    searchParams.set(name, value);

    setSearchParams(searchParams);
  };

  // url'deki parametreleri temize
  const handleClear = () => {
    setSearchParams({});
  };

  return (
    <form className="flex flex-col gap-5 lg:gap-8 lg:mt-15 lg:sticky lg:top-24 bg-white p-6 rounded-xl shadow-lg border border-zinc-100">
      <h2 className="text-xl font-bold text-zinc-800 pb-3 border-b border-zinc-200">Filtrele</h2>

      <div className="field">
        <label className="font-semibold text-zinc-700 text-sm">Nereye gitmek istiyorsunuz?</label>

        <select className="input" name="location" onChange={handleChange}>
          <option>Seçiniz</option>
          {locations.map((i, key) => (
            <option value={i} key={key} selected={i == searchParams.get("location")}>
              {i}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label className="font-semibold text-zinc-700 text-sm">Konaklama noktası adı?</label>

        <input
          type="text"
          placeholder="örn: Seaside Villa"
          className="input"
          name="title"
          onChange={handleChange}
          defaultValue={searchParams.get("title")!}
        />
      </div>

      <div className="field">
        <label className="font-semibold text-zinc-700 text-sm">Sıralama ölçütü?</label>

        <select className="input" name="order" onChange={handleChange}>
          <option value="">Seçiniz</option>
          {SORT_OPTIONS.map((i, key) => (
            <option value={i.value} key={key} selected={i.value === searchParams.get("order")}>
              {i.label}
            </option>
          ))}
        </select>
      </div>

      <button onClick={handleClear} type="reset" className="btn-primary mt-2">
        Filtreleri Temizle
      </button>
    </form>
  );
};

export default Filter;
