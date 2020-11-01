import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { OrdinaryDrinkComponent } from './categories/ordinary-drink/ordinary-drink.component';
import { CocktailsComponent } from './categories/cocktails/cocktails.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';



const appRoutes: Routes= [
  {path: '', component: HomeComponent},
  {path: 'ordinary', component: OrdinaryDrinkComponent},
  {path: 'cocktails', component: CocktailsComponent}
  
];


@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    OrdinaryDrinkComponent,
    CocktailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
