import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DebitComponent } from './component/debit/debit.component';
import { AuthComponent } from './component/auth/auth.component';
import { CreditComponent } from './component/credit/credit.component';
import { TranscationsComponent } from './component/transcations/transcations.component';




@NgModule({
  declarations: [AppComponent, DebitComponent, AuthComponent, CreditComponent, TranscationsComponent,],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
