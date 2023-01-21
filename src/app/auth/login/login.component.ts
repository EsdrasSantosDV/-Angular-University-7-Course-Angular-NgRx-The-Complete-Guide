import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';

import { AuthService } from '../auth.service';
import { map, tap } from 'rxjs/operators';
import { noop } from 'rxjs';
import { Router } from '@angular/router';
import { AppState } from '../../reducers';

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
    private store: Store<AppState>
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
          //E A UNICA FORMA DE MODIFICAR OS DADOS E USANDO O DISPATCH
          //precismaos dispanchar uma AÇÃO
          /*
        Bem, uma ação é um objeto JavaScript simples que enviamos para a loja para acionar alguma modificação
        Então cada ação tem um tipo, que é uma string.

        Por exemplo, esta ação aqui poderia simplesmente ser chamada de ação de login.

        Cada ação também contém uma carga útil.

        Portanto, a carga útil da ação é qualquer dado que a loja possa precisar para criar uma nova versão
         */
          this.store.dispatch({
            type:'Login Action',
            payload:{
              user
            }
          });
          this.router.navigateByUrl('/courses');
        })
      )
      .subscribe(noop, () => alert('Login Failed'));
  }
}
