import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';

@Component({
  selector: 'app-ordinary-drink',
  templateUrl: './ordinary-drink.component.html',
  styleUrls: ['./ordinary-drink.component.css']
})
export class OrdinaryDrinkComponent implements OnInit {

  fetchedposts=[];
  fetchedposts1=[];
  filter='';
  value1='Name';
  value2='Ingredient';
   newname='';
   ingredient='';
  constructor(
    private service: CocktailService) { }

  ngOnInit(): void {
  }

 

  search()
  {
    if(this.filter===this.value1)
    {
      // this.http.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink')
      // .pipe(map(resdata=> {
      //       const postArray: Drinks[]=[];
      //       for(const key in resdata )
      //       {
      //         if(resdata.hasOwnProperty(key))
      //         {
      //         postArray.push({ ...resdata[key], id: key});
      //         }
      //       }
      //       return postArray;
      //     })
      //     )
      // .subscribe(resData =>
      // {
      //   this.fetchedposts=resData;
      //   console.log(resData);
      // });
      this.service.filterbyName(this.newname)
      .subscribe(resData =>
      {
        this.fetchedposts=resData;
        console.log(this.fetchedposts);
      });
      
    }

    if(this.filter===this.value2)
    {
      this.service.filterbyIngredient(this.ingredient)
      .subscribe(resData =>
      {
        this.fetchedposts1=resData;
        console.log(resData);
      });
    }
  }

}
