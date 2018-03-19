import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import { USERS_API } from '../app.api'

@Injectable()
export class UserService{
    constructor(private http: HttpClient){}

    getAll(): Observable<any> {
        return this.http.get(`${USERS_API}/users`)
    }

    getUser(document: string): Observable<any> {
        return this.http.get(`${USERS_API}/users/${document}`)
    }

    save(user: any): Observable<any> {
        let result: Observable<Object>
        if (user['href']) {
            result = this.http.put(user.href, user)
        } else {
            result = this.http.post(`${USERS_API}/users`, user)
        }
        return result
    }

    remove(href: string) {
    return this.http.delete(href);
    }
}