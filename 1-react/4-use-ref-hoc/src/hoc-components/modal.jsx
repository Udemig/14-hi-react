// HOC
// HOC'lar açılış kapanış etiketi arasında kapsadığı içeriğe children prop'u aracılğıyla erişilebilir
const Modal = ({ isOpen, close, children }) => {
  // isOpen false ise modalı gösterme
  if (!isOpen) return;

  return (
    <div className="modal fade show d-block bg-dark bg-opacity-75">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <button onClick={close} type="button" className="btn-close"></button>
          </div>

          {/* İçerik */}
          <div className="modal-body">{children}</div>

          <div className="modal-footer">
            <button onClick={close} type="button" className="btn btn-secondary">
              İptal
            </button>
            <button type="button" className="btn btn-primary">
              Onayla
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
