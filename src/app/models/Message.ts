import { User } from "./User";
export class Message {
	
	id :string;
	message:string ;
	author : User;
	created_at : string; 
	media :Array <any>;

}