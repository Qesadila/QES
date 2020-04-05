import axios from 'axios'
import vars from '../environment-variables'

class AuthenticationService {


    getAllVotings() {
        return axios.post(vars.apiUrl + '/v1/Voting/GetAll')
    }

}

export default new AuthenticationService()
