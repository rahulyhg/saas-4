import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Address } from '../models/address.model';
import { AddressAdapter } from 'src/app/core/adapter/AddressAdapter.adapter';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ViacepService {
  constructor(private http: HttpClient, private AddresAdapter: AddressAdapter) { }

  getByCep(cep: string): Observable<Address> {
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/`).pipe(
      map(res => this.AddresAdapter.adapt(res))
    );
  }
}
