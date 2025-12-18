import EmailInput from "./email-input";
import ForgotPassword from "./forgot-password";
import PasswordInput from "./password-input";
import SubmitButton from "./submit-button";
import AuthToggle from "./auth-toggle";
import { useState } from "react";
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const [isLoginMode, setIsLoginMode] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      if (isLoginMode) {
        // giriş yap
        const res = await signInWithEmailAndPassword(auth, email, password);

        // maili doğrulanmamış ise bildirim
        if (!res.user.emailVerified) {
          return toast.warning("Lütfen e-posta adresinizi gelen mail ile doğrulayın");
        }

        // maili doğrulanmış ise anasayfaya yönlendir
        navigate("/home");
        toast.success("Hesaba giriş yapıldı");
      } else {
        // kayıt ol
        const res = await createUserWithEmailAndPassword(auth, email, password);

        // doğrulama epostası gönder
        await sendEmailVerification(res.user);

        // giriş moduna geç
        setIsLoginMode(true);

        // bildirim gönder
        toast.info("Eposta adresinize doğrulama maili gönderildi ");
      }
    } catch (error) {
      const text =
        error.code === "auth/invalid-credential"
          ? "Giriş bilgileriniz hatalı"
          : error.code === "auth/email-already-in-use"
          ? "Bu e-posta adresi zaten kullanımda"
          : error.code;

      toast.error(text);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <EmailInput />

      <PasswordInput />

      <ForgotPassword isLoginMode={isLoginMode} />

      <SubmitButton isLoginMode={isLoginMode} />

      <AuthToggle isLoginMode={isLoginMode} setIsLoginMode={setIsLoginMode} />
    </form>
  );
};

export default LoginForm;
