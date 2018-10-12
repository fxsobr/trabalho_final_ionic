import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ProfessoresService} from '../../services/professores.service';

@Component({
  selector: 'app-detalhes-professor',
  templateUrl: './detalhes-professor.page.html',
  styleUrls: ['./detalhes-professor.page.scss'],
})
export class DetalhesProfessorPage implements OnInit {

    professor: any;
    data: any

    constructor(private professorService: ProfessoresService, private router: Router) {
    }

    ngOnInit() {
        this.professor = this.professorService.currentProfessor;
    }

    editaProfessor(): void {
        this.professorService.getProfessoresById('http://192.168.2.55:3000/teachers/', this.professor._id)
            .subscribe(data => {
                console.log('getProfessorByid- detalhes professor page', data)
                this.data = data;
                this.router.navigate(['/altera-professor', data]);
                console.log('depois de passar pelo route navigate', data);
            });
    }
}
