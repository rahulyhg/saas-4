import { Adapter } from './Adapter.interface';
import { TransportTicket } from 'src/app/pages/colaborador/shared/models/transportTicket';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class TransportTicketAdapter implements Adapter<TransportTicket>{
    adapt(item: any) {
        return new TransportTicket(
            item.transportType,
            item.number
        )
    }

}