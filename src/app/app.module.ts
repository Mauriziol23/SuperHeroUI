import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //import and also include below in the @NgModule.import section//
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule], //import came from ^ there //

  declarations: [
    AppComponent,
    HeroDetailComponent,
  ],

  bootstrap: [
    AppComponent]

})
export class AppModule { }
