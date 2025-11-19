import { useDispatch } from "react-redux";
import { v4 } from "uuid";

const Form = () => {
  // bir component içerisinde dispatch yapılacaksa bu kurulum gerekli
  const dispatch = useDispatch();

  // form göndeirlince
  const handleSubmit = (e) => {
    // sayfa yenilenmesini engelle
    e.preventDefault();

    // inputtaki yazıya eriş
    const text = e.target[0].value.trim();

    // input boş ise bildirim gönder
    if (!text) return alert("İçerik boş olamaz!");

    // kaydedilecek todo nesnesini oluştur
    const newTodo = {
      id: v4(),
      text,
      isDone: false,
      createdAt: new Date().getTime(),
    };

    // reducer'a todo oluşturma haberi gönder
    dispatch({ type: "CREATE", payload: newTodo });
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 my-6">
      <input
        type="text"
        className="bg-zinc-500 border border-zinc-400 text-white rounded-md p-2 flex-1 outline-none"
        placeholder="Bir şeyler yazınız..."
      />
      <button className="bg-yellow-600 px-4 py-2 rounded-md hover:bg-yellow-500 cursor-pointer transition">Ekle</button>
    </form>
  );
};

export default Form;
