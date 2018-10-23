import { Injectable } from '@angular/core';
import {SQLite, SQLiteObject} from '@ionic-native/sqlite/ngx';
import {Subject} from 'rxjs';
import {ProfessoresService} from './professores.service';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

    options: any = {
        name: 'data.db',
        location: 'default',
        createFromLocation: 1
    };

    private database: SQLiteObject;

    constructor(
        private sqLite: SQLite
    ) {
        this.initDB();
    }


    private initDB() {
        const conn = this.sqLite.create(this.options)
            .then((db: SQLiteObject) => {
                db.executeSql('create table if not exists test(id TEXT PRIMARY KEY, name varchar(32), birthDate TEXT, curriculum TEXT, status INTEGER, imagem TEXT)', [])
                    .then(() => console.log('Executed SQL'))
                    .catch(e => console.log(e));
                this.database = db;
            })
            .catch(e => console.log(e));
    }

    insert(id, name, birthDate, curriculum, status, imagem) {
        this.database.executeSql('INSERT INTO test (id, name, birthDate, curriculum, status, imagem) VALUES (?,?,?,?,?,?);', [id, name, birthDate, curriculum, status, imagem])
            .then(() => console.log('finish insert'))
            .catch(e => console.log(e));
    }

    getAllUsers() {
        return this.database.executeSql('SELECT * FROM test', []).then((data) => {
            const users = [];
            if (data.rows.length > 0) {
                for (let i = 0; i < data.rows.length; i++) {
                    users.push({ id: data.rows.item(i).id, name: data.rows.item(i).name, birthDate: data.rows.item(i).birthDate, curriculum: data.rows.item(i).curriculum, status: data.rows.item(i).status, imagem: data.rows.item(i).imagem});
                }
            }
            return users;
        }, err => {
            console.log('Error: ', err);
            return [];
        });
    }
}
