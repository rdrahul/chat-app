import { Message } from "./Message";

export class Channel {

	id : string;
	newMessages : boolean;
	allMessages : Array<Message>;
	isActive : boolean;
	lastMessage : Message;

	constructor( id ){
		this.newMessages = true;
		this.allMessages = [];	
		this.isActive = false;
	}

	addMessage( message:Message){
		this.allMessages.push( message);
		this.lastMessage = message;
	}

}