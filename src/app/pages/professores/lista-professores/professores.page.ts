import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProfessoresService} from '../../../services/professores.service';
import {NavigationEnd, Router} from '@angular/router';
import {DatabaseService} from '../../../services/database.service';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.page.html',
  styleUrls: ['./professores.page.scss'],
})
export class ProfessoresPage implements OnInit, OnDestroy {

  public data: any;
  public error: string;
  public name: string;
  users = [];
  navigationSubscription;

    constructor(private professorService: ProfessoresService, private router: Router, private databaseService: DatabaseService) {
        this.navigationSubscription = this.router.events.subscribe((e: any) => {
            if (e instanceof NavigationEnd) {
                this.inicializaFuncoes();
            }
        });
    }

    inicializaFuncoes() {
        this.showProfessores();
    }

  ngOnInit() {
  }

    ngOnDestroy() {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    }



    showProfessores(): void {
        this.professorService.getProfessores('http://192.168.2.55:3000/teachers')
            .subscribe(data => {
                console.log(data)
                this.data = data;
                for (let i = 0; i < this.data.items.length; i++) {
                    console.log(this.data.items[i].name);
                    this.databaseService.insert(this.data.items[i]._id, this.data.items[i].name, this.data.items[i].birthDate, this.data.items[i].curriculum, this.data.items[i].status, this.data.items[i].imagem);
                    this.loadDeveloperData();
                }
                console.log('show Professores', this.data);
            });
    }

    loadDeveloperData() {
        this.databaseService.getAllUsers().then(data => {
            this.users = data;
        });
    }


    criaProfessor() {
        this.router.navigate(['/criar-professor']);
    }
    showProfessorDetails(professor) {
        console.log(professor)
        this.professorService.currentProfessor = professor;
        this.router.navigate(['/detalhes-professor']);
    }

}
