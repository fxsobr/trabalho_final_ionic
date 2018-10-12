import { Component, OnInit } from '@angular/core';
import {TurmasService} from '../../../services/turmas.service';
import {Router} from '@angular/router';
import {first} from 'rxjs/operators';
import {ProfessoresService} from '../../../services/professores.service';

@Component({
  selector: 'app-altera-turma',
  templateUrl: './altera-turma.page.html',
  styleUrls: ['./altera-turma.page.scss'],
})
export class AlteraTurmaPage implements OnInit {

  turma: any;
  error: any;
  data: any;
  teacher: number;
  constructor(private turmaService: TurmasService, private professorService: ProfessoresService, private router: Router) { }

  ngOnInit() {
      this.turma = this.turmaService.currentTurma;
      console.log('ngOninit', this.turma.teacher)
      this.showProfessores();
  }
    public submit() {
        this.turmaService.alteraTurma(this.turma._id, this.turma.name, this.turma.ementa, this.turma.beginDate = new Date().toISOString(),
            this.turma.endDate = new Date().toISOString(), this.teacher)
            .pipe(first())
            .subscribe(
                result => this.router.navigate(['/lista-turmas']),
                err => this.error = 'Erro ao alterar o professor'
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
