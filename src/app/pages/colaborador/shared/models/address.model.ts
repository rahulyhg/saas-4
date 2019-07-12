export class Address {
    constructor(
        public zipCode?: string,
        public street?: string,
        public number?: string,
        public complement?: string,
        public district?: string,
        public city?: string,
        public stateCode?: string,
    ) { }
}