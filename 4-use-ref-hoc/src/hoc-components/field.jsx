const Field = ({ children, label }) => {
  return (
    <div className="my-3">
      <label className="form-label">{label}</label>

      {/* Bu kısmı hoc'un kapsadığı element olarak ayarladık */}
      {children}

      <span className="form-text">uyarı mesajı</span>
    </div>
  );
};

export default Field;
