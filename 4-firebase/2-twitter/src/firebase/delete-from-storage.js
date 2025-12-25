import { deleteObject, ref } from "firebase/storage";
import { storage } from ".";
import { toast } from "react-toastify";

const deleteFromStorage = async (mediaUrl) => {
  if (!mediaUrl) return null;

  // storage'a kaydedilen dosyanın url'i:
  // https://firebasestorage.googleapis.com/v0/b/hi-twitter-44552.firebasestorage.app/o/[DOSYA_YOLU]?alt=media&token=4e3b63eb-72be-4717-94a1-839f113dd5cb

  try {
    // urldeki karakter kodlarını normale çevir %2f ==> / |  %20   ==>   " "
    const normalUrl = decodeURIComponent(mediaUrl);

    // url'den dosya yolunu çıkar
    const startIndex = normalUrl.indexOf("/o/") + 3;
    const endIndex = normalUrl.indexOf("?");
    const extractedPath = normalUrl.slice(startIndex, endIndex);

    // silinecek dosyanın referansını al
    const fileRef = ref(storage, extractedPath);

    // medyayı sil
    await deleteObject(fileRef);
  } catch (err) {
    toast.error("Bir hata oluştu");
  }
};

export default deleteFromStorage;
