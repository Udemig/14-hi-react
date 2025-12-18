import { toast } from "react-toastify";
import Modal from ".";
import { useRef } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase";

const ResetModal = ({ isOpen, close }) => {
  const emailInputRef = useRef();

  const handleClick = () => {
    // inputtaki mail adresine eriş
    const email = emailInputRef.current.value;

    // mail yazılmadıysa fonksiyonu durdur
    if (!email.trim()) return toast.warning("Lütfen mail adresinizi giriniz");

    // şifre sıfırlama maili gönder
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.info("Mailinize şifre sıfırlama bağlantısı gönderildi");
        close();
      })
      .catch(() => {
        toast.error("Mail gönderildi");
      });
  };

  return (
    <Modal isOpen={isOpen} close={close}>
      <div className="flex flex-col mx-auto gap-3 max-w-87.5 mt-5">
        <h1 className="text-3xl">Şifreni mi unuttun?</h1>
        <p className="text-zinc-400">Email adresine bir şifre sıfırlama bağlantısı gönderilecek</p>

        <input required ref={emailInputRef} type="email" className="input mt-10" placeholder="mailinizi giriniz..." />

        <button
          onClick={handleClick}
          type="button"
          className="bg-white hover:bg-gray-300 transition text-black rounded-full mt-8 py-1"
        >
          Şifre sıfırlama maili gönder
        </button>

        <button
          onClick={close}
          type="button"
          className="bg-zinc-500 hover:bg-zinc-600 text-white rounded-full mt-3 py-1"
        >
          İptal
        </button>
      </div>
    </Modal>
  );
};

export default ResetModal;
