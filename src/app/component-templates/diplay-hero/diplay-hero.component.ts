import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-diplay-hero',
  templateUrl: './diplay-hero.component.html',
  styleUrls: ['./diplay-hero.component.css']
})
export class DiplayHeroComponent implements OnInit {

  @Input() hero;

  @Output() deleteHeroEvent = new EventEmitter();

  deleteHero(hero) {
    this.deleteHeroEvent.emit(hero);
  }
  constructor() { }

  ngOnInit() {
  }

}
