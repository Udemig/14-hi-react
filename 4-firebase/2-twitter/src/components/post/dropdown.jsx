import { useEffect, useRef, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { MdEdit, MdDelete } from "react-icons/md";
import { doc, deleteDoc } from "firebase/firestore";
import { db, auth } from "../../firebase";
import EditModal from "../modal/edit-modal";

const Dropdown = ({ tweet }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dropdownRef = useRef();

  // tweet'i gönderen kişi ile şuan oturumu açık olan kişi aynı mı?
  const isOwn = tweet.user.id === auth.currentUser.uid;

  // modal'ın dışarısına tıklanınca kapat
  useEffect(() => {
    // Dropdown dışarısında bir yere tıklanınca modalı kapat
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    // body'deki tıklanma olaylarını izle
    document.body.addEventListener("click", handleClick);

    // component ekrandan ayrılınca olay izleyecisini kaldır
    return () => document.addEventListener("click", handleClick);
  }, []);

  // silme butonuna tıklanınca
  const handleDelete = async () => {
    if (!confirm("Silmek istediğinizden emin misiniz?")) return;

    const docRef = doc(db, "tweets", tweet.id);

    await deleteDoc(docRef);
  };

  if (!isOwn) return;

  return (
    <>
      <div ref={dropdownRef} className="relative">
        <button onClick={() => setIsOpen(!isOpen)}>
          <BsThreeDots className="text-zinc-400" />
        </button>

        {isOpen && (
          <div className="absolute bg-zinc-700/50 -end-1 rounded-lg z-99 backdrop-blur-md shadow-lg">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-5 px-4 py-2 border-b border-zinc-500"
            >
              <MdEdit /> <span className="text-sm">Düzenle</span>
            </button>
            <button onClick={handleDelete} className="flex items-center gap-5 px-4 py-2">
              <MdDelete /> <span className="text-sm">Sil</span>
            </button>
          </div>
        )}
      </div>

      <EditModal isOpen={isModalOpen} close={() => setIsModalOpen(false)} tweet={tweet} />
    </>
  );
};

export default Dropdown;
