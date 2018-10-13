import { Component, OnInit } from '@angular/core';
import {ProfessoresService} from '../../../services/professores.service';
import {Router} from '@angular/router';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-altera-professor',
  templateUrl: './altera-professor.page.html',
  styleUrls: ['./altera-professor.page.scss'],
})
export class AlteraProfessorPage implements OnInit {

    professor: any;
    public error: string;
    constructor(private professorService: ProfessoresService, private router: Router) { }

    ngOnInit() {
        this.professor = this.professorService.currentProfessor;
    }

    public submit() {
        this.professorService.alteraProfessor(this.professor._id, this.professor.name, this.professor.birthDate = new Date().toISOString(), this.professor.curriculum, this.professor.status, this.professor.imagem)
            .pipe(first())
            .subscribe(
                result => this.router.navigate(['/lista-professores']),
                err => this.error = 'Erro ao alterar o professor'
            );
    }
}
