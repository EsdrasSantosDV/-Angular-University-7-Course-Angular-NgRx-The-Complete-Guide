import {Action, ActionReducerMap, MetaReducer} from "@ngrx/store";
import {environment} from "../../environments/environment";
import { routerReducer } from "@ngrx/router-store";


//CORRESPONDE AO ESTADO GLOBAL  AO GLOBAL ESTADO SALVO EDENTRO DA STORE
export interface AppState{

}

export const reducers:ActionReducerMap<AppState>={
  //COLOCAR O REDUCER PRA TRATAR AS ACOES DO ROUTER, AO ALTERAR DE UMA ROTA PRA OUTRA
  router:routerReducer
};

export const metaReducers:MetaReducer<AppState>[]=!environment.production ?[]:[];
