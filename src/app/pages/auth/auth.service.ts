
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { HttpHeaders } from "@angular/common/http";
import { NbAuthService, NbAuthJWTToken } from "@nebular/auth";

@Injectable()
export class AuthService {

    token;

    private httpOptions = {};

    constructor(private http: HttpClient, private authService: NbAuthService) {

        this.authService.onTokenChange()
            .subscribe((token: NbAuthJWTToken) => {
                if (token.isValid()) {
                    this.token = token.getValue(); // here we receive a payload from the token and assigne it to our `user` variable 
                    this.httpOptions = {
                        headers: new HttpHeaders({
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + this.token
                        })
                    }
                }
            });
    }

    getUsers(): Observable<any[]> {
        const url = `/api/users`;
        return this.http.get<any[]>(url, this.httpOptions);
    }

}