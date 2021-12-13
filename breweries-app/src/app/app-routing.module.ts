import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreweriesListComponent } from './components/breweries-list/breweries-list.component';
import { BreweryDetailsComponent } from './components/brewery-details/brewery-details.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'breweries', component: BreweriesListComponent },
  { path: 'brewery/:breweryId', component: BreweryDetailsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
