import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {map} from 'rxjs/operators';
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';
import { AppState } from "./reducers";
import { login } from "./auth/auth.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    loading = true;

    isLoggedIn$:Observable<boolean>;
    isLoggedOut$:Observable<boolean>;
    constructor(private router: Router,private  store:Store<AppState>) {

    }

    ngOnInit() {

      this.router.events.subscribe(event  => {
        switch (true) {
          case event instanceof NavigationStart: {
            this.loading = true;
            break;
          }

          case event instanceof NavigationEnd:
          case event instanceof NavigationCancel:
          case event instanceof NavigationError: {
            this.loading = false;
            break;
          }
          default: {
            break;
          }
        }
      });

      //ISSO VAI MOSTRAR  TODOS OS ESTADOS ARMAZENADOS NA STORE
      //this.store.subscribe(console.log);

      this.isLoggedIn$=this.store.pipe(
        //CONVERTER PRO BOOLEAN
        map(state=>!!state["auth"].user)
      );

     this.isLoggedOut$= this.store.pipe(
        map(state=>!state["auth"].user)
      );

    }

    logout() {

    }

}
