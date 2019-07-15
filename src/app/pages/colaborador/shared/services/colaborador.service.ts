import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from 'src/app/core/shared/services/base-resource.service';
import { Colaborador } from '../models/colaborador.model';
import { environment } from 'src/environments/environment';
import { ColaboradorAdapter } from 'src/app/core/adapter/ColaboradorAdapter.adapter';

@Injectable({
  providedIn: 'root'
})
export class ColaboradorService extends BaseResourceService<Colaborador>{

  constructor(
    protected injector: Injector,
    private colaboradorAdapter: ColaboradorAdapter
  ) {
    super(
      `${environment.apiBaseUrl}/api/v1/employees`,
      injector)
    this.adapter = this.colaboradorAdapter;
  }

}
