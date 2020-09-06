import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { of, Observable } from 'rxjs';
import { MassageService } from './massage.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MassageService) {}

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
