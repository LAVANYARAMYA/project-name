import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ImageCompComponent } from './image-comp/image-comp.component';
import { MovieCompComponent } from './movie-comp/movie-comp.component';

import { LikeDislikeComponent } from './like-dislike/like-dislike.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { CountryComponent } from './country/country.component';
import { HttpClientModule } from '@angular/common/http';
import { StockRateComponent } from './stock-rate/stock-rate.component';
@NgModule({
  declarations: [
    AppComponent,
    ImageCompComponent,
    MovieCompComponent,
    LikeDislikeComponent,
    CountryComponent,
    StockRateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
