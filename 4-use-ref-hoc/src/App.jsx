import FormModal from "./hoc-components/form-modal";
import ConfirmModal from "./hoc-components/confirm-modal";
import Modal from "./hoc-components/modal";
import Field from "./hoc-components/field";

import { useState } from "react";

const App = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  return (
    <div className="d-flex flex-column gap-5">
      <h2>Higher Order Components (HOC)</h2>

      <button onClick={() => setIsFormOpen(true)}>Formu Aç</button>
      <button onClick={() => setIsConfirmOpen(true)}>Onay'ı Aç</button>

      {/* <FormModal isOpen={isFormOpen} close={() => setIsFormOpen(false)} /> */}
      {/* <ConfirmModal isOpen={isConfirmOpen} close={() => setIsConfirmOpen(false)} /> */}

      <Modal isOpen={isFormOpen} close={() => setIsFormOpen(false)}>
        <label>Email</label>
        <input type="email" className="form-control" />
      </Modal>

      <Modal isOpen={isConfirmOpen} close={() => setIsConfirmOpen(false)}>
        <h2>Hesabınızı silmek istediğinizden emin misiniz?</h2>
        <p>Bu işlem geri alınamaz</p>
      </Modal>

      <form>
        <div className="my-3">
          <label className="form-label">Email</label>
          <input type="text" className="form-control" />
          <span className="form-text">uyarı mesajı</span>
        </div>

        <div className="my-3">
          <label className="form-label">Kategori</label>
          <select className="form-select">
            <option value="">Seçiniz</option>
          </select>
          <span className="form-text">uyarı mesajı</span>
        </div>

        <div className="my-3">
          <label className="form-label">Açıklama</label>
          <textarea rows={5} className="form-control"></textarea>
          <span className="form-text">uyarı mesajı</span>
        </div>
      </form>

      <form>
        <Field label="Email">
          <input type="text" className="form-control" />
        </Field>

        <Field label="Kategori">
          <select className="form-select">
            <option value="">Seçiniz</option>
          </select>
        </Field>

        <Field label="Açıklama">
          <textarea rows={5} className="form-control"></textarea>
        </Field>
      </form>
    </div>
  );
};

export default App;
