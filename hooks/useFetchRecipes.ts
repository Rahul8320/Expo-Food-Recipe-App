import { AppConfig } from "@/constants/AppConfig";
import { Recipe } from "@/types/Recipe";
import { getRandomRating } from "@/utils/getRandomRating";
import { useState, useEffect } from "react";

type UseFetchRecipes = {
  category: String;
};

const useFetchRecipes = (category: UseFetchRecipes) => {
  const [recipes, setRecipes] = useState<Recipe[] | null>(null);
  const [error, setError] = useState<String | null>(null);
  const [loading, setLoading] = useState<Boolean>(true);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${AppConfig.SearchByCategoryBaseUrl}${category}`
      );
      const result = await response.json();

      const recipes: Recipe[] = [];

      result?.meals.forEach((item: any) => {
        const recipe: Recipe = {
          id: item.idMeal,
          name: item.strMeal,
          thumbnail: item.strMealThumb,
          rating: getRandomRating(),
        };

        recipes.push(recipe);
      });

      setRecipes(recipes);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  return { recipes, error, loading };
};

export default useFetchRecipes;
