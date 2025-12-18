import { FaSpinner } from "react-icons/fa";

const Loader = ({ design }) => {
  return (
    <div>
      <FaSpinner className={`animate-spin mx-auto ${design}`} />
    </div>
  );
};

export default Loader;
