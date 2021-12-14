import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreweryList } from './components/brewery-list/brewery-list.component';
import { BreweryDetailsComponent } from './components/brewery-details/brewery-details.component';
import { MainComponent } from './components/main/main.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'breweries', component: BreweryList },
  { path: 'brewery/:breweryId', component: BreweryDetailsComponent },

  //Wild Card Route for 404 request
  { path: '404', component: PagenotfoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
