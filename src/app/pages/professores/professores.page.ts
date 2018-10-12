import { Component, OnInit } from '@angular/core';
import {first} from 'rxjs/operators';
import {ProfessoresService} from '../../services/professores.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.page.html',
  styleUrls: ['./professores.page.scss'],
})
export class ProfessoresPage implements OnInit {

  public data: any;
  public error: string;
  public name: string;

    constructor(private professorService: ProfessoresService,private router: Router) { }

  ngOnInit() {
        this.showProfessores();
  }

    showProfessores(): void {
        this.professorService.getProfessores('http://192.168.2.55:3000/teachers')
            .subscribe(data => {
                console.log(data)
                this.data = data;
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
