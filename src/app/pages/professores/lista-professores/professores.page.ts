import {Component, OnInit} from '@angular/core';
import {ProfessoresService} from '../../../services/professores.service';
import {Router} from '@angular/router';
import {LoadingController} from '../../../../../node_modules/@ionic/angular';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.page.html',
  styleUrls: ['./professores.page.scss'],
})
export class ProfessoresPage implements OnInit {

    public data: any;
    public error: string;
    public name: string;
    loader: any;
    page = 1;

    constructor(private professorService: ProfessoresService, private router: Router,  private loadingCtrl: LoadingController) { }

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
        this.showProfessores();
        this.loader.dismiss();
    }

    loadMore(event) {
        this.page++;
        this.professorService.getProfessores(environment.api_url_server + environment.teachers_path + `?_page=${this.page}`)
            .subscribe(data => {
                for (const professor of Object.values(data)[1]) {
                    this.data.items.push(professor);
                }
            });
        event.target.complete();
    }

    showProfessores(): void {
        this.professorService.getProfessores(environment.api_url_server + environment.teachers_path)
            .subscribe(data => {
                console.log(data);
                this.data = data;
            });
    }

    criaProfessor() {
        this.router.navigate(['/criar-professor']);
    }

    showProfessorDetails(professor) {
        console.log(professor);
        this.professorService.currentProfessor = professor;
        this.router.navigate(['/detalhes-professor']);
    }

}