import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CocktailService } from '../cocktail.service';
import { Cocktail } from '../models/cocktail.model';

@Component({
  selector: 'app-cocktail-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.css',
})
export class CocktailListComponent {
  cocktails: Cocktail[] = [];

  constructor(private cocktailService: CocktailService) {}

  ngOnInit(): void {
    this.cocktails = this.cocktailService.getCocktails();
  }
}
