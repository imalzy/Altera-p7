import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { PassangerComponent } from './passanger/passanger.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [AppComponent, MainComponent, PassangerComponent, PaymentComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
