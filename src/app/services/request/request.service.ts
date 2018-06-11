import { Injectable } from '@angular/core';
import { RequestModel } from '../../model/request.model';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import {PrismComponent} from 'angular-prism'
import 'prismjs/prism';

@Injectable()
export class RequestService {
  requestModel: RequestModel = undefined;
  response:any="";
  getInstance() {
    if (this.requestModel == undefined) this.requestModel = new RequestModel();
    return this.requestModel;
  }

  constructor(private http: Http) {}
  private extractData(res: Response) {
    console.log(res);
      return res;
  }

  fireRequest() {
    return this.http.get(this.getInstance().url).map(res => {
      return res;
    });
  }

  getResponse() {
    this.fireRequest().subscribe(data => {console.log(data); this.response = (<any>data)._body});
  }


  getData() {
    this.getResponse();
  }
}
