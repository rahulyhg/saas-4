import { Adapter } from './Adapter.interface';
import { RG } from 'src/app/pages/colaborador/shared/models/rg.model';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class RgAdapter implements Adapter<RG>{
    adapt(item: any): RG {
        return new RG(
            item.number,
            item.issuedOn,
            item.issuer
        )
    }

}