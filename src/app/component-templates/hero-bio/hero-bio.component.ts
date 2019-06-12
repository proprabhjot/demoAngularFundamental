import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hero-bio',
  templateUrl: './hero-bio.component.html',
  styleUrls: ['./hero-bio.component.css'],
  inputs: ['hero: bio'],
  outputs: ['deleteHeroEvent: deleteRequest']
})
export class HeroBioComponent implements OnInit {

  deleteHeroEvent = new EventEmitter();

  deleteRequest(hero) {
    this.deleteHeroEvent.emit(hero);
  }

  constructor() { }

  ngOnInit() {
  }

}
