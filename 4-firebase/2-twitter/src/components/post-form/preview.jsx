import { IoMdClose } from "react-icons/io";

const Preview = ({ url, type, cancel }) => {
  if (!type && !url) return null;

  return (
    <div className="relative mb-5">
      <button
        type="button"
        onClick={cancel}
        className="absolute top-3 cursor-pointer end-3 text-2xl p-1 hover:bg-zinc-700 transition bg-primary/90 rounded-lg z-999"
      >
        <IoMdClose />
      </button>

      {type === "not-supported" && (
        <div className="pt-5">
          <p className="text-red-500">Dosya Tipi desteklenmiyor</p>
        </div>
      )}

      {type === "image" && <img src={url} alt="preview" className="rounded-xl" />}

      {type === "video" && <video src={url} className="rounded-xl w-full" controls />}

      {type === "audio" && <audio src={url} className="w-full mt-4" controls />}
    </div>
  );
};

export default Preview;
