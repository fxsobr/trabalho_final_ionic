import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';

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
                    return result;
                })
            );
    }

    criaTurma(name: string, ementa: string, beginDate: string, endDate: string, teacher: number): Observable<boolean> {
        return this.http.post(environment.api_url_server + environment.classrooms_path,
            {name: name, ementa: ementa, beginDate: beginDate, endDate: endDate, teacher: teacher})
            .pipe(
                map(result => {
                    return true;
                })
            );
    }

    alteraTurma(id: number, name: string, ementa: string, beginDate: string, endDate: string, teacher: number): Observable<boolean> {
        return this.http.put(environment.api_url_server + environment.classrooms_path + id,
            {name: name, ementa: ementa, beginDate: beginDate, endDate: endDate, teacher: teacher})
            .pipe(
                map(result => {
                    return true;
                })
            );
    }

    deletaTurma(id: number): Observable<boolean> {
        return this.http.delete(environment.api_url_server + environment.classrooms_path + id)
            .pipe(
                map(result => {
                    return true;
                })
            );
    }
}
