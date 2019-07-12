import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Municipio } from '../models/municipio.model';
import { map } from 'rxjs/operators';
import { UF } from '../models/uf.model';

@Injectable({
    providedIn: 'root'
})
export class IbgeService {
    constructor(private http: HttpClient) {
    }

    getMunicipios(uf: string): Observable<Municipio[]> {
        return this.http.get<Municipio[]>(`http://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
    }

    getUfs(): Observable<UF[]> {
        return this.http.get<UF[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados`);
    }
}