import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { RequestService } from '../services/request/request.service';

@Component({
  selector: 'app-iocomponent',
  templateUrl: './iocomponent.component.html',
  styleUrls: ['./iocomponent.component.css'],
})
export class IocomponentComponent implements OnInit {
  @Output() payloadChanged = new EventEmitter<any>();
  payload = '';
  constructor(private requestService: RequestService) {}

  ngOnInit() {}

  sendRequestData = () => {};

  emitData = () => {
    console.log('Emitting');
    this.requestService.getInstance().payload=this.payload;
    this.payloadChanged.emit(this.payload);
  }
}
