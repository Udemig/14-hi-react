// isOpen: modal açık mı
// close: modal'ı kapatmaya yarayan fonksiyon
const ConfirmModal = ({ isOpen, close }) => {
  // isOpen false ise ekrana bir şey basma
  if (!isOpen) return;

  return (
    <div className="modal fade show d-block bg-dark bg-opacity-75">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5">Emin misin?</h1>
            <button onClick={close} type="button" className="btn-close"></button>
          </div>

          {/* İçerik */}
          <div className="modal-body">
            <h2>Hesabını kapatmak istediğinden emin missin?</h2>
            <p>Bu işlem geri alınamaz.</p>
          </div>

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

export default ConfirmModal;
