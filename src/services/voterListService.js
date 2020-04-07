import axios from 'axios'
import vars from '../environment-variables'

class AuthenticationService {

    getPublicLists() {
        console.log("Getting public lists");
        return axios.get(vars.apiUrl + '/v1/Voting/GetPublicLists')
    }

}

export default new AuthenticationService()
