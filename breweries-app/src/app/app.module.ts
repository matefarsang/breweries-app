import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { BreweryReducer } from './store/brewery/breweryReducers';
import { BreweryEffect } from './store/brewery/breweryEffects';

import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreweriesListComponent } from './components/breweries-list/breweries-list.component';
import { BreweryDetailsComponent } from './components/brewery-details/brewery-details.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './components/main/main.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    BreweriesListComponent,
    BreweryDetailsComponent,
    NavbarComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({ breweries: BreweryReducer }),
    EffectsModule.forRoot([BreweryEffect]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
