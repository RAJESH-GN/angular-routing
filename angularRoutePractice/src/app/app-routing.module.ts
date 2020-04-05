import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent1Component } from './base-component1/base-component1.component';
import { BaseComponent2Component } from './base-component2/base-component2.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: BaseComponent1Component,
  },
  {
    path: 'base1',
    component: BaseComponent1Component,
  },
  {
    path: 'base2',
    component: BaseComponent2Component,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
