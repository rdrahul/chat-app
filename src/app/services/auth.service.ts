import { Injectable } from '@angular/core';
import { HttpService } from "./http.service";
import { API_URLS as ApiUrls } from '../shared/config.class';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn : Boolean = false;
	constructor( private _httpService : HttpService){
		this.loggedIn = this.isLoggedIn();
	}

	login( data ){
		return this._httpService.post( ApiUrls.login , data   );
	}

	register( data ){
		return this._httpService.post( ApiUrls.createUser , data );
	}

	loginUser(data){
		localStorage.setItem("token" , data);
		return true;
	}

	isLoggedIn(){
		if ( localStorage.getItem('token')){
			return true;
		}
		return false;
	}


}
