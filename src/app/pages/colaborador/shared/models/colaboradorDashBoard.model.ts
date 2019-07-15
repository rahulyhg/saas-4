import { BaseResourceModel } from 'src/app/core/shared/models/base-resource.model';

export class ColaboradorDashboard extends BaseResourceModel {

    public get function(): string {
        return this._function;
    }
    public set function(value: string) {
        this._function = value;
    }
    constructor(
        public id?: string,
        public name?: string,
        public status?: string,
        public cellPhone?: string,
        public register?: string,
        private _function?: string
    ) {
        super(id);
    }
}