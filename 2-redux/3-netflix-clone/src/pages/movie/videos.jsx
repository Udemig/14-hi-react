import { Splide, SplideSlide } from "@splidejs/react-splide";
import ReactPlayer from "react-player";

const Videos = ({ videoData }) => {
  const show = videoData && videoData.length > 0;

  if (!show) return <div className="text-center my-10">Videolar henüz mevcut değil</div>;

  return (
    <div className="mb-10">
      <h2 className="font-semibold text-lg md:text-xl my-5">Videolar</h2>

      <Splide options={{ pagination: false }}>
        {videoData.map((video) => (
          <SplideSlide>
            <ReactPlayer src={`https://www.youtube.com/watch?v=${video.key}`} width="100%" height="500px" controls />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Videos;
