import type { FC } from "react";
import { Link, useParams } from "react-router-dom";
import { useGetPlace } from "../../services/hooks";
import Loader from "../../components/loader";
import Error from "../../components/error";
import { ArrowLeft } from "lucide-react";
import Images from "./images";
import Info from "./info";
import DeleteButton from "./delete-button";

const Detail: FC = () => {
  const { id } = useParams();

  const { isLoading, error, data, refetch } = useGetPlace(id);

  return (
    <div>
      <div className="flex mb-5">
        <Link to="/" className="border border-zinc-200 p-2 rounded-md hover:bg-zinc-200">
          <ArrowLeft />
        </Link>
      </div>

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error message={error.message} refetch={refetch} />
      ) : (
        data && (
          <>
            <Images image={data.image_url} />
            <Info place={data} />
            <DeleteButton id={data.id} />
          </>
        )
      )}
    </div>
  );
};

export default Detail;
