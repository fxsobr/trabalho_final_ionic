import { Component, OnInit } from '@angular/core';
import {ModalController, AlertController} from '@ionic/angular';
import {EsqueceuSenhaService} from '../../services/esqueceu-senha.service';
import {first} from 'rxjs/operators';
@Component({
  selector: 'app-esqueceu-senha',
  templateUrl: './esqueceu-senha.page.html',
  styleUrls: ['./esqueceu-senha.page.scss'],
})
export class EsqueceuSenhaPage implements OnInit {

    public email: string;

    constructor(public modalController: ModalController, private esqueceuSenhaService: EsqueceuSenhaService, public alertController: AlertController) {
    }

    async presentAlertSucess() {
        const alert = await this.alertController.create({
            header: 'Nova senha enviada',
            message: 'Sua nova senha foi enviada para seu email com sucesso',
            buttons: ['OK']
        });
        await alert.present();
    }

    async presentAlertFalse() {
        const alert = await this.alertController.create({
            header: 'Usuário não encontrado',
            message: 'Este e-mail não foi encontrado na base de dados',
            buttons: ['OK']
        });
        await alert.present();
    }

    public submit() {
        this.esqueceuSenhaService.esqueceuSenha(this.email)
            .pipe(first())
            .subscribe(
                result => this.presentAlertSucess(),
                err => this.presentAlertFalse()
            );
    }

    ngOnInit() {
    }

    dismiss() {
        this.modalController.dismiss();
    }
}
