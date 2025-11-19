import { millify } from "millify";
import { useState } from "react";

const Description = ({ video }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-dark mt-4 p-2 cursor-pointer hover:bg-dark/80 transition rounded-md overflow-hidden">
      <div className="flex gap-4 mb-2 font-semibold">
        <p>{millify(video.viewCount)} görüntülenme</p>
        <p>{video.publishedAt}</p>
      </div>

      <p onClick={() => setIsOpen(!isOpen)} className="whitespace-pre-wrap">
        {isOpen ? video.description : video.description.slice(0, 100) + "...daha fazla"}
      </p>
    </div>
  );
};

export default Description;
