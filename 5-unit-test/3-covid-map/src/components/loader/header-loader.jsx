const HeaderLoader = () => {
  return (
    <div data-testid="loader" className="flex items-center gap-4">
      <div className="h-10 w-30 bg-linear-to-r from-gray-200 via-gray-300 to-gray-200 rounded-xl animate-pulse shadow-md" />
      <div className="h-10 w-16 bg-linear-to-r from-gray-200 via-gray-300 to-gray-200 rounded-xl animate-pulse shadow-md" />
    </div>
  );
};

export default HeaderLoader;
