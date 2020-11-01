import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';


@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.css']
})
export class CocktailsComponent implements OnInit {
  
  fetchedposts=[];
  fetchedposts1=[];
  filter='';
  value1='Name';
  value2='Ingredient';
   newname='';
   ingredient='';
  


  constructor(
    private service: CocktailService) { }

   

  ngOnInit() {
    
  }
  search()
  { 
    if(this.filter===this.value1)
    {
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
        this.fetchedposts1= resData;
        console.log(this.fetchedposts1);
      });
    }
  }

}
