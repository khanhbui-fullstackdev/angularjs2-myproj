//Module
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //<-- NgModule lives here !
import { AppRoutingModule} from './app-routing.module';

//Component
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { DashboardComponent } from './dashboard.component';
//Service
import { HeroService } from './hero.service';


/***
 * Angularjs2 app has at least one module. Called root module conventionally named AppModule
 */


@NgModule({
  imports: [
    BrowserModule, //import others Modules
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent
  ],//Call classes

  providers: [
    HeroService // To teach the injector how to make a HeroService, 
    //add the following providers array property to the bottom of the component metadata in the @Component call.
  ],

  bootstrap: [AppComponent]//Only root Module uses bootstrap to call root component

})

export class AppModule {


}
