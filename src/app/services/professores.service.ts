import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfessoresService {

    currentProfessor: any;
    constructor(private http: HttpClient) { }

    getProfessores(url) {
        return this.http.get(url);
    }

    getProfessoresById(url, id: number): Observable<any> {
        return this.http.get(url + id)
            .pipe(
                map(result => {
                    console.log('result-professorbyid-lista-professores-service', result);
                    return result;
                })
            );
    }

    criaProfessor(name: string, birthDate: string, curriculum: string, status: boolean): Observable<boolean> {
        return this.http.post('http://192.168.2.55:3000/teachers',
            {name: name, birthDate: birthDate, curriculum: curriculum, status: status})
            .pipe(
                map(result => {
                    return true;
                })
            );
    }

    alteraProfessor(id: number, name: string, birthDate: string, curriculum: string, status: boolean): Observable<boolean> {
        return this.http.put('http://192.168.2.55:3000/teachers/' + id,
            {name: name, birthDate: birthDate, curriculum: curriculum, status: status})
            .pipe(
                map(result => {
                    return true;
                })
            );
    }

    deletaProfessor(id: number): Observable<boolean> {
        return this.http.delete('http://192.168.2.55:3000/teachers/' + id)
            .pipe(
                map(result => {
                    return true;
                })
            );
    }
}
