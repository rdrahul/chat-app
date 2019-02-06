import { environment } from '../../environments/environment';
const BASE_URL = environment.BASE_URL;
export const API_URLS = {
    login : BASE_URL + 'login',
    logout : BASE_URL + 'logout',
    createUser : BASE_URL + 'register'

}