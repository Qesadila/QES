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

    NewEmailConfirmationToken(email) {
        const fd = new FormData();
        fd.append('email', email);

        return axios.get(vars.apiUrl + '/v1/Authorize/NewEmailConfirmationToken', fd);
    }

    ConfirmEmailByToken(token) {
        var params = new URLSearchParams();
        params.append('token',token);
        return axios.put(vars.apiUrl + 'v1/Authorize/ConfirmEmailByToken', params);
    }

    RestorePassword(email) {
        const fd = new FormData();
        fd.append('email', email);

        return axios.get(vars.apiUrl + 'v1/Authorize/RestorePassword', fd);
    }

    NewPasswordUsingToken(token) {
        const fd = new FormData();
        fd.append('token', token);

        return axios.put(vars.apiUrl + 'v1/Authorize/NewPasswordUsingToken', fd);
    }

    GetUserInfo() {
        return axios.get(vars.apiUrl + 'v1/Authorize/GetUserInfo');
    }

    SetUserSettings(email, name, commercialConsent, gdprConsent, language, passwordHash) {
        const fd = new FormData();

        fd.append('email', email);
        fd.append('name', name);
        fd.append('commercialConsent', commercialConsent);
        fd.append('gdprConsent', gdprConsent);
        fd.append('language', language);
        fd.append('passwordHash', passwordHash);

        return axios.post(vars.apiUrl + 'v1/Authorize/SetUserSettings', fd);
    }
}

export default new AuthenticationService()
