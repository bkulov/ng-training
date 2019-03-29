import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { IPerson } from '../models/person';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    private _people: ReplaySubject<IPerson[]>;
    private _endPoint = environment.apiEndpoint;

    constructor(private _http: HttpClient) { }

    public get people() {
        if (!this._people) {
            this._people = new ReplaySubject<IPerson[]>(1);
            this.getPeople().subscribe(people => this._people.next(people));
        }

        return this._people;
    }

    public getPeople() {
        return this._http.get<IPerson[]>(`${this._endPoint}/people`);
    }
}
