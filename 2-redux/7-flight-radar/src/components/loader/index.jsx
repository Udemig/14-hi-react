const Loader = ({ designs }) => {
  return (
    <div className={`flex flex-col items-center justify-center flex-1 w-full h-full gap-5 ${designs ?? ""}`}>
      <div className="loader">
        <span></span>
      </div>
    </div>
  );
};

export default Loader;
