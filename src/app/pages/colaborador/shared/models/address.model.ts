import { BaseResourceModel } from 'src/app/core/shared/models/base-resource.model';

export class Address extends BaseResourceModel {
    constructor(
        public zipCode?: string,
        public street?: string,
        public number?: string,
        public complement?: string,
        public district?: string,
        public city?: string,
        public stateCode?: string,
    ) {
        super();
    }

}