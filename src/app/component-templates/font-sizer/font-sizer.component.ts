import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-font-sizer',
  templateUrl: './font-sizer.component.html',
  styleUrls: ['./font-sizer.component.css']
})
export class FontSizerComponent implements OnInit {

  @Input() size: number;
  @Output() sizeChange = new EventEmitter();


  dec() {
    this.size--;
    this.sizeChange.emit(this.size);
  }

  inc() {
    this.size++;
    this.sizeChange.emit(this.size);
  }

  constructor() {
   }

  ngOnInit() {
  }

}
