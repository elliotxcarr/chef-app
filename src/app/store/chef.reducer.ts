import { signalStoreFeature, type } from "@ngrx/signals"
import { ChefEvents } from "./chef.store"
import { on, withReducer } from "@ngrx/signals/events"
import { ChefSlice } from "./chef.slice"

export const withChefReducer = <_>() => {
  return signalStoreFeature(
    type<{state:ChefSlice}>(),
    withReducer(
      on(ChefEvents.searchMeals, ({payload: ing}) => (state) => ({selectedIngs: [...state.selectedIngs, ing]})),
      on(ChefEvents.fetchedMeals, ({payload}) => (state) => ({meals: [...state.meals, ...payload]})
    )
  )
)
}