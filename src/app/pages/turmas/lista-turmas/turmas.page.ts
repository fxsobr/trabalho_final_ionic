import { Component, OnInit } from '@angular/core';
import {TurmasService} from '../../../services/turmas.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-turmas',
  templateUrl: './turmas.page.html',
  styleUrls: ['./turmas.page.scss'],
})
export class TurmasPage implements OnInit {

    public data: any;
    public error: string;
    public name: string;

  constructor(private turmaService: TurmasService, private router: Router) { }

  ngOnInit() {
      this.showTurmas();
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

}
