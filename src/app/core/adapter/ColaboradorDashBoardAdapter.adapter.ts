import { Adapter } from './Adapter.interface';
import { ColaboradorDashboard } from 'src/app/pages/colaborador/shared/models/colaboradorDashBoard.model';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class ColaboradorDashBoardAdapter implements Adapter<ColaboradorDashboard> {

    adapt(item: any): ColaboradorDashboard {
        return new ColaboradorDashboard(
            item.id,
            item.name,
            item.status,
            item.cellPhone,
            item.register,
            item.function
        )
    }
}