import { Injectable } from '@angular/core';
import { Cocktail } from './models/cocktail.model';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  private cocktails: Cocktail[] = [
    {
      name: 'Mojito',
      price: 10,
      image:
        'https://www.pngall.com/wp-content/uploads/12/Mojito-PNG-Images-HD.png',
    },
    {
      name: 'Pina Colada',
      price: 15,
      image:
        'https://png.pngtree.com/png-clipart/20231019/original/pngtree-pina-colada-cocktail-ice-picture-image_13182875.png',
    },
    {
      name: 'Bloody Mary',
      price: 15,
      image:
        'https://cdn.sensationaldrinks.com/media/1636/britvic-bloody-mary.png',
    },
  ];

  getCocktails(): Cocktail[] {
    return this.cocktails;
  }
}
