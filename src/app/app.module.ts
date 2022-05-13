import { BodyModule } from './body/body.module';
import { InfoModule } from './info/info.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ToastrModule } from 'ngx-toastr';
import { BodyComponent } from './body/body.component';
import { MainCardComponent } from './body/main-card/main-card.component';
import { ForecastCardsComponent } from './body/forecast-cards/forecast-cards.component';
import { InfoComponent } from './info/info.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, BodyComponent, MainCardComponent, ForecastCardsComponent, InfoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    InfoModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
