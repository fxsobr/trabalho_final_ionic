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

    getTurmaById(url, id: number): Observable<any> {
        return this.http.get(url + id)
            .pipe(
                map(result => {
                    console.log('result-turmabyid-lista-turmas-service', result);
                    return result;
                })
            );
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

    alteraTurma(id: number, name: string, ementa: string, beginDate: string, endDate: string, teacher: number): Observable<boolean> {
        return this.http.put('http://192.168.2.55:3000/classrooms/' + id,
            {name: name, ementa: ementa, beginDate: beginDate, endDate: endDate, teacher: teacher})
            .pipe(
                map(result => {
                    return true;
                })
            );
    }

    deletaTurma(id: number): Observable<boolean> {
        return this.http.delete('http://192.168.2.55:3000/classrooms/' + id)
            .pipe(
                map(result => {
                    return true;
                })
            );
    }
}
