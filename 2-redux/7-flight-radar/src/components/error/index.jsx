const Error = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-70px)] w-full gap-4">
      <b className="text-[#c8c8c8] text-lg">Uçuş Verisi alınamadı</b>
      <p className="text-[#c8c8c8] text-sm">{message}</p>
    </div>
  );
};

export default Error;
