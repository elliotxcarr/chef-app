import {
  patchState,
  signalStore,
  type,
  withComputed,
  withHooks,
  withMethods,
  withProps,
  withState,
} from '@ngrx/signals';
import { initialChefSlice } from './chef.slice';
import { computed, inject } from '@angular/core';
import { MealService } from '../services/meal.service';
import { Dispatcher, eventGroup } from '@ngrx/signals/events';
import { withChefReducer } from './chef.reducer';
import { withChefEffects } from './chef.effects';
import { Meal } from '../meal';

export const ChefEvents = eventGroup({
  source: 'ChefStore',
  events:{
    searchMeals: type<string>(),
    fetchedMeals: type<Meal[]>(),
    mealSelected: type<string>(),
    mealRecived: type<Meal>()
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
    categories: computed(() => store.items().map((item) => item.category)),
  })),
  withMethods((store) => {
    const addIng = (ing:string) => store._dispatcher.dispatch(ChefEvents.searchMeals(ing))
    const mealSelected = (mealName:string) => store._dispatcher.dispatch(ChefEvents.mealSelected(mealName))
    return {
      addIng,
      mealSelected,
      clearIngs: () => patchState(store, { selectedIngs: [] }, {meals: []}),
    };
  })
);
