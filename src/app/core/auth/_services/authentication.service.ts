import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../_models/user';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem(environment.userKey)));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
        return this.http.post<any>(`${environment.apiBaseUrl}/api/v1/users/login`, { username, password })
            .pipe(map(credential => {
                // login successful if there's a jwt token in the response
                if (credential && credential.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem(environment.userKey, JSON.stringify(credential));
                    this.currentUserSubject.next(credential);
                }

                return credential;
            }));
    }

    logout() {
        this.http.post(`${environment.apiBaseUrl}/api/v1/users/logout`, null).subscribe();
        // remove user from local storage to log user out
        localStorage.removeItem(environment.userKey);
        this.currentUserSubject.next(null);
    }
}