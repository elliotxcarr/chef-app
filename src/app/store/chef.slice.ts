import { ingredients } from "../ingredients"
import { Meal } from "../meal"

export interface ChefSlice{
    selectedIngs : string[],
    items: Category[],
    meals: Meal[],
    displayMeal: Meal
}

interface Category{
    category: string,
    label: string,
    foods: string[]
}
export const initialChefSlice: ChefSlice= {
    selectedIngs: [],
    items: ingredients,
    meals:[],
    displayMeal: {} as Meal
}