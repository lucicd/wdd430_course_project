import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://snappygoat.com/b/8d742b898c83f3d66e58cdf5cf69a6ee429a66ba'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://snappygoat.com/b/8d742b898c83f3d66e58cdf5cf69a6ee429a66ba')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
