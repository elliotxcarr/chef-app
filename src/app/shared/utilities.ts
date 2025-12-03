export const getMealIngredients =(meal:any) => {
  const ingredientsList = Object.keys(meal).filter(key => key.includes('strIngredient'))
  return ingredientsList.map(key => meal[key])
}