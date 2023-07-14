import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { CurrenciesComponent } from './components/header/currency/currency.component';
import { BodyComponent } from './components/body/body.component';
import { ConverterComponent } from './components/body/converter/converter.component';
import { ConverterInputComponent } from './components/body/converter/converter-input/converter-input.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CurrenciesComponent,
    BodyComponent,
    ConverterComponent,
    ConverterInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
