import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categorySelected='';
  value1='Ordinary Drink';
  value2='Cocktail';

  constructor(private router: Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  search()
  {
    if(this.categorySelected===this.value1)
    {
      this.router.navigate(['/ordinary'],{relativeTo: this.route});
    }

    if(this.categorySelected===this.value2)
    {
      this.router.navigate(['/cocktails'],{relativeTo: this.route});
    }
  }

}
