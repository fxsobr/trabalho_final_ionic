import {Component, OnInit} from '@angular/core';
import {TurmasService} from '../../../services/turmas.service';
import {Router} from '@angular/router';
import {LoadingController} from '../../../../../node_modules/@ionic/angular';
import {environment} from '../../../../environments/environment';


@Component({
  selector: 'app-turmas',
  templateUrl: './turmas.page.html',
  styleUrls: ['./turmas.page.scss'],
})
export class TurmasPage implements OnInit  {

    public data: any;
    public error: string;
    public name: string;
    loader: any;

    constructor(private turmaService: TurmasService, private router: Router, private loadingCtrl: LoadingController) {}

    ngOnInit() {
    }

    private async presentLoading() {
        const loader = await this.loadingCtrl.create({
            message: 'Carregando',
            translucent: true
        });

        loader.present();
        return loader;
    }

    async ionViewWillEnter() {
        this.loader = await this.presentLoading();
        this.showTurmas()
        this.loader.dismiss();
    }


    showTurmas(): void {
        this.turmaService.getTurmas(environment.api_url_server + environment.classrooms_path)
            .subscribe(data => {
                console.log(data)
                this.data = data;
            });
    }

    criaTurma() {
        this.router.navigate(['/criar-turma']);
    }


    showTurmaDetails(turma): void {
        this.turmaService.currentTurma = turma;
        this.turmaService.getTurmaById(environment.api_url_server + environment.classrooms_path, turma._id)
            .subscribe(data => {
                console.log('getTurmaByid- detalhes turma page', data);
                this.data = data;
                this.router.navigate(['/detalhes-turma', data._id]);
                console.log('depois de passar pelo route navigate', data);
            });
    }


}
