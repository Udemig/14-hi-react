import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const ListTanstack = () => {
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["quotes"],
    queryFn: () => axios.get("https://dummyjson.com/quotes123"),
    retry: 0,
  });

  if (isLoading) return <h1>Yükleniyor</h1>;

  if (error)
    return (
      <h1>
        <span>{error.message}</span>
        <button onClick={refetch}>Tekrar Dene</button>
      </h1>
    );

  return (
    <div>
      {data.data.quotes.map((i) => (
        <div>
          {i.quote} <hr />
        </div>
      ))}
    </div>
  );
};

export default ListTanstack;
