import { BaseResourceModel } from '../models/base-resource.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Adapter } from '../../adapter/Adapter.interface';
import { Injector } from '@angular/core';
import { User } from '../../auth/_models/user';

export abstract class BaseResourceService<T extends BaseResourceModel>{
    protected http: HttpClient;
    protected adapter?: Adapter<T>

    constructor(
        protected apiPath: string,
        protected injector: Injector,
    ) {
        this.http = injector.get(HttpClient);
    }

    protected userTenantId = (<User>JSON.parse(localStorage.getItem(environment.userKey))).tenantId;


    getAll(): Observable<T[]> {
        return this.http.get(`${this.apiPath}/${this.userTenantId}`).pipe(
            map((data: any[]) => data.map(item => this.adapter.adapt(item)))
        );
    }

    getById(): Observable<T> {
        return this.http.get(`${this.apiPath}/ea71b5d2-fd4c-4d0b-a376-059d2ceb7871`).pipe(
            map(resourse => this.adapter.adapt(resourse))
        )
    }
}