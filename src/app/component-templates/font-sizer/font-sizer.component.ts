import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-font-sizer',
  templateUrl: './font-sizer.component.html',
  styleUrls: ['./font-sizer.component.css']
})
export class FontSizerComponent implements OnInit {

  @Input() size: number | string;
  @Output() sizeChange = new EventEmitter();


  dec() {
    this.sizeChange.emit(parseInt(this.size, 10) - 1);
  }

  inc() {
    this.sizeChange.emit(parseInt(this.size, 10) + 1);
  }

  constructor() {
   }

  ngOnInit() {
  }

}
