import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { TabsModule } from 'ngx-bootstrap/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { NgBrazil } from 'ng-brazil'
import { TextMaskModule } from 'angular2-text-mask';

import { ColaboradorRoutingModule } from './colaborador-routing.module';
import { ColaboradorListComponent } from './colaborador-list/colaborador-list.component';
import { ColaboradorFormComponent } from './colaborador-form/colaborador-form.component';
import { DadosPessoaisComponent } from './shared/components/dados-pessoais/dados-pessoais.component';
import { ContratoComponent } from './shared/components/contrato/contrato.component';
import { ViacepService } from './shared/services/viacep.service';
import { IbgeService } from './shared/services/ibge.service';

@NgModule({
  declarations: [ColaboradorListComponent, ColaboradorFormComponent, DadosPessoaisComponent, ContratoComponent],
  imports: [
    CommonModule,
    ColaboradorRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    TabsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TextMaskModule,
    NgBrazil
  ], providers: [
    ViacepService,
    IbgeService
  ]
})
export class ColaboradorModule { }
