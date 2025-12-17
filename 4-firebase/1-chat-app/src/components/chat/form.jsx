import { useRef, useState } from "react";
import { db } from "../../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import EmojiPicker from "emoji-picker-react";

const Form = ({ user, room }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("");
  const inputRef = useRef();

  // form gönderilince
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    // mesajın kaydedileceği kolleksiyonun referansını al
    const collectionRef = collection(db, "messages");

    // veritabanındaki messages kolleksiyonuna yeni mesajı kaydet
    await addDoc(collectionRef, {
      text,
      room,
      author: {
        id: user.uid,
        name: user.displayName,
        photo: user.photoURL,
      },
      createdAt: serverTimestamp(),
    });

    // formu sıfırla
    setIsOpen(false);
    setText("");
  };

  // emojiye tıklanınca çalışır
  const handleEmojiClick = (e) => {
    // inputta imleçle yapılan seçimin başladığı nokta
    const start = inputRef.current.selectionStart;

    // inputta imleçle yapılan seçimin bittiği nokta
    const end = inputRef.current.selectionEnd;

    // seçili metnin yerin emojiyi koy
    setText((prev) => prev.slice(0, start) + e.emoji + prev.slice(end));
  };

  return (
    <form onSubmit={handleSubmit} className="p-5 border border-gray-200 shadow-lg flex justify-center gap-3">
      <input
        type="text"
        className="border border-gray-200 shadow-sm p-2 px-3 rounded-md w-1/2"
        placeholder="mesaj giriniz.."
        value={text}
        onChange={(e) => setText(e.target.value)}
        ref={inputRef}
      />

      <div className="relative">
        <div className="absolute -top-117.5 -right-35">
          <EmojiPicker open={isOpen} onEmojiClick={handleEmojiClick} />
        </div>

        <button type="button" className="btn text-base" onClick={() => setIsOpen((prev) => !prev)}>
          😂
        </button>
      </div>

      <button type="submit" className="btn bg-black text-white disabled:brightness-75">
        Gönder
      </button>
    </form>
  );
};

export default Form;
