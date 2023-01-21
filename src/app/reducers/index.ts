import {Action, ActionReducerMap, MetaReducer} from "@ngrx/store";
import {environment} from "../../environments/environment";


//CORRESPONDE AO ESTADO GLOBAL  AO GLOBAL ESTADO SALVO EDENTRO DA STORE
export interface AppState{

}

export const reducers:ActionReducerMap<AppState>={

};

export const metaReducers:MetaReducer<AppState>[]=!environment.production ?[]:[];
