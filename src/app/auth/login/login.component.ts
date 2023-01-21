import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';

import { AuthService } from '../auth.service';
import { map, tap } from 'rxjs/operators';
import { noop } from 'rxjs';
import { Router } from '@angular/router';
import { login } from '../auth.actions';
import { AuthState } from '../reducers';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,

    //primeiro precsiamos injetar a store com o parametro que e contido na store
    //AI AGORA CONSEGUIMO SINTERAGIR COM NOSSO STORE
    private store: Store<AuthState>
  ) {
    this.form = fb.group({
      email: ['test@angular-university.io', [Validators.required]],
      password: ['test', [Validators.required]],
    });
  }

  ngOnInit() {}

  login() {
    const value = this.form.value;

    this.auth
      .login(value.email, value.password)
      .pipe(
        tap((user) => {
          console.log(user);

          //O STORE NÃO TEM UM METODO DE ADICIONAR ESSE USUARIO NO BANCO
          //precismaos dispanchar uma AÇÃO
          /*
        Bem, uma ação é um objeto JavaScript simples que enviamos para a loja para acionar alguma modificação
        Então cada ação tem um tipo, que é uma string.

        Por exemplo, esta ação aqui poderia simplesmente ser chamada de ação de login.

        Cada ação também contém uma carga útil.

        Portanto, a carga útil da ação é qualquer dado que a loja possa precisar para criar uma nova versão
         */

          //DAR DISPATCH NÃO MUDA O ESTADO DA LOJA
          //POR SI SO UMA ACTION NÃO VAI MODIFICAAR
          //O ESTADO DA STORE
          //PRA MODIFICAR DTEM QUE SALVAR A PROPRIEDADE DO USUARIO
          //PRECISAMOS DIZER A STORE O QUE FAZER COM A AÇÃO

          //OS COMPONENTES NÃO MODIFICAM OS DADOS DIRETAMENTE
          //ELES DESPANCHAM UMA AÇÃO
          //QUE E APENAS UM OBEJTO JAVASCRIPT QUE TEM
          //UM TIPO , E UM PAYLOAD OBS:PODE TER UM PAYLOAD OU NÃO

          this.store.dispatch(login({ user: user }));
          this.router.navigateByUrl('/courses');
        })
      )
      .subscribe(noop, () => alert('Login Failed'));
  }
}
