import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DisplayDataInTemplateComponent } from './display-data-in-template/display-data-in-template.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from '../app-routing.module';
import { ComponentTemplateUrlComponent } from './component-template-url/component-template-url.component';
import { TemplateSyntaxComponent } from './template-syntax/template-syntax.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { CustomEventsComponent } from './custom-events/custom-events.component';
import { DiplayHeroComponent } from './diplay-hero/diplay-hero.component';
import { HeroBioComponent } from './hero-bio/hero-bio.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FontSizerComponent } from './font-sizer/font-sizer.component';

@NgModule({
  declarations: [
    DisplayDataInTemplateComponent,
    PageNotFoundComponent,
    ComponentTemplateUrlComponent,
    TemplateSyntaxComponent,
    HeroDetailComponent,
    CustomEventsComponent,
    DiplayHeroComponent,
    HeroBioComponent,
    TwoWayBindingComponent,
    FontSizerComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ]
})
export class ComponentTemplatesModule { }
