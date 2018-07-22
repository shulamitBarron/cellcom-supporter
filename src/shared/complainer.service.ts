import { Injectable } from '@angular/core';
import { Http } from "@angular/http"
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Complainer } from "../models/index";
import { CELLCOM_URL } from "../assets/constants";

@Injectable()
export class ComplainerService {

    complainers: Array<Complainer>;

    constructor(public http: Http) { 
    }

    getComplainers(): Array<Complainer> {
        return this.complainers;
    }

    getListComplainers(): Observable<Array<Complainer>> {
        return this.http.get(CELLCOM_URL + "/complainers/getComplainers")
            .map(res => {
                const data = <Array<Complainer>>res.json();
                if (data)
                    this.complainers = data;
                return data;
            });
    }

    removeComplain(room:string): void {
        this.http.delete(CELLCOM_URL + "/complainers/deleteComlainerByRoom?room=" + room)
            .subscribe(() => { });
    }

    getFirstComplainer(){
        return this.http.get(CELLCOM_URL + "/complainers/getFirstComplainer");
    }    
}
