import {Component, OnDestroy, OnInit} from '@angular/core';
import {TurmasService} from '../../../services/turmas.service';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-turmas',
  templateUrl: './turmas.page.html',
  styleUrls: ['./turmas.page.scss'],
})
export class TurmasPage implements OnInit, OnDestroy  {

    public data: any;
    public error: string;
    public name: string;
    navigationSubscription;

  constructor(private turmaService: TurmasService, private router: Router) {
      this.navigationSubscription = this.router.events.subscribe((e: any) => {
          if (e instanceof NavigationEnd) {
              this.inicializaFuncoes();
          }
      });
  }

    inicializaFuncoes() {
        this.showTurmas();
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    }

    showTurmas(): void {
        this.turmaService.getTurmas('http://192.168.2.55:3000/classrooms')
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
        this.turmaService.getTurmaById('http://192.168.2.55:3000/classrooms/', turma._id)
            .subscribe(data => {
                console.log('getTurmaByid- detalhes turma page', data);
                this.data = data;
                this.router.navigate(['/detalhes-turma', data._id]);
                console.log('depois de passar pelo route navigate', data);
            });
    }


}
