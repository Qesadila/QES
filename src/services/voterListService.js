import axios from 'axios'
import vars from '../environment-variables'

class VoterListService {
    createVoterList(voterListName, isPublic) {
        const fd = new FormData();
        fd.append('voterListName', voterListName);
        fd.append('isPublic', isPublic);
        return axios.put(vars.apiUrl + 'v1/VoterList/CreateVoterList', fd);
    }

    getPublicInfo(voterListId) {
      const fd = new FormData();
      fd.append('voterListId', voterListId);
      return axios.get(vars.apiUrl + 'v1/VoterList/GetPublicInfo', fd);
    }

    getPublicLists() {
        return axios.get(vars.apiUrl + 'v1/VoterList/GetPublicLists');
    }

    getPrivateInfo() {
      return axios.get(vars.apiUrl + 'v1/VoterList/GetPrivateInfo');
    }

    assingManager(voterListId, userEmail) {
      const fd = new FormData();
      fd.append('voterListId', voterListId);
      fd.append('userEmail', userEmail);
      return axios.put(vars.apiUrl + 'v1/VoterList/AssignManager', fd);
    }

    deleteManager(voterListId, userEmail) {
      const fd = new FormData();
      fd.append('voterListId', voterListId);
      fd.append('userEmail', userEmail);
      return axios.put(vars.apiUrl + 'v1/VoterList/DeleteManager', fd);
    }

    assingVoter(voterListId, voterEmail) {
      const fd = new FormData();
      fd.append('voterListId', voterListId);
      fd.append('voterEmail', voterEmail);
      return axios.put(vars.apiUrl + 'v1/VoterList/AssignVoter', fd);
    }

    deleteVoter(voterListId, voterEmail) {
      const fd = new FormData();
      fd.append('voterListId', voterListId);
      fd.append('voterEmail', voterEmail);
      return axios.put(vars.apiUrl + 'v1/VoterList/DeleteVoter', fd);
    }

}

export default new VoterListService()
