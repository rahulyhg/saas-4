import { Adapter } from './Adapter.interface';
import { Injectable, Injector } from '@angular/core';
import { Colaborador } from 'src/app/pages/colaborador/shared/models/colaborador.model';
import { AddressAdapter } from './AddressAdapter.adapter';
import { PhoneAdapter } from './PhoneAdapter.adapter';
import { RgAdapter } from './RgAdapter.adapter';
import { TransportTicketAdapter } from './TransportTicketAdapter.adapter';

@Injectable({
    providedIn: 'root'
})

export class ColaboradorAdapter implements Adapter<Colaborador>{
    addressAdapter: AddressAdapter;
    phoneAdapter: PhoneAdapter;
    rgAdapter: RgAdapter;
    transportTicketAdapter: TransportTicketAdapter;

    constructor(private adapter1: AddressAdapter, private adapter2: PhoneAdapter, private adapter3: RgAdapter, private adapter4: TransportTicketAdapter) {
        this.addressAdapter = this.adapter1;
        this.phoneAdapter = this.adapter2;
        this.rgAdapter = this.adapter3;
        this.transportTicketAdapter = this.adapter4;
    }

    adapt(item: any): Colaborador {
        return new Colaborador(
            item.id,
            item.name,
            item.shortName,
            this.addressAdapter.adaptFromBack(item.detail.address),
            this.phoneAdapter.adaptCollection(item.detail.phone),
            item.email,
            this.rgAdapter.adapt(item.detail.rg),
            this.transportTicketAdapter.adapt(item.detail.transportTicket),
            item.detail.ctps,
            item.detail.pis,
            item.detail.gender,
            item.detail.birthDate,
            item.status,
            item.detail.cpf,
            item.detail.civilStatus
        )
    }


}
