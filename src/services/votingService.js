import axios from 'axios'
import vars from '../environment-variables'

class VotingService {

    getVotingFormForCertificate(certificateHash) {
        const fd = new FormData();
        fd.append('certificateHash', certificateHash);
        return axios.post(vars.apiUrl + 'v1/Voting/GetVotingFormForCertificate', fd)
    }
    getAllVotings() {
        return axios.post(vars.apiUrl + 'v1/Voting/GetAll')
    }

    getAllUserVotings() {
        return axios.post(vars.apiUrl + 'v1/Voting/GetAllUserVotings')
    }
}

export default new VotingService()
