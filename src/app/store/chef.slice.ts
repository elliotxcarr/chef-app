import { Ingredient, Meal } from "../meal"

export interface ChefSlice{
    selectedIngs : string[],
    items: Ingredient[],
    meals: Meal[],
    displayMeal: Meal,
    loading: boolean,
}
export const initialChefSlice: ChefSlice= {
    selectedIngs: [],
    items: [],
    meals:[],
    displayMeal: {} as Meal,
    loading: false,
}