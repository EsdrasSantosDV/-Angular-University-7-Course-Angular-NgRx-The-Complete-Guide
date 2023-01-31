import { Action, ActionReducer, ActionReducerMap, MetaReducer } from "@ngrx/store";
import {environment} from "../../environments/environment";
import { routerReducer } from "@ngrx/router-store";


//CORRESPONDE AO ESTADO GLOBAL  AO GLOBAL ESTADO SALVO EDENTRO DA STORE
export interface AppState{

}

export const reducers:ActionReducerMap<AppState>={
  //COLOCAR O REDUCER PRA TRATAR AS ACOES DO ROUTER, AO ALTERAR DE UMA ROTA PRA OUTRA
  router:routerReducer
};


//META REDUCER E BASICMANETE UM REDUCER QUE ACONTECE ANTES DOS REDCUERS 'PADROES'
//Aqui,neessa reducer executamos aqui nossa funcionalidade e pegamos o estado e
// a ação que acabou de ser despachada e passamos isso para o próximo produtor em nossa cadeia de reducers
export function logger(reducer:ActionReducer<any>)
  : ActionReducer<any> {
  return (state, action) => {
    console.log("state before: ", state);
    console.log("action", action);

    return reducer(state, action);
  }

}

export const metaReducers: MetaReducer<AppState>[] =
  !environment.production ? [logger] : [];
//AQUI E A ORDEM DOS REDUCERS QUE VOCE QUER , PODE TER VARISO META REDUCERS
