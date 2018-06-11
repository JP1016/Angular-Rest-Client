import { Component, OnInit } from '@angular/core';
import { RequestService } from '../services/request/request.service';
import {PrismComponent} from 'angular-prism'
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-json';
import * as _ from 'lodash'; 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  payload = '';
  method = true;

  ngOnInit(): void {
  }

  getLanguage=()=>{
    if(this.request.response){
    if(_.includes("<", this.request.response) && _.includes("/>", this.request.response)){
      return 'markup'
    }
    else return 'json'
  }
    else return 'markup'
  }
  constructor(private request: RequestService) {}

  fetchRequest = data => {
    console.log(this.request.getInstance())
  };


  payloadChanged = data => {
    this.payload = data;
  };
}
