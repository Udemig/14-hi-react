import { IoImageOutline as Image } from "react-icons/io5";
import { MdOutlineGifBox as Gif } from "react-icons/md";
import { FaRegSmile as Emoji } from "react-icons/fa";
import Loader from "../loader";

const FormActions = ({ fileInputRef, handleMediaChange, loading }) => {
  return (
    <div className="flex justify-between">
      <div className="text-tw-blue text-xl flex gap-4">
        <label htmlFor="file" type="button" className="form-icon">
          <Image />
          <input
            id="file"
            type="file"
            name="media"
            className="hidden"
            ref={fileInputRef}
            onChange={handleMediaChange}
          />
        </label>
        <button type="button" className="form-icon">
          <Gif />
        </button>
        <button type="button" className="form-icon">
          <Emoji />
        </button>
      </div>

      <button disabled={loading} type="submit" className="submit-button">
        {loading ? <Loader /> : "Gönder"}
      </button>
    </div>
  );
};

export default FormActions;
