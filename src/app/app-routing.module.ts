import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';

// Component & Templates
import { DisplayDataInTemplateComponent } from './component-templates/display-data-in-template/display-data-in-template.component';
import { PageNotFoundComponent } from './component-templates/page-not-found/page-not-found.component';
import { ComponentTemplateUrlComponent } from './component-templates/component-template-url/component-template-url.component';
import { TemplateSyntaxComponent } from './component-templates/template-syntax/template-syntax.component';
import { CustomEventsComponent } from './component-templates/custom-events/custom-events.component';
import { TwoWayBindingComponent } from './component-templates/two-way-binding/two-way-binding.component';

const routes: Routes = [
  { path: 'index', component:  IndexComponent },

  // Components & templates
  { path: 'component-templates/display-data-in-template', component:  DisplayDataInTemplateComponent },
  { path: 'components-templates/display-data-in-template-url', component: ComponentTemplateUrlComponent },
  { path: 'components-templates/template-syntax', component: TemplateSyntaxComponent },
  { path: 'components-templates/template-syntax/custom-events', component: CustomEventsComponent},
  { path: 'components-templates/template-syntax/two-way-binding', component: TwoWayBindingComponent},

  // Default and wildcard paths
  { path: '', redirectTo: 'index', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
