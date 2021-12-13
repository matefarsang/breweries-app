import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Brewery } from 'src/app/models/brewery.model';
import { getItemsByName, getOneItem } from 'src/app/store/brewery/breweryActions';
import { selectItemsByName } from 'src/app/store/brewery/breweryReducers';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  options$: Observable<Brewery[]>
  search: string = ''

  constructor(
    private store: Store<any>,
    private route:Router
  ) { }

  searchOptions(): void {
    this.store.dispatch(getItemsByName({ name: this.search }));
    this.options$ = this.store.pipe(select(selectItemsByName));
  }

  select(): void {
    this.options$.subscribe((options) => {
      const option = options.find(option => option.name === this.search);
      if (option) {
        this.route.navigate(['/brewery', option.id]);
        this.store.dispatch(getOneItem({ id: option.id }));
      }
    })
  }
}
