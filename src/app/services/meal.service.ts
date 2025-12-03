import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  private readonly http = inject(HttpClient)

  mealLookup(ing:string){
    return this.http.get<any>(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ing}`)
  }
  getSingleMeal(mealName: string){
    return this.http.get<any>(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
  }
}
