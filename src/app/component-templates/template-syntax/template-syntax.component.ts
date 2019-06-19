import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-syntax',
  templateUrl: './template-syntax.component.html',
  styleUrls: ['./template-syntax.component.css']
})
export class TemplateSyntaxComponent implements OnInit {

  heroImgUrl = './assets/images/hero.jpg';

  currentHero = {
    name: 'Prabhjot',
    power: 999
  };

  formNotChanged = true;

  canSave = true;
  isUnchanged = false;
  isSpecial = false;

  classConditions =  {
    saveable: this.canSave,
    modified: !this.isUnchanged,
    special:  this.isSpecial
  };

  evilTitle = 'Template <script>alert("evil never sleeps")</script>Syntax';

  noOfColumns = 2;

  badCurly = 'different bad curly';

  special = true;

  currentStyles = {
    'font-style':  this.canSave      ? 'italic' : 'normal',
    'font-weight': !this.isUnchanged ? 'bold'   : 'normal',
    'font-size':   this.isSpecial    ? '24px'   : '12px'
  };

  nullHero = null;

  phone = '8324682270'

  getVal() {
    return 1;
  }

  updateHero() {
    this.currentHero = {
      name: 'Noor',
      power: 9999
    };
  }

  getHeroImg() {
    // this.formNotChanged = false; // Un-comment me to see error in console.

    // getHeroImage() method is used in view to get the hero image.
    // If we modify the value of formNotChanged property in this function we will get an error in console.
    // We should not do like this.

    // getHeroImage() method should only return a value.
    // It should not modify any other component property.
    return this.heroImgUrl;
  }

  onSave(event) {
    console.log(event);
  }

  onSubmit(heroForm) {
    console.log(heroForm);
  }

  constructor() { }

  ngOnInit() {
  }

}
