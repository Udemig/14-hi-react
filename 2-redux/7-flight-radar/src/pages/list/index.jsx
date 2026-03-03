import { useDispatch, useSelector } from "react-redux";
import Error from "../../components/error";
import c from "../../utils/null-check";
import { open } from "../../redux/slices/detailSlice";
import ReactPaginate from "react-paginate";
import { useState } from "react";

const COLUMNS = ["ID", "Kod", "Enlem", "Boylam", "Derece", "Hız", "İrtifa", ""];

const List = () => {
  const dispatch = useDispatch();
  const { isLoading, error, flights } = useSelector((store) => store.flight);

  const [start, setStart] = useState(0);
  const limit = 12;
  const end = start + limit;
  const currentFlights = flights.slice(start, end);

  const handleChange = (e) => {
    setStart(e.selected * limit);
  };

  if (error) return <Error message={error} />;

  return (
    <div className="min-h-[calc(100vh-70px)] bg-linear-to-br from-[#f5f7fa] to-[#e8ecf1] p-7 flex flex-col gap-6">
      {/* Başlık */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#213547] m-0">Uçuş Listesi</h1>
          <p className="text-sm text-[#213547]/60 mt-1 mb-0">
            {isLoading ? "Yükleniyor..." : `Toplam ${flights.length} uçuş`}
          </p>
        </div>
        <div className="bg-linear-to-r from-primary to-primary-light text-white text-sm font-semibold px-4 py-2 rounded-xl shadow-md shadow-primary/30">
          {isLoading ? "—" : flights.length} uçuş
        </div>
      </div>

      {/* Tablo */}
      <div className="overflow-x-auto rounded-2xl shadow-lg shadow-black/10">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-linear-to-r from-primary to-primary-dark text-white">
              {COLUMNS.map((col, i) => (
                <th
                  key={i}
                  className="px-4 py-4 text-left text-xs font-bold uppercase tracking-wider whitespace-nowrap first:rounded-tl-2xl last:rounded-tr-2xl"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-black/5">
            {isLoading
              ? new Array(12).fill("").map((_, key) => (
                  <tr key={key} className="animate-pulse">
                    {COLUMNS.map((_, i) => (
                      <td key={i} className="px-4 py-3">
                        <div className="h-4 bg-gray-200 rounded w-20" />
                      </td>
                    ))}
                  </tr>
                ))
              : currentFlights.map((flight) => (
                  <tr
                    key={flight.flightId}
                    className="whitespace-nowrap transition-all duration-200 hover:bg-primary/5 hover:scale-[1.005] hover:shadow-sm"
                  >
                    <td className="px-4 py-3 text-sm text-[#213547]/60 font-mono">{c(flight.flightId)}</td>
                    <td className="px-4 py-3 text-sm font-semibold text-[#213547]">{c(flight.callsign)}</td>
                    <td className="px-4 py-3 text-sm text-[#213547]/80">{c(flight.lat)}</td>
                    <td className="px-4 py-3 text-sm text-[#213547]/80">{c(flight.lon)}</td>
                    <td className="px-4 py-3 text-sm text-[#213547]/80">{c(flight.direction)}°</td>
                    <td className="px-4 py-3 text-sm text-[#213547]/80">{c(flight.speed)} kt</td>
                    <td className="px-4 py-3 text-sm text-[#213547]/80">{c(flight.altitude)} ft</td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => dispatch(open(flight.flightId))}
                        className="px-3 py-1.5 text-xs font-semibold text-primary bg-primary/10 border border-primary/25 rounded-lg hover:bg-primary/20 hover:-translate-y-0.5 hover:shadow-md hover:shadow-primary/20 transition-all duration-200 cursor-pointer"
                      >
                        Detay
                      </button>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-2">
        <ReactPaginate
          breakLabel="..."
          nextLabel="›"
          previousLabel="‹"
          onPageChange={handleChange}
          pageRangeDisplayed={3}
          pageCount={Math.ceil(flights.length / limit)}
          renderOnZeroPageCount={null}
          className="pagination"
          pageClassName="page-item"
          previousClassName="page-item"
          nextClassName="page-item"
          pageLinkClassName="page-link"
          previousLinkClassName="page-link"
          nextLinkClassName="page-link"
          activeClassName="active"
          disabledClassName="disabled"
        />
      </div>
    </div>
  );
};

export default List;
