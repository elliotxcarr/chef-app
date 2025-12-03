import { signalStoreFeature, type } from "@ngrx/signals";
import {Dispatcher, Events, withEffects} from '@ngrx/signals/events'
import { ChefSlice } from "./chef.slice";
import { inject } from "@angular/core";
import { ChefEvents } from "./chef.store";
import { switchMap } from "rxjs";
import {tapResponse} from '@ngrx/operators'
import { MealService } from "../services/meal.service";
import { Ingredient } from "../meal";

export function withChefEffects<_>(){
  return signalStoreFeature(
    type<{state:ChefSlice}>(),
    withEffects(_ => {
      const _events = inject(Events);
      const _mealService = inject(MealService);
      const _dispatcher = inject(Dispatcher)
      return {
        loadIngs$: _events.on(ChefEvents.loadIngs).pipe(
          switchMap(() => _mealService.getIngredients().pipe(
            tapResponse({
              next: res => _dispatcher.dispatch(ChefEvents.ingsLoaded(res.meals as Ingredient[])),
              error: err => console.error(err)
            })
          ))
        ),
        loadMeals$: _events.on(ChefEvents.loadMeals).pipe(
          switchMap(() => _mealService.getMeals().pipe(
            tapResponse({
              next: res => _dispatcher.dispatch(ChefEvents.mealsLoaded(res.meals)),
              error: err => console.error(err)
            })
          ))
        )
      }
    })
  )
}