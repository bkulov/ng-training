import { Component, OnInit } from '@angular/core';
import { IPerson } from '../../models/person';
import { ApiService } from '../../services/api.service';

@Component({
    selector: 'app-people-list',
    templateUrl: './people-list.component.html',
    styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {

    public people: IPerson[];

    constructor(private _apiService: ApiService) {
        this._apiService.people.subscribe(people => this.people = people);
    }

    ngOnInit() {
    }

}
