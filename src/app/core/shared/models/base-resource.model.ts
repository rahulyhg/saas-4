export abstract class BaseResourceModel {
    constructor(id?: string) {
        this.id = id;
    }
    public id?: string;
}