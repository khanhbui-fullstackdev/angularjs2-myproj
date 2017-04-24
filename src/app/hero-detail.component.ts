import { Component, Input } from '@angular/core';
import { Hero } from './hero';


@Component({
    selector: 'hero-detail',
    template: `
       
            <h2>{{heroDetail.name}} details!</h2>
    
            <div>
                <label>id: </label>{{heroDetail.id}}
            </div>

            <div>
            <label>name: </label>{{heroDetail.name}}
            </div>

            <input [(ngModel)]="heroDetail.name" placeholder="name"/>
       
    `
})

export class HeroDetailComponent {
    //now selectedHero is new attribute of tag 
    //Example:<hero-detail heroDetail="Hero"></hero-detail>
    @Input() heroDetail: Hero;
}