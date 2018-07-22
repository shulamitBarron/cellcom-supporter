import { Injectable } from '@angular/core';
import { Http } from "@angular/http"
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { Supporter, ILogin } from "../models/index";
import { CELLCOM_URL } from "../assets/constants";

@Injectable()
export class SupportService {

    supporter: Supporter;

    constructor(public http: Http) {
    }

    setSupporter(supporter: Supporter) {
        this.supporter = supporter;
    }

    getSupporter(): Supporter {
        return this.supporter;
    }

    login(email: string, password: string): Observable<boolean> {
        const supporter: ILogin = {
            email: email,
            password: password
        }
        return this.http.post(CELLCOM_URL + "/supporters/checkPasswordEqualMail", supporter)
            .map(res => {
                const data = res.json();
                if (data)
                    this.setSupporter(data);
                return !!data;
            });
    }

    updateDetails(supporter: Supporter): Observable<boolean> {
        return this.http.put(CELLCOM_URL + "/supporters/updateById", supporter)
            .map(res => {
                const data = res.json();
                if (data)
                    this.setSupporter(supporter);
                return !!data;
            });
    }

    saveSupporter(supporter: Supporter): Observable<boolean> {
        return this.http.post(CELLCOM_URL + "/supporters/addSupporter", supporter)
            .map(res => {
                const data = res.json();
                if (data)
                    this.setSupporter(data);
                return !!data;
            });;
    }

}
