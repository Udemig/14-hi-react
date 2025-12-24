import { toast } from "react-toastify";
import FormActions from "./form-actions";
import TextArea from "./text-area";
import UserAvatar from "./user-avatar";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";
import { useRef, useState } from "react";
import Preview from "./preview";
import uploadFile from "../../firebase/upload";

const PostForm = ({ user }) => {
  const [loading, setLoading] = useState(false);
  const [previewType, setPreviewType] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const fileInputRef = useRef();

  // form gönnderilince
  const handleSubmit = async (e) => {
    e.preventDefault();

    // inputlardaki verileri al
    const text = e.target.content.value.trim();
    const file = e.target.media.files[0];

    // girdi yoksa bildirim gönder
    if (!text && !file) return toast.warning("Lütfen içeriği giriniz");

    // veritabanına yeni tweeti kaydet
    try {
      setLoading(true);

      // medyayı storage'a yükle
      const mediaUrl = await uploadFile(file);

      // kolleksiyonun referansını al
      const collectionRef = collection(db, "tweets");

      // belgeyi kolleksiyone ekle
      await addDoc(collectionRef, {
        user: {
          id: user.uid,
          name: user.displayName,
          photo: user.photoURL,
        },
        content: {
          text,
          media: mediaUrl,
          mediaType: previewType,
        },
        isEdited: false,
        likes: [],
        createdAt: serverTimestamp(),
      });

      // bildirim gönder ve sıfırla
      toast.success("Gönderi paylaşıldı");
      handleCancelPrewiew();
      e.target.reset();
    } catch (error) {
      console.log("HATAAA", error);
      toast.error("Hata! " + error.message);
    } finally {
      setLoading(false);
    }
  };

  // dosya inputundan yeni dosya seçilince çalışır
  const handleMediaChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      // inputtan seçilen dosyaya eriş
      const file = e.target.files[0];

      // seçilen dosyaya erişmemizi sağlayacak url oluştur
      setPreviewUrl(URL.createObjectURL(file));

      // destekelenen dosya tiplerini belirledik
      if (file.type.startsWith("image")) {
        setPreviewType("image");
      } else if (file.type.startsWith("video")) {
        setPreviewType("video");
      } else if (file.type.startsWith("audio")) {
        setPreviewType("audio");
      } else {
        setPreviewType("not-supported");
        setPreviewUrl(null);
      }
    }
  };

  // önizlemeyi iptal eden fonkisoyn
  const handleCancelPrewiew = () => {
    setPreviewUrl(null);
    setPreviewType(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };

  return (
    <div className="border-b border-tw-gray p-4 flex gap-5">
      <UserAvatar photo={user.photoURL} name={user.displayName} />

      <form onSubmit={handleSubmit} className="w-full pt-1">
        <TextArea />

        <Preview loading={loading} url={previewUrl} type={previewType} cancel={handleCancelPrewiew} />

        <FormActions loading={loading} fileInputRef={fileInputRef} handleMediaChange={handleMediaChange} />
      </form>
    </div>
  );
};

export default PostForm;
