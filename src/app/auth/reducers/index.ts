import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on,
} from "@ngrx/store";
import { User } from "../model/user.model";
import { AuthActions } from "../action-type";

//NOME DA PROPRIEDADE QUE VAI APARECER NO DEV TOOLS E ESSA
export const authFeatureKey = "auth";

export interface AuthState {
  user: User;
}

export const initialAuthState: AuthState = {
  user: undefined,
};

//E O REDUCER E BASICAMENTE UMA FUNÇÃO
//QUE CALCULA UMA NOVA VERSÃO DO ESTADO
//UTILIZANDOO O VALOR ANTTERIOR E BASEADO NA AÇÃO
// VAI RETORNAR UM NOVO ESTADO
export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.login, (state, action) => {
    return {
      user: action.user,
    };
  }),

  /*
  Então é importante, assim como fizemos aqui no redutor de login, retornar aqui um novo objeto ao invés de
  tentando modificar o estado existente que nos ajudará a garantir que escrevemos os redutores corretos.
  Portanto, uma função produtora sempre retorna uma nova cópia do estado e nunca encontra o estado existente.
   */
  on(AuthActions.logout, (state, action) => {
    return {
      user: undefined,
    };
  })
);
//NESSE CASO
//ELE USA O VALOR ANTERIRO DO ESTADO DE AUTENTICAÇÃO
//QUE ATNES ERA UNDEFINED
//ASSUMINDO A ACAO
//ELE CACLULO A NOVA VERSÃO PRO ESTADO DE AUTENTICAÇÃO
//QUE E O USUARIO LOGADO
