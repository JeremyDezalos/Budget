import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ApercuComponent } from './apercu/apercu.component';
import { AccountViewComponent } from './account-view/account-view.component';

const routes: Routes = [
  {path        : '', component   : ApercuComponent},
  {path        : 'compte', component   : AccountViewComponent},
  {path        : '**', component   : NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
