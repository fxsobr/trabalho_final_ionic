import { Component } from '@angular/core';

import {MenuController, Platform} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {AuthService} from './services/auth.service';
import {Data, Router} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private authService: AuthService,
        private router: Router,
        private menuController: MenuController
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    professores() {
        this.router.navigate(['/lista-professores']);
        this.menuController.close();
    }
    criarNovoProfessor() {
        this.router.navigate(['/criar-professor']);
        this.menuController.close();
    }
    turmas() {
        this.router.navigate(['/lista-turmas']);
        this.menuController.close();
    }
    criarNovaTurma() {
        this.router.navigate(['/criar-turma']);
        this.menuController.close();
    }

    logout() {
        this.authService.logout();
        this.router.navigate(['login']);
        this.menuController.close();
    }
}
