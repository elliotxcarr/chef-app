import { Meal } from "../meal"

export const getMealIngredients =(meal: Meal) => {
  const ingredientsList = 
    Object.keys(meal).filter(key => 
      key.includes('strIngredient')
    ) as (keyof Meal)[]
  return ingredientsList.map(key => meal[key])
}