import axios from 'axios'
import vars from '../environment-variables'

class AuthenticationService {
    Register(email, name, language , pass, terms, commercial) {
        
        var params = new URLSearchParams();
        params.append('email',email);
        params.append('name', name);
        params.append('language', language);
        params.append('passwordHash', pass);
        params.append('terms', terms);
        params.append('commercial', commercial);

        return axios.post(vars.apiUrl + 'v1/Authorize/Register', params);
    }
    Login(email , pass) {
        var params = new URLSearchParams();
        params.append('email',email);
        params.append('passwordSHA256Hash', pass);

        return axios.post(vars.apiUrl + 'v1/Authorize/Login', params);
    }
    ConfirmEmailByToken(token) {
        var params = new URLSearchParams();
        params.append('token',token);
        return axios.post(vars.apiUrl + 'v1/Authorize//v1/Authorize/ConfirmEmailByToken', params);
    }
}

export default new AuthenticationService()
