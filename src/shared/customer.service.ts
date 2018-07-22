import { Injectable} from '@angular/core';
import { Http} from "@angular/http"
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/Rx';

import { Customer } from "../models/index";
import { CELLCOM_URL } from "../assets/constants";


@Injectable()
export class CustomerService{

    customers: Array<Customer>;
    
    constructor(public http: Http) { }

    getCustomers(): Array<Customer>{
        return this.customers;
    }

    getListCustomers(): Observable<Array<Customer>>  {
        return this.http.get(CELLCOM_URL + "/customers/getCustomers")
            .map(res => {
                const data = <Array<Customer>>res.json();
                if (data)
                    this.customers = data;
                return data;
            });
    }
}

