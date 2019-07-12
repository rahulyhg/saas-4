import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgBrazilValidators } from 'ng-brazil';
import { ViacepService } from '../../services/viacep.service';
import { IbgeService } from '../../services/ibge.service';
import { UF } from '../../models/uf.model';
import { Municipio } from '../../models/municipio.model';
import { resolve } from 'url';
import { ToastrService } from 'ngx-toastr';
import { utilsBr } from 'js-brasil';

@Component({
  selector: 'app-dados-pessoais',
  templateUrl: './dados-pessoais.component.html',
  styleUrls: ['./dados-pessoais.component.css']
})
export class DadosPessoaisComponent implements OnInit {
  registerForm: FormGroup;
  ufs: UF[];
  municipios: Municipio[];
  public MASKS = utilsBr.MASKS;
  constructor(private fb: FormBuilder
    , private cepService: ViacepService
    , private ibgeService: IbgeService
    , private toastr: ToastrService) {
    this.registerForm = this.createForm();
    this.getUfs();
  }

  ngOnInit() {
  }

  createForm() {
    return this.fb.group({
      id: [],
      tenantid: [],
      status: [1, null],
      name: [],
      shortName: [],
      birthDate: [],
      cpf: [],
      phones: this.fb.array([
        this.fb.group({
          number: ['', Validators.compose([Validators.required, <any>NgBrazilValidators.telefone])],
          globalCode: ['', null],
          Type: [3, null],
          localCode: ['', null]
        }),
        this.fb.group({
          number: ['', <any>NgBrazilValidators.telefone],
          globalCode: ['', null],
          Type: [4, null], // Verificar como volta do back -> Avaliar o uso de maisucula
          localCode: ['', null]
        })
      ]),
      mail: [],
      gender: [],
      civilStatus: [],
      rg: this.fb.group({
        number: [],
        issuedOn: [],
        issuer: []
      }),
      ctps: [],
      pis: [],
      transportTicket: this.fb.group({
        transportType: [null, null],
        number: [null, Validators.pattern('^[0-9]+$')]
      }),
      address: this.fb.group({
        zipCode: [null, [<any>NgBrazilValidators.cep]],
        street: [null, Validators.pattern('^[ a-zA-ZÀ-ÿ\u00f1\u00d1]*$')],
        number: [null,],
        complement: [null, null],
        district: [null, Validators.pattern('^[ a-zA-ZÀ-ÿ\u00f1\u00d1]*$')],
        city: [null, null],
        stateCode: [null, null]
      }),

    })
  }

  getUfs() {
    this.ibgeService.getUfs().subscribe(response => {
      this.ufs = response;
    })
  }

  getMunicipios(uf: any) {
    let id = this.ufs.find(x => x.sigla === uf).id;
    this.ibgeService.getMunicipios(id).subscribe(response => {
      this.municipios = response;
    })
  }

  getByCep(cep: string) {
    this.cepService.getByCep(cep.replace('-', '').replace('.', '')).subscribe(response => {

      if (response.city != null && response.stateCode != null && response.zipCode != null) {

        this.registerForm.controls.address.get("district").setValue(response.district);
        this.registerForm.controls.address.get("street").setValue(response.street);

        let uf: UF;
        let municipio: Municipio;

        uf = this.ufs.find(x => x.sigla === response.stateCode);
        this.registerForm.controls.address.get("stateCode").setValue(uf.sigla);

        this.resolveAfter2Seconds().then(value => {
          municipio = this.municipios.find(x => x.nome === response.city);
        }).then(value => {
          this.registerForm.controls.address.get("stateCode").setValue(uf.sigla);
          this.registerForm.controls.address.get("city").setValue(municipio.nome);
        })
      } else {
        this.registerForm.controls.address.get("stateCode").setValue(null);
        this.registerForm.controls.address.get("city").setValue(null);
        this.registerForm.controls.address.get("district").setValue(null);
        this.registerForm.controls.address.get("street").setValue(null);
      }
    }, err => {
      this.toastr.warning("Verifique o seu CEP.", "Atenção");
    })
  }

  resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(2)
      }, 1000);
    });
  }
}
