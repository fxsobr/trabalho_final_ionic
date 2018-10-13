import { Component, OnInit } from '@angular/core';
import {ProfessoresService} from '../../../services/professores.service';
import {Router} from '@angular/router';
import {DatabaseService} from '../../../services/database.service';
import {query} from '@angular/core/src/render3/query';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.page.html',
  styleUrls: ['./professores.page.scss'],
})
export class ProfessoresPage implements OnInit {

  public data: any;
  public error: string;
  public name: string;


    constructor(private professorService: ProfessoresService, private router: Router, private databaseService: DatabaseService) { }


  ngOnInit() {
        this.showProfessores()
  }

    showProfessores(): void {
        this.professorService.getProfessores('http://192.168.2.55:3000/teachers')
            .subscribe(data => {
                console.log(data)
                this.data = data;
                console.log('show Professores', this.data);
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
