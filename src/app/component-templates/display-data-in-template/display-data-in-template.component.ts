import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-data-in-template',
  templateUrl: './display-data-in-template.component.html',
  styleUrls: ['./display-data-in-template.component.css']
})
export class DisplayDataInTemplateComponent implements OnInit {

  title = 'Tour of Heroes';
  myHero = 'Windstorm';

  constructor() { }

  ngOnInit() {
  }

}
