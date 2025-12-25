import { toast } from "react-toastify";
import Modal from ".";
import { db } from "../../firebase";
import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import uploadFile from "../../firebase/upload";
import Loader from "../loader";
import deleteFromStorage from "../../firebase/delete-from-storage";

const EditModal = ({ isOpen, close, tweet }) => {
  const [loading, setLoading] = useState(false);
  const [isMediaDeleting, setIsMediaDeleting] = useState(false);

  // form gönderilince
  const handleSubmit = async (e) => {
    e.preventDefault();

    // inputtan veriyi al
    const text = e.target.text.value.trim();
    const file = e.target.media?.files[0];
    const fileType = file?.type?.split("/")?.[0];

    // veri boşsa hata ver
    if (!text && !file && !tweet.content.media && isMediaDeleting) return toast.warning("İçerik boş olamaz");

    try {
      setLoading(true);

      // güncellenicek veriyi hazırla
      let updateData = {
        "content.text": text,
        isEdited: true,
      };

      // medya silinicek güncelleme verisini değiştir
      if (isMediaDeleting) {
        updateData["content.media"] = null;
        updateData["content.mediaType"] = null;

        // eski medyayı storage'dan sil
        await deleteFromStorage(tweet.media);
      }

      // eğer yeni dosya seçildiyse onu storage'u yükle
      if (file) {
        const mediaUrl = await uploadFile(file);
        updateData["content.media"] = mediaUrl;
        updateData["content.mediaType"] = fileType;
      }

      // güncellenceik dökümanın referansını al
      const docRef = doc(db, "tweets", tweet.id);

      // belgeyi güncelle
      await updateDoc(docRef, updateData);

      // modal'ı kapat
      close();
      setIsMediaDeleting(false);
    } catch (error) {
      toast.warning(`Hata: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      close={() => {
        close();
        setIsMediaDeleting(false);
      }}
    >
      <h1 className="text-2xl">Tweet'i Düzenle</h1>

      <form onSubmit={handleSubmit} className="flex flex-col mt-10 min-w-[90%]">
        <label className="text-sm mb-3 text-zinc-400">Metni Değiştir</label>
        <textarea
          name="text"
          defaultValue={tweet.content.text}
          className="resize-y min-h-20 max-h-62.5 bg-black text-secondary border border-zinc-700 rounded-md p-3 outline-none"
        ></textarea>

        <label className="text-sm text-zinc-400 mt-8 mb-3">Medyayı Değiştir</label>
        {tweet.content.media && !isMediaDeleting ? (
          <button onClick={() => setIsMediaDeleting(true)} className="submit-button font-semibold tracking-tight">
            Medyayı Kaldır
          </button>
        ) : (
          <input name="media" type="file" className="border border-zinc-700 p-3 rounded-md" />
        )}

        <div className="flex justify-end mt-10 gap-5">
          <button disabled={loading} type="button">
            Vazgeç
          </button>
          <button disabled={loading} type="submit" className="submit-button tracking-tight font-semibold">
            {loading ? <Loader /> : "Kaydet"}
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default EditModal;
