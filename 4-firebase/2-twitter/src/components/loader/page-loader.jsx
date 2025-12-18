import Loader from "./index";

const PageLoader = () => {
  return (
    <div className="h-screen bg-black grid place-items-center">
      <Loader design="text-white text-xl" />
    </div>
  );
};

export default PageLoader;
