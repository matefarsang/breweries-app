import { createReducer, on } from "@ngrx/store";
import { Brewery } from "src/app/models/brewery.model";
import { errorItem, loadItems, loadSelectedItem, loadItemsByName } from "./breweryActions";


export interface State {
    breweries: { items: Brewery[], selected?: Brewery | null, autocompleteOptions: Brewery[], error: string };
}

export const initialState: State = {
    breweries: { items: [], selected: null, autocompleteOptions: [], error: '' }
}

export const BreweryReducer = createReducer(
    initialState,
    on(loadItems, (state, action) => ({
        ...state,
        items: action.items
    })),
    on(loadSelectedItem, (state, action) => ({
        ...state,
        selected: action.selected
    })),
    on(loadItemsByName, (state, action) => ({
        ...state,
        autocompleteOptions: action.items.slice(0, 5)
    })),
    on(errorItem, (state, action) => ({
        ...state,
        error: action.message
    }))
);



export const selectItems = (state: State) => state.breweries.items;
export const selectOneItem = (state: State) => state.breweries.selected;
export const selectError = (state: State) => state.breweries.error;
export const selectItemsByName = (state: State) => state.breweries.autocompleteOptions;