import { useDispatch, useSelector } from "react-redux";
import Head from "./head";
import Loader from "../loader";
import Error from "../error";
import Gallery from "./gallery";
import Airport from "./airport";
import Time from "./time";
import Aircraft from "./aircraft";
import { useEffect } from "react";
import { getDetails } from "../../redux/actions";

const Modal = () => {
  const dispatch = useDispatch();
  const { isLoading, error, info, flightId } = useSelector((store) => store.detail);

  console.log(info);

  useEffect(() => {
    if (!flightId) return;

    dispatch(getDetails(flightId));
  }, [flightId]);

  if (!flightId) return;

  return (
    <div className="detail-modal">
      <div className="modal-inner">
        <Head isLoading={isLoading} error={error} info={info} />

        {isLoading ? (
          <Loader />
        ) : error ? (
          <Error message={error} />
        ) : (
          info && (
            <div className="info-wrapper">
              <div className="info-box">
                <Gallery images={info.aircraft.images} />
                <Airport airportData={info.airport} />
                <Time timeData={info.time} />
              </div>

              <Aircraft aircraftData={info.aircraft} />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Modal;
