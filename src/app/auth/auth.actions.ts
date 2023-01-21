import { createAction } from '@ngrx/store';
import { User } from './model/user.model';


//CRIAR A ACAO DE LOGIN
export const login=createAction(
  //TIPO DA ACAO
  //POR PADRAO O PRIMEIRO E A ORIGEM DA ACAOI
  //ONDE A ACAO ESTA SENDO DISPACHADA
  //POR ISSO NÃO PODEMOS FICAR DISPACHANDO A MESMA ACAO
  //EM VARIOS LOCAIS DIFERENTES
  //ESSA AQUI E SO DISPACHADA PELA PAGINA DE LOGIN
  //isso e pra ter um log de acao MELHOR
  //A SEGUNDA PARTE DA ACAO SERA O EVENTO OU O COMMANDO DA
  //ACAO CORRESPONDENTE AQUI ESTAMOS INFROMANDO QUE O USUARIO ESTA
  //FAZENDO LOGIN
    "[Login Page] User Login"
//SEUGNDO E A CHAMADA PARA A UTILIDADE DO NGRX
   props<{user:User}>()
);


const newLoginAction=login({user:});
