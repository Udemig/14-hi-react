export const fetchRecipes = async () => {
  const res = await fetch("https://dummyjson.com/recipes", {
    // cache: "no-store", // api yanıtını cache'de saklama
  });

  return res.json();
};

export const fetchRecipesById = async (id) => {
  const res = await fetch(`https://dummyjson.com/recipes/${id}`);

  return res.json();
};
