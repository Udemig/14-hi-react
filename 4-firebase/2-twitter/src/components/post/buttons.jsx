import { FaHeart, FaRegComment, FaRegHeart } from "react-icons/fa";
import { db, auth } from "../../firebase";
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { FaRetweet } from "react-icons/fa6";
import { RiShare2Line } from "react-icons/ri";

const Buttons = ({ tweet }) => {
  // aktif kullanıcı tweet'i likeladı mı?
  const isLiked = tweet.likes.includes(auth.currentUser.uid);

  // like butonuna tıklanınca çalışır
  const toggleLike = async () => {
    // güncellenicek dökümanın referansını al
    const docRef = doc(db, "tweets", tweet.id);

    // like'ladıysa: oturumu açık olan kullanıcının id'sini diziye ekle
    // like'lamadıysa: oturumu açık olan kullanıcının id'sini diziden kaldır
    await updateDoc(docRef, {
      likes: isLiked
        ? arrayRemove(auth.currentUser.uid) //
        : arrayUnion(auth.currentUser.uid),
    });
  };

  return (
    <div className="flex justify-between items-center">
      <button className="post-icon hover:text-blue-400 hover:bg-blue-400/20">
        <FaRegComment className="size-3.5" />
      </button>

      <button className="post-icon hover:text-green-400 hover:bg-green-400/20">
        <FaRetweet className="size-4" />
      </button>

      <button
        onClick={toggleLike}
        className={`post-icon hover:text-pink-400 hover:bg-pink-400/20 relative pe-7 ${isLiked && "text-pink-500"}`}
      >
        {isLiked ? <FaHeart className="size-3.5" /> : <FaRegHeart className="size-3.5" />}

        <span className="absolute end-2.5 top-2.5 w-3 text-sm">{tweet.likes.length}</span>
      </button>

      <button className="post-icon hover:text-blue-400 hover:bg-blue-400/20">
        <RiShare2Line className="size-4" />
      </button>
    </div>
  );
};

export default Buttons;
