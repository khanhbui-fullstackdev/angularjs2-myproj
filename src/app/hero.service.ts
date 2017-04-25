import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
    getHeroes(): Hero[] {
        return HEROES;
    }

    getHeroesAsys(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }

    getHeroAsys(id: number): Promise<Hero> {
        return this.getHeroesAsys().then(heroes => heroes.find(hero => hero.id === id));
    }
}

