import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {


  fontSize = 15;

  currentHero =  {
    name: 'John Doe'
  };

  setUpperCase(name: string) {
    this.currentHero.name = name.toUpperCase();
  }

  constructor() { }

  ngOnInit() {
  }

}
