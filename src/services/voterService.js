import axios from 'axios'
import vars from '../environment-variables'

export default class ResourceService {

    GetValidCertificates() {
        return axios.post(vars.apiUrl + 'v1/Voter/GetValidCertificates');
    }

    SubmitGDPR(voterEmail, base64File) {
        const fd = new FormData();

        fd.append('voterEmail', voterEmail);
        fd.append('base64File', base64File);

        return axios.post(vars.apiUrl + 'v1/Voter/SubmitGDPR', fd);
    }

    GetMailerType(base64message) {
        const fd = new FormData();

        fd.append('base64message', base64message);

        return axios.post(vars.apiUrl + '/v1/Voter/SubmitVote', fd);
    }

}
