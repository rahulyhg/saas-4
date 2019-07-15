import { Address } from './address.model';
import { BaseResourceModel } from 'src/app/core/shared/models/base-resource.model';
import { Phone } from './Phone.model';
import { RG } from './rg.model';
import { TransportTicket } from './transportTicket';

export class Colaborador extends BaseResourceModel {
    constructor(
        public id?: string
        , public name?: string
        , public shortName?: string
        , public address?: Address
        , public phones?: Phone[]
        , public mail?: string
        , public rg?: RG
        , public transportTicket?: TransportTicket
        , public cTPS?: string
        , public pIS?: string
        , public gender?: string
        , public birthDate?: string
        , public status?: string
        , public cPF?: string
        , public civilStatus?: string
    ) {
        super(id);
    }
}