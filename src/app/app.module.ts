import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { FormsModule } from '@angular/forms'; //<-- NgModule lives here !

/***
 * Angularjs2 app has at least one module. Called root module conventionally named AppModule
 */

@NgModule({
  imports: [
    BrowserModule, //import others Modules
    FormsModule
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent
  ],//Call classes
  bootstrap: [AppComponent]//Only root Module uses bootstrap to call root component
})

export class AppModule {


}
