import { Adapter } from './Adapter.interface';
import { Address } from 'src/app/pages/colaborador/shared/models/address.model';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AddressAdapter implements Adapter<Address>{
    adapt(item: any): Address {
        return new Address(
            item.cep,
            item.logradouro,
            null,
            null,
            item.bairro,
            item.localidade,
            item.uf,
        )
    }

    adaptFromBack(item: any): Address {
        return new Address(
            item.zipCode,
            item.street,
            item.number,
            item.complement,
            item.district,
            item.city,
            item.stateCode
        )
    }

}