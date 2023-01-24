import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./reducers";

/*
O SELETOR DE RECURSOS simplesmente selecionará aqui
 toda uma ramificação de
estado de recurso de nosso estado de aplicativo global.
E vamos definir esse seletor de recursos usando a
função de utilitário create feature selector.
 */
export const selectAuthState =
  createFeatureSelector<AuthState>("auth");
//E UMA BOA USAR ISSO PQ TIPAMOS MELHOR O ESTADO A SER SEELCIONADO
//AQUI POR EXEMPLO ELE DEVOLVE UM ATUH STATE

export const isLoggedIn = createSelector(
  /*
  Agora, aqui podemos adicionar várias funções de
  mapeamento que podemos usar para
  selecionar diferentes partes
   do armazenado Estado.
   */
  //ESTAMOS SEELCIONANDO O ESTADO DE AUTENTICAÇÃO
  selectAuthState,
  (auth )=>  !!auth.user

  /*
  Agora estamos prontos para implementar o argumento final
  para nossa chamada para criar selecionado, que é o projetor função.
  Portanto, esta função vai pegar aqui todas as fatias de estado
  que selecionamos usando esses mapeamentos
   */

);


export const isLoggedOut = createSelector(
  isLoggedIn,
  loggedIn => !loggedIn
);
