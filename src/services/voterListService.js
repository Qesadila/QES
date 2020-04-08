import axios from 'axios'
import vars from '../environment-variables'

class VoterListService {

    getPublicLists() {
        return axios.get(vars.apiUrl + '/v1/Voting/GetPublicLists');
    }

}

export default new VoterListService()
