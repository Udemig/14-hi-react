export const metadata = {
  title: "Belgeler",
};

const Page = async ({ params }) => {
  const { slug } = await params;

  return (
    <div className="page">
      <div className="space-y-10 text-center">
        <h1>Belge Sayfası</h1>
        <h2>{slug.join("/")}</h2>
      </div>
    </div>
  );
};

export default Page;
