import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../../utils/api";
import Spinner from "../../components/loader/spinner";
import Error from "../../components/error";
import ReactPlayer from "react-player";
import ChannelInfo from "./channel-info";
import Description from "./description";
import Comments from "./comments";
import Card from "../../components/card";

const Detail = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [video, setVideo] = useState(null);

  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");

  const relatedVideos = video?.relatedVideos.data.filter((i) => i.type === "video");

  useEffect(() => {
    setLoading(true);

    const params = {
      id,
      extend: "1",
    };

    api
      .get("/video/info", { params })
      .then((res) => setVideo(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Spinner />;

  if (error) return <Error message={error} />;

  return (
    <div className="page flex max-w-[1600px] mx-auto flex-col lg:flex-row gap-6">
      {/* Video Alanı */}
      <div className="flex-1">
        {/* Oynatıcı */}
        <div className="w-full aspect-video overflow-hidden rounded-xl">
          <ReactPlayer src={`https://www.youtube.com/watch?v=${id}`} controls pip={true} width="100%" height="100%" />
        </div>

        {/* Bilgiler */}
        <div className="space-y-4 mt-4">
          <h1 className="text-xl font-bold line-clamp-2 leading-tight">{video.title}</h1>

          <ChannelInfo video={video} />

          <Description video={video} />

          <Comments videoId={id} />
        </div>
      </div>

      {/* Önerilen Videolar */}
      <div className="lg:w-[400px]">
        <h2 className="text-lg font-semibold mb-4 hidden lg:block">İlgili Videolar</h2>

        <div className="flex flex-col gap-5 @container">
          {relatedVideos.map((video, key) => (
            <Card video={video} key={key} isRow />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Detail;
