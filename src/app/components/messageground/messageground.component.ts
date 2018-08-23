import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup  } from "@angular/forms";
@Component({
  selector: 'app-messageground',
  templateUrl: './messageground.component.html',
  styleUrls: ['./messageground.component.scss']
})
export class MessagegroundComponent implements OnInit {

  messageInput = this.formBuider.group( {
    'message' :  ['']
  });

  constructor(private formBuider : FormBuilder) { }

  ngOnInit() {

  }

  sendMesssage(){
    this.messageInput.reset();
  }

}
