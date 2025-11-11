import { Link } from "react-router-dom";

const Card = ({ video }) => {
  const thumbnail = video?.thumbnail?.at(-1);

  // dikey card
  return (
    <Link to={`/watch?v=${video.videoId}`} className="group block">
      {/* Thumbnail */}
      <div className="relative rounded-xl overflow-hidden mb-3 w-full aspect-video">
        <img src={thumbnail.url} className="size-full object-cover group-hover:scale-105 transition" />

        {video.lengthText && (
          <span className="absolute bottom-1 right-1 bg-black/80 text-xs px-2 py-0.5 rounded">{video.lengthText}</span>
        )}

        {video.isLive && (
          <span className="absolute bottom-1 right-1 bg-red-600 text-white text-xs px-2 py-0.5 rounded">CANLI</span>
        )}
      </div>

      {/* Video Bilgileri */}
      <div className="flex gap-3">
        <img src={video.channelThumbnail?.[0]?.url} className="size-14 rounded-full" />

        <div className="flex-1">
          <h3 className="line-clamp-2 leading-tight text-lg">{video.title}</h3>

          <p className="text-sm text-[#aaaaa] hover:text-white cursor-pointer transition mb-1">{video.channelTitle}</p>

          <div className="flex items-center gap-1 text-sm text-[#aaaaaa]">
            <span className="line-clamp-1">{video?.viewCountText}</span>
            {video.publishedTimeText && (
              <>
                <span>*</span>
                <span className="line-clamp-1">{video.publishedTimeText}</span>
              </>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
