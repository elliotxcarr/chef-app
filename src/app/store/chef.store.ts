import {
  patchState,
  signalStore,
  type,
  withComputed,
  withMethods,
  withProps,
  withState,
} from '@ngrx/signals';
import { initialChefSlice } from './chef.slice';
import { computed, effect, inject } from '@angular/core';
import { MealService } from '../services/meal.service';
import { Dispatcher, eventGroup } from '@ngrx/signals/events';
import { withChefReducer } from './chef.reducer';
import { withChefEffects } from './chef.effects';
import { getMealIngredients, } from '../shared/utilities';
import { Ingredient, Meal } from '../meal';

export const ChefEvents = eventGroup({
  source: 'ChefStore',
  events:{
    loadIngs: type<void>(),
    ingsLoaded: type<Ingredient[]>(),
    loadMeals: type<void>(),
    mealsLoaded: type<Meal[]>(),
    mealsLoading: type<boolean>(),
  }
})

export const ChefStore = signalStore(
  { providedIn: 'root' },
  withState(initialChefSlice),
  withChefEffects(),
  withChefReducer(),
  withProps((_) => ({
    _mealService: inject(MealService),
    _dispatcher:  inject(Dispatcher)
  })),
  withComputed((store) => ({
    mealsToDisplay : computed(() =>  store.selectedIngs().length > 0 ? 
        store.meals().filter(meal => 
          store.selectedIngs().every(ing => getMealIngredients(meal).includes(ing))
        ) : store.meals()
      )
  })),
  withMethods((store) => {
    const addIng = (ing: string) => {
      if(store.selectedIngs().includes(ing)) return;
      patchState(store, (state) => ({selectedIngs: [...state.selectedIngs, ing]}))
    }
    const mealSelected = (mealName: string) => 
      patchState(store, (state) => ({
        displayMeal: state.meals.find(meal => meal.strMeal === mealName)
      }))
    const setLoading = (value: boolean) => patchState(store, ({loading: value}))
    
    effect(() => {
      store._dispatcher.dispatch(ChefEvents.loadIngs())
      store._dispatcher.dispatch(ChefEvents.loadMeals())
    })
    return {
      addIng,
      setLoading,
      mealSelected,
      clearDisplay: () => patchState(store, {displayMeal: {} as Meal}),
      clearIngs: () => patchState(store, { selectedIngs: [], displayMeal: {} as Meal, loading: true}),
    };
  })
);
