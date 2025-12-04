import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';
import { Meal } from '../meal';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  private readonly ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('');
  private readonly http = inject(HttpClient)

  mealLookup(ing:string){
    return this.http.get<any>(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ing}`)
  }
  getSingleMeal(mealName: string){
    return this.http.get<any>(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
  }
  getIngredients(){
    return this.http.get<any>(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
  }

  getMeals(): Observable<{ meals: Meal[] }> {
    const requests = this.ALPHABET.map(letter =>
      this.http.get<{ meals: Meal[] | null }>(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`
      )
    );

    return forkJoin(requests).pipe(
      map(results =>
        results.flatMap(r => r?.meals ?? [])
      ),
      map(allMeals => ({ meals: allMeals }))
    );
  }
}
