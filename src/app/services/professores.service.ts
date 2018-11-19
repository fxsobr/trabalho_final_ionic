import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';

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
                    return result;
                })
            );
    }

    criaProfessor(name: string, birthDate: string, curriculum: string, status: boolean): Observable<boolean> {
        return this.http.post(environment.api_url_server + environment.teachers_path ,
            {name: name, birthDate: birthDate, curriculum: curriculum, status: status})
            .pipe(
                map(result => {
                    return true;
                })
            );
    }

    alteraProfessor(id: number, name: string, birthDate: string, curriculum: string, status: boolean, imagem: string): Observable<boolean> {
        return this.http.put(environment.api_url_server + environment.teachers_path + id,
            {name: name, birthDate: birthDate, curriculum: curriculum, status: status, imagem: imagem})
            .pipe(
                map(result => {
                    return true;
                })
            );
    }

    deletaProfessor(id: number): Observable<boolean> {
        return this.http.delete(environment.api_url_server + environment.teachers_path + id)
            .pipe(
                map(result => {
                    return true;
                })
            );
    }
}
