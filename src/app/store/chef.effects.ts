import { patchState, signalStoreFeature, type } from "@ngrx/signals";
import {Dispatcher, Events, withEffects} from '@ngrx/signals/events'
import { ChefSlice } from "./chef.slice";
import { inject } from "@angular/core";
import { ChefEvents } from "./chef.store";
import { switchMap, tap,} from "rxjs";
import {tapResponse} from '@ngrx/operators'
import { MealService } from "../services/meal.service";
import { Meal } from "../meal";

export function withChefEffects<_>(){
  return signalStoreFeature(
    type<{state:ChefSlice}>(),
    withEffects(store => {
      const _events = inject(Events);
      const _mealService = inject(MealService);
      const _dispatcher = inject(Dispatcher)
      return {
        searchMeals$: _events.on(ChefEvents.searchMeals).pipe(
          switchMap(({payload: ing}) => _mealService.mealLookup(ing).pipe(
            tapResponse({
              next: res => {
                if(!res.meals) return
                _dispatcher.dispatch(ChefEvents.fetchedMeals(res.meals as Meal[]))
              },
              error: err => console.error(err)
            })
          ))
        ),
        mealSelected$: _events.on(ChefEvents.mealSelected).pipe(
          switchMap(({payload: mealName}) => _mealService.getSingleMeal(mealName).pipe(
            tapResponse({
              next: res => {
                _dispatcher.dispatch(ChefEvents.mealRecived(res.meals[0]))
              },
              error: err => console.error(err)
            })
          ))
        )

      }
    })
  )
}