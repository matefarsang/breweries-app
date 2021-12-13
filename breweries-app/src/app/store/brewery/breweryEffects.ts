import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { catchError, Observable, of, switchMap } from "rxjs";
import { BreweryService } from "src/app/services/brewery.service";
import { ERROR_ITEM, getItems, getOneItem, getItemsByName, LOAD_ITEMS, LOAD_SELECTED_ITEM, LOAD_ITEMS_BY_NAME } from "./breweryActions";


@Injectable()
export class BreweryEffect {
    loadItems$ = createEffect((): Observable<Action> => {
        return this.actions$.pipe(
            ofType(getItems),
            switchMap(({page}) => this.breweryService.getBreweries(page)),
            switchMap(breweries => of({ type: LOAD_ITEMS, items: breweries })),
            catchError(error => of({ type: ERROR_ITEM, message: error }))
        );

    });

    getItemsByName$ = createEffect((): Observable<Action> => {
        return this.actions$.pipe(
            ofType(getItemsByName),
            switchMap(action => this.breweryService.getBreweriesByName(action.name)),
            switchMap(breweries => of({ type: LOAD_ITEMS_BY_NAME, items: breweries })),
            catchError(error => of({ type: ERROR_ITEM, message: error }))
        );

    });

    getOneItem$ = createEffect((): Observable<Action> => {
        return this.actions$.pipe(
            ofType(getOneItem),
            switchMap(action => this.breweryService.getBrewery(action.id)),
            switchMap(brewery => of({ type: LOAD_SELECTED_ITEM, selected: brewery })),
            catchError(error => of({ type: ERROR_ITEM, message: error }))
        );

    });

    constructor(
        private actions$: Actions,
        private breweryService: BreweryService,
    ) { }
}