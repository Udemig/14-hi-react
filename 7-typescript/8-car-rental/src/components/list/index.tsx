import { useEffect, useState, type FC } from "react";
import { fetchCars } from "../../service";
import type { Car } from "../../types";
import Loader from "../loader";
import Error from "../error";
import Container from "../container";
import Card from "./card";
import { useSearchParams } from "react-router-dom";

const List: FC = () => {
  const [searchParams] = useSearchParams();
  const [cars, setCars] = useState<Car[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // url'deki arama parametrelerine eirş
  const make: string = searchParams.get("make") || "BMW";
  const model: string = searchParams.get("model") || "";
  const year: string = searchParams.get("year") || "";

  useEffect(() => {
    setLoading(true);

    fetchCars(make, model, year)
      .then((data) => setCars(data.results))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [make, model, year]);

  if (loading)
    return (
      <Container>
        <Loader />
      </Container>
    );

  if (error)
    return (
      <Container>
        <Error message={error} />
      </Container>
    );

  return (
    <div className="padding-x max-width mb-10">
      <div className="home-cars-wrapper">
        {cars?.length === 0 ? (
          <Container>
            <p className="text-center">Aradığınız araç bulunamadı</p>
          </Container>
        ) : (
          cars?.map((car) => <Card key={car.id} car={car} />)
        )}
      </div>
    </div>
  );
};

export default List;
