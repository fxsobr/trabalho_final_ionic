import { Component, OnInit } from '@angular/core';
import {TurmasService} from '../../../services/turmas.service';
import {Router} from '@angular/router';
import {AlertController} from '@ionic/angular';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-detalhes-turma',
  templateUrl: './detalhes-turma.page.html',
  styleUrls: ['./detalhes-turma.page.scss'],
})
export class DetalhesTurmaPage implements OnInit {

    turma: any;
    data: any;
    dataTurma: any;

    constructor(private turmaService: TurmasService, private router: Router, public alertController: AlertController) {
    }

    ngOnInit() {
        this.turma = this.turmaService.currentTurma;
        this.showTurmaById();
        console.log('this.turma', this.turma);
    }

    async presentAlertConfirm() {
        const alert = await this.alertController.create({
            header: 'Confirmação!',
            message: 'Tem certeza que deseja excluir essa turma',
            buttons: [
                {
                    text: 'NÃO',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: () => {
                        this.alertController.dismiss();
                    }
                }, {
                    text: 'SIM',
                    handler: () => {
                        this.submit();
                    }
                }
            ]
        });

        await alert.present();
    }

    async presentAlertFalse() {
        const alert = await this.alertController.create({
            header: 'Erro',
            message: 'Erro ao excluir turma',
            buttons: ['OK']
        });
        await alert.present();
    }

    showTurmaById(): void {
        this.turmaService.getTurmaById('http://192.168.2.55:3000/classrooms/', this.turma._id)
            .subscribe(data => {
                this.dataTurma = new Set();
                this.dataTurma.add(data);
                console.log('detalhes page by id', this.dataTurma);
            });
    }

    editaTurma(): void {
        this.turmaService.getTurmaById('http://192.168.2.55:3000/classrooms/', this.turma._id)
            .subscribe(data => {
                console.log('getTurmaByid- detalhes turma page', data);
                this.data = data;
                this.router.navigate(['/altera-turma', data._id]);
                console.log('depois de passar pelo route navigate', data);
            });
    }

    public submit() {
        this.turmaService.deletaTurma(this.turma._id)
            .pipe(first())
            .subscribe(
                result => this.router.navigate(['/lista-turmas']),
                err => this.presentAlertFalse()
            );
    }
}
