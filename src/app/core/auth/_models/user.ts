export class User {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    token?: string;
    tenantId: string;
}

export class FireBaseUser {
    uid: string;
    email: string;
    displayName: string;
}
