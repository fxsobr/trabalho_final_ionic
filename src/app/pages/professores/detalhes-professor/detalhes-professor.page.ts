import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ProfessoresService} from '../../../services/professores.service';
import {first} from 'rxjs/operators';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-detalhes-professor',
  templateUrl: './detalhes-professor.page.html',
  styleUrls: ['./detalhes-professor.page.scss'],
})
export class DetalhesProfessorPage implements OnInit {

    professor: any;
    data: any;

    constructor(private professorService: ProfessoresService, private router: Router, public alertController: AlertController) {
    }

    ngOnInit() {
        this.professor = this.professorService.currentProfessor;
    }

    async presentAlertConfirm() {
        const alert = await this.alertController.create({
            header: 'Confirmação!',
            message: 'Tem certeza que deseja excluir esse professor',
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
            message: 'Erro ao excluir o professor',
            buttons: ['OK']
        });
        await alert.present();
    }

    editaProfessor(): void {
        this.professorService.getProfessoresById('http://192.168.2.55:3000/teachers/', this.professor._id)
            .subscribe(data => {
                console.log('getProfessorByid- detalhes professor page', data);
                this.data = data;
                this.router.navigate(['/altera-professor', data._id]);
                console.log('depois de passar pelo route navigate', data);
            });
    }

    public submit() {
        this.professorService.deletaProfessor(this.professor._id)
            .pipe(first())
            .subscribe(
                result => this.router.navigate(['/lista-professores']),
                err => this.presentAlertFalse()
            );
    }

}
