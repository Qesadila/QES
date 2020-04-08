import axios from 'axios'
import vars from '../environment-variables'

class VotingService {


    getAllVotings() {
        return axios.post(vars.apiUrl + 'v1/Voting/GetAll')
    }

}

export default new VotingService()
