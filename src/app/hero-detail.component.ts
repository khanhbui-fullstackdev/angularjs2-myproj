import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap'; // Import the switchMap operator to use later with the route parameters Observable.

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'hero-detail',
    templateUrl: './hero-detail.component.html'
})

export class HeroDetailComponent implements OnInit {
    //now selectedHero is new attribute of tag 
    //Example:<hero-detail heroDetail="Hero"></hero-detail>
    heroDetail: Hero;

    constructor(
        private activatedRoute: ActivatedRoute,
        private location: Location,
        private heroService: HeroService) { }

    ngOnInit(): void {
        this.getHeroById();
    }

    getHeroById(): void {
        this.activatedRoute.params
            .switchMap((params: Params) => this.heroService.getHeroAsys(+params["id"]))
            .subscribe(hero => this.heroDetail = hero);
    }

    goBack(): void {
        this.location.back();
    }
}