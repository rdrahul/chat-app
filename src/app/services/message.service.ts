import { Injectable } from '@angular/core';
import { Message } from '../models/Message';
import { Channel } from "../models/Channel";
@Injectable({
  providedIn: 'root'
})
export class MessageService {

  Channels : Array<Channel>;

  constructor() { }

  /**
   * Sends the message to the backend
   * @param message message
   */
  SendMessage( message:Message ){

    

  }


  RecieveMessage( message:Message){



  }

  GetAllMessages( id ){
    //let url = 
  }


}
