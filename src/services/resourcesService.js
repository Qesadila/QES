import axios from 'axios'
import vars from '../environment-variables'

export default class ResourceService {

    GetDBType() {
        return axios.get(vars.apiUrl + 'v1/Resources/GetDBType');
    }

    GetStorageType() {
        return axios.get(vars.apiUrl + 'v1/Resources/GetStorageType');
    }

    GetMailerType() {
        return axios.get(vars.apiUrl + 'v1/Resources/GetMailerType');
    }

}
