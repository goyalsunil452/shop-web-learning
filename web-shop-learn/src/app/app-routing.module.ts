import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { MatExpansionModule } from '@angular/material/expansion';
import { MaterialModule } from 'src/material.module';
import { CategoryOneComponent } from './category-one/category-one.component';


const routes: Routes = [
  // { path: '', component: AppComponent },
  // { path: 'Home', component: HomeComponent },
  { path: 'Categories', 
  component: CategoriesComponent,
  // children: [
  //   {
  //     path: 'child-a', // child route path
  //     component: CategoriesComponent, // child route component that the router renders
  //   }, ]
  },
  // { path: '**', component: AppComponent },
];
@NgModule({
  exports: [RouterModule],
  declarations: [
    CategoriesComponent,CategoryOneComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: "", redirectTo: "/Home", pathMatch: "full" },
  { path: 'Home', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  // { path: '', component: AppComponent },
  { path: 'Categories', 
    component: CategoriesComponent,
    // children: [
    //   {
    //     path: 'child-a', // child route path
    //     component: CategoriesComponent, // child route component that the router renders
    //   }, ]
    },
    { path: 'Categories-panel', 
    component: CategoryOneComponent,
    // children: [
    //   {
    //     path: 'child-a', // child route path
    //     component: CategoriesComponent, // child route component that the router renders
    //   }, ]
    }
  ]),
  
    IvyCarouselModule,
    // MatExpansionModule
    MaterialModule


  ],
  providers: [],
})
export class AppRoutingModule { }
