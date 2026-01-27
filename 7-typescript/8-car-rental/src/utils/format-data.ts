import type { Car } from "../types";

const formatData = (car: Car) => {
  // nesne içerisindeki filtrelemek istediğim alanlar
  const accepted = [
    "make",
    "model",
    "year",
    "fueltype",
    "cylinders",
    "drive",
    "trany",
    "vclass",
    "tcharger",
    "startstop",
    "co2",
    "displ",
    "atvtype",
  ];

  return Object.entries(car).filter(([key]) => accepted.includes(key));
};

export default formatData;
