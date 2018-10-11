import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {EsqueceuSenhaService} from '../../services/esqueceu-senha.service';
import {first} from 'rxjs/operators';
@Component({
  selector: 'app-esqueceu-senha',
  templateUrl: './esqueceu-senha.page.html',
  styleUrls: ['./esqueceu-senha.page.scss'],
})
export class EsqueceuSenhaPage implements OnInit {

    public email: string;
    public error: string;
    public sucesso: string;

    constructor(public modalController: ModalController, private esqueceuSenhaService: EsqueceuSenhaService) {
    }

    public submit() {
        this.esqueceuSenhaService.esqueceuSenha(this.email)
            .pipe(first())
            .subscribe(
                result => this.sucesso = 'Senha enviada para o seu email',
                err => this.error = 'erro ao recuperar senha'
            );
    }

    ngOnInit() {
    }

    dismiss() {
        this.modalController.dismiss();
    }
}
