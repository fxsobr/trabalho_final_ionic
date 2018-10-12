import { Component, OnInit } from '@angular/core';
import {first} from 'rxjs/operators';
import {TurmasService} from '../../../services/turmas.service';
import {ProfessoresService} from '../../../services/professores.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-criar-turma',
  templateUrl: './criar-turma.page.html',
  styleUrls: ['./criar-turma.page.scss'],
})
export class CriarTurmaPage implements OnInit {

    public data: any;
    public name: string;
    public ementa: string
    public beginDate: string;
    public endDate: string;
    public teacher: number;
    public error: string;

  constructor(private turmaService: TurmasService, private professorService: ProfessoresService, private router: Router) { }

  ngOnInit() {
      this.showProfessores();
  }

    public submit() {
      console.log(this.teacher);
        this.turmaService.criaTurma(this.name, this.ementa, this.beginDate = new Date().toISOString(),
            this.endDate = new Date().toISOString(), this.teacher)
            .pipe(first())
            .subscribe(
                result => this.router.navigate(['/lista-turmas']),
                err => this.error = 'Erro ao Criar Turma'
            );
    }

    showProfessores(): void {
        this.professorService.getProfessores('http://192.168.2.55:3000/teachers')
            .subscribe(data => {
                console.log(data)
                this.data = data;
            });
    }

    teacherOnChange(teacherSelected) {
        console.log('Teacher Selected:', teacherSelected.detail.value);
        this.teacher = teacherSelected.detail.value;
        console.log(this.teacher);
    }

}
