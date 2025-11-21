import { useDispatch } from "react-redux";
import { updateTodo } from "../redux/actions/todo-actions";

const Modal = ({ todo, isOpen, close }) => {
  const dispatch = useDispatch();

  // form gönderilince
  const handleSubmit = (e) => {
    e.preventDefault();

    // inputtaki değeri al
    const newText = e.target[1].value.trim();

    // değer boşsa hata gönder
    if (!newText) return alert("İçerik boş olamaz");

    // -todo nesnesini güncellle
    const newTodo = {
      ...todo,
      text: newText,
    };

    // api'a güncelleme isteği at
    dispatch(updateTodo(newTodo));

    // modal'ı kapat
    close();
  };

  if (!isOpen) return;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-xs grid place-items-center p-10">
      <form onSubmit={handleSubmit} className="w-full max-w-2xl bg-zinc-800 p-10 rounded-lg">
        {/* Üst Kısım */}
        <div className="flex justify-between text-xl">
          <h3 className="font-bold">Düzenle</h3>
          <button type="button" onClick={close} className="curssor-pointer">
            X
          </button>
        </div>

        {/* İçerik Kısm */}
        <div className="flex flex-col gap-4 my-5">
          <label>Text'i Güncelle</label>
          <input
            defaultValue={todo.text}
            type="text"
            className="bg-black border border-gray-500 text-gray-100 p-2.5 rounded-md"
          />
        </div>

        {/* Butonlar */}
        <div className="flex justify-end gap-5">
          <button type="button" onClick={close} className="text-zinc-300">
            İptal
          </button>
          <button type="submit" className="bg-black px-4 py-1 rounded-md">
            Kaydet
          </button>
        </div>
      </form>
    </div>
  );
};

export default Modal;
