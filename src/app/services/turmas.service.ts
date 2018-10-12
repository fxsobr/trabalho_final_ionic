import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TurmasService {
  currentTurma: any
  constructor(private http: HttpClient) { }

    getTurmas(url) {
        return this.http.get(url);
    }

    criaTurma(name: string, ementa: string, beginDate: string, endDate: string, teacher: number): Observable<boolean> {
        return this.http.post('http://192.168.2.55:3000/classrooms',
            {name: name, ementa: ementa, beginDate: beginDate, endDate: endDate, teacher: teacher})
            .pipe(
                map(result => {
                    return true;
                })
            );
    }
}
