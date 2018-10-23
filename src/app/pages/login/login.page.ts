import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {HttpClient} from '@angular/common/http';
import {ModalController} from '@ionic/angular';
import {first} from 'rxjs/operators';
import {EsqueceuSenhaPage} from '../esqueceu-senha/esqueceu-senha.page';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    public email: string;
    public password: string;
    public error: string;

    constructor(private http: HttpClient, private router: Router, private authService: AuthService, public modalController: ModalController) { }

    public submit() {
        this.authService.login(this.email, this.password)
            .pipe(first())
            .subscribe(
                result => this.router.navigate(['/lista-professores']),
                err => this.error = 'Could not authenticate'
            );
    }

    ngOnInit() {
    }
    async presentModal() {
        const modal = await this.modalController.create({
            component: EsqueceuSenhaPage
        });
        await modal.present();
    }
}
