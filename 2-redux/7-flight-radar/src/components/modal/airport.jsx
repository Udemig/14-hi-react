import c from "../../utils/null-check";

const Airport = ({ airportData }) => {
  console.log(airportData);
  return (
    <div>
      <div>
        <h2>{c(airportData.origin?.code?.iata)}</h2>
        <h3>{c(airportData.origin?.position?.region?.city)}</h3>
        <span>
          {c(airportData.origin?.timezone?.abbr)}
          <br />
          {c(airportData.origin?.timezone?.name)}
        </span>
      </div>

      <div>
        <h2>{c(airportData.destination?.code?.iata)}</h2>
        <h3>{c(airportData.destination?.position?.region?.city)}</h3>
        <span>
          {c(airportData.destination?.timezone?.abbr)}
          <br />
          {c(airportData.destination?.timezone?.name)}
        </span>
      </div>
    </div>
  );
};

export default Airport;
