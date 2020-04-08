import axios from 'axios'
import vars from '../environment-variables'

class AuthenticationService {
    Login(email , pass) {
        return axios.post(vars.apiUrl + '/v1/Authorize/Login', {
            email: email,
            passwordSHA256Hash: pass
        });
    }
}

export default new AuthenticationService()
