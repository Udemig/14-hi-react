import { useEffect, useState } from "react";

/*
 * Kullanıcnın seçtiği tarifi api'dan alıp ekrana bas
 * Sayfanın alt kısmında yer alan sayaç benzeri alandan kullanıncın seçtiği sıradaki tarif verisini api'dan alıp ekrana bas
 */

const RecipePicker = () => {
  const [index, setIndex] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [recipe, setRecipe] = useState(null);

  // componentDidUpdate: state her değiştiğinde çalışan
  useEffect(() => {
    setLoading(true);

    fetch(`https://dummyjson.com/recipes/${index}`)
      .then((res) => res.json())
      .then((data) => setRecipe(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [index]);

  if (loading) return <h1>Yükleniyor...</h1>;

  if (error) return <h1>HATA: {error}</h1>;

  return (
    <div>
      <h1>Tarif Seç</h1>

      <div>
        <h2>{recipe.name}</h2>

        <img src={recipe.image} width={300} />
        <h3>Mutfak: {recipe.cuisine}</h3>
        <h3>Zorluk: {recipe.difficulty}</h3>
        <h3>Süre: {recipe.prepTimeMinutes}</h3>
        <h3>Rating: {recipe.rating}</h3>
      </div>

      <div>
        <button onClick={() => setIndex(index - 1)} disabled={index === 1}>
          Önceki
        </button>

        <h1>{index}</h1>

        <button onClick={() => setIndex(index + 1)} disabled={index === 50}>
          Sonraki
        </button>
      </div>
    </div>
  );
};

export default RecipePicker;
