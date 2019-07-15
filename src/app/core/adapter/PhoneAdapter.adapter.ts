import { Adapter } from './Adapter.interface';
import { Phone } from 'src/app/pages/colaborador/shared/models/Phone.model';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class PhoneAdapter implements Adapter<Phone>{
    adapt(item: any) {
        return new Phone(
            item.globalCode,
            item.localCode,
            item.number,
            item.type
        )
    }
    adaptCollection(item: any[]) {
        let itens: Phone[] = [];
        item.forEach(element => {
            itens.push(new Phone(
                element.globalCode,
                element.localCode,
                element.number,
                element.type
            ))
        });
        return itens;
    }

}