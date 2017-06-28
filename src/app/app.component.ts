import { Component } from '@angular/core';
import { HeroService } from './hero.service';



export class Hero {
  id: number;
  name: string;
}
// ^ you are indicating the data types //
//below you are creating a loop named Hero//
//



@Component({
  providers: [HeroService],
  selector: 'my-app',
  //The double curly braces are Angular's interpolation binding syntax.//
  template:

  //input is what alows it to be a text box and inside the textbox sits the components hero.name //
  //*ngFor indicates the <li> how many lines are in the hero array//
  //ul class="heroes" pulls the array from heroes in the export section//
  //onSelect bound to click event //
  //we replaced hero with selectedHero.//
  //selectedHero is undefined so use a ngIf. This builds a directive and set its to selectedHero //
  //[class.selected]="hero === selectedHero" is true = Angular adds the selected CSS class. False = Angular removes the selected class//



  `<h1>{{title}}</h1>
  <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor= "let hero of heroes" 
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <hero-detail [hero]="selectedHero"></hero-detail>
  `


})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }


  ngOnInit(): void {
    this.getHeroes();
  }

  //onSelect() method that sets the selectedHero property to the hero that the user clicks.//
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }


};




