import { Component, OnInit } from '@angular/core';
import {first} from 'rxjs/operators';
import {Router} from '@angular/router';
import {ProfessoresService} from '../../../services/professores.service';

@Component({
  selector: 'app-criar-professor',
  templateUrl: './criar-professor.page.html',
  styleUrls: ['./criar-professor.page.scss'],
})
export class CriarProfessorPage implements OnInit {

    public name: string;
    public birthDate: string;
    public curriculum: string;
    public status = true;
    public error: string;

  constructor(private router: Router, private professorService: ProfessoresService) { }

  ngOnInit() {

  }

  change() {
    console.log(this.status);
  }
    public submit() {
        this.professorService.criaProfessor(this.name, this.birthDate = new Date().toISOString(), this.curriculum, this.status)
            .pipe(first())
            .subscribe(
                result => this.router.navigate(['/lista-professores']),
                err => this.error = 'Erro ao Criar Professor'
            );
    }

}
