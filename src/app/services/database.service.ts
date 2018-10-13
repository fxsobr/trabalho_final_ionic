import { Injectable } from '@angular/core';
import {SQLite, SQLiteObject} from '@ionic-native/sqlite/ngx';
import {Subject} from 'rxjs';


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
    queryResult = new Subject<any>();
    data: any

    constructor(
        private sqLite: SQLite
    ) {
    }


    private initDB() {
        const conn = this.sqLite.create(this.options)
            .then((db: SQLiteObject) => {
                db.executeSql('create table if not exists test(id INTEGER PRIMARY KEY AUTOINCREMENT, name varchar(32))', [])
                    .then(() => console.log('Executed SQL'))
                    .catch(e => console.log(e));
                this.database = db;
                this.query();
            })
            .catch(e => console.log(e));
    }

    insert(name) {
        this.database.executeSql('INSERT INTO test (name) VALUES (?);', [name])
            .then(() => console.log('finish insert'))
            .catch(e => console.log(e));
    }

    update(params) {
        this.database.executeSql('UPDATE test set name=? WHERE id=?;', [params.name, params.id])
            .then(() => console.log('Modificado com sucesso'))
            .catch(e => console.log(e));
    }

    delete(id) {
        this.database.executeSql('DELETE FROM test WHERE id=?;', [id])
            .then(() => console.log('Excluído com sucesso'))
            .catch(e => console.log(e));
    }

    query() {
        return this.database.executeSql('select * from test', []).then(res => {
            if (res.rows.length > 0) {
                for (let i = 0; i < res.rows.length; i++) {
                this.data = this.queryResult.next({id: res.rows.item(i).id, name: res.rows.item(i).name});
                }
                console.log('this,data', this.data);
                return this.data;
            }
        }, error => console.log(error));
    }
}
