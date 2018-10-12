import { Injectable } from '@angular/core';
import {SQLite, SQLiteObject} from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private sqLite: SQLite) {
  }
    rawQuery(queryText: string, params?: any[]): any {
        return new Promise((resolve, reject) => {
            this.sqLite.create({name: 'data.db', location: 'default'}).then((db: SQLiteObject) => {
                db.executeSql(queryText, params || []).then((data) => {
                    resolve(data);
                }).catch(error => reject(error));
            }).catch(error => reject(error));
        });
    }
}
