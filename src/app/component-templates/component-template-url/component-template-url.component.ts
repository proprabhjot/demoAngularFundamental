import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-template-url',
  templateUrl: './component-template-url.component.html',
  styleUrls: ['./component-template-url.component.css']
})
export class ComponentTemplateUrlComponent implements OnInit {

  title: string;
  myHero: string;
  heroes: string[] = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];

  constructor() {
    this.title = 'Tour of Heroes';
    this.myHero = 'Windstorm';
    let age = 20;
  }

  ngOnInit() {
  }

}
