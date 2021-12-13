import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Brewery } from 'src/app/models/brewery.model';
import { BreweryService } from 'src/app/services/brewery.service';
import { getItems } from 'src/app/store/brewery/breweryActions';
import { selectItems } from 'src/app/store/brewery/breweryReducers';

@Component({
  selector: 'app-breweries-list',
  templateUrl: './breweries-list.component.html',
  styleUrls: ['./breweries-list.component.css']
})
export class BreweriesListComponent implements OnInit {

  breweries$: Observable<Brewery[]>;

  page = 1;
  pageSize = 10;

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit(): void {
    this.getBreweries();
    this.breweries$ = this.store.pipe(select(selectItems));
  }

  getBreweries(): void {
    this.store.dispatch(getItems({ page: this.page }));
  }

  previousPage() {
    if (this.page !== 1) {
      this.page--;
      this.getBreweries();
    }
  }

  nextPage() {
    this.page++;
    this.getBreweries();
  }
}
