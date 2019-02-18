
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from "rxjs";
import { HttpHeaders } from "@angular/common/http";
import { NbAuthService, NbAuthJWTToken } from "@nebular/auth";

@Injectable()
export class AuthService {

    // Observable string sources
    private missionAnnouncedSource = new Subject<string>();
    private missionConfirmedSource = new Subject<string>();

    // Observable string streams
    missionAnnounced$ = this.missionAnnouncedSource.asObservable();
    missionConfirmed$ = this.missionConfirmedSource.asObservable();

    // Service message commands
    announceMission(mission: string) {
        this.missionAnnouncedSource.next(mission);
    }

    confirmMission(astronaut: string) {
        this.missionConfirmedSource.next(astronaut);
    }

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

    getUserById(id: string): Observable<any> {
        const url = `/api/users/id?id=${id}`;
        return this.http.get<any>(url, this.httpOptions);
    }

    getUserByUsername(username: string): Observable<any> {
        const url = `/api/users/username?username=${username}`;
        return this.http.get<any>(url, this.httpOptions);
    }

    addUser(username, password): Observable<any> {
        const url = `/api/users/add`;
        return this.http.post<any>(url, new Object({ 'username': username, 'password': password }), this.httpOptions);
    }

    updateUser(user): Observable<any> {
        const url = `/api/users/update`;
        return this.http.put<any>(url, user, this.httpOptions);
    }

    deleteUser(id): Observable<any> {
        const url = `/api/users/delete/${id}`;
        return this.http.delete<any>(url, this.httpOptions);
    }

    deleteBatchUser(users): Observable<any> {
        const url = `/api/users/delete/batch?users=${users}`;
        return this.http.delete<any>(url, this.httpOptions);
    }

    getRoles(): Observable<any[]> {
        const url = `/api/roles`;
        return this.http.get<any[]>(url, this.httpOptions);
    }

    getRoleById(id: string): Observable<any> {
        const url = `/api/roles/id?id=${id}`;
        return this.http.get<any>(url, this.httpOptions);
    }

    getPermissions(): Observable<any[]> {
        const url = `/api/permissions`;
        return this.http.get<any[]>(url, this.httpOptions);
    }

}