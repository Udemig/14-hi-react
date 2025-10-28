import api from "../api/axios";

const Form = ({ createTodo }) => {
  // form gönderilince çalışır
  const handleSubmit = (e) => {
    // sayfanın yenilenmesini engelle
    e.preventDefault();

    // title ve category verilerini inputlardan al
    const title = e.target[0].value.trim();
    const category = e.target[1].value;

    // title değeri tanımlanmadıysa hata fırlat
    if (!title) return alert("İçerik boş olamaz");

    // yeni todo nesnesi oluştur
    const newTodo = {
      title,
      category,
      date: new Date().getTime(),
    };

    // api'a yeni todoyu veritabanına kaydetmesi için istek at (axios)
    api
      .post("/todos", newTodo)
      // api isteği başarılı olursa arayün güncellenmesi için state'e yeni todoyu ekle
      .then((res) => createTodo(res.data));
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Yeni Öğe Ekle</h2>

      <div className="form-group">
        <label>Başlık</label>
        <input type="text" />
      </div>

      <div className="form-group">
        <label>Kategori</label>
        <select>
          <option value="sosyal">Sosyal</option>
          <option value="günlük">Günlük</option>
          <option value="önemli">Önemli</option>
          <option value="iş">İş</option>
          <option value="spor">Spor</option>
          <option value="alışveriş">Alışveriş</option>
        </select>
      </div>

      <button>Ekle</button>
    </form>
  );
};

export default Form;
