import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ApercuComponent } from './apercu/apercu.component';

const routes: Routes = [
  {path        : '', component   : ApercuComponent},
  {path        : '**', component   : NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
