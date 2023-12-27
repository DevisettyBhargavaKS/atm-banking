import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './component/auth/auth.component';
import { CreditComponent } from './component/credit/credit.component';
import { DebitComponent } from './component/debit/debit.component';
import { TranscationsComponent } from './component/transcations/transcations.component';




const routes: Routes = [
 {
  path:'',component:AuthComponent
 },
 {
  path:'credit',component:CreditComponent
 },
 {
  path:'debit',component:DebitComponent
 },
 {
  path:'transcation',component:TranscationsComponent
 }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
