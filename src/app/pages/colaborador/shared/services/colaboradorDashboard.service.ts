import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from 'src/app/core/shared/services/base-resource.service';
import { ColaboradorDashboard } from '../models/colaboradorDashBoard.model';
import { ColaboradorDashBoardAdapter } from 'src/app/core/adapter/ColaboradorDashBoardAdapter.adapter';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class ColaboradorDashboardService extends BaseResourceService<ColaboradorDashboard> {

    constructor(
        protected injector: Injector,
        private dashBoardAdapter: ColaboradorDashBoardAdapter
    ) {
        super(
            `${environment.apiBaseUrl}/api/v1/employees`,
            injector)
        this.adapter = this.dashBoardAdapter;
    }
}