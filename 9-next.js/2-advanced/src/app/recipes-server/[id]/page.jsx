import { fetchRecipes, fetchRecipesById } from "@/utils/service";
import Image from "next/image";
import Link from "next/link";

// Bu dinamik sayfanın bazı parametrelerini statik hale getirelim
// By fonksiyondan return edilene parametre dizisindeki her bir eleman için statik bir sayfa oluşur
export const generateStaticParams = async () => {
  // tarif verilerini çek
  const data = await fetchRecipes();

  // bütün tarif id'lerini döndür (hepsini statik yapar)
  return data.recipes.map((recipe) => ({ id: recipe.id.toString() }));
};

const Page = async ({ params }) => {
  const { id } = await params;
  const recipe = await fetchRecipesById(id);

  return (
    <div className="flex flex-col items-center justify-center gap-20">
      <Link href="/recipes-server">Geri</Link>

      <Image src={recipe.image} alt={recipe.name} width={300} height={300} className="rounded-lg" />

      <h1>{recipe.name}</h1>

      <p>Mutfak: {recipe.cuisine}</p>

      <p>Zorluk: {recipe.difficulty}</p>
    </div>
  );
};

export default Page;
