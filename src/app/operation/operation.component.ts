import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RequestService } from '../services/request/request.service';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css'],
})
export class OperationComponent implements OnInit {
  @Output() data = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<any>();

  selectedHTTPMethod = 'GET';
  showMethodDropdown = false;
  isLoading = false;
  url = '';

  xml = `<note>
<to>Tove</to>
<from>Jani</from>
<heading>Reminder</heading>
<body>Don't forget me this weekend!</body>
</note>`;
  constructor(private request: RequestService) {}

  ngOnInit() {}

  selectHTTPMethod = method => {
    this.selectedHTTPMethod = method;
    this.request.getInstance().method = method;
    this.showMethodDropdown = false;
  }

  loadURL = urlField => {
    this.url = urlField.value;
    this.isLoading = true;

    this.data.emit({
      url: this.url,
      method: this.selectedHTTPMethod,
    });

    this.request.getInstance().url=this.url;
    this.request.getInstance().method=this.selectedHTTPMethod;
    this.request.getData();
  };

  cancelLoading = () => {
    this.cancel.emit();
    this.isLoading = false;
  };
}
