// Server Action
// Bir fonksiyon "use server" tanımıyla sunucu fonksiyonu haline getirebilriz
// Bu fonksiyon içerisinde ister direkt backend kodları yazabilir isterseniz api isteği atabilirsiniz
// Form aksiyonları formDatayı parametre olarak alır
// Bu yöntem sayesinde bir form alanını **client componenet yapmadan** yönetebiliyoruz
const handleSubmitAction = async (formData) => {
  "use server";

  // formdaki verilere eriş
  const name = formData.get("name");
  const surname = formData.get("surname");
  const age = formData.get("age");

  // api isteği atılır....
  console.log(name, surname, age);
};

const Form = () => {
  return (
    <form action={handleSubmitAction} className="space-y-10 grid">
      <input type="text" name="name" placeholder="Ad" className="border border-zinc-300 rounded-md p-3" />
      <input type="text" name="surname" placeholder="Soyad" className="border border-zinc-300 rounded-md p-3" />
      <input type="number" name="age" placeholder="Yaş" className="border border-zinc-300 rounded-md p-3" />

      <button type="submit" className="bg-blue-500 text-white rounded-md p-2 cursor-pointer">
        Formu Gönder
      </button>
    </form>
  );
};

export default Form;
