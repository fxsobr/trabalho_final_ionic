import { Component } from '@angular/core';
import {DatabaseService} from '../../services/database.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    constructor(private databaseService: DatabaseService, private router: Router) {}

    createDbTest() {
        this.databaseService.rawQuery('SELECT * FROM tabla').then((success) => {
               console.log(success);
             }, fail => {
               console.log(fail);
             });
       }

    professores() {
        this.router.navigate(['/lista-professores']);
    }
    turmas() {
        this.router.navigate(['/lista-turmas']);
    }
}
