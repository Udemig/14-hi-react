import delay from "../../../utils/delay";

export const metadata = {
  title: "Giriş Yap",
};

const Login = async () => {
  await delay(2000);
  // throw new Error("Profil bilgileri alınamadı")

  return (
    <div className="page">
      <h1>Login Sayfası</h1>
    </div>
  );
};

export default Login;
