import { useState } from "react";
import api from "../api/axios";

const ListItem = ({ todo, deleteTodo, updateTodo }) => {
  // düzenleme modunda mıyız?
  const [isEditing, setIsEditing] = useState(false);

  // kategori belirleme fonksiyonu
  const getColor = (category) => {
    const colors = {
      günlük: "#77DD77",
      iş: "#4ecdc4",
      önemli: "crimson",
      spor: "#feca57",
      alışveriş: "#ff9ff3",
      sosyal: "#54a0ff",
    };

    // [] bracket notion yöntemiyle colors nesnesindeki category parametresine denk gelen renk değerini return et
    return colors[category] || "#95a5a6";
  };

  // sil butonuna tıklanınca çalışır:
  const handleDelete = () => {
    // kullanıcıdan onay iste: vermezse fonksiyonu durdur
    if (!confirm("Sİlmek istediğinizden emin misiniz?")) return;

    // api'a todo'yu silmek için istek at
    api
      .delete(`/todos/${todo.id}`)
      // api isteği başarılı olursa todo'yu state'den kaldır
      .then(() => deleteTodo(todo.id));
  };

  // düzenleme modunda kaydedince çalışır
  const handleEdit = (e) => {
    e.preventDefault();

    // formdan yeni değerleri al
    const updateData = {
      title: e.target[0].value,
      category: e.target[1].value,
      date: new Date().getTime(),
    };

    // api'a güncelleme isteği at
    api
      .patch(`/todos/${todo.id}`, updateData)
      // api isteği başarılı olursa
      .then(() => {
        // düzenleme modunu kapat
        setIsEditing(false);

        // state'i güncelle
        updateTodo(todo.id, updateData);
      });
  };

  // düzenlemede modu true ise:
  if (isEditing)
    return (
      <div className="list-item">
        <form onSubmit={handleEdit} className="edit-form">
          <div className="edit-inputs">
            <input type="text" required defaultValue={todo.title} placeholder="başlık" />

            <select defaultValue={todo.category}>
              <option value="sosyal">Sosyal</option>
              <option value="günlük">Günlük</option>
              <option value="önemli">Önemli</option>
              <option value="iş">İş</option>
              <option value="spor">Spor</option>
              <option value="alışveriş">Alışveriş</option>
            </select>
          </div>

          <div className="item-actions">
            <button type="submit">Kaydet</button>
            <button type="button" onClick={() => setIsEditing(false)}>
              İptal
            </button>
          </div>
        </form>
      </div>
    );

  // düzenleme modu false ise:
  return (
    <div className="list-item">
      <div className="item-content">
        <h3>{todo.title}</h3>
      </div>

      <div className="item-details">
        <span style={{ background: getColor(todo.category) }} className="item-category">
          {todo.category}
        </span>
        <span className="item-date">
          {new Date(todo.date).toLocaleDateString("tr", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </span>
      </div>

      <div className="item-actions">
        <button onClick={() => setIsEditing(true)} className="edit-btn">
          Düzenle
        </button>
        <button onClick={handleDelete} className="delete-btn">
          Sil
        </button>
      </div>
    </div>
  );
};

export default ListItem;
