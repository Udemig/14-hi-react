const Error = ({ message }) => {
  return (
    <div className="loader-wrapper">
      <b>Uçuş Verisi alınamadı</b>
      <p>{message}</p>
    </div>
  );
};

export default Error;
