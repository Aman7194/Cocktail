import { HttpClient } from '@angular/common/http';
import { Injectable, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { stringify } from 'querystring';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Drinks } from '../models/drinks';

@Injectable({
  providedIn: 'root'
})


export class CocktailService implements OnInit {
 


  constructor(private router: Router,
    private route:ActivatedRoute,
    private http: HttpClient) { }

  ngOnInit() {
    throw new Error('Method not implemented.');
  }

  filterbyName(name: string)
  {
   return this.http.get<Drinks>('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' +name)
      .pipe(map(resdata=> {
            const postArray: Drinks[]=[];
            for(const key in resdata )
            {
              if(resdata.hasOwnProperty(key))
              {
              postArray.push({ ...resdata[key], id: key});
              }
            }
            return postArray;
          })
          )
  }

  filterbyIngredient(ingredient: string)
  {
   return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' +ingredient)
      .pipe(map(resdata=> {
            let ingredientArray=[];
            for(const key in resdata )
            {
              if(resdata.hasOwnProperty(key))
              {
                ingredientArray.push({ ...resdata[key], id: key});
              }
            }
            console.log(ingredientArray);
            return ingredientArray;
           
          })
          )
  }


}
