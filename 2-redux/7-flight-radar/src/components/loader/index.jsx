const Loader = ({ designs }) => {
  return (
    <div className={`loader-wrapper ${designs}`}>
      <div className="loader">
        <span></span>
      </div>
    </div>
  );
};

export default Loader;
