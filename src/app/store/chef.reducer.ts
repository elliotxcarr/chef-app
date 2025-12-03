import { signalStoreFeature, type } from "@ngrx/signals"
import { ChefEvents } from "./chef.store"
import { on, withReducer } from "@ngrx/signals/events"
import { ChefSlice } from "./chef.slice"

export const withChefReducer = <_>() => {
  return signalStoreFeature(
    type<{state:ChefSlice}>(),
    withReducer(
      on(ChefEvents.ingsLoaded, ({payload}) => ({items: payload})),
      on(ChefEvents.loadMeals, () => ({loading: true})),
      on(ChefEvents.mealsLoaded, ({payload}) => ({meals: payload})),
  )
)
}